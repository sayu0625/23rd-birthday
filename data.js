const APP = {

    // ===== 基本情報 =====

    title: "23birthday",

    name: "Shumma",

    tripDate: "2026.7.29 - 7.30",

    startDate: "2026-07-29",


    // ===== 持ち物 =====

    packing: [

        "財布",
        "スマホ",
        "充電器",
        "モバイルバッテリー",
        "水着",
        "ラッシュガード",
        "タオル",
        "サンダル",
        "帽子",
        "日焼け止め",
        "プレゼント❤️"

    ],


    // ===== スケジュール =====

    schedule: [

        {

            day: "DAY1",

            items: [

                {
                    time: "11:00",
                    title: "Secret Lunch",
                    secret: true,
                    stage: 0
                },

                {
                    title: "🛒 買い出し"
                },

                {
                    title: "Secret",
                    secret: true,
                    stage: 1
                },

                {
                    title: "🎂 ケーキ屋"
                },

                {
                    time: "15:00",
                    title: "🏨 宿到着"
                },

                {
                    time: "16:00",
                    title: "Secret",
                    secret: true,
                    stage: 2
                },

                {
                    title: "🛍️ うらりマルシェ"
                },

                {
                    title: "🌊 城ヶ島"
                },

                {
                    title: "🍳 夜ご飯"
                }

            ]

        },

        {

            day: "DAY2",

            items: [

                {
                    time: "11:30",
                    title: "Secret",
                    secret: true,
                    stage: 3
                },

                {
                    time: "13:00",
                    title: "Secret",
                    secret: true,
                    stage: 4
                },

                {
                    title: "♨ 温泉"
                },

                {
                    title: "🍳 夜ご飯"
                }

            ]

        }

    ],


    // ===== パスワード付きスポット =====

    stages: [

        {

            password: "tsunami",

            title: "🍔 TSUNAMI",

            description: "横須賀バーガーで旅のスタート！",

            image: "images/tsunami.jpg",

            map: ""

        },

        {

            password: "meat",

            title: "🥩 ミートステーション",

            description: "お肉を買って夜ご飯の準備！",

            image: "images/meat.jpg",

            map: ""

        },

        {

            password: "fish",

            title: "🚤 にじいろさかな号",

            description: "三浦の海を楽しもう！",

            image: "images/boat.jpg",

            map: ""

        },

        {

            password: "kurobatei",

            title: "🍣 くろば亭",

            description: "新鮮なマグロランチ！",

            image: "images/kurobatei.jpg",

            map: ""

        },

        {

            password: "sup",

            title: "🏄 SUP",

            description: "海の上をゆったりお散歩！",

            image: "images/sup.jpg",

            map: ""

        }

    ],


    // ===== エンディング =====

    ending: `
Happy Birthday Shumma ❤️

最高の2日間になりますように。

これからもたくさん思い出を作ろう！
`

};
