---
title: Frontmatter
sidebar: true
---

# Frontmatter

本主题继承于默认主题，支持默认主题的所有 [Frontmatter](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html) 配置。

## 所有页面

### sideToc

是否启用侧边栏目录

- 类型: `boolean`

**示例**

```yaml
---
sideToc: false # 关闭本页面的侧边栏目录
---
```

**参考**

- [配置 > sideToc](../guide/config#sideToc)

### comment

是否启用评论，默认为 `true`

**类型**: `boolean`

**示例**

```yaml
---
comment: false # 关闭本页面的评论功能
---
```

**参考**

- [启用评论功能](../guide/config#启用评论功能)

## Home

主题支持所有默认主题的 [首页配置](https://v2.vuepress.vuejs.org/zh/reference/default-theme/frontmatter.html#%E9%A6%96%E9%A1%B5)。

### sections

拓展的首页字段

**类型**

```ts
interface Section {
  title: string
  tagline?: string
  surface?: boolean // 显示浅白灰背景
}

// 功能特性
interface FeaturesSection extends Section {
  type: 'feature'
  items: Array<{
    title: string
    details: string
    link?: string
    disabled?: boolean
  }>
}

// 解决方案
interface SolutionsSection extends Section {
  type: 'solutions'
  items: Array<{
    title: string
    details: string
    image: string
    link?: string
    disabled?: boolean
  }>
}

// 用户案例
interface UserCasesSection extends Section {
  type: 'userCases'
  items: Array<{
    logo: string
    alt: string
  }>
}

// 目前仅支持这三种
type Sections = (FeaturesSection | SolutionsSection | UserCasesSection)[]
```

**示例**

```yaml
---
sections:
  - type: features
    title: 功能说明
    tagline: 功能亮点
    surface: true
    items:
      - title: 工程规范
        details: 从目录组织规范到代码风格，集成了大量项目实践的研发规范
      - title: 开箱即用
        details: 支持 TypeScript/PostCSS/... 等工程能力，具备良好的类型提示
      - title: 更多
        details: 尽情期待
        disabled: true
  - type: solutions
    title: 领域解决方案
    tagline: 简短描述下优势
    items:
      - title: 方案一
        details: 方案说明
        image: https://ice.work/img/solution_03.png
      - title: 方案二
        details: 方案说明
        image: https://ice.work/img/solution_03.png
  - type: userCases
    title: 谁在使用
    tagline: 简短描述下服务范围
    surface: true
    items:
      - logo: https://vuejs.org/images/logo.png
        alt: Vue.js - The Progressive JavaScript Framework
      - logo: https://vuejs.org/images/logo.png
        alt: Vue.js - The Progressive JavaScript Framework
---
```
