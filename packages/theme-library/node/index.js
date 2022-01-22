const { path } = require('@vuepress/utils')
const taskLists = require('markdown-it-task-lists')

/**
 * @param {TwikooPluginOptions} options
 * @returns {import('@vuepress/core').PluginObject}
 */
const libraryTheme = options => {
  /**
   * @type {import('@vuepress/core').Theme}
   */
  const themeConfig = {
    name: 'vuepress-theme-baxia',
    extends: '@vuepress/theme-default',
    clientAppEnhanceFiles: path.resolve(
      __dirname,
      '../client/clientAppEnhance.js'
    ),
    layouts: {
      Layout: path.resolve(__dirname, '../client/layouts/Layout.vue')
    },
    extendsMarkdown(md) {
      md.use(taskLists)
    },
    define: {
      __ENABLE_TWIKOO_PLUGIN__: false,
      __ENABLE_GITALK_PLUGIN__: false,
      __ENABLE_SIDE_TOC__: options.sideToc !== false
    },
    plugins: [['@vuepress/toc']]
  }

  const { type, ...commentOptions } = options.comment || {}

  switch (type) {
    case 'twikoo':
      themeConfig.define.__ENABLE_TWIKOO_PLUGIN__ = true
      themeConfig.plugins.push([
        '@zhengxs/vuepress-plugin-twikoo',
        commentOptions
      ])
      break
    case 'gitalk':
      themeConfig.define.__ENABLE_GITALK_PLUGIN__ = true
      themeConfig.plugins.push([
        '@zhengxs/vuepress-plugin-gitalk',
        commentOptions
      ])
      break
  }

  return themeConfig
}

module.exports = libraryTheme
