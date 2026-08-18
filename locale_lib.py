# -*- coding: utf-8 -*-
"""慢寶 · 文案抽取的共用底層。

gen_locale.py（匯出）和 apply_locale.py（寫回）共用這一份，
所以兩邊看到的編號永遠一致 —— 編號對不上的話，寫回會寫到別格去。

⚠️ 2026-08-18 重構後，**所有文案只有一個家：`strings.js`**。
   編號當 key、語言當欄位。這裡不再需要為五種形狀各寫一條路徑。
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
RECIPES_JS = ROOT / "recipes.js"
INDEX_HTML = ROOT / "index.html"
STRINGS_JS = ROOT / "strings.js"

LANGS = ("zh", "ko")           # 加英文：在這裡加 "en"，其餘都不用動


def _unescape(s: str) -> str:
    return json.loads('"' + s.replace('"', '\\"').replace("\\'", "'") + '"')


# ⚠️ 值裡面會出現 { } —— 台詞有 {n} 道、{d} 天這種佔位符。
# 所以不能用 [^}]*，要抓「一行之內、以 }, 結尾」的那一段。
_ENTRY = re.compile(
    r"^\s*'((?:[^'\\]|\\.)*)'\s*:\s*\{(.*)\}\s*,\s*$", re.M)
_FIELD = re.compile(r"(\w+)\s*:\s*'((?:[^'\\]|\\.)*)'")


def load_strings():
    """strings.js → OrderedDict[編號] = {'zh': …, 'ko': …}，**保持檔案順序**。"""
    src = STRINGS_JS.read_text(encoding="utf-8")
    out = {}
    for m in _ENTRY.finditer(src):
        key = _unescape(m.group(1))
        vals = {k: _unescape(v) for k, v in _FIELD.findall(m.group(2))}
        out[key] = vals
    return out


def load_recipes():
    s = RECIPES_JS.read_text(encoding="utf-8")
    return json.loads(s[s.index("["):s.rindex("]") + 1])


def load_index():
    return INDEX_HTML.read_text(encoding="utf-8")


# ---------------------------------------------------------------- 編號

def section_of(key: str) -> str:
    """編號前綴決定它屬於哪一段 —— 前綴的意義是編號規則定死的，推得出來。"""
    if key.startswith("BO.intro."):
        return "自我介紹"
    if key.startswith("TERM."):
        return "詞彙"
    if key.startswith("COUNTER."):
        return "量詞例外"
    if key.startswith("NOTE."):
        return "份量括號註"
    m = re.match(r"^R(\d+)\.", key)
    if m:
        return f"R{m.group(1)}"
    return "介面與固定台詞"


class Row:
    __slots__ = ("id", "zh", "ko", "where", "section")

    def __init__(self, id, zh, ko, where, section):
        self.id, self.zh, self.ko = id, zh, ko
        self.where, self.section = where, section

    def as_tuple(self):
        return (self.id, self.where, self.zh, self.ko or "")


def collect():
    """全部文案，照 strings.js 的順序。"""
    rows = []
    for key, vals in load_strings().items():
        sec = section_of(key)
        rows.append(Row(key, vals.get("zh", ""), vals.get("ko", ""),
                        "strings.js · " + sec, sec))
    return rows


# ---------------------------------------------------------------- 食譜結構

STAGE = "stage"      # steps 的順序模式：階段名 / 步驟句


def split_steps(pattern):
    """['stage','step','step'] → (階段數, 步驟句數)"""
    return sum(1 for x in pattern or [] if x == STAGE), \
           sum(1 for x in pattern or [] if x != STAGE)
