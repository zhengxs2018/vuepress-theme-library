<script setup lang="ts">
import HomeContent from '@vuepress/theme-default/lib/client/components/HomeContent.vue'
import HomeFeatures from '@vuepress/theme-default/lib/client/components/HomeFeatures.vue'
import HomeFooter from '@vuepress/theme-default/lib/client/components/HomeFooter.vue'
import HomeHero from '@vuepress/theme-default/lib/client/components/HomeHero.vue'

import HomeSections from './HomeSections.vue'
</script>

<template>
  <main class="home">
    <HomeHero />
    <HomeFeatures />
    <HomeSections />
    <HomeContent />
    <HomeFooter />
  </main>
</template>

<style>
:root {
  --homepage-width: 1200px;
  --homepage-footer-text: #fff;
  --homepage-footer-bg: #303846;
}

html.dark {
  --homepage-footer-text: var(--c-text);
  --homepage-footer-bg: var(--c-bg);
}

.home {
  padding-left: 0;
  padding-right: 0;
  max-width: 100%;
}

.home .hero {
  margin: 0 auto;
  padding: 24px;
  max-width: var(--homepage-width);
  overflow: hidden;
}

.home .footer {
  border-top-width: 0;
  color: var(--homepage-footer-text);
  background: var(--homepage-footer-bg);
}
</style>
