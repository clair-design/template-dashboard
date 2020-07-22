<template>
  <button class="c-button--flat" v-on="$listeners">
    <slot></slot>
  </button>
</template>

<style lang="scss" scoped>
@import '@/styles/variables';

.c-button--flat {
  display: inline-block;
  box-sizing: border-box;
  height: 50px;
  padding: 0 16px;
  color: inherit;
  font-size: inherit;
  text-align: center;
  background: none;
  border: 0;
  cursor: pointer;

  &:hover {
    color: $--primary-color;
    background: change-color($--primary-color, $alpha: 0.1);
  }

  &:active {
    background: change-color($--primary-color, $alpha: 0.2);
  }

  &:focus {
    background: change-color($--primary-color, $alpha: 0.2);
    outline: none;
  }
}
</style>
