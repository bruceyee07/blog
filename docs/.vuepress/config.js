module.exports = {
    title: '个人主页',
    description: 'gavinyee的博客',
    head: [
        ['link', { rel: 'icon', href: '/img/logo.ico' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],
    themeConfig: {
        nav: [
            { text: '主页', link: '/' },
            {
                text: '博文',
                items: [
                    { text: '前端', link: '/web/' },
                    { text: '机器学习', link: '/ml/' },
                ]
            },
            { text: '关于', link: '/about/' },
            { text: 'Github', link: 'https://github.com/tiny09' },
        ],
        sidebar: {
            "/web/": [
                "",
                "web1"
            ],
            "/ml/": [
                "",
                "ml1"
            ],
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated'
    }
}