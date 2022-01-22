# Twikoo

> 插件尚未发布，正在积极开发中

<a class="npm-badge" href="http://npmjs.com/package/@zhengxs/vuepress-plugin-twikoo" title="@zhengxs/vuepress-plugin-twikoo" target="_blank" rel="noopener noreferrer">
  <img src="https://badgen.net/npm/v/@zhengxs/vuepress-plugin-twikoo/latest?label=@zhengxs/vuepress-plugin-twikoo" alt="@zhengxs/vuepress-plugin-twikoo@latest" />
</a>

[Twikoo][twikoo] 一个简洁、安全、免费的静态网站评论系统，支持一键部署、手动部署、命令行部署。

`@zhengxs/vuepress-plugin-twikoo` 是对 twikoo 的 vuepress 功能集成插件。

该插件已经集成到主题中，但支持独立使用。

## 未来计划

- [ ] 支持 markdown 语法的方式使用，如  `[[twikoo]]`

## 安装

```sh:no-line-numbers
# With NPM
$ npm install @zhengxs/vuepress-plugin-twikoo --save-dev

# With Yarn
$ yarn add @zhengxs/vuepress-plugin-twikoo --dev

# With PNPM
$ pnpm add @zhengxs/vuepress-plugin-twikoo --dev
```

## 使用

如果是使用主题，请在主题中 [启用评论功能](../reference/theme-config.html#twikoo)。

### 初始化

暂只支持组件的方式使用

```js:no-line-numbers
// .vuepress/config.js

module.exports = {
  plugins: [
    ['@zhengxs/vuepress-plugin-twikoo', {
      envId: 'xxx', //云环境ID
      lang: 'zh-CN', // 评论区语言
      region: 'ap-guangzhou' // 部署区域
    }]
  ]
}
```

### 渲染

暂只支持组件的方式使用

```md:no-line-numbers
# 标题

<Twikoo />
```

## 配置

页面的路径默认为 `formatter.permalink || route.path`

**配置的优先级**

```md:no-line-numbers
formatter > props > 插件配置
```

Formatter 定义的优先级最高。

### Frontmatter

允许使用 Frontmatter 配置

```yaml:no-line-numbers
---
twikoo:
  envId: 云环境ID
  lang: 评论区语言
  region: 部署区域
  path: 文章路径
---
```

### 组件 Props

可以通过 Props 来进行自定义

```vue:no-line-numbers
<template>
  <Twikoo envId="xxxx" region="ap-guangzhou" lang="zh-CN" path="/" />
</template>
```

[twikoo]: https://twikoo.js.org/
