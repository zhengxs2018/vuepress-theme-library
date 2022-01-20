<template>
  <a
    class="home-solution-card"
    :class="{ 'is-disabled': disabled }"
    :href="link"
  >
    <img :src="image" :alt="alt || title" />
    <div class="home-solution-card__content">
      <h3 class="home-solution-card__title">{{ title }}</h3>
      <span class="home-solution-card__text">{{ text }}</span>
    </div>
  </a>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  alt: String,
  link: String,
  disabled: Boolean
})
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('solution-card', 'home') {
  align-items: center;
  background: 0 0;
  border: 1px solid var(--c-border);
  border-radius: 7px;
  display: flex;
  height: 300px;
  justify-content: flex-start;
  overflow: hidden;
  transition: 0.25s;
  color: var(--c-text);
  text-decoration: none;

  img {
    height: auto;
    width: 40%;
  }

  @include element('content') {
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    overflow: hidden;
  }

  @include element('title') {
    font-size: 22px;
    margin-bottom: 24px;
  }

  @include element('text') {
    height: 80px;
  }

  @include hover {
    text-decoration: none !important;

    &:not(.is-disabled) {
      color: inherit;
      cursor: pointer;
      opacity: 0.76;
    }
  }
}
</style>
