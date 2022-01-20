<template>
  <section class="home-section" :class="{ 'home-section--surface': surface }">
    <h2 v-if="title" class="home-section__title">{{ title }}</h2>
    <div v-if="tagline" class="home-section__tagline">{{ tagline }}</div>
    <slot />
  </section>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  tagline: String,
  surface: Boolean
})
</script>

<style lang="scss">
@import 'sass-bem/bem';

:root {
  // TODO
  --c-color-area: #fafafa;
}

html.dark {
  // TODO
  --c-color-area: #242527;
}

@include component('section', 'home') {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin: 0 auto;
  padding: 54px 24px;
  background: var(--c-bg);

  @include modifier('surface') {
    background: var(--c-color-area);
  }

  @include element('title') {
    color: var(--c-text);
    font-size: 30px;
    font-weight: 600;
    margin-top: 0;
    margin-bottom: 16px;
    text-align: center;
    border-bottom-width: 0;
  }

  @include element('tagline') {
    margin: 0;
    color: var(--c-text-lightest);
    font-size: 15px;
    line-height: 34px;
    text-align: center;
  }
}
</style>
