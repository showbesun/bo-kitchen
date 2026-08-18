# -*- coding: utf-8 -*-
"""慢寶 · 匯出文案。

    python gen_locale.py

讀 recipes.js ＋ index.html，產出兩份：

    語系總表.md   給人讀的。全部字串編號、中韓並排
    locale.tsv    給 Google Sheet 吃的。同一批資料，扁平一列一句

⚠️ 兩份都是生成物，不要手改 —— 改了下次重跑就沒了。
   要改文案：改 Sheet → 跑 apply_locale.py 寫回程式碼 → 再跑這支重生成。

⚠️ 所有數量一律現算。寫死的數字會過期 —— 這份檔案本身就是為了修那個問題而存在的。
"""

import sys
from collections import OrderedDict

import locale_lib as L

OUT_MD = L.ROOT / "語系總表.md"
OUT_TSV = L.ROOT / "locale.tsv"

# T 的前綴 → 這一段叫什麼。前綴的意義是編號規則定死的，所以推得出來。
T_GROUPS = OrderedDict([
    ("A", "招呼語 · 慢寶"),
    ("D", "底部固定條 · 慢寶"),
    ("E", "空狀態 · 慢寶"),
    ("U", "介面字串"),
])

PREAMBLE = """# 慢寶 · 語系總表

**這份是生成的，不要手改。** 改 app 之後重跑 `gen_locale.py` 就會更新。

> 手寫的對照表隔天就會跟程式分岔 —— 2026-08-16 踩過：一份 v13 的表跟 app 差了 8 處，
> 全部是「表是舊快照、app 已經改過」。所以這份的唯一真相是 `recipes.js` ＋ `index.html`。

共 **@TOTAL@ 個字串**。缺韓文的有 **@MISSING@** 個（表裡標 `—`）。

---

## 怎麼改文案

```
recipes.js + index.html          ← app 真正讀的，唯一真相
   ↓ gen_locale.py
語系總表.md（這份）+ locale.tsv
   ↓ Google Sheet 從 repo 抓 locale.tsv
Sheet ── 你在任何一台電腦上改 ──┐
   ↓ 下載成 CSV                 │
apply_locale.py ────────────────┘  寫回 recipes.js + index.html
```

**要改哪一句就報編號。** 編號是兩支腳本共用的定位方式，對不上就寫不回去。

---

## 編號規則

編號要能撐住第三種語言，而且**不能撞號** —— 先前 `U` 同時被 urgentNote 和介面文案用，
害一列的韓文放錯位置。現在每個前綴只管一件事：

| 前綴 | 管什麼 | 例 |
|---|---|---|
| `A* / D* / E* / U*` | 介面與慢寶的固定台詞 | `U15` `D4` `AEND` |
| `BO.intro.N` | 第一次打開的自我介紹，一句一個編號 | `BO.intro.3` |
| `R{食譜}.{欄位}` | 食譜的單值欄位 | `R5.note` |
| `R{食譜}.{欄位}.N` | 食譜的陣列欄位 | `R5.step.3` |
| `TERM.{中文}` | 詞彙 —— 食材、單位、組名、標籤、菜系 | `TERM.洋蔥` |
| `COUNTER.{食材\\|單位}` | 量詞例外 | `COUNTER.大蔥\\|根` |
| `NOTE.{中文}` | 買菜清單份量後面的括號註 | `NOTE.關火前` |

⚠️ **`R*.step.N` 的 N 是「第幾個步驟句」，不含階段名**（階段名是 `R*.stage.N`）。
兩者在資料裡混在同一個 `steps` 陣列，但編號分開數。

---

## 要加第三種語言（英文）時

程式端已經是為多語言寫的，加一種語言要動四個地方：

1. **`index.html` 的 `T`** —— 每條從 `['中', '한']` 變成 `['中', '한', 'en']`
2. **`TERM` / `COUNTER_OVERRIDES`** —— 同上
3. **`recipes.js` 每道菜的 `ko`** —— 旁邊加一個 `en`
4. **`isKo()` 換成 `lang` 索引**，`langToggle()` 多一顆按鈕

`L()` / `t()` / `tr()` 三個存取器的**回退機制不用改** —— 缺什麼就顯示中文，
所以可以邊翻邊上線，不必等全部翻完。

---
"""


