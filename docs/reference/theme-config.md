---
title: 主题配置
---

# 主题配置

支持默认主题的所有主题配置，可以通过 [themeConfig](https://v2.vuepress.vuejs.org/zh/reference/config.html#themeconfig) 来设置这些配置。

## sideToc

是否全局启用侧边栏菜单，默认为 `true`

**类型** `boolean`

**示例**

```js
// .vuepress/config.js

export default {
  theme: '@zhengxs/vuepress-theme-library',
  themeConfig: {
    // 设置为 false 全局关闭
    // 但页面可以设置 Frontmattter#sideToc 启用
    sideToc: false
  }
}
```

**参考**

- [参考 > Frontmatter](./reference/frontmatter#sideToc)

## 启用评论功能

内置 2 种评论插件，推荐 [twikoo](https://twikoo.js.org/)。

### Gitalk

[Gitalk][gitalk] 是由京东的凹凸实验室开源的一个基于 Github Issue 和 Preact 开发的评论插件。

**示例**

```js
// .vuepress/config.js

export default {
  theme: '@zhengxs/vuepress-theme-library',
  themeConfig: {
    comment: {
      type: 'gitalk',
      // 仅支持 @zhengxs/vuepress-plugin-gitalk 封装的参数
      clientID: 'GitHub Application Client ID',
      clientSecret: 'GitHub Application Client Secret',
      repo: '写 github 仓库名称，如: vuepress-theme-library', // GitHub repository
      owner: '写 github 用户名，如: zhengxs2018', // GitHub repository 所有者，可以是个人或者组织。
      admin: ['写 github 用户名，如: zhengxs2018'] // 对这个 repository 有写权限的用户
    }
  }
}
```

**参考**

- [@zhengxs/vuepress-plugin-gitalk](./plugin/gitalk)
- [Gitalk 中文说明](https://github.com/gitalk/gitalk/blob/master/readme-cn.md)

### Twikoo

[Twikoo][twikoo] 一个简洁、安全、免费的静态网站评论系统，支持一键部署、手动部署、命令行部署。

**示例**

```js
// .vuepress/config.js

export default {
  theme: '@zhengxs/vuepress-theme-library',
  themeConfig: {
    // 暂不多评论插件共存
    comment: {
      type: 'twikoo',
      // 仅支持 @zhengxs/vuepress-plugin-twikoo 封装的参数
      envId: 'xxx', //云环境ID
      lang: 'zh-CN', // 评论区语言
      region: 'ap-guangzhou' // 部署区域
    }
  }
}
```

**参考**

- [@zhengxs/vuepress-plugin-twikoo](./plugin/twikoo)
- [Twikoo 通过 CDN 引入](https://twikoo.js.org/quick-start.html#%E9%80%9A%E8%BF%87-cdn-%E5%BC%95%E5%85%A5)

[gitalk]: https://gitalk.github.io/
[twikoo]: https://twikoo.js.org/
