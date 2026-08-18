# -*- coding: utf-8 -*-
"""慢寶 · 文案抽取的共用底層。

gen_locale.py（匯出）和 apply_locale.py（寫回）共用這一份，
所以兩邊看到的編號永遠一致 —— 編號對不上的話，寫回會寫到別格去。

⚠️ 這裡只負責「認得出每一句在哪裡」，不做任何格式化決定。
"""

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parent
RECIPES_JS = ROOT / "recipes.js"
INDEX_HTML = ROOT / "index.html"


# ---------------------------------------------------------------- JS 字面值

def _strip_comments(src: str) -> str:
    """把 /* */ 和 // 註解換成等長空白 —— 等長才不會讓後面的位移跑掉。"""
    out = []
    i, n = 0, len(src)
    while i < n:
        c = src[i]
        if c in "'\"`":                      # 字串裡的 // 不是註解
            q = c
            j = i + 1
            while j < n:
                if src[j] == "\\":
                    j += 2
                    continue
                if src[j] == q:
                    break
                j += 1
            out.append(src[i:j + 1])
            i = j + 1
        elif src.startswith("/*", i):
            j = src.find("*/", i + 2)
            j = n if j < 0 else j + 2
            out.append(re.sub(r"[^\n]", " ", src[i:j]))
            i = j
        elif src.startswith("//", i):
            j = src.find("\n", i)
            j = n if j < 0 else j
            out.append(" " * (j - i))
            i = j
        else:
            out.append(c)
            i += 1
    return "".join(out)


def _unescape(s: str) -> str:
    return json.loads('"' + s.replace('"', '\\"').replace("\\'", "'") + '"')


_STR = re.compile(r"'((?:[^'\\]|\\.)*)'")


def _block(src: str, decl: str) -> str:
    """抓 `const NAME = {…}` 或 `= [...]` 的內容（含外層括號）。"""
    m = re.search(r"const\s+" + re.escape(decl) + r"\s*=\s*([{\[])", src)
    if not m:
        raise KeyError(f"index.html 裡找不到 const {decl}")
    open_ch = m.group(1)
    close_ch = "}" if open_ch == "{" else "]"
    i = m.end() - 1
    depth = 0
    while i < len(src):
        if src[i] == open_ch:
            depth += 1
        elif src[i] == close_ch:
            depth -= 1
            if depth == 0:
                return src[m.end() - 1:i + 1]
        i += 1
    raise ValueError(f"const {decl} 的括號沒有收完")


def js_pairs(src: str, decl: str):
    """`{ KEY: '值' }` 或 `{ '鍵': '值' }` → [(鍵, 值)]"""
    body = _strip_comments(_block(src, decl))[1:-1]
    out = []
    for m in re.finditer(r"(?:'((?:[^'\\]|\\.)*)'|([A-Za-z_$][\w$]*))\s*:\s*'((?:[^'\\]|\\.)*)'", body):
        key = _unescape(m.group(1)) if m.group(1) is not None else m.group(2)
        out.append((key, _unescape(m.group(3))))
    return out


def js_pair_arrays(src: str, decl: str):
    """`{ KEY: ['中', '한'] }` → [(鍵, 中, 한)]"""
    body = _strip_comments(_block(src, decl))[1:-1]
    out = []
    for m in re.finditer(
        r"(?:'((?:[^'\\]|\\.)*)'|([A-Za-z_$][\w$]*))\s*:\s*\[\s*"
        r"'((?:[^'\\]|\\.)*)'\s*,\s*'((?:[^'\\]|\\.)*)'\s*,?\s*\]", body
    ):
        key = _unescape(m.group(1)) if m.group(1) is not None else m.group(2)
        out.append((key, _unescape(m.group(3)), _unescape(m.group(4))))
    return out


def js_array(src: str, decl: str):
    """`const NAME = ['a', 'b']` → ['a', 'b']"""
    body = _strip_comments(_block(src, decl))
    return [_unescape(m.group(1)) for m in _STR.finditer(body)]


