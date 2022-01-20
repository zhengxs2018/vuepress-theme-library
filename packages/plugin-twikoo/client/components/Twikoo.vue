<template>
  <div class="twikoo-container">
    <h2>评论</h2>
    <div id="twikoo"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue'

import { useRoute } from 'vue-router'
import { usePageFrontmatter } from '@vuepress/client'

// import initTwikoo from 'twikoo'

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

  // 解决
  const initTwikoo = await import('twikoo/dist/twikoo.all.min.js')

  initTwikoo.init({
    ...options,
    el: '#twikoo',
    onCommentLoaded() {
      emit('load')
    }
  })
})
</script>
