#!/usr/bin/env python3
"""菜色圖切圖：ChatGPT 生的原圖 → assets/dish/rN.webp（700×525）。

    切一張      python3 assets/crop_dish.py 原圖.png 13
    切 2×2      python3 assets/crop_dish.py 原圖.png 11 10 --grid 2x2 --cells TL,BL
    只修底色    python3 assets/crop_dish.py --fix-bg assets/dish/r14.webp

每一段的參數都是踩到才調出來的，改之前先看註解。改完記得把 index.html 的
`const ASSETS` 加一號 —— 檔名沒變，不加號瀏覽器會一直吃舊的。
"""
import argparse, os, statistics as st, sys
from collections import deque
from PIL import Image, ImageFilter

TGT = (249, 230, 209)     # #F9E6D1，必須跟 index.html 的 --bg 完全一致
OUT_W, OUT_H = 700, 525
FILL = 0.94               # ⚠️ 不要調到 1.0：撐滿會把器皿邊緣切掉（r17、r11 各踩過一次）
SOLID = 18                # 兩邊都會出事，18 是實測的中間值：
                          #  · 太寬（34）→ 白色器皿被判成背景，整圈盤子被切掉
                          #  · 太窄（8） → 連紙紋和淡陰影都算進去，框會膨脹，
                          #    主體縮成小小一團浮在卡片中間（r10、r11 踩過）
                          #  r17 白盤：34→1102×728（切到盤）、18→1300×844（對）、
                          #  8→1424×1068（幾乎整張）。r10 小碟：8→712×476、18→558×334。
FOOD = 70                 # 只用來找「看得見的底緣」做貼底對齊，不拿來框主體。
                          # ⛔ 試過用它框主體（想讓食物看起來大一點），結果每一張的
                          # 盤子都被左右切斷。切圖解不了「食物小」——
                          # 那是原圖構圖的問題（小份食物擺在大盤中央），
                          # 唯一的解是重生成時讓食物填滿盤子。器皿完整優先。
BASELINE = 12             # 下緣統一留這麼多 —— 見 render() 的註解
QLO, QHI = 0.001, 0.999   # ⚠️ 邊界用分位數不用 min/max —— 一顆雜點就會把框拉到整張。

d = lambda c, t: sum(abs(c[i] - t[i]) for i in range(3))


