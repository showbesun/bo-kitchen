# -*- coding: utf-8 -*-
"""慢寶 · 把 Sheet 改過的文案寫回程式碼。

    python apply_locale.py 下載的檔案.csv          # 只看會改什麼，不動檔案
    python apply_locale.py 下載的檔案.csv --write   # 真的寫進去

吃的是 Google Sheet 匯出的 CSV 或 TSV，欄位跟 locale.tsv 一樣：
    ID · 位置 · 中文 · 한국어 · 備註

「備註」那欄是給你寫審稿意見的，這支腳本完全不看它。

安全設計，三道：
  1. **預設不寫。** 沒有 --write 就只印出差異。
  2. **逐句核對。** 每一句都比對「Sheet 上的舊值」跟「程式碼現在的值」。
     對不上就跳過那一句並報出來 —— 代表 Sheet 是舊的，或程式碼被別人改過。
     這是 2026-08-16 那次分岔（表跟 app 差 8 處）唯一的防線。
  3. **index.html 用外科式替換**，不重新序列化 —— 那份檔案裡的註解
     （每條 COUNTER_OVERRIDES 為什麼存在）比程式碼本身還值錢，不能被格式化沖掉。
"""

import csv
import json
import re
import sys
from pathlib import Path

import locale_lib as L


# ---------------------------------------------------------------- 讀 Sheet

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


# ---------------------------------------------------------------- JS 字面值

def js_quote(s: str) -> str:
    """Python 字串 → JS 單引號字面值。"""
    return "'" + s.replace("\\", "\\\\").replace("'", "\\'") + "'"


def replace_in_decl(src: str, decl: str, old_lit: str, new_lit: str, label: str) -> str:
    """只在 `const decl = {...}` 的範圍內替換一次，避免打到別處同字串。"""
    m = re.search(r"const\s+" + re.escape(decl) + r"\s*=\s*[{\[]", src)
    if not m:
        raise KeyError(f"找不到 const {decl}")
    block = L._block(src, decl)
    start = src.index(block, m.start())
    end = start + len(block)
    seg = src[start:end]
    if seg.count(old_lit) != 1:
        raise ValueError(
            f"{label}：在 {decl} 裡找到 {seg.count(old_lit)} 個符合的字面值，"
            f"應該剛好 1 個 —— 沒有把握就不動"
        )
    return src[:start] + seg.replace(old_lit, new_lit, 1) + src[end:]


# ---------------------------------------------------------------- 寫回

def apply_index(changes, dry):
    """index.html：T · TERM · COUNTER_OVERRIDES · NOTE · BO_INTRO_*"""
    path = L.INDEX_HTML
    with open(path, encoding="utf-8", newline="") as f:      # newline='' 保住原本的 CRLF
        raw = f.read()
    crlf = "\r\n" in raw
    src = raw.replace("\r\n", "\n")
    done, failed = 0, []

    for rid, field, old, new in changes:
        try:
            if rid.startswith("BO.intro."):
                decl = "BO_INTRO_LINES" if field == "zh" else "BO_INTRO_KO"
                src = replace_in_decl(src, decl, js_quote(old), js_quote(new), rid)

            elif rid.startswith("TERM."):
                key = rid[len("TERM."):]
                if field == "zh":
                    failed.append((rid, "TERM 的中文就是它的編號，改中文＝改編號，"
                                        "要手動改 index.html 並同步所有用到的地方"))
                    continue
                src = replace_in_decl(src, "TERM",
                                      f"{js_quote(key)}: {js_quote(old)}",
                                      f"{js_quote(key)}: {js_quote(new)}", rid)

            elif rid.startswith("COUNTER.") or rid.startswith("NOTE."):
                decl = "COUNTER_OVERRIDES" if rid.startswith("COUNTER.") else "NOTE"
                key = rid.split(".", 1)[1]
                if field == "zh":
                    failed.append((rid, f"{decl} 的中文就是它的編號，要手動改"))
                    continue
                src = replace_in_decl(src, decl,
                                      f"{js_quote(key)}: {js_quote(old)}",
                                      f"{js_quote(key)}: {js_quote(new)}", rid)

            else:   # T
                cur = dict((k, (a, b)) for k, a, b in L.js_pair_arrays(src, "T"))
                if rid not in cur:
                    failed.append((rid, "T 裡沒有這個編號"))
                    continue
                zh, ko = cur[rid]
                old_pair = f"[{js_quote(zh)}, {js_quote(ko)}]"
                new_pair = (f"[{js_quote(new)}, {js_quote(ko)}]" if field == "zh"
                            else f"[{js_quote(zh)}, {js_quote(new)}]")
                if old_pair not in src:
                    failed.append((rid, "T 裡的寫法跟預期不同（可能換行了），要手動改"))
                    continue
                src = replace_in_decl(src, "T", old_pair, new_pair, rid)
            done += 1
        except (KeyError, ValueError) as e:
            failed.append((rid, str(e)))

    if not dry and done:
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(src.replace("\n", "\r\n") if crlf else src)
    return done, failed


