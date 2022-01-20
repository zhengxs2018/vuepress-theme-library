<script setup lang="ts">
import { computed } from 'vue'

import { usePageFrontmatter } from '@vuepress/client'
import { isArray } from '@vuepress/shared'

import HomeSection from './HomeSection.vue'
import HomeFeaturesGrid from './HomeFeaturesGrid.vue'
import HomeSolutionsGrid from './HomeSolutionsGrid.vue'
import HomeUserCases from './HomeUserCases.vue'

const frontmatter = usePageFrontmatter<{ sections: any[] }>()

const sections = computed(() => {
  const sections = frontmatter.value.sections
  return isArray(sections) ? sections : []
})
</script>

<template>
  <HomeSection
    v-for="(section, i) in sections"
    :title="section.title"
    :tagline="section.tagline"
    :surface="section.surface"
    :key="i"
  >
    <HomeFeaturesGrid
      v-if="section.type === 'features'"
      :items="section.items"
    />
    <HomeUserCases
      v-else-if="section.type === 'userCases'"
      :items="section.items"
    />
    <HomeSolutionsGrid
      v-else-if="section.type === 'solutions'"
      :items="section.items"
    />
    <div v-else>
      类型 {{ section.type }}  不存在
    </div>
  </HomeSection>
</template>
