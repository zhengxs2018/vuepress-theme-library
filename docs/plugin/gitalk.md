---
comment: false
---

# Gitalk

> 尚未发布，正在积极开发中

<a class="npm-badge" href="http://npmjs.com/package/@zhengxs/vuepress-plugin-gitalk" title="@zhengxs/vuepress-plugin-gitalk" target="_blank" rel="noopener noreferrer">
  <img src="https://badgen.net/npm/v/@zhengxs/vuepress-plugin-gitalk/latest?label=@zhengxs/vuepress-plugin-gitalk" alt="@zhengxs/vuepress-plugin-gitalk@latest" />
</a>

[Gitalk][gitalk] 一个基于 Github Issue 和 Preact 开发的评论插件。

`@zhengxs/vuepress-plugin-gitalk` 是对 Gitalk 的 vuepress 功能集成插件。

该插件已经集成到主题中，但支持独立使用。

## 未来计划

- [ ] 支持 markdown 语法的方式使用，如 `[[gitalk]]`

## 安装

```sh:no-line-numbers
# With NPM
$ npm install @zhengxs/vuepress-plugin-gitalk --save-dev

# With Yarn
$ yarn add @zhengxs/vuepress-plugin-gitalk --dev

# With PNPM
$ pnpm add @zhengxs/vuepress-plugin-gitalk --dev
```

## 使用

如果是使用主题，请在主题中 [启用评论功能](../reference/theme-config.html#gitalk)。

### 初始化

首先，您需要选择一个公共 github 存储库（已存在或创建一个新的 github 存储库）用于存储评论，

然后需要创建 GitHub Application，如果没有 [点击这里申请](https://github.com/settings/applications/new)，Authorization callback URL 填写当前使用插件页面的域名。

```js:no-line-numbers
// .vuepress/config.js

module.exports = {
  plugins: [
    ['@zhengxs/vuepress-plugin-gitalk', {
      clientID: '3f2d8a4eeea9aed094c1', // GitHub Application Client ID
      clientSecret: '9fd36....8716055', // GitHub Application Client Secret
      repo: 'vuepress-theme-library', // GitHub repository
      owner: 'zhengxs2018', // GitHub repository 所有者，可以是个人或者组织。
      admin: ['zhengxs2018'] // 对这个 repository 有写权限的用户
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

支持 [Gitalk](https://github.com/gitalk/gitalk/blob/master/readme-cn.md#%E8%AE%BE%E7%BD%AE) 所有的配置项.

页面的唯一性标识默认为 `formatter.permalink || route.path`

**配置的优先级**

```md:no-line-numbers
formatter > props > 插件配置
```

Formatter 定义的优先级最高。

### Frontmatter

允许使用 Frontmatter 配置

```yaml:no-line-numbers
---
gitalk:
  id: formatter.permalink || route.path # 页面的唯一标识
  title: 标题
  labels: [Gitalk]
  number: -1 # 页面的 issue ID 标识
---
```

### 组件 Props

可以通过 Props 来进行自定义

```vue:no-line-numbers
<template>
  <Twikoo id="xxxx" title="标题" :number="-1" />
</template>
```

<Gitalk :number="1" />

[gitalk]: https://gitalk.github.io/
