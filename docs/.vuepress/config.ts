import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

import navbar from './configs/navbar'
import sidebar from './configs/sidebar'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/vuepress-theme-library/',
  lang: 'zh-CN',
  title: 'Vuepress 主题',
  description: '基于 Vuepress 2.x 的默认主题实现',
  head: [
    [
      'link',
      { rel: 'manifest', href: '/vuepress-theme-library/manifest.webmanifest' }
    ],
    ['meta', { name: 'theme-color', content: '#1e72ff' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    [
      'meta',
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    [
      'link',
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/vuepress-theme-library/apple-touch-icon.png'
      }
    ],
    [
      'link',
      {
        rel: 'mask-icon',
        href: '/vuepress-theme-library/safari-pinned-tab.svg',
        color: '#1e72ff'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/vuepress-theme-library/favicon-16x16.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/vuepress-theme-library/favicon-32x32.png'
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/png',
        href: '/vuepress-theme-library/favicon.png'
      }
    ]
  ],

  theme: '@zhengxs/vuepress-theme-library',
  themeConfig: {
    navbar: navbar,
    sidebar: sidebar,
    sidebarDepth: 0,
    comment: {
      type: 'twikoo',
      envId: 'https://twikoo-deploy.vercel.app'
    }
  },
  plugins: [
    ['@vuepress/search'],
    ['@vuepress/pwa'],
    ['@vuepress/pwa-popup'],
    [
      '@zhengxs/vuepress-plugin-gitalk',
      {
        clientID: '48d71377c34c67570adf',
        clientSecret: '819e67914e16ae4838ee3c96e8eeeb93dc5ab672',
        repo: 'vuepress-theme-library',
        owner: 'zhengxs2018',
        admin: ['zhengxs2018'],
        number: 1
      }
    ]
  ]
})