# ---------------------------------------------------------------- 讀檔

def load_recipes():
    s = RECIPES_JS.read_text(encoding="utf-8")
    return json.loads(s[s.index("["):s.rindex("]") + 1])


def load_index():
    return INDEX_HTML.read_text(encoding="utf-8")


# ---------------------------------------------------------------- 編號

STAGE = "## "          # steps 陣列裡以此開頭的是階段名，不是步驟句


def split_steps(steps):
    """steps 混著階段名與步驟句，編號要分開數（見語系總表的編號規則）。"""
    stages, sentences = [], []
    for s in steps or []:
        (stages if s.startswith(STAGE) else sentences).append(
            s[len(STAGE):] if s.startswith(STAGE) else s
        )
    return stages, sentences


class Row:
    __slots__ = ("id", "zh", "ko", "where", "section")

    def __init__(self, id, zh, ko, where, section):
        self.id, self.zh, self.ko = id, zh, ko
        self.where, self.section = where, section

    def as_tuple(self):
        return (self.id, self.where, self.zh, self.ko or "")


def collect():
    """把全部文案抽成有編號的列。順序＝語系總表的閱讀順序。"""
    idx = load_index()
    recipes = load_recipes()
    rows = []

    def add(i, zh, ko, where, section):
        rows.append(Row(i, zh, ko, where, section))

    # ---- 一、慢寶的台詞 -------------------------------------------------
    zh_intro = js_array(idx, "BO_INTRO_LINES")
    ko_intro = js_array(idx, "BO_INTRO_KO")
    for n, zh in enumerate(zh_intro, 1):
        ko = ko_intro[n - 1] if n <= len(ko_intro) else ""
        add(f"BO.intro.{n}", zh, ko, "index.html · BO_INTRO_LINES", "自我介紹")

    for key, zh, ko in js_pair_arrays(idx, "T"):
        add(key, zh, ko, "index.html · T", "介面與固定台詞")

    # ---- 二、食譜文字 ---------------------------------------------------
    for r in recipes:
        rid = f"R{r['id']}"
        ko = r.get("ko") or {}
        where = f"recipes.js · id {r['id']}"
        sec = f"{rid}　{r.get('title', '')}"

        for field in ("title", "subtitle", "note", "murmur"):
            if r.get(field):
                add(f"{rid}.{field}", r[field], ko.get(field, ""), where, sec)

        if r.get("urgentNote"):
            add(f"{rid}.urgent", r["urgentNote"], ko.get("urgentNote", ""), where, sec)

        stages, steps = split_steps(r.get("steps"))
        for n, zh in enumerate(stages, 1):
            add(f"{rid}.stage.{n}", zh, (ko.get("stages") or [""] * n)[n - 1]
                if n <= len(ko.get("stages") or []) else "", where, sec)
        for n, zh in enumerate(steps, 1):
            ks = ko.get("steps") or []
            add(f"{rid}.step.{n}", zh, ks[n - 1] if n <= len(ks) else "", where, sec)

        for n, zh in enumerate(r.get("tips") or [], 1):
            kt = ko.get("tips") or []
            add(f"{rid}.tip.{n}", zh, kt[n - 1] if n <= len(kt) else "", where, sec)

        for n, p in enumerate(r.get("prepNotes") or [], 1):
            kp = ko.get("prep") or []
            add(f"{rid}.prep.{n}", p.get("method", ""),
                kp[n - 1] if n <= len(kp) else "", where, sec)

    # ---- 三、詞彙 -------------------------------------------------------
    for k, v in js_pairs(idx, "TERM"):
        add(f"TERM.{k}", k, v, "index.html · TERM", "詞彙")
    for k, v in js_pairs(idx, "COUNTER_OVERRIDES"):
        add(f"COUNTER.{k}", k, v, "index.html · COUNTER_OVERRIDES", "量詞例外")
    for k, v in js_pairs(idx, "NOTE"):
        add(f"NOTE.{k}", k, v, "index.html · NOTE", "份量括號註")

    return rows
