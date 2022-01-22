const sidebar = [
  {
    text: '介绍',
    link: '/guide/'
  },
  {
    text: '快速上手',
    link: '/guide/getting-started'
  },
  {
    text: '插件',
    children: [
      {
        text: 'Twikoo',
        link: '/plugin/twikoo'
      },
      {
        text: 'Gitalk',
        link: '/plugin/gitalk'
      }
    ]
  }
]

export default {
  '/guide': sidebar,
  '/plugin': sidebar
}
