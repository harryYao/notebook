module.exports = {
    base: '/notebook/',
    dest: 'docs/dist', /* 打包文件基础路径, 在命令所在目录下 */
    title: '生活小记', // 标题
    description: '记录孩子的成长和生活中的点滴', // 标题下的描述
    themeConfig: { // 主题配置
        logo: '/imgs/logo.jpeg',
        nav: [ // 头部导航
        //   { text: 'GITHUB', link: 'https://github.com/harryYao' }
        ],
        sidebar: [ // 左侧导航
          {
            title: '捣蛋日记', // 标题
            collapsable: true, // 下级列表不可折叠
            children: [ // 下级列表
              'diary/2022-06',
              'diary/2022-07',
            ]
          }
        ],
      },
    
      head: [ // 指定网页head图标
        ['link', { rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico` }]
      ]
    }