def esc(s):
    """Markdown 表格裡的儲存格。管線要跳脫，換行要變成可見的符號。"""
    return (s or "").replace("\\", "\\\\").replace("|", "\\|").replace("\n", "<br>")


def table(rows):
    # ⚠️ ID 也要跳脫 —— COUNTER.{食材|單位} 的編號本身就含管線，不跳脫會把表格切壞。
    out = ["| ID | 中文 | 한국어 |", "|---|---|---|"]
    for r in rows:
        out.append(f"| `{esc(r.id)}` | {esc(r.zh)} | {esc(r.ko) if r.ko else '—'} |")
    return "\n".join(out)


def main():
    rows = L.collect()
    total = len(rows)
    missing = sum(1 for r in rows if not r.ko)

    by_id = {r.id: r for r in rows}
    # PREAMBLE 裡有 {食譜} 之類的字面大括號，所以用 replace 不用 format
    md = [PREAMBLE.replace("@TOTAL@", str(total)).replace("@MISSING@", str(missing))]

    # ---- 一、慢寶的台詞 -------------------------------------------------
    md.append("# 一、慢寶的台詞\n")

    intro = [r for r in rows if r.id.startswith("BO.intro.")]
    md.append(f"## 自我介紹（{len(intro)} 句）\n")
    md.append("第一次打開時一句一句打字跑出來，跑完換成 `AEND` 留在畫面上。之後不再出現。\n")
    md.append("`index.html · BO_INTRO_LINES / BO_INTRO_KO`\n")
    md.append(table(intro) + "\n")

    t_rows = [r for r in rows if r.where.endswith("· T")]
    for prefix, label in T_GROUPS.items():
        grp = [r for r in t_rows if r.id.startswith(prefix)]
        if not grp:
            continue
        md.append(f"### {label}（{len(grp)}）\n")
        md.append("`index.html · T`\n")
        md.append(table(grp) + "\n")

    # ---- 二、食譜文字 ---------------------------------------------------
    recipes = L.load_recipes()
    md.append(f"# 二、食譜文字（{len(recipes)} 道）\n")
    for r in recipes:
        rid = f"R{r['id']}"
        grp = [x for x in rows if x.id == rid or x.id.startswith(rid + ".")]
        if not grp:
            continue
        md.append(f"### {rid}　{r.get('title', '')}\n")
        md.append(f"`recipes.js · id {r['id']}`\n")
        md.append(table(grp) + "\n")

    # ---- 三、詞彙 -------------------------------------------------------
    md.append("# 三、詞彙\n")
    md.append("這些是「詞」不是「句」，翻一次就重複使用，不隨食譜數量增加。\n")
    md.append("⚠️ 沒有在表裡的詞會原樣顯示中文 —— 那是刻意的，缺什麼要看得見。\n")
    for label, where in (
        ("食材・單位・標籤・菜系", "index.html · TERM"),
        ("量詞例外", "index.html · COUNTER_OVERRIDES"),
        ("份量括號註", "index.html · NOTE"),
    ):
        grp = [r for r in rows if r.where == where]
        if not grp:
            continue
        md.append(f"### {label}（{len(grp)}）\n")
        md.append(f"`{where}`\n")
        md.append(table(grp) + "\n")

    OUT_MD.write_text("\n".join(md).rstrip() + "\n", encoding="utf-8")

    # ---- locale.tsv ----------------------------------------------------
    # Sheet 吃這個。TSV 不是 CSV —— 文案裡有逗號、頓號、引號，用 tab 分欄最不會爆。
    # 分隔字元本身不可能出現在文案裡（沒有一句包含 tab 或換行以外的控制字元）。
    tsv = ["\t".join(("ID", "位置", "中文", "한국어", "備註"))]
    for r in rows:
        cells = [r.id, r.where, r.zh, r.ko or ""]
        for c in cells:
            if "\t" in c or "\n" in c:
                sys.exit(f"⛔ {r.id} 的內容含 tab 或換行，TSV 會爆。先修資料。")
        tsv.append("\t".join(cells) + "\t")
    OUT_TSV.write_text("\n".join(tsv) + "\n", encoding="utf-8")

    print(f"✅ 語系總表.md   {total} 個字串，缺韓文 {missing} 個")
    print(f"✅ locale.tsv    {total} 列（＋標題列）")
    if missing:
        print(f"   ⚠️ 有 {missing} 句缺韓文，表裡標 —")


if __name__ == "__main__":
    main()
