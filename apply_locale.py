# -*- coding: utf-8 -*-
"""慢寶 · 把 Sheet 改過的文案寫回程式碼。

    python apply_locale.py 下載的檔案.csv          # 只看會改什麼，不動檔案
    python apply_locale.py 下載的檔案.csv --write   # 真的寫進去

吃的是 Google Sheet 匯出的 CSV 或 TSV，欄位跟 locale.tsv 一樣：
    ID · 位置 · 中文 · 한국어 · 備註

「備註」那欄是給你寫審稿意見的，這支腳本完全不看它。

⚠️ 2026-08-18 重構後**只寫一個檔案：strings.js**。
   在那之前這支腳本要為 T／TERM／NOTE／COUNTER_OVERRIDES／recipes.js 的 ko
   各寫一條路徑，五種形狀五種寫法。現在全部是同一種：編號 → { zh, ko }。

安全設計，三道（跟改版前一樣，一道都沒少）：
  1. **預設不寫。** 沒有 --write 就只印出差異。
  2. **逐句核對。** 每一句都比對「Sheet 上的舊值」跟「程式碼現在的值」。
     對不上就跳過那一句並報出來 —— 代表 Sheet 是舊的，或程式碼被別人改過。
     這是 2026-08-16 那次分岔（表跟 app 差 8 處）唯一的防線。
  3. **外科式替換。** 逐筆換掉那一格，不重新序列化整個檔案 ——
     strings.js 裡的分段註解要留著。
"""

import csv
import re
import sys
from pathlib import Path

import locale_lib as L

# 這三種前綴的「中文」就是它的編號，改中文＝改編號，不能自動寫回
KEY_IS_ZH = ("TERM.", "COUNTER.", "NOTE.")


def read_export(path: Path):
    """Google Sheet 匯出的 CSV／TSV → {ID: (中文, 한국어)}"""
    text = path.read_text(encoding="utf-8-sig")          # Sheets 會加 BOM
    delim = "\t" if (path.suffix.lower() == ".tsv" or "\t" in text.split("\n")[0]) else ","
    rows = list(csv.reader(text.splitlines(), delimiter=delim))
    if not rows:
        sys.exit("⛔ 檔案是空的")

    head = [c.strip() for c in rows[0]]
    try:
        i_id, i_zh, i_ko = head.index("ID"), head.index("中文"), head.index("한국어")
    except ValueError:
        sys.exit(f"⛔ 標題列不對，需要 ID／中文／한국어 三欄，讀到的是：{head}")

    out = {}
    for n, r in enumerate(rows[1:], 2):
        if len(r) <= max(i_id, i_zh, i_ko) or not r[i_id].strip():
            continue
        rid = r[i_id].strip()
        if rid in out:
            sys.exit(f"⛔ 第 {n} 列的編號 {rid} 重複了。Sheet 上不能有兩列同編號")
        out[rid] = (r[i_zh], r[i_ko])
    return out


def js_quote(s: str) -> str:
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'").replace("\n", "\\n") + "'"


def entry_line(src: str, rid: str):
    """找出 strings.js 裡那一筆的整行 —— 編號本身可能含 | 和中文，所以用字面比對。"""
    needle = "\n  " + js_quote(rid) + ": {"
    i = src.find(needle)
    if i < 0:
        return None
    j = src.index("\n", i + 1)
    return i + 1, j


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    write = "--write" in sys.argv
    if len(args) != 1:
        sys.exit(__doc__)

    sheet = read_export(Path(args[0]))
    cur = L.load_strings()

    changes, skipped, unknown = [], [], []
    for rid, (zh, ko) in sheet.items():
        if rid not in cur:
            unknown.append(rid)
            continue
        for field, new in (("zh", zh), ("ko", ko)):
            old = cur[rid].get(field, "")
            if new == old:
                continue
            if field == "zh" and rid.startswith(KEY_IS_ZH):
                skipped.append((rid, "這種編號的中文就是它的 key，改中文要手動改，"
                                     "並同步所有用到它的地方"))
                continue
            changes.append((rid, field, old, new))

    if unknown:
        print(f"⚠️ Sheet 上有 {len(unknown)} 個編號在程式碼裡找不到（可能是舊的）：")
        for r in unknown[:8]:
            print("   ", r)

    if not changes:
        print("沒有要改的 —— Sheet 跟程式碼一致。")
        return

    print(f"{'要寫回' if write else '會改（沒有 --write，先不動）'} {len(changes)} 句：\n")
    for rid, field, old, new in changes[:40]:
        print(f"  {rid} · {field}\n    舊 {old}\n    新 {new}")
    if len(changes) > 40:
        print(f"  …… 還有 {len(changes) - 40} 句")

    if skipped:
        print(f"\n⚠️ 跳過 {len(skipped)} 句：")
        for rid, why in skipped[:8]:
            print(f"  {rid}：{why}")

    if not write:
        print("\n加 --write 才會真的寫進去。")
        return

    src = L.STRINGS_JS.read_text(encoding="utf-8")
    done, failed = 0, []
    for rid, field, old, new in changes:
        span = entry_line(src, rid)
        if not span:
            failed.append((rid, "strings.js 裡找不到這個編號"))
            continue
        a, b = span
        line = src[a:b]
        target = f"{field}: {js_quote(old)}"
        if line.count(target) != 1:
            failed.append((rid, f"那一行找到 {line.count(target)} 個符合的舊值，"
                                "應該剛好 1 個 —— 沒把握就不動"))
            continue
        src = src[:a] + line.replace(target, f"{field}: {js_quote(new)}", 1) + src[b:]
        done += 1

    L.STRINGS_JS.write_text(src, encoding="utf-8")
    print(f"\n✅ 寫回 {done} 句到 strings.js")
    if failed:
        print(f"⛔ {len(failed)} 句沒寫進去：")
        for rid, why in failed:
            print(f"  {rid}：{why}")
    print("\n記得再跑一次 gen_locale.py，讓 語系總表.md 和 locale.tsv 跟上。")


if __name__ == "__main__":
    main()
