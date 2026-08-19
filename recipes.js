// 食譜資料 —— 慢寶版。2026-08-15 起與蝸居米其林刻意分岔，不要同步回去
const RECIPES = [
  {
    "id": 1,
    "cuisine": "CUI.中式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r1.webp",
    "tags": [
      "TAG.雞肉",
      "TAG.下飯菜",
      "TAG.一鍋到底",
      "TAG.隔夜更好吃"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.雞翅",
        300,
        "UNIT.g（也可用整隻雞切塊；本食譜採這個組合，因為我就愛）"
      ],
      [
        "ING.棒棒腿",
        300,
        "UNIT.g"
      ],
      [
        "ING.胡蘿蔔",
        0.5,
        "UNIT.根"
      ],
      [
        "ING.洋蔥",
        0.5,
        "UNIT.顆"
      ],
      [
        "ING.甘栗仁",
        1,
        "UNIT.包"
      ],
      [
        "ING.米酒",
        2,
        "UNIT.湯匙"
      ],
      {
        "label": "GRP.靈魂黑金醬汁",
        "items": [
          [
            "ING.醬油",
            4,
            "UNIT.湯匙"
          ],
          [
            "ING.蠔油",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.黑糖",
            1.5,
            "UNIT.茶匙"
          ]
        ]
      }
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "雞肉擦乾切塊、切胡蘿蔔洋蔥、調紅燒醬汁"
      ],
      [
        10,
        "煎鍋大火下雞肉煸出雞油、熗入米酒"
      ],
      [
        18,
        "移入深鍋，下胡蘿蔔、高湯與醬汁，蓋鍋蓋中小火慢燉"
      ],
      [
        33,
        "加入洋蔥與熟栗子，轉中大火開蓋翻炒收汁"
      ],
      [
        45,
        "醬汁濃稠裹亮雞肉，關火盛盤 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.雞翅",
        "amount": "300g",
        "group": "PGRP.先洗"
      },
      {
        "name": "ING.棒棒腿",
        "amount": "300g",
        "group": "PGRP.先洗"
      },
      {
        "name": "GRP.靈魂黑金醬汁",
        "amount": "醬油 4 湯匙・蠔油 1 湯匙・黑糖 1.5 茶匙",
        "group": "PGRP.調醬汁"
      },
      {
        "name": "ING.胡蘿蔔",
        "amount": "半根",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.洋蔥",
        "amount": "半顆",
        "group": "PGRP.切塊"
      }
    ],
    "prepTime": 10,
    "cookTime": 35
  },
  {
    "id": 2,
    "cuisine": "CUI.韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r2.webp",
    "tags": [
      "TAG.牛肉",
      "TAG.湯",
      "TAG.一鍋到底",
      "TAG.生日",
      "TAG.想吃熱的"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.乾海帶",
        5,
        "UNIT.g"
      ],
      [
        "ING.牛腩",
        100,
        "UNIT.g"
      ],
      [
        "ING.大蒜",
        1.5,
        "UNIT.瓣"
      ],
      [
        "ING.高湯",
        750,
        "UNIT.ml（推薦昆布魚乾或牛骨風味）"
      ],
      [
        "ING.芝麻油",
        1,
        "UNIT.湯匙"
      ],
      [
        "ING.韓式湯醬油（可用日式薄口醬油）",
        1.5,
        "UNIT.湯匙（醃牛腩 1.5 茶匙、湯底 1 湯匙，試味再補）"
      ]
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "泡發海帶瀝乾剪段、牛肉切片抓醃芝麻油與蒜末"
      ],
      [
        8,
        "鍋中中小火炒香蒜末與牛肉至變色，下海帶同炒"
      ],
      [
        15,
        "倒入高湯，大火煮滾並仔細撈除浮沫"
      ],
      [
        23,
        "維持中大火滾煮 12 分鐘，將湯頭徹底乳化成奶白色"
      ],
      [
        35,
        "轉中小火蓋鍋蓋慢燉 15 分鐘，讓海帶軟嫩入味"
      ],
      [
        50,
        "下韓式國醬油與鹽校正鹹度，關火上桌 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.乾海帶",
        "amount": "5g",
        "group": "PGRP.先泡"
      },
      {
        "name": "ING.牛腩",
        "amount": "100g",
        "group": "PGRP.先醃"
      },
      {
        "name": "ING.大蒜",
        "amount": "1.5 瓣份量",
        "group": "PGRP.切末"
      }
    ],
    "prepTime": 8,
    "cookTime": 42
  },
  {
    "id": 3,
    "cuisine": "CUI.義式",
    "stars": 3,
    "starsLabel": "深夜炫技",
    "image": "assets/dish/r3.webp",
    "tags": [
      "TAG.麵",
      "TAG.蔬菜",
      "TAG.下班後",
      "TAG.30分鐘上桌"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.義大利直麵",
        180,
        "UNIT.g（推薦 Spaghetti No.5，最剛好）"
      ],
      [
        "ING.大蒜",
        8,
        "UNIT.瓣"
      ],
      [
        "ING.義式乾辣椒",
        2,
        "UNIT.根（愛吃辣再加，不吃辣可省略）"
      ],
      [
        "ING.橄欖油",
        3,
        "UNIT.湯匙"
      ],
      [
        "ING.松露橄欖油",
        null,
        "UNIT.1–1.5湯匙（熄火後加，有就封神，沒有可省略）"
      ]
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "大鍋裝水開火煮水、大蒜切薄片、辣椒切碎"
      ],
      [
        5,
        "水滾加鹽，義大利麵下鍋（定時 8 分鐘）"
      ],
      [
        10,
        "平底鍋倒入橄欖油與冷蒜片，極小火慢慢煸至金黃微焦"
      ],
      [
        16,
        "下辣椒碎炒香，舀入 2 大勺煮麵水乳化"
      ],
      [
        19,
        "麵條夾入平底鍋，轉大火劇烈搖鍋旋轉乳化"
      ],
      [
        25,
        "關火撒巴西里碎，淋上封香橄欖油盛盤 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.大蒜",
        "amount": "8 瓣",
        "group": "PGRP.切片"
      },
      {
        "name": "ING.義式乾辣椒",
        "amount": "2 根",
        "group": "PGRP.切末"
      }
    ],
    "prepTime": 5,
    "cookTime": 20
  },
  {
    "id": 4,
    "cuisine": "CUI.甜點",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r4.webp",
    "tags": [
      "CUI.甜點",
      "TAG.烘焙",
      "TAG.下午茶",
      "TAG.剩菜救援"
    ],
    "basePortions": 4,
    "shoppingList": [
      [
        "ING.熟透香蕉",
        2,
        "UNIT.根"
      ],
      [
        "ING.低筋麵粉",
        160,
        "UNIT.g"
      ],
      {
        "label": "GRP.糖",
        "note": "黑糖提焦糖香，白糖給甜度",
        "items": [
          [
            "ING.黑糖",
            25,
            "UNIT.g"
          ],
          [
            "ING.白糖",
            75,
            "UNIT.g"
          ]
        ]
      },
      [
        "ING.奶油",
        75,
        "UNIT.g"
      ],
      [
        "ING.喝的優格",
        40,
        "UNIT.ml"
      ],
      [
        "ING.雞蛋",
        1,
        "UNIT.顆"
      ],
      [
        "ING.香草精",
        0.5,
        "UNIT.茶匙"
      ],
      [
        "ING.小蘇打粉",
        0.75,
        "UNIT.茶匙"
      ]
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "融化奶油放涼、熟香蕉用叉子徹底壓成泥"
      ],
      [
        6,
        "雞蛋、糖、融化奶油與香蕉泥攪拌均勻"
      ],
      [
        10,
        "篩入麵粉與泡打粉切拌均勻，分裝倒入馬芬紙模"
      ],
      [
        12,
        "氣炸鍋/烤箱 170°C 預熱完畢，放入麵糊開始烘烤"
      ],
      [
        35,
        "牙籤插入中心無麵糊沾黏，出爐放涼 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.熟透香蕉",
        "amount": "2 根",
        "group": "PGRP.開火前放旁邊"
      },
      {
        "name": "ING.奶油",
        "amount": "75g",
        "group": "PGRP.開火前放旁邊"
      }
    ],
    "prepTime": 12,
    "cookTime": 23
  },
  {
    "id": 5,
    "cuisine": "CUI.韓式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r5.webp",
    "tags": [
      "TAG.豬肉",
      "TAG.鍋物",
      "TAG.一鍋到底",
      "TAG.韓劇感",
      "TAG.想吃熱的"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.豬五花或梅花肉",
        250,
        "UNIT.g"
      ],
      [
        "ING.韓國櫛瓜",
        0.5,
        "UNIT.根"
      ],
      [
        "ING.馬鈴薯",
        1,
        "UNIT.顆"
      ],
      [
        "ING.板豆腐",
        0.5,
        "UNIT.盒"
      ],
      [
        "ING.洋蔥",
        0.5,
        "UNIT.顆"
      ],
      [
        "ING.大蔥",
        0.5,
        "UNIT.根"
      ],
      [
        "ING.青陽辣椒",
        1,
        "UNIT.根"
      ],
      [
        "ING.韓式醃蝦醬（可用少量魚露替代）",
        0.5,
        "UNIT.湯匙"
      ],
      [
        "ING.醋",
        0.5,
        "UNIT.湯匙（關火前）"
      ],
      {
        "label": "GRP.辣醬鍋醬汁",
        "items": [
          [
            "ING.韓式辣椒醬",
            2,
            "UNIT.湯匙"
          ],
          [
            "ING.韓式辣椒粉",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.蒜末",
            0.5,
            "UNIT.湯匙"
          ],
          [
            "ING.醬油",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.白糖",
            0.25,
            "UNIT.湯匙"
          ]
        ]
      }
    ],
    "steps": [
      "stage",
      "step",
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "切豆腐、馬鈴薯滾刀塊、切洋蔥節瓜大蔥、調好辣醬底"
      ],
      [
        12,
        "鍋底少許油煸炒豬五花出油，下調味辣醬炒出紅油香氣"
      ],
      [
        17,
        "倒入高湯與馬鈴薯塊，大火煮滾撈除浮沫"
      ],
      [
        22,
        "放入厚切豆腐，蓋鍋蓋轉中小火燉煮 10 分鐘至馬鈴薯鬆軟"
      ],
      [
        32,
        "開蓋加入節瓜片與洋蔥絲，中火滾煮 4 分鐘"
      ],
      [
        36,
        "撒入大蔥段與青紅辣椒圈，滾 2 分鐘收尾"
      ],
      [
        40,
        "整鍋咕嘟咕嘟滾燙上桌 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "GRP.辣醬鍋醬汁",
        "amount": "辣椒醬 2 湯匙・辣椒粉 1 湯匙・蒜末・醬油・白糖",
        "group": "PGRP.調醬汁"
      },
      {
        "name": "ING.豬五花或梅花肉",
        "amount": "250g",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.馬鈴薯",
        "amount": "1 顆",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.韓國櫛瓜",
        "amount": "半根",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.洋蔥",
        "amount": "半顆",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.板豆腐",
        "amount": "半盒",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.大蔥",
        "amount": "半根",
        "group": "PGRP.切段"
      },
      {
        "name": "ING.青陽辣椒",
        "amount": "1 根",
        "group": "PGRP.切片"
      }
    ],
    "prepTime": 12,
    "cookTime": 28
  },
  {
    "id": 6,
    "cuisine": "CUI.韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r6.webp",
    "tags": [
      "TAG.蔬菜",
      "TAG.小菜",
      "TAG.30分鐘上桌",
      "TAG.錢包友善"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.櫛瓜",
        1,
        "UNIT.根"
      ],
      [
        "ING.雞蛋",
        2,
        "UNIT.顆"
      ],
      [
        "ING.煎餅粉或中筋麵粉",
        1.5,
        "UNIT.湯匙"
      ],
      [
        "ING.芝麻油",
        null,
        "UNIT.幾滴（蛋汁用）"
      ]
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "櫛瓜切 0.5cm 薄片、撒薄鹽靜置出水 5 分鐘"
      ],
      [
        6,
        "擦乾櫛瓜表面水分、兩面均勻拍上一層薄麵粉"
      ],
      [
        8,
        "平底鍋熱油，櫛瓜片沾裹蛋液排入鍋中，中小火慢煎"
      ],
      [
        14,
        "翻面，將另一面蛋衣煎至金黃微焦微鼓起"
      ],
      [
        20,
        "起鍋排盤，附上沾醬上桌 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.櫛瓜",
        "amount": "1 根",
        "group": "PGRP.先醃"
      },
      {
        "name": "ING.煎餅粉或中筋麵粉",
        "amount": "1.5 湯匙",
        "group": "PGRP.開火前放旁邊"
      },
      {
        "name": "ING.雞蛋",
        "amount": "2 顆",
        "group": "PGRP.開火前放旁邊"
      }
    ],
    "prepTime": 8,
    "cookTime": 12
  },
  {
    "id": 7,
    "cuisine": "CUI.義式",
    "stars": 1,
    "starsLabel": "新手村",
    "basePortions": 10,
    "image": "assets/dish/r7.webp",
    "tags": [
      "TAG.豬肉",
      "TAG.麵",
      "TAG.週末慢慢煮",
      "TAG.隔夜更好吃"
    ],
    "shoppingList": [
      [
        "ING.豬絞肉",
        400,
        "UNIT.g"
      ],
      [
        "ING.牛絞肉",
        200,
        "UNIT.g"
      ],
      [
        "ING.洋蔥",
        1,
        "UNIT.顆"
      ],
      [
        "ING.胡蘿蔔",
        1,
        "UNIT.根"
      ],
      [
        "ING.西洋芹",
        2,
        "UNIT.支"
      ],
      [
        "ING.蘑菇",
        6,
        "UNIT.顆"
      ],
      [
        "ING.紅酒",
        180,
        "UNIT.ml"
      ],
      [
        "ING.番茄義大利麵醬",
        1200,
        "UNIT.g（Barilla 派在此小聲強推）"
      ]
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "洋蔥、胡蘿蔔、西芹切極細碎丁，備妥絞肉與去皮番茄"
      ],
      [
        15,
        "橄欖油與奶油熱鍋，中小火慢炒蔬菜碎底味 15 分鐘至焦甜"
      ],
      [
        30,
        "加入綜合絞肉，中火將肉末炒散並煸乾水分、逼出油脂"
      ],
      [
        45,
        "倒入不甜紅酒，中大火煮至酒精揮發、酒液收乾過半"
      ],
      [
        55,
        "倒入去皮整顆番茄捏碎，加入高湯煮滾"
      ],
      [
        65,
        "轉極小火，鍋蓋留一道小縫慢燉 45 分鐘（每 10 分鐘攪拌一次）"
      ],
      [
        110,
        "肉醬呈現深紅油亮、濃稠無水感，關火盛起 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.洋蔥",
        "amount": "1 顆",
        "group": "PGRP.切末"
      },
      {
        "name": "ING.胡蘿蔔",
        "amount": "1 根",
        "group": "PGRP.切末"
      },
      {
        "name": "ING.西洋芹",
        "amount": "2 支",
        "group": "PGRP.切末"
      },
      {
        "name": "ING.蘑菇",
        "amount": "6 顆",
        "group": "PGRP.切末"
      },
      {
        "name": "ING.豬絞肉",
        "amount": "400g",
        "group": "PGRP.開火前放旁邊"
      },
      {
        "name": "ING.牛絞肉",
        "amount": "200g",
        "group": "PGRP.開火前放旁邊"
      }
    ],
    "prepTime": 15,
    "cookTime": 95
  },
  {
    "id": 8,
    "cuisine": "CUI.韓式",
    "stars": 2,
    "starsLabel": "家常實力",
    "basePortions": 2,
    "image": "assets/dish/r8.webp",
    "tags": [
      "TAG.豬肉",
      "TAG.鍋物",
      "TAG.一鍋到底",
      "TAG.韓劇感",
      "TAG.想吃熱的"
    ],
    "shoppingList": [
      [
        "ING.熟成泡菜",
        400,
        "UNIT.g"
      ],
      [
        "ING.豬五花肉",
        200,
        "UNIT.g"
      ],
      [
        "ING.板豆腐",
        0.5,
        "UNIT.盒"
      ],
      [
        "ING.洋蔥",
        0.25,
        "UNIT.顆"
      ],
      [
        "ING.大蔥",
        1,
        "UNIT.根"
      ],
      [
        "ING.蒜末",
        1,
        "UNIT.湯匙"
      ],
      [
        "ING.韓式辣椒粉",
        1,
        "UNIT.湯匙"
      ],
      [
        "ING.韓式醃蝦醬（可用少量魚露替代）",
        1,
        "UNIT.茶匙"
      ],
      [
        "ING.昆布魚乾高湯",
        500,
        "UNIT.ml"
      ],
      [
        "ING.芝麻油",
        1,
        "UNIT.茶匙"
      ]
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "泡菜剪小段、豆腐切厚塊、切洋蔥與大蔥段"
      ],
      [
        10,
        "砂鍋少許油中火慢煎五花肉塊至表面金黃焦香"
      ],
      [
        16,
        "下洋蔥絲與老泡菜大火翻炒 5 分鐘，逼出泡菜酸香"
      ],
      [
        21,
        "加入蒜末、韓國辣椒粉、少許芝麻油炒勻"
      ],
      [
        24,
        "倒入高湯與泡菜原汁，大火煮滾後撈浮沫"
      ],
      [
        28,
        "轉中小火蓋上鍋蓋慢燉 12 分鐘，讓肉質軟透"
      ],
      [
        40,
        "排入豆腐塊與大蔥段，開蓋微滾 5 分鐘入味"
      ],
      [
        45,
        "撒少許黑胡椒，整鍋熱氣騰騰上桌 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.熟成泡菜",
        "amount": "400g",
        "group": "PGRP.開火前放旁邊"
      },
      {
        "name": "ING.豬五花肉",
        "amount": "200g",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.洋蔥",
        "amount": "1/4 顆",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.大蔥",
        "amount": "1 根",
        "group": "PGRP.切段"
      },
      {
        "name": "ING.板豆腐",
        "amount": "半盒",
        "group": "PGRP.切片"
      }
    ],
    "prepTime": 10,
    "cookTime": 35
  },
  {
    "id": 9,
    "cuisine": "CUI.中式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r9.webp",
    "tags": [
      "TAG.雞肉",
      "TAG.麵",
      "TAG.下班後",
      "TAG.30分鐘上桌"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.去骨雞腿肉",
        200,
        "UNIT.g"
      ],
      [
        "ING.生麵條",
        240,
        "UNIT.g"
      ],
      [
        "ING.大白菜",
        4,
        "UNIT.片葉子"
      ],
      [
        "ING.洋蔥",
        0.5,
        "UNIT.顆"
      ],
      [
        "ING.秀珍菇",
        10,
        "UNIT.朵"
      ],
      [
        "ING.紅甜椒",
        0.25,
        "UNIT.顆"
      ],
      [
        "ING.黃甜椒",
        0.25,
        "UNIT.顆"
      ],
      [
        "ING.大蔥",
        0.5,
        "UNIT.根"
      ],
      {
        "label": "GRP.雞腿醃料",
        "items": [
          [
            "ING.醬油",
            0.5,
            "UNIT.湯匙"
          ],
          [
            "ING.米酒",
            0.5,
            "UNIT.湯匙"
          ],
          [
            "ING.太白粉",
            0.5,
            "UNIT.茶匙"
          ]
        ]
      },
      {
        "label": "GRP.醬香炒麵醬汁",
        "items": [
          [
            "ING.醬油",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.白糖",
            1,
            "UNIT.茶匙"
          ],
          [
            "ING.鹽",
            null,
            "UNIT.一小撮"
          ],
          [
            "ING.白胡椒粉",
            null,
            "UNIT.一小撮"
          ],
          [
            "ING.水",
            2,
            "UNIT.湯匙"
          ]
        ]
      }
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "step"
    ],
    "tips": 2,
    "schedule": [
      [
        0,
        "雞腿肉切條抓醃，大白菜切絲、切洋蔥胡蘿蔔絲、調醬汁"
      ],
      [
        14,
        "煮一鍋水將麵條燙過瀝乾，拌少許油防黏"
      ],
      [
        19,
        "熱油鍋下醃雞腿肉，大火煎炒至 8 分熟變色盛起"
      ],
      [
        24,
        "原鍋下洋蔥、胡蘿蔔與大白菜大火快炒至斷生"
      ],
      [
        28,
        "倒回雞肉與麵條，淋入炒麵醬汁大火翻炒收乾"
      ],
      [
        33,
        "撒入蔥段與白胡椒粉大火翻炒嗆出鍋氣"
      ],
      [
        35,
        "麵條油亮裹滿醬汁，盛盤開動 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "GRP.雞腿醃料",
        "amount": "醬油・米酒・太白粉",
        "group": "PGRP.調醬汁"
      },
      {
        "name": "ING.去骨雞腿肉",
        "amount": "200g",
        "group": "PGRP.先醃"
      },
      {
        "name": "ING.大白菜",
        "amount": "4 片",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.洋蔥",
        "amount": "半顆",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.紅甜椒",
        "amount": "1/4 顆",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.黃甜椒",
        "amount": "1/4 顆",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.大蔥",
        "amount": "半根",
        "group": "PGRP.切片"
      },
      {
        "name": "ING.秀珍菇",
        "amount": "10 朵",
        "group": "PGRP.開火前放旁邊"
      },
      {
        "name": "GRP.醬香炒麵醬汁",
        "amount": "醬油 1 湯匙・白糖 1 茶匙・白胡椒粉・水 2 湯匙",
        "group": "PGRP.調醬汁"
      },
      {
        "name": "ING.生麵條",
        "amount": "240g",
        "group": "PGRP.開火前放旁邊"
      }
    ],
    "prepTime": 14,
    "cookTime": 21
  },
  {
    "id": 10,
    "cuisine": "CUI.韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r10.webp",
    "tags": [
      "TAG.蔬菜",
      "TAG.小菜",
      "TAG.醬料",
      "TAG.隔夜更好吃"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.洋蔥",
        0.5,
        "UNIT.顆"
      ],
      [
        "ING.青辣椒",
        1,
        "UNIT.根"
      ],
      {
        "label": "GRP.醬醃醬汁",
        "note": "醬油、糖、酒先煮開；關火後才加白醋",
        "items": [
          [
            "ING.醬油",
            5,
            "UNIT.湯匙"
          ],
          [
            "ING.白糖",
            null,
            "UNIT.1 湯匙 + 2 茶匙"
          ],
          [
            "ING.黑糖",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.米酒",
            1,
            "UNIT.湯匙（可省略；省略時水多補 1 湯匙）"
          ],
          [
            "ING.白醋",
            null,
            "UNIT.3 湯匙 + 1.5 茶匙"
          ]
        ]
      }
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "stage",
      "step"
    ],
    "tips": 5,
    "schedule": [
      [
        0,
        "洋蔥切適口方塊、青紅辣椒切小圈，洗淨瀝乾放入玻璃保鮮盒"
      ],
      [
        8,
        "鍋中加入醬油、水、糖，中火煮滾至糖完全融化"
      ],
      [
        11,
        "關火，趁熱倒入白醋拌勻成醃醬汁"
      ],
      [
        12,
        "將熱醬汁直接淋入裝有洋蔥與辣椒的保鮮盒中"
      ],
      [
        15,
        "室溫放涼後蓋緊盒蓋，移入冰箱冷藏"
      ],
      [
        135,
        "冷藏 2 小時入味冰透，開盒即可食用 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.洋蔥",
        "amount": "半顆",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.青辣椒",
        "amount": "1 根",
        "group": "PGRP.切段"
      }
    ],
    "prepTime": 15,
    "cookTime": 0
  },
  {
    "id": 11,
    "cuisine": "CUI.韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r11.webp",
    "tags": [
      "TAG.牛肉",
      "TAG.鍋物",
      "TAG.下飯菜",
      "TAG.想吃熱的"
    ],
    "basePortions": 2,
    "timeNote": "牛肉先睡 1 小時，開火 15 分鐘就能上桌。",
    "shoppingList": [
      [
        "ING.牛肉片",
        300,
        "UNIT.g"
      ],
      [
        "ING.洋蔥",
        0.5,
        "UNIT.顆"
      ],
      [
        "ING.香菇",
        1,
        "UNIT.朵"
      ],
      [
        "ING.杏鮑菇",
        1,
        "UNIT.根"
      ],
      [
        "ING.秀珍菇",
        null,
        "UNIT.數朵"
      ],
      [
        "ING.胡蘿蔔",
        0.25,
        "UNIT.根"
      ],
      [
        "ING.大蔥",
        0.5,
        "UNIT.根"
      ],
      [
        "ING.韓式冬粉",
        60,
        "UNIT.g"
      ],
      {
        "label": "GRP.黃金比例梨汁醃醬",
        "items": [
          [
            "ING.水梨汁",
            150,
            "UNIT.ml"
          ],
          [
            "ING.白糖",
            null,
            "UNIT.1/2 湯匙（只有使用無加糖 100% 天然梨汁時才加；韓國含糖水梨汁不用）"
          ],
          [
            "ING.醬油",
            5,
            "UNIT.湯匙"
          ],
          [
            "ING.米酒",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.蒜末",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.芝麻油",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.黑胡椒粉",
            null,
            "UNIT.少許"
          ]
        ]
      }
    ],
    "steps": [
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "牛肉片擦乾切塊，調製梨汁洋蔥醃醬"
      ],
      [
        10,
        "牛肉與醃醬充分抓勻，移入冰箱冷藏醃製（30–60 分鐘）"
      ],
      [
        40,
        "冬粉溫水泡軟剪段，洋蔥、胡蘿蔔、香菇切絲，大蔥切段"
      ],
      [
        47,
        "淺平底鍋底均勻鋪上蔬菜與菇類，中央堆上醃好的牛肉與湯汁"
      ],
      [
        52,
        "鍋邊圍入瀝乾冬粉，倒入少許水/高湯，蓋上鍋蓋大火燜煮 6 分鐘"
      ],
      [
        58,
        "開蓋用筷子將牛肉迅速撥散炒熟，讓冬粉吸飽肉汁"
      ],
      [
        65,
        "撒上大蔥絲與熟白芝麻，整鍋上桌 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.牛肉片",
        "amount": "300g",
        "group": "PGRP.先醃"
      },
      {
        "name": "GRP.黃金比例梨汁醃醬",
        "amount": "梨汁 150ml・醬油 5 湯匙・清酒 1 湯匙・蒜末・芝麻油",
        "group": "PGRP.調醬汁"
      },
      {
        "name": "ING.韓式冬粉",
        "amount": "60g",
        "group": "PGRP.先泡"
      },
      {
        "name": "ING.洋蔥",
        "amount": "半顆",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.胡蘿蔔",
        "amount": "1/4 根",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.香菇",
        "amount": "1 朵",
        "group": "PGRP.切片"
      },
      {
        "name": "ING.杏鮑菇",
        "amount": "1 朵",
        "group": "PGRP.切片"
      },
      {
        "name": "ING.秀珍菇",
        "amount": "數朵",
        "group": "PGRP.開火前放旁邊"
      },
      {
        "name": "ING.大蔥",
        "amount": "半根",
        "group": "PGRP.切段"
      }
    ],
    "prepTime": 12,
    "cookTime": 23
  },
  {
    "id": 12,
    "cuisine": "CUI.韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r12.webp",
    "tags": [
      "TAG.蔬菜",
      "TAG.韓劇感",
      "TAG.小酌良伴",
      "TAG.錢包友善"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.馬鈴薯",
        3,
        "UNIT.顆"
      ],
      [
        "ING.青辣椒",
        1,
        "UNIT.根（不放也可以）"
      ]
    ],
    "steps": [
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "step"
    ],
    "tips": 3,
    "schedule": [
      [
        0,
        "馬鈴薯去皮刨細絲，加少許鹽抓勻出水"
      ],
      [
        10,
        "雙手用力擠出馬鈴薯汁，汁液留在大碗中靜置沉澱 8 分鐘"
      ],
      [
        18,
        "倒掉上層水撿回純白澱粉，將馬鈴薯絲倒回碗中拌勻成餅糊"
      ],
      [
        20,
        "平底鍋熱足量油，分成 2 大份下鍋鋪平壓實"
      ],
      [
        24,
        "中小火慢煎 5 分鐘至底部定型呈金黃脆殼，翻面"
      ],
      [
        28,
        "另一面同樣慢煎 4–5 分鐘，起鍋前大火 15 秒逼出脆邊"
      ],
      [
        30,
        "兩大張金黃脆餅上桌 ✅"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.馬鈴薯",
        "amount": "3 顆",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.青辣椒",
        "amount": "1 根",
        "group": "PGRP.切片"
      }
    ],
    "prepTime": 10,
    "cookTime": 20
  },
  {
    "id": 13,
    "cuisine": "CUI.韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r13.webp",
    "tags": [
      "TAG.麵",
      "TAG.30分鐘上桌",
      "TAG.下班後"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.蕎麥麵",
        200,
        "UNIT.g"
      ],
      {
        "label": "GRP.紫蘇油醬汁",
        "items": [
          [
            "ING.紫蘇油",
            3,
            "UNIT.湯匙（選香氣新鮮的，這碗差很多）"
          ],
          [
            "ING.醬油",
            2,
            "UNIT.湯匙（淡醬油基準；換韓式濃醬油先減量）"
          ],
          [
            "ING.白芝麻",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.芝麻油",
            0.5,
            "UNIT.茶匙"
          ],
          [
            "GRP.糖",
            0.5,
            "UNIT.茶匙"
          ],
          [
            "ING.白醋或檸檬汁",
            0.5,
            "UNIT.茶匙"
          ],
          [
            "ING.黑胡椒粉",
            null,
            "UNIT.少許"
          ]
        ]
      },
      [
        "ING.海苔",
        null,
        "UNIT.大把（別省）"
      ],
      [
        "ING.青蔥",
        1,
        "UNIT.根"
      ],
      [
        "ING.蛋黃",
        1,
        "UNIT.顆（依口味添加）"
      ],
      [
        "ING.小黃瓜",
        0.25,
        "UNIT.根（依口味添加）"
      ]
    ],
    "prepNotes": [
      {
        "name": "GRP.紫蘇油醬汁",
        "amount": "紫蘇油 3 湯匙・醬油 2 湯匙・白芝麻・芝麻油・糖・醋",
        "group": "PGRP.調醬汁"
      },
      {
        "name": "ING.海苔",
        "amount": "大把",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.青蔥",
        "amount": "1 根",
        "group": "PGRP.切末"
      },
      {
        "name": "ING.小黃瓜",
        "amount": "1/4 根",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.蛋黃",
        "amount": "1 顆",
        "group": "PGRP.開火前放旁邊"
      }
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "調拌醬、剪細海苔絲、分離生蛋黃"
      ],
      [
        5,
        "大鍋水滾，下蕎麥麵條煮 3.5 ～ 4 分鐘"
      ],
      [
        9,
        "撈起麵條投入冰水中搓洗瀝乾"
      ],
      [
        12,
        "淋入紫蘇油與拌醬充分拌勻"
      ],
      [
        14,
        "鋪上海苔絲、白芝麻，打上生蛋黃"
      ],
      [
        15,
        "拌勻開吃 ✅"
      ]
    ],
    "prepTime": 5,
    "cookTime": 10
  },
  {
    "id": 14,
    "cuisine": "CUI.義式",
    "stars": 3,
    "starsLabel": "深夜炫技",
    "image": "assets/dish/r14.webp",
    "tags": [
      "TAG.麵",
      "TAG.海鮮",
      "TAG.蔬菜",
      "TAG.30分鐘上桌"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.義大利直麵",
        180,
        "UNIT.g（Spaghetti 或 Linguine）"
      ],
      [
        "ING.蝦子",
        8,
        "UNIT.隻（帶頭帶殼 16/20 大蝦；偷懶買蝦仁也行，少一道蝦頭油）"
      ],
      [
        "ING.蘆筍",
        1,
        "UNIT.把"
      ],
      [
        "ING.培根",
        1,
        "UNIT.片（提味用，不是主角）"
      ],
      [
        "ING.大蒜",
        4,
        "UNIT.瓣"
      ],
      [
        "ING.橄欖油",
        3,
        "UNIT.湯匙"
      ],
      [
        "ING.白酒",
        3,
        "UNIT.湯匙（沒有白酒時，可用清酒或燒酒代替）"
      ],
      [
        "ING.檸檬",
        0.5,
        "UNIT.顆（皮屑和果汁都要）"
      ],
      [
        "ING.松露鹽",
        null,
        "UNIT.少許（起鍋前撒）"
      ],
      [
        "ING.帕瑪森起司",
        null,
        "UNIT.適量（可省）"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.蝦子",
        "amount": "8 隻",
        "group": "PGRP.先醃"
      },
      {
        "name": "ING.蘆筍",
        "amount": "1 把",
        "group": "PGRP.切段"
      },
      {
        "name": "ING.培根",
        "amount": "1 片",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.大蒜",
        "amount": "4 瓣",
        "group": "PGRP.切片"
      },
      {
        "name": "ING.檸檬",
        "amount": "1/2 顆",
        "group": "PGRP.開火前放旁邊"
      }
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "煮麵水開火，鮮蝦去殼去腸泥、蘆筍切段、大蒜切片"
      ],
      [
        8,
        "煮麵水滾加鹽，義大利麵下鍋（定時 8 分鐘）"
      ],
      [
        10,
        "平底鍋冷鍋下培根條逼出油脂，下蒜片炒香"
      ],
      [
        15,
        "下鮮蝦與蘆筍段大火快速翻炒至蝦身變紅，盛起備用"
      ],
      [
        18,
        "麵條夾入平底鍋，舀入 2 勺煮麵水大火劇烈搖鍋乳化"
      ],
      [
        23,
        "倒回鮮蝦與蘆筍翻裹醬汁，擠入少許新鮮檸檬汁與黑胡椒"
      ],
      [
        30,
        "醬汁濃稠光亮，盛盤上桌 ✅"
      ]
    ],
    "prepTime": 10,
    "cookTime": 20
  },
  {
    "id": 15,
    "cuisine": "CUI.義式",
    "stars": 3,
    "starsLabel": "深夜炫技",
    "image": "assets/dish/r15.webp",
    "tags": [
      "TAG.蔬菜",
      "TAG.週末慢慢煮",
      "TAG.想吃熱的"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.燉飯米",
        160,
        "UNIT.g（Carnaroli）"
      ],
      [
        "ING.蘆筍",
        12,
        "UNIT.根（約 250–300g；嫩頭、中段、硬梗分開用）"
      ],
      [
        "ING.菇類",
        120,
        "UNIT.g（香菇、杏鮑菇、蘑菇都可以，混著用更好）"
      ],
      [
        "ING.蘑菇",
        1,
        "UNIT.顆（擺盤用）"
      ],
      [
        "ING.牛骨高湯",
        750,
        "UNIT.ml"
      ],
      [
        "ING.奶油",
        50,
        "UNIT.g"
      ],
      [
        "ING.洋蔥",
        0.25,
        "UNIT.顆"
      ],
      [
        "ING.白酒",
        50,
        "UNIT.ml（沒有白酒時，可用清酒或燒酒代替）"
      ],
      [
        "ING.橄欖油",
        2,
        "UNIT.湯匙"
      ],
      [
        "ING.帕瑪森起司",
        50,
        "UNIT.g"
      ],
      [
        "ING.鹽",
        null,
        "UNIT.少許"
      ],
      [
        "ING.黑胡椒粉",
        null,
        "UNIT.少許"
      ],
      [
        "ING.松露橄欖油",
        null,
        "UNIT.少許（可省）"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.蘆筍",
        "amount": "12 根",
        "group": "PGRP.切段"
      },
      {
        "name": "ING.菇類",
        "amount": "120g",
        "group": "PGRP.切末"
      },
      {
        "name": "ING.蘑菇",
        "amount": "1 顆",
        "group": "PGRP.切片"
      },
      {
        "name": "ING.洋蔥",
        "amount": "1/4 顆",
        "group": "PGRP.切末"
      },
      {
        "name": "ING.帕瑪森起司",
        "amount": "50g",
        "group": "PGRP.開火前放旁邊"
      },
      {
        "name": "ING.奶油",
        "amount": "50g",
        "group": "PGRP.開火前放旁邊"
      }
    ],
    "steps": [
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "高湯加熱微滾，綜合菇切片、蘆筍切段、洋蔥切極細碎"
      ],
      [
        10,
        "燉飯鍋下橄欖油與洋蔥碎炒軟，下菇類炒香"
      ],
      [
        15,
        "倒入生米乾炒烘熱 2 分鐘，嗆入白酒大火收乾"
      ],
      [
        18,
        "轉中小火，開始分次加入滾熱高湯，慢速攪拌燉煮"
      ],
      [
        30,
        "加入蘆筍段一同煨煮 3 分鐘至米心漸軟"
      ],
      [
        35,
        "關火離火，加入冰奶油塊與現磨帕瑪森起司瘋狂攪拌乳化"
      ],
      [
        40,
        "如波浪般滑順（all'onda），盛盤上桌 ✅"
      ]
    ],
    "prepTime": 10,
    "cookTime": 30
  },
  {
    "id": 16,
    "cuisine": "CUI.義式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r16.webp",
    "tags": [
      "TAG.麵",
      "TAG.豬肉"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.Guanciale 義式醃豬頰肉",
        100,
        "UNIT.g"
      ],
      [
        "ING.義大利直麵",
        160,
        "UNIT.g（Bucatini 或 Spaghetti）"
      ],
      [
        "ING.San Marzano DOP 去皮整番茄",
        400,
        "UNIT.g（整番茄，認明 DOP 標示）"
      ],
      [
        "ING.Pecorino Romano",
        null,
        "UNIT.適量"
      ],
      [
        "ING.義式乾辣椒",
        null,
        "UNIT.少許（乾辣椒或辣椒片）"
      ],
      [
        "ING.黑胡椒粉",
        null,
        "UNIT.少許（現磨）"
      ],
      [
        "ING.鹽",
        null,
        "UNIT.少許（煮麵水用）"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.Guanciale 義式醃豬頰肉",
        "amount": "100g",
        "group": "PGRP.切絲"
      },
      {
        "name": "ING.San Marzano DOP 去皮整番茄",
        "amount": "400g",
        "group": "PGRP.開火前放旁邊"
      },
      {
        "name": "ING.Pecorino Romano",
        "amount": "適量",
        "group": "PGRP.開火前放旁邊"
      }
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "step"
    ],
    "tips": 5,
    "schedule": [
      [
        0,
        "Guanciale 切粗條、去皮番茄罐頭手捏碎、磨碎起司"
      ],
      [
        8,
        "煮麵水開火；冷平底鍋放入 Guanciale 條，極小火慢煎 10 分鐘逼油"
      ],
      [
        18,
        "撈出焦脆肉條備用，鍋內留豬油下乾辣椒與番茄醬汁"
      ],
      [
        23,
        "番茄醬汁中小火慢熬收濃；同時煮麵水滾下粗管麵"
      ],
      [
        28,
        "麵條撈入番茄醬鍋，加入一半脆肉條與少許煮麵水大火翻裹乳化"
      ],
      [
        32,
        "關火離火，撒入大量佩科里諾起司快速翻拌成濃郁紅醬"
      ],
      [
        35,
        "盛盤，頂部撒上保留的酥脆肉條與黑胡椒 ✅"
      ]
    ],
    "prepTime": 8,
    "cookTime": 27
  },
  {
    "id": 17,
    "cuisine": "CUI.義式",
    "stars": 3,
    "starsLabel": "深夜炫技",
    "image": "assets/dish/r17.webp",
    "tags": [
      "TAG.週末慢慢煮",
      "TAG.想吃熱的"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.燉飯米",
        160,
        "UNIT.g（Carnaroli）"
      ],
      [
        "ING.番紅花",
        0.1,
        "UNIT.g"
      ],
      [
        "ING.高湯",
        700,
        "UNIT.ml（牛骨或雞高湯）"
      ],
      [
        "ING.奶油",
        40,
        "UNIT.g"
      ],
      [
        "ING.洋蔥",
        0.25,
        "UNIT.顆"
      ],
      [
        "ING.白酒",
        50,
        "UNIT.ml（沒有白酒時，可用清酒或燒酒代替）"
      ],
      [
        "ING.帕馬森起司粉",
        30,
        "UNIT.g"
      ],
      [
        "ING.鹽",
        null,
        "UNIT.少許"
      ],
      [
        "ING.黑胡椒粉",
        null,
        "UNIT.少許"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.番紅花",
        "amount": "0.1 g",
        "group": "PGRP.先泡"
      },
      {
        "name": "ING.洋蔥",
        "amount": "1/4 顆",
        "group": "PGRP.切末"
      },
      {
        "name": "ING.奶油",
        "amount": "40g",
        "group": "PGRP.開火前放旁邊"
      }
    ],
    "steps": [
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step"
    ],
    "tips": 5,
    "schedule": [
      [
        -30,
        "（提前步驟）番紅花雌蕊放入小碗溫高湯中浸泡萃取香氣與色澤"
      ],
      [
        0,
        "小鍋加熱高湯微滾，洋蔥切極細碎丁，備妥冰奶油與起司"
      ],
      [
        5,
        "平底鍋熱少許奶油，中小火炒軟洋蔥碎至透明不焦"
      ],
      [
        10,
        "倒入生米乾炒烘熱至邊緣透明，倒入白酒大火煮至揮發"
      ],
      [
        14,
        "開始分次補入滾熱高湯，慢速攪拌燉煮"
      ],
      [
        22,
        "倒入浸泡好的整碗金黃番紅花高湯，均勻染透整鍋燉飯"
      ],
      [
        30,
        "米心達到完美彈牙（Al Dente），關火離火"
      ],
      [
        32,
        "丟入冰凍奶油塊與大量帕瑪森起司，劇烈攪拌乳化"
      ],
      [
        35,
        "金黃耀眼、滑順盛盤 ✅"
      ]
    ],
    "prepTime": 5,
    "cookTime": 30
  },
  {
    "id": 18,
    "cuisine": "CUI.韓式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r18.webp",
    "tags": [
      "TAG.牛肉",
      "TAG.鍋物",
      "TAG.一鍋到底",
      "TAG.想吃熱的"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.牛胸肉",
        150,
        "UNIT.g"
      ],
      [
        "ING.淘米水",
        400,
        "UNIT.ml"
      ],
      [
        "ING.韓式大醬",
        1.5,
        "UNIT.湯匙"
      ],
      [
        "ING.韓式辣椒醬",
        0.5,
        "UNIT.湯匙"
      ],
      [
        "ING.蒜末",
        1,
        "UNIT.湯匙"
      ],
      [
        "ING.韓式辣椒粉",
        1,
        "UNIT.茶匙"
      ],
      [
        "ING.板豆腐",
        0.5,
        "UNIT.盒（約 150g）"
      ],
      [
        "ING.洋蔥",
        0.5,
        "UNIT.顆"
      ],
      [
        "ING.韓國櫛瓜",
        0.33,
        "UNIT.根"
      ],
      [
        "ING.香菇",
        2,
        "UNIT.朵"
      ],
      [
        "ING.青辣椒",
        1,
        "UNIT.根"
      ],
      [
        "ING.大蔥",
        0.5,
        "UNIT.根"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.淘米水",
        "amount": "400 ml",
        "group": "PGRP.開火前放旁邊"
      },
      {
        "name": "ING.板豆腐",
        "amount": "1/2 盒",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.洋蔥",
        "amount": "1/2 顆",
        "group": "PGRP.切塊"
      },
      {
        "name": "ING.韓國櫛瓜",
        "amount": "1/3 根",
        "group": "PGRP.切片"
      },
      {
        "name": "ING.香菇",
        "amount": "2 朵",
        "group": "PGRP.切片"
      },
      {
        "name": "ING.青辣椒",
        "amount": "1 根",
        "group": "PGRP.切片"
      },
      {
        "name": "ING.大蔥",
        "amount": "1/2 根",
        "group": "PGRP.切段"
      }
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "stage",
      "step"
    ],
    "tips": 5,
    "schedule": [
      [
        0,
        "豆腐切塊、櫛瓜切厚片、洋蔥切片、菇切段、蔥椒切圈"
      ],
      [
        8,
        "砂鍋煸牛油（或少許油），下韓國大醬中小火乾炒 1 分鐘爆香"
      ],
      [
        10,
        "倒入淘米水與馬鈴薯洋蔥塊，大火煮滾撈除浮沫"
      ],
      [
        15,
        "轉中火滾煮 5 分鐘，讓大醬徹底融進湯底"
      ],
      [
        20,
        "加入豆腐塊、櫛瓜片與菇類，中火滾煮 3–4 分鐘至熟透"
      ],
      [
        23,
        "撒入蒜泥、大蔥圈與青紅辣椒圈，大火滾 1–2 分鐘嗆香"
      ],
      [
        25,
        "原鍋滾燙上桌 ✅"
      ]
    ],
    "prepTime": 8,
    "cookTime": 17
  },
  {
    "id": 19,
    "cuisine": "CUI.西式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r19.webp",
    "tags": [
      "TAG.蔬菜",
      "TAG.小菜",
      "TAG.30分鐘上桌",
      "TAG.錢包友善"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.櫛瓜",
        1,
        "UNIT.根"
      ],
      [
        "ING.雞蛋",
        1,
        "UNIT.顆"
      ],
      [
        "ING.中筋麵粉",
        50,
        "UNIT.g"
      ],
      [
        "ING.胡蘿蔔",
        null,
        "UNIT.少許"
      ],
      [
        "ING.洋蔥",
        null,
        "UNIT.少許"
      ],
      [
        "ING.鹽",
        0.75,
        "UNIT.茶匙（櫛瓜出水 1/2、麵糊調味 1/4）"
      ],
      [
        "ING.黑胡椒粉",
        null,
        "UNIT.少許"
      ],
      [
        "ING.帕瑪森起司",
        null,
        "UNIT.適量（可省）"
      ],
      [
        "ING.食用油",
        null,
        "UNIT.適量（炒料與煎餅都要）"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.櫛瓜",
        "amount": "1 根",
        "group": "先醃"
      },
      {
        "name": "ING.胡蘿蔔",
        "amount": "少許",
        "group": "切絲"
      },
      {
        "name": "ING.洋蔥",
        "amount": "少許",
        "group": "切絲"
      }
    ],
    "steps": [
      "stage",
      "step",
      "stage",
      "step",
      "stage",
      "step",
      "step"
    ],
    "tips": 4,
    "schedule": [
      [
        0,
        "櫛瓜刨絲撒鹽出水 5 分鐘，胡蘿蔔與洋蔥切細絲"
      ],
      [
        6,
        "平底鍋少許油，將胡蘿蔔絲與洋蔥絲炒軟炒甜，盛出放涼"
      ],
      [
        10,
        "用力擠乾櫛瓜水分，與炒蔬菜、雞蛋、麵粉、鹽胡椒拌成濃麵糊"
      ],
      [
        13,
        "平底鍋熱油，分 4–5 小份舀入推成厚圓餅，中小火慢煎"
      ],
      [
        17,
        "底部金黃微焦酥脆後翻面，再慢煎 3–4 分鐘至兩面金黃膨鬆"
      ],
      [
        25,
        "外脆內嫩（겉바속촉）起鍋排盤，附希臘優格醬開動 ✅"
      ]
    ],
    "prepTime": 10,
    "cookTime": 15
  },
  {
    "id": 20,
    "cuisine": "CUI.中式",
    "stars": 3,
    "starsLabel": "深夜炫技",
    "image": "assets/dish/r20.webp",
    "tags": [
      "TAG.週末慢慢煮",
      "TAG.錢包友善"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.中筋麵粉",
        300,
        "UNIT.g"
      ],
      [
        "ING.滾水",
        165,
        "UNIT.ml"
      ],
      [
        "ING.冷水",
        60,
        "UNIT.ml"
      ],
      [
        "ING.鹽",
        2,
        "UNIT.g"
      ],
      {
        "label": "ING.油酥",
        "items": [
          [
            "ING.沙拉油",
            36,
            "UNIT.ml（有豬油優先用，最傳統最香）"
          ],
          [
            "ING.中筋麵粉",
            24,
            "UNIT.g"
          ],
          [
            "ING.鹽",
            1,
            "UNIT.g"
          ]
        ]
      },
      {
        "label": "ING.蔥油內餡",
        "items": [
          [
            "ING.大蔥",
            60,
            "UNIT.g（約 3–4 根）"
          ],
          [
            "ING.鹽",
            1.5,
            "UNIT.g"
          ],
          [
            "ING.芝麻油",
            4,
            "UNIT.g（不到 1 茶匙）"
          ]
        ]
      },
      [
        "ING.食用油",
        null,
        "UNIT.適量（每張約 8ml）"
      ]
    ],
    "prepNotes": [
      {
        "name": "ING.大蔥",
        "amount": "60 g",
        "group": "切末"
      },
      {
        "name": "ING.蔥油內餡",
        "amount": "大蔥・鹽・芝麻油",
        "group": "調醬汁"
      }
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "stage",
      "step",
      "stage",
      "step",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "step"
    ],
    "tips": 4,
    "urgentNote": true,
    "schedule": [
      [
        0,
        "麵粉加鹽沖沸滾水攪成雪花狀，加冷水揉成光滑麵團（燙麵）"
      ],
      [
        10,
        "蓋保鮮膜靜置鬆弛 30 分鐘（等待期間：切蔥末、調熱油酥）"
      ],
      [
        40,
        "麵團分 4–5 份，擀成大薄片抹油酥、撒滿醃蔥花"
      ],
      [
        47,
        "捲成長條盤成蝸牛狀收口，鬆弛 5 分鐘後輕推擀成厚薄均勻圓片"
      ],
      [
        52,
        "平底鍋熱油下餅皮，立刻蓋上鍋蓋中火悶煎 3–4 分鐘鎖水熟透"
      ],
      [
        56,
        "翻面再蓋蓋悶煎 2–3 分鐘，最後開蓋大火各煎 30 秒逼出焦脆（分批煎完）"
      ],
      [
        70,
        "兩面金黃酥脆、內層千層多汁，起鍋切塊上桌 ✅"
      ]
    ],
    "prepTime": 10,
    "cookTime": 60
  },
  {
    "id": 21,
    "cuisine": "CUI.中式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r21.webp",
    "tags": [
      "TAG.雞肉",
      "TAG.一鍋到底",
      "TAG.想吃熱的"
    ],
    "basePortions": 2,
    "shoppingList": [
      [
        "ING.去骨雞腿肉",
        2,
        "UNIT.片（約 300g）"
      ],
      [
        "ING.白米",
        1,
        "UNIT.米杯"
      ],
      [
        "ING.熟栗子",
        12,
        "UNIT.顆（超商的맛밤直接用最方便）"
      ],
      [
        "ING.菇類",
        null,
        "UNIT.適量（約一小把，香菇最香）"
      ],
      [
        "ING.洋蔥",
        0.5,
        "UNIT.顆"
      ],
      [
        "ING.大蔥",
        1,
        "UNIT.根（蔥白爆香、蔥綠當蔥花）"
      ],
      [
        "ING.大蒜",
        2,
        "UNIT.瓣"
      ],
      {
        "label": "ING.雞腿醃料",
        "items": [
          [
            "ING.鹽",
            0.25,
            "UNIT.茶匙"
          ],
          [
            "ING.黑胡椒粉",
            null,
            "UNIT.少許"
          ],
          [
            "ING.醬油",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.蠔油",
            1,
            "UNIT.茶匙"
          ],
          [
            "ING.太白粉",
            1,
            "UNIT.茶匙"
          ]
        ]
      },
      {
        "label": "ING.調味汁",
        "items": [
          [
            "ING.醬油",
            2,
            "UNIT.湯匙"
          ],
          [
            "ING.米酒",
            1,
            "UNIT.湯匙"
          ],
          [
            "ING.味醂",
            1,
            "UNIT.茶匙（沒有可用清酒加半茶匙糖代替）"
          ],
          [
            "ING.白糖",
            0.5,
            "UNIT.茶匙"
          ],
          [
            "ING.蠔油",
            1,
            "UNIT.湯匙（補乾香菇的鮮味）"
          ],
          [
            "ING.白胡椒粉",
            null,
            "UNIT.少許"
          ]
        ]
      }
    ],
    "prepNotes": [
      {
        "name": "ING.去骨雞腿肉",
        "amount": "2 片",
        "group": "先醃"
      },
      {
        "name": "ING.雞腿醃料",
        "amount": "鹽・黑胡椒・醬油・蠔油・太白粉",
        "group": "調醬汁"
      },
      {
        "name": "ING.調味汁",
        "amount": "醬油・米酒・味醂・糖・蠔油・白胡椒",
        "group": "調醬汁"
      },
      {
        "name": "ING.白米",
        "amount": "1 米杯",
        "group": "先洗"
      },
      {
        "name": "ING.熟栗子",
        "amount": "12 顆",
        "group": "切塊"
      },
      {
        "name": "ING.菇類",
        "amount": "一小把",
        "group": "切絲"
      },
      {
        "name": "ING.洋蔥",
        "amount": "1/2 顆",
        "group": "切絲"
      },
      {
        "name": "ING.大蔥",
        "amount": "1 根",
        "group": "切段"
      },
      {
        "name": "ING.大蒜",
        "amount": "2 瓣",
        "group": "切末"
      }
    ],
    "steps": [
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step",
      "stage",
      "step",
      "step"
    ],
    "tips": 4,
    "urgentNote": true,
    "schedule": [
      [
        0,
        "雞肉切厚塊抓醃太白粉醬油 20 分鐘，洗米瀝乾，備栗子菇蔥蒜"
      ],
      [
        15,
        "平底鍋不放油，去骨雞腿皮朝下中小火乾煎 5 分鐘逼出天然雞油"
      ],
      [
        20,
        "翻面煎 1 分鐘盛起；利用鍋中雞油爆香蔥白、蒜碎與秀珍菇炒軟"
      ],
      [
        25,
        "米入電子鍋，倒調味汁補水至 1 杯刻度偏低處，鋪上雞肉栗子與炒料"
      ],
      [
        27,
        "按下標準炊飯模式（電子鍋自動烹煮約 28–30 分鐘）"
      ],
      [
        55,
        "炊飯完成跳起，切勿開蓋，利用餘溫繼續悶 10 分鐘讓米心回穩"
      ],
      [
        65,
        "開蓋用飯匙輕柔翻拌均勻，撒上蔥花與黑胡椒盛碗開吃 ✅"
      ]
    ],
    "prepTime": 15,
    "cookTime": 50
  }
];
