<script setup>
import { computed, onBeforeUnmount } from 'vue'

import { useScrollPromise } from '@vuepress/theme-default/lib/client'

import Page from '@vuepress/theme-default/lib/client/components/Page.vue'
import ParentLayout from '@vuepress/theme-default/lib/client/layouts/Layout.vue'

import Home from '../components/Home.vue'
import DocComment from '../components/DocComment.vue'
import DocSideToc from '../components/DocSideToc.vue'

import { usePageData, usePageFrontmatter } from '@vuepress/client'

const page = usePageData()
const frontmatter = usePageFrontmatter()

const enableSideToc = computed(() => __ENABLE_SIDE_TOC__ && frontmatter.value.sideToc !== false)
const enableComment = computed(() => frontmatter.value.comment !== false)

// handle scrollBehavior with transition
const scrollPromise = useScrollPromise()
const onBeforeEnter = scrollPromise.resolve
const onBeforeLeave = scrollPromise.pending
</script>

<template>
  <ParentLayout>
    <template #page>
      <Home v-if="frontmatter.home" />

      <Transition
        v-else
        name="fade-slide-y"
        mode="out-in"
        @before-enter="onBeforeEnter"
        @before-leave="onBeforeLeave"
      >
        <Page :key="page.path">
          <template #top>
            <slot name="page-top" />
          </template>
          <template #bottom>
            <DocComment v-if="enableComment" />
            <DocSideToc v-if="enableSideToc" />
          </template>
        </Page>
      </Transition>
    </template>
  </ParentLayout>
</template>
