<template>
  <div class="doc-comment">
    <Twikoo v-if="enableTwikoo" />
    <Gitalk v-else-if="enableGitalk" />
  </div>
</template>

<script setup>
import { Twikoo } from '@zhengxs/vuepress-plugin-twikoo/client'
import { Gitalk } from '@zhengxs/vuepress-plugin-gitalk/client'

const enableTwikoo = __ENABLE_TWIKOO_PLUGIN__
const enableGitalk = __ENABLE_GITALK_PLUGIN__
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('comment', 'doc') {
  margin: 0 auto;
  max-width: var(--content-width);
  padding: 0 2.5rem 2rem;
}
</style>
