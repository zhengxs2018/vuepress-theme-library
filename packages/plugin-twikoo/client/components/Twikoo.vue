<template>
  <div class="twikoo-container">
    <h2>评论</h2>
    <div id="twikoo-container"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

import { useRoute } from 'vue-router'
import { usePageFrontmatter } from '@vuepress/client'

// TODO 全部用 ts 重新后移走
declare var __TWIKOO_ENV_ID__: string
declare var __TWIKOO_REGION__: string
declare var __TWIKOO_LANG__: string

type TwikooOptions = {
  envId?: string
  lang?: string
  region?: string
  path?: string
}

const props = defineProps({
  envId: String,
  region: String,
  lang: String,
  path: String
})

const route = useRoute()
const formatter = usePageFrontmatter<{ twikoo: TwikooOptions }>()

const emit = defineEmits<{
  (event: 'load'): void
}>()

onMounted(async () => {
  // 允许页面单独配置
  const userConfig: TwikooOptions = formatter.value.twikoo || {}

  const options = {
    envId: userConfig.envId || props.envId || __TWIKOO_ENV_ID__,
    region: userConfig.region || props.region || __TWIKOO_REGION__,
    lang: userConfig.lang || props.lang || __TWIKOO_LANG__,
    path: userConfig.path || formatter.value.permalink || route.path
  }

  if (options.envId == null) {
    // @ts-ignore
    if (import.meta.env.DEV) {
      console.warn(
        '[@zhengxs/vuepress-plugin-twikoo] envId 参数必须, 详见 https://twikoo.js.org/quick-start.html#%E5%89%8D%E7%AB%AF%E9%83%A8%E7%BD%B2'
      )
    }
    return
  }

  // TODO 解决编译失败问题
  function installTwikooService(): Promise<
    (options: TwikooOptions & Record<string, any>) => Promise<void>
  > {
    function loadTwikoo() {
      // @ts-ignore
      const twikoo = window.twikoo

      // @ts-ignore
      // 非标准的浏览器兼容问题，给 element 设置 id 会导致 window 上有同名的 dom 元素
      // Chrome 也兼容了，太闹心了
      if (!twikoo || twikoo instanceof HTMLElement) return

      // // @ts-ignore
      return twikoo.__esModule && twikoo.default ? twikoo.default : twikoo
    }

    return new Promise((resolve, reject) => {
      const twikoo = loadTwikoo()
      if (twikoo) return resolve(twikoo)

      // @ts-ignore
      const doc = window.document
      let script = doc.getElementById('twikoo-js-sdk')

      if (script) {
        // @ts-ignore
        script.addEventListener('load', () => resolve(loadTwikoo()))
        script.addEventListener('error', reject)
        return
      }

      script = doc.createElement('script')
      script.id = 'twikoo-js-sdk'
      script.src = 'https://unpkg.com/twikoo/dist/twikoo.all.min.js'

      doc.body.appendChild(script)
      // @ts-ignore
      script.addEventListener('load', () => resolve(loadTwikoo()))
      script.addEventListener('error', reject)
    })
  }

  const initTwikoo = await installTwikooService()

  initTwikoo({
    ...options,
    el: '#twikoo-container',
    onCommentLoaded() {
      emit('load')
    }
  })
})
</script>
