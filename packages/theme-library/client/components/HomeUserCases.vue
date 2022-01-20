<template>
  <div class="home-user-cases">
    <div class="home-user-case" v-for="(item, index) in items" :key="index">
      <img :src="item.logo" :alt="item.alt" />
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  items: {
    type: Array,
    required: true
  }
})
</script>

<style lang="scss">
@import 'sass-bem/bem';

@include component('user-cases', 'home') {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

@include component('user-case', 'home') {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 40px 26px 0;

  img {
    height: 40px;
    overflow: hidden;
  }
}
</style>
