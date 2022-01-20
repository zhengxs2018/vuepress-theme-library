<template>
  <div class="home-features-grid">
    <HomeFeatureCard
      v-for="(item, index) in items"
      v-bind="item"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
import HomeFeatureCard from './HomeFeatureCard.vue'

defineProps({
  items: {
    type: Array,
    default: () => []
  }
})
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('features-grid', 'home') {
  display: grid;
  gap: 28px;
  grid-template-columns: repeat(3, calc(33.33333% - 18.66667px));
  margin-top: 60px;
  max-width: var(--homepage-width);
}

@media (max-width: 1300px) {
  @include component('features-grid', 'home') {
    grid-template-columns: repeat(2, calc(50% - 14px));
  }
}
</style>
