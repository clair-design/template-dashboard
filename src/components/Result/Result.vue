<template>
  <div class="result">
    <div class="result__icon">
      <slot name="icon"></slot>
    </div>
    <h1 class="result__title">
      <slot name="title"></slot>
    </h1>
    <div class="result__description">
      <slot name="description"></slot>
    </div>
    <div class="result__action">
      <slot name="action">
        <c-button type="primary" style="margin-right: 10px;">返回</c-button>
        <c-button>查看详情</c-button>
      </slot>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.result {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // consider the padding and margin of parent/ancestor element
  min-height: calc(100vh - #{$--header-height} - 20px - 44px);
  background: #fff;
}

.result__icon:not(:empty) {
  margin-bottom: 24px;
  font-size: 80px;
  stroke-width: 2;
  line-height: 1;
}

.result__title:not(:empty) {
  margin: 0 0 8px;
  font-size: 20px;
}

.result__description {
  color: #555;
}

.result__action:not(:empty) {
  display: flex;
  margin-top: 48px;
}
</style>
