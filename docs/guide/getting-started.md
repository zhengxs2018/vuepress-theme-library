---
title: 快速上手
---

# 快速上手

> 尚未发布，正在积极开发中

<a class="npm-badge" href="http://npmjs.com/package/@zhengxs/vuepress-theme-library" title="@zhengxs/vuepress-theme-library" target="_blank" rel="noopener noreferrer">
  <img src="https://badgen.net/npm/v/@zhengxs/vuepress-theme-library/latest?label=@zhengxs/vuepress-theme-library" alt="@zhengxs/vuepress-theme-library@latest" />
</a>

VuePress 提供了主题功能，当前主题继承于默认主题，支持 [默认主题配置](https://v2.vuepress.vuejs.org/zh/reference/default-theme/config.html)。

## 安装依赖

在命令行中输入执行以下命令:

```sh:no-line-numbers
# With NPM
$ npm install @zhengxs/vuepress-theme-library --save-dev

# With Yarn
$ yarn add @zhengxs/vuepress-theme-library --dev

# With PNPM
$ pnpm add @zhengxs/vuepress-theme-library --dev
```

## 使用主题

在你的 vuepress 配置文件中，将 `theme` 的值改为 `@zhengxs/vuepress-theme-library`，详见 [theme](https://v2.vuepress.vuejs.org/zh/reference/config.html#theme)。

```js
// .vuepress/config.js

export default {
  theme: '@zhengxs/vuepress-theme-library'
}
```

接下来你可以配置首页的 [Frontmatter](../reference/frontmatter.html#home) 或者启用评论插件。
