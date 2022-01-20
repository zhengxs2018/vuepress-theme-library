<template>
  <div class="doc-side-toc">
    <div class="doc-side-toc__list">
      <Toc />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onBeforeMount } from 'vue'
import { usePageFrontmatter } from '@vuepress/client'

import { Toc } from '@vuepress/plugin-toc/lib/client'

const formatter = usePageFrontmatter()

// TODO 改为布局实现
onBeforeMount(() => {
  formatter.value.pageClass = 'with-side-toc'
})
</script>

<style lang="scss">
@import 'sass-bem/bem';

:root {
  --side-toc-width: 280px;
}

.with-side-toc .page {
  padding-right: var(--side-toc-width);
}

@include component('side-toc', 'doc') {
  position: fixed;
  top: var(--navbar-height);
  right: 0;
  width: var(--side-toc-width);
  padding-top: 10px;

  @include element('list') {
    padding-left: 10px;
    box-shadow: inset 1px 0 0 0 var(--c-border);
  }
}

@media (max-width: 1500px) {
  @include component('side-toc', 'doc') {
    display: none;
  }

  .with-side-toc .page {
    padding-right: 0;
  }
}
</style>
