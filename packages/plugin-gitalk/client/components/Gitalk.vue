<template>
  <div class="gitalk-container">
    <div id="gitalk"></div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, PropType } from 'vue'

import { useRoute } from 'vue-router'
import { usePageFrontmatter } from '@vuepress/client'

import Gitalk from 'gitalk'

// TODO 全部用 ts 重新后移走
declare var __GITALK_CLIENT_ID__: string
declare var __GITALK_CLIENT_SECRET__: string
declare var __GITALK_REPO__: string
declare var __GITALK_OWNER__: string
declare var __GITALK_LANGUAGE__: string
declare var __GITALK_NUMBER__: number
declare var __GITALK_ADMIN__: string[]

const props = defineProps({
  clientID: String,
  clientSecret: String,
  repo: String,
  owner: String,
  admin: Array as PropType<string[]>,
  id: String,
  title: String,
  body: String,
  language: String,
  labels: Array as PropType<string[]>,
  number: Number,
  perPage: Number,
  pagerDirection: String as PropType<Gitalk.GitalkOptions['pagerDirection']>,
  distractionFreeMode: Boolean,
  createIssueManually: Boolean,
  proxy: String,
  flipMoveOptions: Object,
  enableHotKey: Boolean
})

const route = useRoute()
const formatter = usePageFrontmatter<{ gitalk: Gitalk.GitalkOptions }>()

onMounted(() => {
  // 允许页面配置
  const userConfig: Partial<Gitalk.GitalkOptions> = formatter.value.gitalk || {}

  const options: Gitalk.GitalkOptions = {
    clientID: userConfig.clientID || props.clientID || __GITALK_CLIENT_ID__,
    clientSecret:
      userConfig.clientSecret || props.clientSecret || __GITALK_CLIENT_SECRET__,
    repo: userConfig.repo || props.repo || __GITALK_REPO__,
    owner: userConfig.owner || props.owner || __GITALK_OWNER__,
    admin: userConfig.admin || props.admin || __GITALK_ADMIN__
  }

  if (Object.values(options).every(Boolean) === false) {
    // @ts-ignore
    if (import.meta.env.DEV) {
      console.warn(
        `[@zhengxs/vuepress-plugin-gitalk] The parameters ${Object.keys(
          options
        ).join(' ')}. are required. See https://github.com/gitalk/gitalk#usage`
      )
    }
    return
  }

  // 可选参数
  options.id = userConfig.id || formatter.value.permalink || route.path
  options.title = userConfig.title || props.title || formatter.value.title
  options.body = userConfig.body || props.body || formatter.value.description
  options.labels = userConfig.labels || props.labels
  options.number = userConfig.number || props.number || __GITALK_NUMBER__
  options.language =
    userConfig.language || props.language || __GITALK_LANGUAGE__
  options.perPage = userConfig.perPage || props.perPage
  options.distractionFreeMode =
    userConfig.distractionFreeMode || props.distractionFreeMode
  options.pagerDirection = userConfig.pagerDirection || props.pagerDirection
  options.createIssueManually =
    userConfig.createIssueManually || props.createIssueManually
  options.proxy = userConfig.proxy || props.proxy
  options.flipMoveOptions = userConfig.flipMoveOptions || props.flipMoveOptions
  options.enableHotKey = userConfig.enableHotKey || props.enableHotKey

  Object.keys(options).forEach(key => {
    if (options[key] == null) {
      delete options[key]
    }
  })

  // TODO 如何销毁?
  const gitalk = new Gitalk(options)

  gitalk.render('gitalk')
})
</script>

<style src="gitalk/dist/gitalk.css"></style>
