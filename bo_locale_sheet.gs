/**
 * 慢寶 · 文案 Sheet
 *
 * 貼進 Google Sheet 的 Apps Script 編輯器（擴充功能 → Apps Script），存檔後重新整理試算表，
 * 上方會多一個「慢寶」選單。
 *
 * 它做一件事：從 GitHub 抓最新的 locale.tsv 填進這張表。
 * repo 是公開的，所以不需要任何授權、不需要 token、不需要 OAuth。
 *
 * ⚠️ 「備註」欄是你的，重新整理不會蓋掉 —— 依編號對回去。
 *    但編號如果在程式碼那邊消失了（那句被刪了），它的備註也會跟著不見。
 */

const REPO = 'showbesun/bo-kitchen';
const BRANCH = 'main';
const FILE = 'locale.tsv';

const HEADERS = ['ID', '位置', '中文', '한국어', '備註'];
const COL_ID = 1, COL_WHERE = 2, COL_ZH = 3, COL_KO = 4, COL_MEMO = 5;


function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('慢寶')
    .addItem('從 GitHub 抓最新文案', 'pullLocale')
    .addSeparator()
    .addItem('這張表怎麼用', 'showHelp')
    .addToUi();
}


function pullLocale() {
  const ui = SpreadsheetApp.getUi();
  const sheet = SpreadsheetApp.getActiveSheet();

  // raw.githubusercontent 會快取，掛一個變動參數才拿得到剛推上去的版本
  const url = `https://raw.githubusercontent.com/${REPO}/${BRANCH}/${FILE}?t=${Date.now()}`;

  let text;
  try {
    const res = UrlFetchApp.fetch(url, { muteHttpExceptions: true });
    if (res.getResponseCode() !== 200) {
      ui.alert(`抓不到檔案（HTTP ${res.getResponseCode()}）。\n\n` +
               `確認 ${FILE} 已經推上 ${BRANCH} 了嗎？\n${url}`);
      return;
    }
    text = res.getContentText('UTF-8');
  } catch (e) {
    ui.alert('連線失敗：' + e.message);
    return;
  }

  const rows = text.replace(/\r\n/g, '\n').split('\n')
    .filter(l => l.length)
    .map(l => l.split('\t'));
  if (rows.length < 2) { ui.alert('檔案是空的，或格式不對。'); return; }

  const head = rows.shift();
  const iId = head.indexOf('ID'), iWhere = head.indexOf('位置');
  const iZh = head.indexOf('中文'), iKo = head.indexOf('한국어');
  if (iId < 0 || iZh < 0 || iKo < 0) {
    ui.alert('標題列不對，需要 ID／中文／한국어。讀到的是：\n' + head.join(' · '));
    return;
  }

  // 先把現有的備註記下來，等一下依編號放回去
  const memos = {};
  const last = sheet.getLastRow();
  if (last > 1) {
    const old = sheet.getRange(2, COL_ID, last - 1, COL_MEMO).getValues();
    old.forEach(r => {
      const id = String(r[COL_ID - 1]).trim();
      const memo = String(r[COL_MEMO - 1] || '').trim();
      if (id && memo) memos[id] = memo;
    });
  }

  const out = rows.map(r => {
    const id = r[iId] || '';
    return [id, r[iWhere] || '', r[iZh] || '', r[iKo] || '', memos[id] || ''];
  });

  sheet.clear();
  sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS])
    .setFontWeight('bold').setBackground('#F9E6D1');   // 慢寶的底色
  sheet.getRange(2, 1, out.length, HEADERS.length).setValues(out);

  sheet.setFrozenRows(1);
  sheet.setColumnWidth(COL_ID, 130);
  sheet.setColumnWidth(COL_WHERE, 190);
  sheet.setColumnWidth(COL_ZH, 460);
  sheet.setColumnWidth(COL_KO, 460);
  sheet.setColumnWidth(COL_MEMO, 260);
  sheet.getRange(1, 1, out.length + 1, HEADERS.length)
    .setVerticalAlignment('top').setWrap(true);

  // 位置欄是給人看的定位資訊，不該被改 —— 灰掉，一眼看得出不是編輯區
  sheet.getRange(2, COL_WHERE, out.length, 1).setFontColor('#999999');

  const kept = Object.keys(memos).filter(id => memos[id]).length;
  SpreadsheetApp.getActiveSpreadsheet().toast(
    `${out.length} 句已更新` + (kept ? `，保留 ${kept} 則備註` : ''), '慢寶', 5);
}


function showHelp() {
  SpreadsheetApp.getUi().alert(
    '慢寶 · 文案 Sheet\n\n' +
    '1. 「慢寶 → 從 GitHub 抓最新文案」把程式碼裡的現況拉下來\n' +
    '2. 直接改「中文」和「한국어」兩欄。想寫審稿意見就寫在「備註」\n' +
    '3. 改完：檔案 → 下載 → 逗號分隔值（.csv）\n' +
    '4. 把那個 csv 交給 Claude，或自己跑：\n' +
    '     python apply_locale.py 下載的檔案.csv          （先預演）\n' +
    '     python apply_locale.py 下載的檔案.csv --write   （真的寫入）\n\n' +
    '⚠️ 不要改「ID」欄 —— 那是寫回程式碼的定位依據，改了就對不上。\n' +
    '⚠️ TERM／COUNTER／NOTE 的中文就是它們的編號，只能改韓文那格。\n\n' +
    '⚠️ 每次審稿前先重新抓一次。這張表是工作檯，不是真相 ——\n' +
    '   真相永遠是 recipes.js 和 index.html。'
  );
}
