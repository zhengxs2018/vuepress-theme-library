// @ts-check

const { logger, path } = require('@vuepress/utils')

/**
 * @typedef GitalkPluginOptions
 * @property {string} clientID - GitHub Application Client ID
 * @property {string} clientSecret - GitHub Application Client Secret
 * @property {string} repo - GitHub repo
 * @property {string} owner - GitHub repo owner
 * @property {string} admin - GitHub repo owner and collaborators, only these guys can initialize github issues
 * @property {string} [language] - 设置语言
 * @property {string} [number] - 设置语言
 */

/**
 * @param {GitalkPluginOptions} options
 * @param {import('@vuepress/core').App} app
 * @returns {import('@vuepress/core').PluginObject}
 */
const gitalkPlugin = (options, app) => {
  // 构建时忽略 gitalk 模块
  if (app.options.bundler.endsWith('vite')) {
    // eslint-disable-next-line import/no-extraneous-dependencies
    app.options.bundlerConfig.viteOptions = require('vite').mergeConfig(app.options.bundlerConfig.viteOptions, {
      optimizeDeps: {
        include: ['gitalk']
      }
    })
  }

  if (!(options.clientID && options.clientSecret)) {
    logger.warn(
      '[@zhengxs/vuepress-plugin-gitalk] Parameters ClientID, clientSecret, repo, owner and admin. are required. See https://github.com/gitalk/gitalk#usage'
    )
  }

  return {
    name: '@zhengxs/vuepress-plugin-gitalk',
    define: {
      __GITALK_CLIENT_ID__: options.clientID || '',
      __GITALK_CLIENT_SECRET__: options.clientSecret || '',
      __GITALK_REPO__: options.repo || '',
      __GITALK_OWNER__: options.owner || '',
      __GITALK_LANGUAGE__: options.language || 'zh-CN',
      __GITALK_ADMIN__: options.admin || [],
      __GITALK_NUMBER__: options.number || -1
    },
    clientAppEnhanceFiles: path.join(__dirname, '../client/clientAppEnhance.js')
  }
}

module.exports = gitalkPlugin
