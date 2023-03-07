module.exports = {
    base: "/Cherry/",
    title: "午后斜阳 暖暖橘黄",
    description: "姜嘉林的网站",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
        ],
        lastUpdated: 'Last Updated',
        sidebar: [
                {
                  title: '月记',   // 必要的
                  path: '/month/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                  collapsable: true, // 可选的, 默认值是 true,
                  children: [
                    '/month/',
                    '/month/2019.12.md',
                    '/month/2020.01.md',
                    '/month/2020.04.md',
                    '/month/2020.05.md',
                    '/month/2020.06.md',
                    '/month/2020.07.md',
                    '/month/2020.08.md',
                    '/month/2020.09.md',
                    '/month/2020.10.md',
                    '/month/2020.11.md',
                    '/month/2021.02.md',
                    '/month/2021.03.md',
                    '/month/2021.04.md',
                    '/month/2021.06.md',
                    '/month/2021.12.md',
                    '/month/2022.03.md',
                    '/month/2022.06.md',
                    '/month/2022.07.md',
                    '/month/2023.03.md',
                  ]
                },
                {
                    title: '读书笔记',   // 必要的
                    path: '/reading/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                    collapsable: true, // 可选的, 默认值是 true,
                    children: [
                        '/reading/',
                        '/reading/生死疲劳.md'
                    ]
                  },
        ],
    }
}