def flat_field(im):
    """把背景壓成 TGT。整體位移沒用 —— 原圖的背景是有漸層的暈影，
    要估成一張低頻圖再逐像素扣掉。回傳 (校正後的圖, 原本的底色)。"""
    W, H = im.size
    px = im.load()
    edge = [(4, 4), (W // 2, 4), (W - 5, 4), (4, H // 2),
            (W - 5, H // 2), (4, H - 5), (W // 2, H - 5), (W - 5, H - 5)]
    bg = tuple(int(st.median([px[x, y][i] for x, y in edge])) for i in range(3))

    N = 14
    gw, gh = max(1, W // N), max(1, H // N)
    grid = [[None] * N for _ in range(N)]
    for gy in range(N):
        for gx in range(N):
            v = [px[x, y]
                 for y in range(gy * gh, min((gy + 1) * gh, H), 6)
                 for x in range(gx * gw, min((gx + 1) * gw, W), 6)
                 if d(px[x, y], bg) < 34]
            if len(v) > 12:
                grid[gy][gx] = tuple(int(st.median([q[i] for q in v])) for i in range(3))
    ok = [(gy, gx) for gy in range(N) for gx in range(N) if grid[gy][gx]]
    if not ok:
        sys.exit('找不到背景 —— 這張圖的底色跟預期差太多，先確認是不是菜色圖')
    for gy in range(N):                                   # 被菜擋住的格子用最近的有效格補
        for gx in range(N):
            if grid[gy][gx] is None:
                ny, nx = min(ok, key=lambda p: (p[0] - gy) ** 2 + (p[1] - gx) ** 2)
                grid[gy][gx] = grid[ny][nx]

    est = Image.new('RGB', (N, N))
    est.putdata([grid[gy][gx] for gy in range(N) for gx in range(N)])
    est = est.resize((W, H), Image.BICUBIC).filter(ImageFilter.GaussianBlur(28)).load()

    out = Image.new('RGB', (W, H))
    op = out.load()
    for y in range(H):
        for x in range(W):
            c, e = px[x, y], est[x, y]
            op[x, y] = tuple(max(0, min(255, c[i] - (e[i] - TGT[i]))) for i in range(3))
    return out, bg


def gaps(flat, x0, x1, lo, hi, axis):
    """找格與格之間的空白帶。⚠️ 不要用 W/2、H/2 硬切 ——
    2×2 的盤子常常跨過中線，硬切會把盤緣削掉（r11 實際的空白帶在 y=601 不是 543）。"""
    f = flat.load()
    prof = []
    for k in range(lo, hi):
        rng = range(x0, x1, 3)
        n = sum(1 for j in rng if d(f[(j, k) if axis == 'y' else (k, j)], TGT) > SOLID)
        prof.append(n / max(1, len(list(rng))))
    band = [lo + i for i, v in enumerate(prof) if v < 0.02 and 0.3 < i / len(prof) < 0.7]
    return int(st.median(band)) if band else (lo + hi) // 2


def render(flat, box, path):
    """⚠️ 垂直方向要「貼底」不是「置中」。東西放在桌上本來就對齊同一條底線 ——
    置中的話，小盤子和小碟子會浮起來，跟旁邊坐在卡片底部的大鍋擺在一起就很明顯。
    實測：置中切出來的 r10/r11 下緣留 41–61px，其他張只留 9–13px，
    使用者的原話是「只有他們倆往上飄」。"""
    l, r, t, b = box
    sc = min(OUT_W * FILL / (r - l), OUT_H * FILL / (b - t))
    nw, nh = int((r - l) * sc), int((b - t) * sc)
    # 對齊的是「看得見的底」，不是框的底 —— 框裡含著淡陰影，
    # 拿框去貼底的話陰影會佔掉下緣，器皿本身還是浮著（r10 實測差 37px）。
    f = flat.load()
    strong = [y for y in range(t, b, 2) for x in range(l, r, 3) if d(f[x, y], TGT) > 70]
    vis_b = max(strong) if strong else b
    off = int((vis_b - t) * sc)                       # 看得見的底在貼上後的相對位置
    top = min(max(OUT_H - BASELINE - off, 0), OUT_H - nh)   # FILL<1，nh 一定放得下
    out = Image.new('RGB', (OUT_W, OUT_H), TGT)
    out.paste(flat.crop((l, t, r, b)).resize((nw, nh), Image.LANCZOS),
              ((OUT_W - nw) // 2, top))
    out.save(path, 'WEBP', quality=88)
    print(f'    {os.path.basename(path):<12} 主體 {r-l}×{b-t} → {nw}×{nh}'
          f'，留白 {(OUT_W-nw)//2}/{(OUT_H-nh)//2}px'
          f' · {round(os.path.getsize(path)/1024)} KB')


def bbox(flat, x0, x1, y0, y1, thr=None):
    f = flat.load()
    thr = SOLID if thr is None else thr
    xs, ys = [], []
    for y in range(y0, y1, 2):
        for x in range(x0, x1, 2):
            if d(f[x, y], thr and TGT) > thr:
                xs.append(x); ys.append(y)
    if len(xs) < 200:
        sys.exit(f'這一格幾乎全是背景（{x0},{y0}）–（{x1},{y1}）—— 格線切錯了？')
    xs.sort(); ys.sort()
    q = lambda a, p: a[int(p * (len(a) - 1))]
    return q(xs, QLO), q(xs, QHI), q(ys, QLO), q(ys, QHI)




def fix_bg(path):
    """只把外圍背景壓到 TGT，不動菜。
    ⛔ 不能整張位移 —— 偏差大的時候（r14 差 24，幾乎全在藍通道）會把菜洗淡。
    做法：從四邊 flood fill，只有連得到畫面邊緣的像素才算背景，器皿和食物碰不到邊。"""
    im = Image.open(path).convert('RGB')
    W, H = im.size
    px = im.load()
    _, bg = flat_field(im)
    est_im, _ = flat_field(im)          # 借它的低頻估計
    est = est_im.load()

    mask = Image.new('L', (W, H), 0)
    mp = mask.load()
    seen = bytearray(W * H)
    q = deque()
    for x in range(W):
        for y in (0, H - 1):
            if not seen[y * W + x]:
                seen[y * W + x] = 1; q.append((x, y))
    for y in range(H):
        for x in (0, W - 1):
            if not seen[y * W + x]:
                seen[y * W + x] = 1; q.append((x, y))
    while q:
        x, y = q.popleft()
        if d(px[x, y], est[x, y]) >= 22:
            continue
        mp[x, y] = 255
        for dx, dy in ((1, 0), (-1, 0), (0, 1), (0, -1)):
            nx, ny = x + dx, y + dy
            if 0 <= nx < W and 0 <= ny < H and not seen[ny * W + nx]:
                seen[ny * W + nx] = 1; q.append((nx, ny))
    mask = mask.filter(ImageFilter.GaussianBlur(3))
    mk = mask.load()

    out = Image.new('RGB', (W, H))
    op = out.load()
    for y in range(H):
        for x in range(W):
            c, e, m = px[x, y], est[x, y], mk[x, y] / 255
            op[x, y] = tuple(max(0, min(255, round(c[i] - (e[i] - TGT[i]) * m))) for i in range(3))
    out.save(path, 'WEBP', quality=88)
    o = out.load()
    chk = [o[a, b] for a, b in [(3, 3), (W // 2, 3), (W - 4, 3), (3, H // 2), (W - 4, H - 4)]]
    print(f'    {os.path.basename(path):<12} 底色 {bg} 差 {d(bg,TGT):>2}'
          f'  →  差 {max(d(c,TGT) for c in chk)}')


CELLS = {'TL': (0, 0), 'TR': (1, 0), 'BL': (0, 1), 'BR': (1, 1)}

ap = argparse.ArgumentParser()
ap.add_argument('src')
ap.add_argument('ids', nargs='*', help='食譜編號，依 --cells 的順序')
ap.add_argument('--grid', default='1x1', help='1x1 或 2x2')
ap.add_argument('--cells', default='TL', help='TL,TR,BL,BR —— 只切要的那幾格')
ap.add_argument('--fix-bg', action='store_true', help='只修底色，不重切')
a = ap.parse_args()

if a.fix_bg:
    print('只修外圍背景，不動菜：')
    fix_bg(a.src)
    sys.exit()

im = Image.open(a.src).convert('RGB')
W, H = im.size
print(f'  來源 {W}×{H}')
flat, bg = flat_field(im)
print(f'  底色 {bg} 差 {d(bg, TGT)} → 已壓到 {TGT}')

want = [c.strip().upper() for c in a.cells.split(',')]
if len(want) != len(a.ids):
    sys.exit(f'--cells 有 {len(want)} 格，但給了 {len(a.ids)} 個編號')

if a.grid == '2x2':
    ys = gaps(flat, 0, int(W * 0.47), 0, H, 'y')
    rows = [(0, ys), (ys, H)]
    # ⚠️ 直格線要「每一排各自算」。掃整個高度的話，上下兩排的器皿加起來
    #    沒有任何一欄是空的，就會回退成硬切 W/2 —— 隔壁那格的盤子會從
    #    邊緣露進來（r10 踩過，右邊冒出半個盤子）。
    cols = [ [(0, x), (x, W)] for x in
             (gaps(flat, y0, y1, 0, W, 'x') for y0, y1 in rows) ]
    print(f'  格線：y={ys}（硬切會是 {H//2}）'
          f' · x 上排={cols[0][0][1]}、下排={cols[1][0][1]}（硬切會是 {W//2}）')
else:
    rows, cols = [(0, H)], [[(0, W)]]

for cell, rid in zip(want, a.ids):
    cx, cy = CELLS[cell]
    y0, y1 = rows[cy] if cy < len(rows) else rows[0]
    band = cols[cy] if cy < len(cols) else cols[0]
    x0, x1 = band[cx] if cx < len(band) else band[0]
    render(flat, bbox(flat, x0, x1, y0, y1), f'assets/dish/r{rid}.webp')

print('\n  ⚠️ 別忘了把 index.html 的 const ASSETS 加一號。')
