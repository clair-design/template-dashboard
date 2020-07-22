<template>
  <div class="c-desc-item">
    <span v-if="title" class="c-desc-item__title">{{ title }}：</span>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.c-desc-item {
  display: flex;
  color: #555;

  &__title {
    flex-shrink: 0;
    color: #202020;
    white-space: nowrap;
  }
}
</style>