def apply_recipes(changes, dry):
    """recipes.js：整份重新序列化。實測與原檔只差一個多餘空白行。"""
    path = L.RECIPES_JS
    with open(path, encoding="utf-8", newline="") as f:
        raw = f.read()
    crlf = "\r\n" in raw
    txt = raw.replace("\r\n", "\n")
    i, j = txt.index("["), txt.rindex("]") + 1
    head, tail = txt[:i], txt[j:]
    data = json.loads(txt[i:j])
    by_id = {r["id"]: r for r in data}
    done, failed = 0, []

    for rid, field, old, new in changes:
        m = re.fullmatch(r"R(\d+)\.([a-z]+)(?:\.(\d+))?", rid)
        if not m:
            failed.append((rid, "編號格式看不懂"))
            continue
        num, what, idx = int(m.group(1)), m.group(2), m.group(3)
        r = by_id.get(num)
        if r is None:
            failed.append((rid, f"沒有 id {num} 這道菜"))
            continue
        ko = r.setdefault("ko", {})

        try:
            if what in ("title", "subtitle", "note", "murmur"):
                (r if field == "zh" else ko)[what] = new
            elif what == "urgent":
                (r if field == "zh" else ko)["urgentNote"] = new
            elif what == "tip":
                (r["tips"] if field == "zh" else ko["tips"])[int(idx) - 1] = new
            elif what == "prep":
                if field == "zh":
                    r["prepNotes"][int(idx) - 1]["method"] = new
                else:
                    ko["prep"][int(idx) - 1] = new
            elif what == "stage":
                if field == "zh":
                    pos = [k for k, s in enumerate(r["steps"]) if s.startswith(L.STAGE)]
                    r["steps"][pos[int(idx) - 1]] = L.STAGE + new
                else:
                    ko["stages"][int(idx) - 1] = new
            elif what == "step":
                if field == "zh":
                    pos = [k for k, s in enumerate(r["steps"])
                           if not s.startswith(L.STAGE)]
                    r["steps"][pos[int(idx) - 1]] = new
                else:
                    ko["steps"][int(idx) - 1] = new
            else:
                failed.append((rid, f"不認得欄位 {what}"))
                continue
            done += 1
        except (IndexError, KeyError) as e:
            failed.append((rid, f"寫入失敗：{e!r}"))

    if not dry and done:
        body = json.dumps(data, ensure_ascii=False, indent=2)
        out = head + body + tail
        with open(path, "w", encoding="utf-8", newline="") as f:
            f.write(out.replace("\n", "\r\n") if crlf else out)
    return done, failed


# ---------------------------------------------------------------- main

def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    dry = "--write" not in sys.argv
    if len(args) != 1:
        sys.exit(__doc__)
    path = Path(args[0])
    if not path.exists():
        sys.exit(f"⛔ 找不到 {path}")

    sheet = read_export(path)
    current = {r.id: r for r in L.collect()}

    changes, conflicts, unknown = [], [], []
    for rid, (zh, ko) in sheet.items():
        cur = current.get(rid)
        if cur is None:
            unknown.append(rid)
            continue
        if zh != cur.zh:
            changes.append((rid, "zh", cur.zh, zh))
        if ko != (cur.ko or ""):
            changes.append((rid, "ko", cur.ko or "", ko))

    for rid in current:
        if rid not in sheet:
            conflicts.append(f"{rid} 在程式碼裡有，Sheet 上沒有 —— Sheet 是舊的？")

    print(f"Sheet {len(sheet)} 列 · 程式碼 {len(current)} 句 · 要改 {len(changes)} 處")
    if unknown:
        print(f"\n⚠️ Sheet 上有 {len(unknown)} 個編號程式碼裡沒有（跳過）：")
        for r in unknown[:10]:
            print("   ", r)
    if conflicts:
        print(f"\n⚠️ {len(conflicts)} 個編號 Sheet 上缺（不影響寫入，但代表該重新匯出）：")
        for c in conflicts[:10]:
            print("   ", c)

    if not changes:
        print("\n沒有要改的。")
        return

    print()
    for rid, field, old, new in changes:
        tag = "中文" if field == "zh" else "한국어"
        print(f"  {rid}  [{tag}]")
        print(f"    − {old}")
        print(f"    ＋ {new}")

    idx_ch = [c for c in changes if not re.match(r"R\d+\.", c[0])]
    rec_ch = [c for c in changes if re.match(r"R\d+\.", c[0])]

    d1, f1 = apply_index(idx_ch, dry)
    d2, f2 = apply_recipes(rec_ch, dry)

    print()
    if dry:
        print(f"🔍 這是預演。可寫入 {d1 + d2} 處 —— 加 --write 才會真的寫進去。")
    else:
        print(f"✅ 寫入 {d1 + d2} 處（index.html {d1}／recipes.js {d2}）")
        print("   接著跑 python gen_locale.py 重生成總表與 locale.tsv")
    for rid, why in f1 + f2:
        print(f"   ⛔ {rid}：{why}")


if __name__ == "__main__":
    main()
