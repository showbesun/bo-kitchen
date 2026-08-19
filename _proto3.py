# -*- coding: utf-8 -*-
"""跟煮模式原型 v3

她定的三條：
① 一頁 = 一個時間段能做的所有事（不是一步一頁，那樣合併沒意義）
② **一頁最多三件事**
③ 每道菜一條進度條；做完的顯示「上菜！」

⚠️ 進度條跟她否決的倒數計時不同：它靠「按了幾次下一步」前進，
   不靠時間。你控制它，它只是回報。

⛔ 這裡曾經寫著「完成（✅）那一步不跟還在忙的步驟混在一起」，並照它多切一頁。
   那條**跟設計文件相反**：`待辦_跟煮模式.md` 寫的是「單獨一道做完不給獨立頁，
   就在該道的進度條顯示『上菜！』；唯一的獨立頁是最後全部完成」。
   已移除 —— 上菜就是那道菜的最後一步，照常排。
"""
import re, sys
import locale_lib as L

GAP = 8          # 幾分鐘內算同一段
# ⚠️ 原本是 3。1330 組（21 道取 3）實測：3 -> 8 讓平均頁數 9.4 -> 7.4、
#    只剩一件事的頁面從 44% 降到 20%（一步一頁是 15.9 頁）。
#    放大的代價是同一頁可能放進相隔 8 分鐘的兩件事 —— 但這個模式是按下一步推進、
#    不看時鐘，所以那是「這一頁依序做完」，不是「同時做」。真正的等待寫在步驟文字裡。
#
# ⚠️ 已知且**刻意接受**的後果（2026-08-19 她看過實際輸出後決定）：
#    同一道菜的連續步驟會被併進同一頁，例如馬鈴薯餅的
#    「煎 5 分鐘→翻面→再煎 4–5 分鐘→上桌」擠成一頁。
#    提過三個修法（GAP 回 5／同一道菜不併頁／不動），她選不動 —— 理由是
#    **步驟文字裡就寫著幾分鐘，看得懂**。
#    ⛔ 所以看到這種頁面不要當成 bug 跑來修。
MAX = 3          # 一頁最多幾件事
WAIT = re.compile(r'靜置\s*(\d+)|放\s*(\d+)\s*分|醃(?:至少)?\s*(\d+)|泡\s*(\d+)\s*分')


def wait_of(t):
    m = WAIT.search(t or '')
    return int(next(g for g in m.groups() if g)) if m else 0


def build(pick):
    st = L.load_strings()
    rs = {r['id']: r for r in L.load_recipes() if r['id'] in pick}
    名 = {i: st[f'R{i}.title']['zh'] for i in pick}

    prep = []
    for i in pick:
        for n, p in enumerate(rs[i]['prepNotes'], 1):
            how = st.get(f'R{i}.prep.{n}', {}).get('zh', '')
            prep.append({'dish': i, 'ing': st.get(p['name'], {}).get('zh', p['name']),
                         'how': how, 'wait': wait_of(how)})
    prep.sort(key=lambda x: (-x['wait'], x['dish']))

    rows = []
    for i in pick:
        for t, what in rs[i]['schedule']:
            if t >= rs[i]['prepTime']:
                rows.append({'t': t, 'dish': i, 'what': what, 'done': '✅' in what})
    rows.sort(key=lambda x: (x['t'], x['dish']))

    total = {i: sum(1 for r in rows if r['dish'] == i) for i in pick}

    pages, cur = [], []
    for k, r in enumerate(rows):
        cur.append(r)
        nxt = rows[k + 1] if k + 1 < len(rows) else None
        end = (nxt is None
               or nxt['t'] - r['t'] > GAP          # 有空檔
               or len(cur) >= MAX)                 # 滿三件
        if end:
            pages.append(cur); cur = []
    return 名, prep, pages, total


def bar(done, total, w=12):
    n = round(w * done / total) if total else 0
    return '█' * n + '·' * (w - n)


def show(pick):
    名, prep, pages, total = build(pick)
    print('══ ' + ' ＋ '.join(名[i] for i in pick) + ' ══\n')
    print(f'【1】備料　{len(prep)} 項　⏳ 的先做')
    for p in prep:
        m = f"⏳{p['wait']}分" if p['wait'] else '     '
        print(f"   {m} [{名[p['dish']][:5]}] {p['ing']}　{p['how'][:38]}")

    done = {i: 0 for i in pick}
    for n, pg in enumerate(pages, 2):
        print(f"\n【{n}】")
        for r in pg:
            print(f"   [{名[r['dish']][:5]}] {r['what'][:54]}")
        for r in pg:
            done[r['dish']] += 1
        print('   ' + '─' * 46)
        for i in pick:
            fin = done[i] >= total[i]
            tag = '　🍽 上菜！' if fin else ''
            print(f"   {名[i][:8]:9} {bar(done[i], total[i])} {done[i]}/{total[i]}{tag}")
    print(f"\n══ 共 {len(pages)+1} 頁 ══")


if __name__ == '__main__':
    a = [int(x) for x in sys.argv[1:] if x.isdigit()]
    show(a or [18, 6, 12])
