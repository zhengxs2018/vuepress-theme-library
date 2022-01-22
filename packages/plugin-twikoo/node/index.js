// @ts-check

const { logger, path } = require('@vuepress/utils')

/**
 * @typedef TwikooPluginOptions
 *
 * @property {string} envId - 环境ID
 * @property {string} [lang] - 语言
 * @property {string} [region=ap-guangzhou] - 环境地域
 */

/**
 * @param {TwikooPluginOptions} options
 * @param {import('@vuepress/core').App} app
 * @returns {import('@vuepress/core').PluginObject}
 */
const twikooPlugin = (options, app) => {
  if (options.envId == null) {
    logger.warn(
      '[@zhengxs/vuepress-plugin-twikoo] envId 参数必须, 详见 https://twikoo.js.org/quick-start.html#%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2'
    )
  }

  return {
    name: '@zhengxs/vuepress-plugin-twikoo',
    define: {
      __TWIKOO_ENV_ID__: options.envId || '',
      __TWIKOO_REGION__: options.region || 'ap-shanghai',
      __TWIKOO_LANG__: options.lang || 'zh-CN'
    },
    clientAppEnhanceFiles: path.join(__dirname, '../client/clientAppEnhance.js')
  }
}

module.exports = twikooPlugin
