<template>
  <a class="home-feature-card" :class="{ 'is-disabled': disabled }" :href="link">
    <div class="home-feature-card__content">
      <h3 class="home-feature-card__title">{{ title }}</h3>
      <span class="home-feature-card__text">{{ text }}</span>
      <div style="flex: 1 1 0%"></div>
      <p v-if="link" class="home-feature-card__link">Documentation &gt;</p>
    </div>
  </a>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  link: String,
  disabled: Boolean
})
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('feature-card', 'home') {
  display: flex;
  z-index: 1;
  height: 220px;
  text-decoration: none;
  color: var(--c-text);
  background: var(--c-bg);
  border-radius: 7px;
  box-shadow: 0 9px 33px rgb(0 0 0 / 5%);

  @include element('content') {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    z-index: 3;
    margin: 40px 30px;
  }

  @include element('title') {
    font-size: 21px;
    margin-bottom: 14px;
  }

  @include element('text') {
    font-size: 14px;
    opacity: 0.85;
  }

  @include element('link') {
    color: var(--c-brand);
  }

  @include is('disabled') {
    opacity: 0.65;
  }

  @include hover {
    text-decoration: none !important;

    &:not(.is-disabled) {
      color: #fff;
      box-shadow: 0 5px 6px rgb(0 87 255 / 26%);
      background: linear-gradient(
        121.13deg,
        var(--c-brand-light) 50.91%,
        var(--c-brand) 119.06%
      );

      @include element('link') {
        color: #fff;
      }
    }
  }
}
</style>
