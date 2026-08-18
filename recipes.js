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
    "time": "約45分鐘",
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
        "擦乾雞肉、切菜、調好醬汁"
      ],
      [
        10,
        "煎鍋大火煎雞肉、熗酒"
      ],
      [
        18,
        "移入深鍋，加水+胡蘿蔔+醬汁，燜燉中"
      ],
      [
        30,
        "加洋蔥+栗子，開蓋大火收汁"
      ],
      [
        40,
        "收汁完成，上桌 ✅"
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
    ]
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
    "time": "約40分鐘",
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
        "牛肉醃漬 5 分鐘"
      ],
      [
        5,
        "中小火炒香牛肉、蒜末、海帶"
      ],
      [
        15,
        "加水，大火煮滾，撈浮沫"
      ],
      [
        25,
        "中大火維持乳白滾煮中"
      ],
      [
        35,
        "轉中小火燉煮中"
      ],
      [
        65,
        "試味收尾，上桌 ✅"
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
    ]
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
    "time": "約25分鐘",
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
        "煮麵水開火、備蒜片辣椒碎"
      ],
      [
        10,
        "麵下鍋，同時平底鍋冷油冷蒜煸香"
      ],
      [
        18,
        "麵提早撈起，留煮麵水 200ml"
      ],
      [
        20,
        "大火乳化，瘋狂旋轉"
      ],
      [
        25,
        "關火封香，盛盤 ✅"
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
    ]
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
    "time": "約35分鐘",
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
        "香蕉壓泥、奶油融化放涼"
      ],
      [
        10,
        "混合濕料＋乾料，倒入模具"
      ],
      [
        13,
        "氣炸鍋預熱"
      ],
      [
        16,
        "放入模具，開始氣炸"
      ],
      [
        36,
        "牙籤測試，完成 ✅"
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
    ]
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
    "time": "約40分鐘",
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
        "調醬、切好所有食材"
      ],
      [
        10,
        "煸炒豬肉、倒醬炒香"
      ],
      [
        15,
        "加水+馬鈴薯，大火煮滾撈浮沫"
      ],
      [
        18,
        "放豆腐，蓋鍋蓋中小火燉 15 分鐘"
      ],
      [
        33,
        "開蓋確認稠度，下節瓜＋洋蔥，煮 3~4 分鐘"
      ],
      [
        37,
        "放大蔥、辣椒，滾 1~2 分鐘"
      ],
      [
        39,
        "收尾調味，上桌 ✅"
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
    ]
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
    "time": "約20分鐘",
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
        "櫛瓜切片、撒鹽靜置 5 分鐘"
      ],
      [
        5,
        "擦乾水分、撒薄粉"
      ],
      [
        8,
        "打散蛋汁、裹片"
      ],
      [
        10,
        "熱鍋下油，開始煎"
      ],
      [
        18,
        "起鍋，上桌 ✅"
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
    ]
  },
  {
    "id": 7,
    "cuisine": "CUI.義式",
    "stars": 1,
    "starsLabel": "新手村",
    "time": "約 120 分鐘",
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
        "備料、蔬菜切丁"
      ],
      [
        10,
        "下鍋炒蔬菜底味"
      ],
      [
        25,
        "加肉末，炒到水氣蒸發"
      ],
      [
        40,
        "倒紅酒，中大火收乾"
      ],
      [
        50,
        "倒番茄醬，煮滾"
      ],
      [
        55,
        "轉極小火，蓋縫燉煮（每 10 分鐘攪拌）"
      ],
      [
        115,
        "油光浮現，關火 ✅"
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
    ]
  },
  {
    "id": 8,
    "cuisine": "CUI.韓式",
    "stars": 2,
    "starsLabel": "家常實力",
    "time": "約45分鐘",
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
        "備料：泡菜剪段、蔬菜切好"
      ],
      [
        10,
        "中火煎豬五花至金黃"
      ],
      [
        15,
        "下洋蔥、泡菜拌炒"
      ],
      [
        20,
        "下蒜末、辣椒粉、芝麻油"
      ],
      [
        22,
        "倒高湯和泡菜汁，大火煮滾"
      ],
      [
        25,
        "轉中小火，蓋鍋蓋燉煮"
      ],
      [
        43,
        "放豆腐，再煮 5 分鐘"
      ],
      [
        48,
        "加大蔥，關火 ✅"
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
    ]
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
    "time": "約 30 分鐘",
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
        "醃雞腿肉"
      ],
      [
        5,
        "切蔬菜、調醬汁"
      ],
      [
        15,
        "處理麵條、瀝乾拌油"
      ],
      [
        20,
        "炒雞腿肉"
      ],
      [
        24,
        "加入蔬菜和麵條"
      ],
      [
        28,
        "大火快炒收乾"
      ],
      [
        30,
        "起鍋上桌 ✅"
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
    ]
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
    "time": "約 10 分鐘（冷藏 2 小時以上）",
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
        "切洋蔥和辣椒"
      ],
      [
        3,
        "煮醬汁"
      ],
      [
        6,
        "關火加醋"
      ],
      [
        7,
        "熱醬汁淋入保鮮盒"
      ],
      [
        10,
        "放涼後冷藏"
      ],
      [
        130,
        "可以開吃 ✅"
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
    ]
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
    "time": "約 75 分鐘",
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
        "牛肉擦乾切塊、調醃醬"
      ],
      [
        5,
        "牛肉冷藏醃製"
      ],
      [
        60,
        "泡軟冬粉、切蔬菜和菇類"
      ],
      [
        63,
        "蔬菜和菇類鋪底，牛肉與醃醬進鍋"
      ],
      [
        65,
        "加入冬粉，大火悶滾"
      ],
      [
        70,
        "撥散牛肉，冬粉吸汁"
      ],
      [
        73,
        "加入大蔥，整鍋上桌"
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
    ]
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
    "time": "約 30 分鐘",
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
        "馬鈴薯去皮、刨細"
      ],
      [
        7,
        "擠出馬鈴薯水"
      ],
      [
        8,
        "馬鈴薯水靜置沉澱"
      ],
      [
        18,
        "倒掉上層水，撿回澱粉"
      ],
      [
        20,
        "拌成馬鈴薯餅糊"
      ],
      [
        22,
        "分成兩份下鍋煎"
      ],
      [
        30,
        "兩張大餅上桌"
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
    ]
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
    "time": "約15分鐘",
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
        "調醬汁、剪海苔、分蛋黃"
      ],
      [
        5,
        "水煮滾，蕎麥麵下鍋"
      ],
      [
        10,
        "撈起冷水搓洗、徹底瀝乾"
      ],
      [
        13,
        "拌醬、鋪海苔、放蛋黃 ✅"
      ]
    ]
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
    "time": "約30分鐘",
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
        "燒水、備蝦蘆筍蒜片"
      ],
      [
        8,
        "麵下鍋；同時培根冷鍋逼油"
      ],
      [
        18,
        "蒜片、蝦、蘆筍依序過鍋"
      ],
      [
        25,
        "麵水乳化"
      ],
      [
        30,
        "檸檬收尾，盛盤 ✅"
      ]
    ]
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
    "time": "約40分鐘",
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
        "高湯煮上、切菇切蘆筍"
      ],
      [
        10,
        "炒洋蔥和菇"
      ],
      [
        15,
        "烘米、嗆白酒"
      ],
      [
        18,
        "開始分次補高湯"
      ],
      [
        35,
        "關火乳化，盛盤 ✅"
      ]
    ]
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
    "time": "約35分鐘",
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
        "Guanciale 切條、番茄捏碎、起司磨好"
      ],
      [
        5,
        "Guanciale 冷鍋逼油"
      ],
      [
        15,
        "番茄下鍋慢慢收"
      ],
      [
        28,
        "煮麵、留麵水"
      ],
      [
        35,
        "合體，關火拌起司 ✅"
      ]
    ]
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
    "time": "約35分鐘",
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
        -40,
        "番紅花用溫高湯泡開"
      ],
      [
        0,
        "高湯煮上、切洋蔥"
      ],
      [
        8,
        "炒洋蔥、烘米"
      ],
      [
        12,
        "嗆白酒，開始補高湯"
      ],
      [
        20,
        "番紅花下鍋"
      ],
      [
        35,
        "關火乳化，盛盤 ✅"
      ]
    ]
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
    "time": "約20分鐘",
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
        "切好所有配料"
      ],
      [
        3,
        "煸牛油、炒大醬"
      ],
      [
        6,
        "蔬菜下鍋"
      ],
      [
        8,
        "注入淘米水煮滾"
      ],
      [
        13,
        "下豆腐櫛瓜滾三分鐘"
      ],
      [
        20,
        "撒蔥椒起鍋 ✅"
      ]
    ]
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
    "time": "約25分鐘",
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
        "櫛瓜刨絲、撒鹽靜置"
      ],
      [
        8,
        "炒胡蘿蔔洋蔥、放涼"
      ],
      [
        13,
        "擠乾、拌麵糊"
      ],
      [
        17,
        "分四五塊慢火厚煎"
      ],
      [
        25,
        "兩面金黃 ✅"
      ]
    ]
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
    "time": "約60分鐘",
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
        "燙麵揉團"
      ],
      [
        10,
        "靜置 30 分鐘"
      ],
      [
        40,
        "做油酥、切蔥"
      ],
      [
        45,
        "擀捲盤起"
      ],
      [
        55,
        "蓋鍋悶煎"
      ],
      [
        60,
        "搓鬆上桌 ✅"
      ]
    ]
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
    "time": "約50分鐘",
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
        "切雞腿、下醃料"
      ],
      [
        20,
        "備其餘食材、調醬汁"
      ],
      [
        28,
        "乾煎雞皮逼油"
      ],
      [
        36,
        "爆香蔥蒜菇"
      ],
      [
        40,
        "電子鍋組合、按下"
      ],
      [
        50,
        "悶 10 分鐘後翻拌 ✅"
      ]
    ]
  }
];
