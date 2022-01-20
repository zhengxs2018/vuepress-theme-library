<template>
  <div class="home-solution-card-grid">
    <HomeSolutionCard v-for="(item, index) in items" v-bind="item" :key="index" />
  </div>
</template>

<script lang="ts" setup>
import HomeSolutionCard from './HomeSolutionCard.vue'

defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('solution-card-grid', 'home') {
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(2, calc(50% - 12px));
  margin-top: 60px;
  max-width: var(--homepage-width);
}

@media (max-width: 1300px) {
  @include component('solution-card-grid', 'home') {
    grid-template-columns: repeat(1, 100%);
  }
}
</style>
