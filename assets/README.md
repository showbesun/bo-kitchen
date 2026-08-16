# 素材

app 用到的圖全部在這裡，沒有第二個地方。

```
assets/
  bo/       慢寶本人（11 張）
  dish/     菜色（12 張，檔名對應食譜 id）
  bg/       背景質感
  source/   生圖用的定稿參考 —— app 不會載入它們
```

## bo/ — 慢寶

| 檔名 | 是什麼 | 用在哪 |
|---|---|---|
| `hang_sleep` | 睡著、倒掛 | 招呼頁（會慢慢晃） |
| `hang_drape` | 趴在橫桿上看你 | 兩個入口那頁、今日菜單 |
| `hang_u` | U 型倒掛、醒著 | 目前備用 |
| `cook_bowl` | 站著攪碗 | 目前備用 |
| `cook_pan` | 站著端鍋 | 食譜詳情（牠說話那塊） |
| `face_sleepy` `face_satisfied` `face_cheeky` `face_blank` `face_thinking` `face_surprised` | 六個表情頭像，已去背 | 底部橫條、空狀態 |

## dish/ — 菜色

`r1`–`r12`，數字就是 `recipes.js` 裡的食譜 `id`。全部 700×525 WebP。

## bg/ — 背景

`wood.webp` — 480×480 無縫貼圖，食譜牆的木牆。CSS 以 240px 重複。

## source/ — 生圖參考（不是 app 素材）

`bo_master.png` — **角色的唯一真相**。每次要生新的慢寶圖，都要附上它，
否則畫出來的會一次比一次偏。詳見 `manbao` 技能。

---

## ⚠️ 換圖之後一定要做的事

`index.html` 裡有一行 `const ASSETS = 'N'`。**把 N 加一。**

所有素材網址都會帶上 `?v=N`。不改的話，網址沒變，瀏覽器會繼續用舊的快取，
你換了圖也看不到。（踩過不只一次。）
