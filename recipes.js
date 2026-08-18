// 食譜資料 —— 慢寶版。2026-08-15 起與蝸居米其林刻意分岔，不要同步回去
const RECIPES = [
  {
    "id": 1,
    "cuisine": "中式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r1.webp",
    "tags": [
      "雞肉",
      "下飯菜",
      "一鍋到底",
      "隔夜更好吃"
    ],
    "basePortions": 2,
    "time": "約45分鐘",
    "shoppingList": [
      [
        "雞翅",
        300,
        "g（也可用整隻雞切塊；本食譜採這個組合，因為我就愛）"
      ],
      [
        "棒棒腿",
        300,
        "g"
      ],
      [
        "胡蘿蔔",
        0.5,
        "根"
      ],
      [
        "洋蔥",
        0.5,
        "顆"
      ],
      [
        "甘栗仁",
        1,
        "包"
      ],
      [
        "米酒或燒酒",
        2,
        "湯匙"
      ],
      {
        "label": "靈魂黑金醬汁",
        "items": [
          [
            "醬油",
            4,
            "湯匙"
          ],
          [
            "蠔油",
            1,
            "湯匙"
          ],
          [
            "黑糖",
            1.5,
            "茶匙"
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
        "name": "雞翅",
        "amount": "300g",
        "group": "先洗"
      },
      {
        "name": "棒棒腿",
        "amount": "300g",
        "group": "先洗"
      },
      {
        "name": "靈魂黑金醬汁",
        "amount": "醬油 4 湯匙・蠔油 1 湯匙・黑糖 1.5 茶匙",
        "group": "調醬汁"
      },
      {
        "name": "胡蘿蔔",
        "amount": "半根",
        "group": "切塊"
      },
      {
        "name": "洋蔥",
        "amount": "半顆",
        "group": "切塊"
      }
    ]
  },
  {
    "id": 2,
    "cuisine": "韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r2.webp",
    "tags": [
      "牛肉",
      "湯",
      "一鍋到底",
      "生日",
      "想吃熱的"
    ],
    "basePortions": 2,
    "time": "約40分鐘",
    "shoppingList": [
      [
        "乾海帶",
        5,
        "g"
      ],
      [
        "牛腩",
        100,
        "g"
      ],
      [
        "大蒜",
        1.5,
        "瓣"
      ],
      [
        "高湯",
        750,
        "ml（推薦昆布魚乾或牛骨風味）"
      ],
      [
        "芝麻油",
        1,
        "湯匙"
      ],
      [
        "韓式湯醬油（可用日式薄口醬油）",
        1.5,
        "湯匙（醃牛腩 1.5 茶匙、湯底 1 湯匙，試味再補）"
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
        "name": "乾海帶",
        "amount": "5g",
        "group": "先泡"
      },
      {
        "name": "牛腩",
        "amount": "100g",
        "group": "先醃"
      },
      {
        "name": "大蒜",
        "amount": "1.5 瓣份量",
        "group": "切末"
      }
    ]
  },
  {
    "id": 3,
    "cuisine": "義式",
    "stars": 3,
    "starsLabel": "深夜炫技",
    "image": "assets/dish/r3.webp",
    "tags": [
      "麵",
      "蔬菜",
      "下班後",
      "30分鐘上桌"
    ],
    "basePortions": 2,
    "time": "約25分鐘",
    "shoppingList": [
      [
        "義大利直麵",
        180,
        "g（推薦 Spaghetti No.5，最剛好）"
      ],
      [
        "大蒜",
        8,
        "瓣"
      ],
      [
        "義式乾辣椒",
        2,
        "根（愛吃辣再加，不吃辣可省略）"
      ],
      [
        "橄欖油",
        3,
        "湯匙"
      ],
      [
        "松露橄欖油",
        null,
        "1–1.5湯匙（熄火後加，有就封神，沒有可省略）"
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
        "name": "大蒜",
        "amount": "8 瓣",
        "group": "切片"
      },
      {
        "name": "義式乾辣椒",
        "amount": "2 根",
        "group": "切末"
      }
    ]
  },
  {
    "id": 4,
    "cuisine": "甜點",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r4.webp",
    "tags": [
      "甜點",
      "烘焙",
      "下午茶",
      "剩菜救援"
    ],
    "basePortions": 4,
    "time": "約35分鐘",
    "shoppingList": [
      [
        "熟透香蕉",
        2,
        "根"
      ],
      [
        "低筋麵粉",
        160,
        "g"
      ],
      {
        "label": "糖",
        "note": "黑糖提焦糖香，白糖給甜度",
        "items": [
          [
            "黑糖",
            25,
            "g"
          ],
          [
            "白糖",
            75,
            "g"
          ]
        ]
      },
      [
        "奶油",
        75,
        "g"
      ],
      [
        "喝的優格",
        40,
        "ml"
      ],
      [
        "雞蛋",
        1,
        "顆"
      ],
      [
        "香草精",
        0.5,
        "茶匙"
      ],
      [
        "小蘇打粉",
        0.75,
        "茶匙"
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
        "name": "熟透香蕉",
        "amount": "2 根",
        "group": "開火前放旁邊"
      },
      {
        "name": "奶油",
        "amount": "75g",
        "group": "開火前放旁邊"
      }
    ]
  },
  {
    "id": 5,
    "cuisine": "韓式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r5.webp",
    "tags": [
      "豬肉",
      "鍋物",
      "一鍋到底",
      "韓劇感",
      "想吃熱的"
    ],
    "basePortions": 2,
    "time": "約40分鐘",
    "shoppingList": [
      [
        "豬五花或梅花肉",
        250,
        "g"
      ],
      [
        "韓國櫛瓜",
        0.5,
        "根"
      ],
      [
        "馬鈴薯",
        1,
        "顆"
      ],
      [
        "板豆腐",
        0.5,
        "盒"
      ],
      [
        "洋蔥",
        0.5,
        "顆"
      ],
      [
        "大蔥",
        0.5,
        "根"
      ],
      [
        "青陽辣椒",
        1,
        "根"
      ],
      [
        "韓式醃蝦醬（可用少量魚露替代）",
        0.5,
        "湯匙"
      ],
      [
        "醋",
        0.5,
        "湯匙（關火前）"
      ],
      {
        "label": "辣醬鍋醬汁",
        "items": [
          [
            "韓式辣椒醬",
            2,
            "湯匙"
          ],
          [
            "韓式辣椒粉",
            1,
            "湯匙"
          ],
          [
            "蒜末",
            0.5,
            "湯匙"
          ],
          [
            "醬油",
            1,
            "湯匙"
          ],
          [
            "白糖",
            0.25,
            "湯匙"
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
        "name": "辣醬鍋醬汁",
        "amount": "辣椒醬 2 湯匙・辣椒粉 1 湯匙・蒜末・醬油・白糖",
        "group": "調醬汁"
      },
      {
        "name": "豬五花或梅花肉",
        "amount": "250g",
        "group": "切塊"
      },
      {
        "name": "馬鈴薯",
        "amount": "1 顆",
        "group": "切塊"
      },
      {
        "name": "韓國櫛瓜",
        "amount": "半根",
        "group": "切塊"
      },
      {
        "name": "洋蔥",
        "amount": "半顆",
        "group": "切塊"
      },
      {
        "name": "板豆腐",
        "amount": "半盒",
        "group": "切塊"
      },
      {
        "name": "大蔥",
        "amount": "半根",
        "group": "切段"
      },
      {
        "name": "青陽辣椒",
        "amount": "1 根",
        "group": "切片"
      }
    ]
  },
  {
    "id": 6,
    "cuisine": "韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r6.webp",
    "tags": [
      "蔬菜",
      "小菜",
      "30分鐘上桌",
      "錢包友善"
    ],
    "basePortions": 2,
    "time": "約20分鐘",
    "shoppingList": [
      [
        "櫛瓜",
        1,
        "根"
      ],
      [
        "雞蛋",
        2,
        "顆"
      ],
      [
        "煎餅粉或中筋麵粉",
        1.5,
        "湯匙"
      ],
      [
        "芝麻油",
        null,
        "幾滴（蛋汁用）"
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
        "name": "櫛瓜",
        "amount": "1 根",
        "group": "先醃"
      },
      {
        "name": "煎餅粉或中筋麵粉",
        "amount": "1.5 湯匙",
        "group": "開火前放旁邊"
      },
      {
        "name": "雞蛋",
        "amount": "2 顆",
        "group": "開火前放旁邊"
      }
    ]
  },
  {
    "id": 7,
    "cuisine": "義式",
    "stars": 1,
    "starsLabel": "新手村",
    "time": "約 120 分鐘",
    "basePortions": 10,
    "image": "assets/dish/r7.webp",
    "tags": [
      "豬肉",
      "麵",
      "週末慢慢煮",
      "隔夜更好吃"
    ],
    "shoppingList": [
      [
        "豬絞肉",
        400,
        "g"
      ],
      [
        "牛絞肉",
        200,
        "g"
      ],
      [
        "洋蔥",
        1,
        "顆"
      ],
      [
        "胡蘿蔔",
        1,
        "根"
      ],
      [
        "西洋芹",
        2,
        "支"
      ],
      [
        "蘑菇",
        6,
        "顆"
      ],
      [
        "紅酒",
        180,
        "ml"
      ],
      [
        "番茄義大利麵醬",
        1200,
        "g（Barilla 派在此小聲強推）"
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
        "name": "洋蔥",
        "amount": "1 顆",
        "group": "切末"
      },
      {
        "name": "胡蘿蔔",
        "amount": "1 根",
        "group": "切末"
      },
      {
        "name": "西洋芹",
        "amount": "2 支",
        "group": "切末"
      },
      {
        "name": "蘑菇",
        "amount": "6 顆",
        "group": "切末"
      },
      {
        "name": "豬絞肉",
        "amount": "400g",
        "group": "開火前放旁邊"
      },
      {
        "name": "牛絞肉",
        "amount": "200g",
        "group": "開火前放旁邊"
      }
    ]
  },
  {
    "id": 8,
    "cuisine": "韓式",
    "stars": 2,
    "starsLabel": "家常實力",
    "time": "約45分鐘",
    "basePortions": 2,
    "image": "assets/dish/r8.webp",
    "tags": [
      "豬肉",
      "鍋物",
      "一鍋到底",
      "韓劇感",
      "想吃熱的"
    ],
    "shoppingList": [
      [
        "熟成泡菜",
        400,
        "g"
      ],
      [
        "豬五花肉",
        200,
        "g"
      ],
      [
        "板豆腐",
        0.5,
        "盒"
      ],
      [
        "洋蔥",
        0.25,
        "顆"
      ],
      [
        "大蔥",
        1,
        "根"
      ],
      [
        "蒜末",
        1,
        "湯匙"
      ],
      [
        "韓式辣椒粉",
        1,
        "湯匙"
      ],
      [
        "韓式醃蝦醬（可用少量魚露替代）",
        1,
        "茶匙"
      ],
      [
        "昆布魚乾高湯",
        500,
        "ml"
      ],
      [
        "芝麻油",
        1,
        "茶匙"
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
        "name": "熟成泡菜",
        "amount": "400g",
        "group": "開火前放旁邊"
      },
      {
        "name": "豬五花肉",
        "amount": "200g",
        "group": "切塊"
      },
      {
        "name": "洋蔥",
        "amount": "1/4 顆",
        "group": "切絲"
      },
      {
        "name": "大蔥",
        "amount": "1 根",
        "group": "切段"
      },
      {
        "name": "板豆腐",
        "amount": "半盒",
        "group": "切片"
      }
    ]
  },
  {
    "id": 9,
    "cuisine": "中式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r9.webp",
    "tags": [
      "雞肉",
      "麵",
      "下班後",
      "30分鐘上桌"
    ],
    "basePortions": 2,
    "time": "約 30 分鐘",
    "shoppingList": [
      [
        "去骨雞腿肉",
        200,
        "g"
      ],
      [
        "生麵條",
        240,
        "g"
      ],
      [
        "大白菜",
        4,
        "片葉子"
      ],
      [
        "洋蔥",
        0.5,
        "顆"
      ],
      [
        "秀珍菇",
        10,
        "朵"
      ],
      [
        "紅甜椒",
        0.25,
        "顆"
      ],
      [
        "黃甜椒",
        0.25,
        "顆"
      ],
      [
        "大蔥",
        0.5,
        "根"
      ],
      {
        "label": "雞腿醃料",
        "items": [
          [
            "醬油",
            0.5,
            "湯匙"
          ],
          [
            "米酒或燒酒",
            0.5,
            "湯匙"
          ],
          [
            "太白粉",
            0.5,
            "茶匙"
          ]
        ]
      },
      {
        "label": "醬香炒麵醬汁",
        "items": [
          [
            "醬油",
            1,
            "湯匙"
          ],
          [
            "白糖",
            1,
            "茶匙"
          ],
          [
            "鹽",
            null,
            "一小撮"
          ],
          [
            "白胡椒粉",
            null,
            "一小撮"
          ],
          [
            "水",
            2,
            "湯匙"
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
        "name": "雞腿醃料",
        "amount": "醬油・米酒或燒酒・太白粉",
        "group": "調醬汁"
      },
      {
        "name": "去骨雞腿肉",
        "amount": "200g",
        "group": "先醃"
      },
      {
        "name": "大白菜",
        "amount": "4 片",
        "group": "切絲"
      },
      {
        "name": "洋蔥",
        "amount": "半顆",
        "group": "切絲"
      },
      {
        "name": "紅甜椒",
        "amount": "1/4 顆",
        "group": "切絲"
      },
      {
        "name": "黃甜椒",
        "amount": "1/4 顆",
        "group": "切絲"
      },
      {
        "name": "大蔥",
        "amount": "半根",
        "group": "切片"
      },
      {
        "name": "秀珍菇",
        "amount": "10 朵",
        "group": "開火前放旁邊"
      },
      {
        "name": "醬香炒麵醬汁",
        "amount": "醬油 1 湯匙・白糖 1 茶匙・白胡椒粉・水 2 湯匙",
        "group": "調醬汁"
      },
      {
        "name": "生麵條",
        "amount": "240g",
        "group": "開火前放旁邊"
      }
    ]
  },
  {
    "id": 10,
    "cuisine": "韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r10.webp",
    "tags": [
      "蔬菜",
      "小菜",
      "醬料",
      "隔夜更好吃"
    ],
    "basePortions": 2,
    "time": "約 10 分鐘（冷藏 2 小時以上）",
    "shoppingList": [
      [
        "洋蔥",
        0.5,
        "顆"
      ],
      [
        "青辣椒",
        1,
        "根"
      ],
      {
        "label": "醬醃醬汁",
        "note": "醬油、糖、酒先煮開；關火後才加白醋",
        "items": [
          [
            "醬油",
            5,
            "湯匙"
          ],
          [
            "白糖",
            null,
            "1 湯匙 + 2 茶匙"
          ],
          [
            "黑糖",
            1,
            "湯匙"
          ],
          [
            "米酒或燒酒",
            1,
            "湯匙（可省略；省略時水多補 1 湯匙）"
          ],
          [
            "白醋",
            null,
            "3 湯匙 + 1.5 茶匙"
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
        "name": "洋蔥",
        "amount": "半顆",
        "group": "切塊"
      },
      {
        "name": "青辣椒",
        "amount": "1 根",
        "group": "切段"
      }
    ]
  },
  {
    "id": 11,
    "cuisine": "韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r11.webp",
    "tags": [
      "牛肉",
      "鍋物",
      "下飯菜",
      "想吃熱的"
    ],
    "basePortions": 2,
    "time": "約 75 分鐘",
    "timeNote": "牛肉先睡 1 小時，開火 15 分鐘就能上桌。",
    "shoppingList": [
      [
        "牛肉片",
        300,
        "g"
      ],
      [
        "洋蔥",
        0.5,
        "顆"
      ],
      [
        "香菇",
        1,
        "朵"
      ],
      [
        "杏鮑菇",
        1,
        "根"
      ],
      [
        "秀珍菇",
        null,
        "數朵"
      ],
      [
        "胡蘿蔔",
        0.25,
        "根"
      ],
      [
        "大蔥",
        0.5,
        "根"
      ],
      [
        "韓式冬粉",
        60,
        "g"
      ],
      {
        "label": "黃金比例梨汁醃醬",
        "items": [
          [
            "水梨汁",
            150,
            "ml"
          ],
          [
            "白糖",
            null,
            "1/2 湯匙（只有使用無加糖 100% 天然梨汁時才加；韓國含糖水梨汁不用）"
          ],
          [
            "醬油",
            5,
            "湯匙"
          ],
          [
            "米酒或燒酒",
            1,
            "湯匙"
          ],
          [
            "蒜末",
            1,
            "湯匙"
          ],
          [
            "芝麻油",
            1,
            "湯匙"
          ],
          [
            "黑胡椒粉",
            null,
            "少許"
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
        "name": "牛肉片",
        "amount": "300g",
        "group": "先醃"
      },
      {
        "name": "黃金比例梨汁醃醬",
        "amount": "梨汁 150ml・醬油 5 湯匙・清酒 1 湯匙・蒜末・芝麻油",
        "group": "調醬汁"
      },
      {
        "name": "韓式冬粉",
        "amount": "60g",
        "group": "先泡"
      },
      {
        "name": "洋蔥",
        "amount": "半顆",
        "group": "切絲"
      },
      {
        "name": "胡蘿蔔",
        "amount": "1/4 根",
        "group": "切絲"
      },
      {
        "name": "香菇",
        "amount": "1 朵",
        "group": "切片"
      },
      {
        "name": "杏鮑菇",
        "amount": "1 朵",
        "group": "切片"
      },
      {
        "name": "秀珍菇",
        "amount": "數朵",
        "group": "開火前放旁邊"
      },
      {
        "name": "大蔥",
        "amount": "半根",
        "group": "切段"
      }
    ]
  },
  {
    "id": 12,
    "cuisine": "韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r12.webp",
    "tags": [
      "蔬菜",
      "韓劇感",
      "小酌良伴",
      "錢包友善"
    ],
    "basePortions": 2,
    "time": "約 30 分鐘",
    "shoppingList": [
      [
        "馬鈴薯",
        3,
        "顆"
      ],
      [
        "青辣椒",
        1,
        "根（不放也可以）"
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
        "name": "馬鈴薯",
        "amount": "3 顆",
        "group": "切絲"
      },
      {
        "name": "青辣椒",
        "amount": "1 根",
        "group": "切片"
      }
    ]
  },
  {
    "id": 13,
    "cuisine": "韓式",
    "stars": 1,
    "starsLabel": "新手村",
    "image": "assets/dish/r13.webp",
    "tags": [
      "麵",
      "30分鐘上桌",
      "下班後"
    ],
    "basePortions": 2,
    "time": "約15分鐘",
    "shoppingList": [
      [
        "蕎麥麵",
        200,
        "g"
      ],
      {
        "label": "紫蘇油醬汁",
        "items": [
          [
            "紫蘇油",
            3,
            "湯匙（選香氣新鮮的，這碗差很多）"
          ],
          [
            "醬油",
            2,
            "湯匙（淡醬油基準；換韓式濃醬油先減量）"
          ],
          [
            "白芝麻",
            1,
            "湯匙"
          ],
          [
            "芝麻油",
            0.5,
            "茶匙"
          ],
          [
            "糖",
            0.5,
            "茶匙"
          ],
          [
            "白醋或檸檬汁",
            0.5,
            "茶匙"
          ],
          [
            "黑胡椒粉",
            null,
            "少許"
          ]
        ]
      },
      [
        "海苔",
        null,
        "大把（別省）"
      ],
      [
        "青蔥",
        1,
        "根"
      ],
      [
        "蛋黃",
        1,
        "顆（依口味添加）"
      ],
      [
        "小黃瓜",
        0.25,
        "根（依口味添加）"
      ]
    ],
    "prepNotes": [
      {
        "name": "紫蘇油醬汁",
        "amount": "紫蘇油 3 湯匙・醬油 2 湯匙・白芝麻・芝麻油・糖・醋",
        "group": "調醬汁"
      },
      {
        "name": "海苔",
        "amount": "大把",
        "group": "切絲"
      },
      {
        "name": "青蔥",
        "amount": "1 根",
        "group": "切末"
      },
      {
        "name": "小黃瓜",
        "amount": "1/4 根",
        "group": "切絲"
      },
      {
        "name": "蛋黃",
        "amount": "1 顆",
        "group": "開火前放旁邊"
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
    "cuisine": "義式",
    "stars": 3,
    "starsLabel": "深夜炫技",
    "image": "assets/dish/r14.webp",
    "tags": [
      "麵",
      "海鮮",
      "蔬菜",
      "30分鐘上桌"
    ],
    "basePortions": 2,
    "time": "約30分鐘",
    "shoppingList": [
      [
        "義大利直麵",
        180,
        "g（Spaghetti 或 Linguine）"
      ],
      [
        "蝦子",
        8,
        "隻（帶頭帶殼 16/20 大蝦；偷懶買蝦仁也行，少一道蝦頭油）"
      ],
      [
        "蘆筍",
        1,
        "把"
      ],
      [
        "培根",
        1,
        "片（提味用，不是主角）"
      ],
      [
        "大蒜",
        4,
        "瓣"
      ],
      [
        "橄欖油",
        3,
        "湯匙"
      ],
      [
        "白酒",
        3,
        "湯匙（沒有白酒時，可用清酒或燒酒代替）"
      ],
      [
        "檸檬",
        0.5,
        "顆（皮屑和果汁都要）"
      ],
      [
        "松露鹽",
        null,
        "少許（起鍋前撒）"
      ],
      [
        "帕瑪森起司",
        null,
        "適量（可省）"
      ]
    ],
    "prepNotes": [
      {
        "name": "蝦子",
        "amount": "8 隻",
        "group": "先醃"
      },
      {
        "name": "蘆筍",
        "amount": "1 把",
        "group": "切段"
      },
      {
        "name": "培根",
        "amount": "1 片",
        "group": "切塊"
      },
      {
        "name": "大蒜",
        "amount": "4 瓣",
        "group": "切片"
      },
      {
        "name": "檸檬",
        "amount": "1/2 顆",
        "group": "開火前放旁邊"
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
    "cuisine": "義式",
    "stars": 3,
    "starsLabel": "深夜炫技",
    "image": "assets/dish/r15.webp",
    "tags": [
      "蔬菜",
      "週末慢慢煮",
      "想吃熱的"
    ],
    "basePortions": 2,
    "time": "約40分鐘",
    "shoppingList": [
      [
        "燉飯米",
        160,
        "g（Carnaroli）"
      ],
      [
        "蘆筍",
        12,
        "根（約 250–300g；嫩頭、中段、硬梗分開用）"
      ],
      [
        "菇類",
        120,
        "g（香菇、杏鮑菇、蘑菇都可以，混著用更好）"
      ],
      [
        "蘑菇",
        1,
        "顆（擺盤用）"
      ],
      [
        "牛骨高湯",
        750,
        "ml"
      ],
      [
        "奶油",
        50,
        "g"
      ],
      [
        "洋蔥",
        0.25,
        "顆"
      ],
      [
        "白酒",
        50,
        "ml（沒有白酒時，可用清酒或燒酒代替）"
      ],
      [
        "橄欖油",
        2,
        "湯匙"
      ],
      [
        "帕瑪森起司",
        50,
        "g"
      ],
      [
        "鹽",
        null,
        "少許"
      ],
      [
        "黑胡椒粉",
        null,
        "少許"
      ],
      [
        "松露橄欖油",
        null,
        "少許（可省）"
      ]
    ],
    "prepNotes": [
      {
        "name": "蘆筍",
        "amount": "12 根",
        "group": "切段"
      },
      {
        "name": "菇類",
        "amount": "120g",
        "group": "切末"
      },
      {
        "name": "蘑菇",
        "amount": "1 顆",
        "group": "切片"
      },
      {
        "name": "洋蔥",
        "amount": "1/4 顆",
        "group": "切末"
      },
      {
        "name": "帕瑪森起司",
        "amount": "50g",
        "group": "開火前放旁邊"
      },
      {
        "name": "奶油",
        "amount": "50g",
        "group": "開火前放旁邊"
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
    "cuisine": "義式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r16.webp",
    "tags": [
      "麵",
      "豬肉"
    ],
    "basePortions": 2,
    "time": "約35分鐘",
    "shoppingList": [
      [
        "Guanciale 義式醃豬頰肉",
        100,
        "g"
      ],
      [
        "義大利直麵",
        160,
        "g（Bucatini 或 Spaghetti）"
      ],
      [
        "San Marzano DOP 去皮整番茄",
        400,
        "g（整番茄，認明 DOP 標示）"
      ],
      [
        "Pecorino Romano",
        null,
        "適量"
      ],
      [
        "義式乾辣椒",
        null,
        "少許（乾辣椒或辣椒片）"
      ],
      [
        "黑胡椒粉",
        null,
        "少許（現磨）"
      ],
      [
        "鹽",
        null,
        "少許（煮麵水用）"
      ]
    ],
    "prepNotes": [
      {
        "name": "Guanciale 義式醃豬頰肉",
        "amount": "100g",
        "group": "切絲"
      },
      {
        "name": "San Marzano DOP 去皮整番茄",
        "amount": "400g",
        "group": "開火前放旁邊"
      },
      {
        "name": "Pecorino Romano",
        "amount": "適量",
        "group": "開火前放旁邊"
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
    "cuisine": "義式",
    "stars": 3,
    "starsLabel": "深夜炫技",
    "image": "assets/dish/r17.webp",
    "tags": [
      "週末慢慢煮",
      "想吃熱的"
    ],
    "basePortions": 2,
    "time": "約35分鐘",
    "shoppingList": [
      [
        "燉飯米",
        160,
        "g（Carnaroli）"
      ],
      [
        "番紅花",
        0.1,
        "g"
      ],
      [
        "高湯",
        700,
        "ml（牛骨或雞高湯）"
      ],
      [
        "奶油",
        40,
        "g"
      ],
      [
        "洋蔥",
        0.25,
        "顆"
      ],
      [
        "白酒",
        50,
        "ml（沒有白酒時，可用清酒或燒酒代替）"
      ],
      [
        "帕馬森起司粉",
        30,
        "g"
      ],
      [
        "鹽",
        null,
        "少許"
      ],
      [
        "黑胡椒粉",
        null,
        "少許"
      ]
    ],
    "prepNotes": [
      {
        "name": "番紅花",
        "amount": "0.1 g",
        "group": "先泡"
      },
      {
        "name": "洋蔥",
        "amount": "1/4 顆",
        "group": "切末"
      },
      {
        "name": "奶油",
        "amount": "40g",
        "group": "開火前放旁邊"
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
    "cuisine": "韓式",
    "stars": 2,
    "starsLabel": "家常實力",
    "image": "assets/dish/r18.webp",
    "tags": [
      "牛肉",
      "鍋物",
      "一鍋到底",
      "想吃熱的"
    ],
    "basePortions": 2,
    "time": "約20分鐘",
    "shoppingList": [
      [
        "牛胸肉",
        150,
        "g（차돌박이）"
      ],
      [
        "淘米水",
        400,
        "ml（洗米第二次的水留下來）"
      ],
      [
        "韓式大醬",
        1.5,
        "湯匙"
      ],
      [
        "韓式辣椒醬",
        0.5,
        "湯匙"
      ],
      [
        "蒜末",
        1,
        "湯匙"
      ],
      [
        "韓式辣椒粉",
        1,
        "茶匙"
      ],
      [
        "板豆腐",
        0.5,
        "盒（約 150g）"
      ],
      [
        "洋蔥",
        0.5,
        "顆"
      ],
      [
        "韓國櫛瓜",
        0.33,
        "根"
      ],
      [
        "香菇",
        2,
        "朵"
      ],
      [
        "青辣椒",
        1,
        "根"
      ],
      [
        "大蔥",
        0.5,
        "根"
      ]
    ],
    "prepNotes": [
      {
        "name": "淘米水",
        "amount": "400 ml",
        "group": "開火前放旁邊"
      },
      {
        "name": "板豆腐",
        "amount": "1/2 盒",
        "group": "切塊"
      },
      {
        "name": "洋蔥",
        "amount": "1/2 顆",
        "group": "切塊"
      },
      {
        "name": "韓國櫛瓜",
        "amount": "1/3 根",
        "group": "切片"
      },
      {
        "name": "香菇",
        "amount": "2 朵",
        "group": "切片"
      },
      {
        "name": "青辣椒",
        "amount": "1 根",
        "group": "切片"
      },
      {
        "name": "大蔥",
        "amount": "1/2 根",
        "group": "切段"
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
  }
];
