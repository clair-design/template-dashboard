<template>
  <div class="c-exception">
    <div class="c-exception__status">
      <em>{{ status }}</em>
    </div>
    <div class="c-exception__message">{{ message }}</div>
  </div>
</template>

<script>
export default {
  props: {
    status: {
      type: [Number, String],
      default: 404
    },
    message: {
      type: String,
      default: '抱歉，你访问的页面不存在'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.c-exception {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 280px;
  min-height: calc(100vh - #{$--header-height} - 20px - 44px);
  background: #fff;

  &__status {
    box-sizing: border-box;
    width: 280px;
    height: 250px;
    padding-top: 75px;
    color: #e3eaf9;
    font-size: 80px;
    line-height: 120px;
    text-align: center;
    background: url('~@/assets/exception.svg') no-repeat 0 0;

    em {
      display: block;
      font-weight: 600;
      font-style: normal;
      letter-spacing: -3px;
      transform: scaleX(0.8);
    }
  }

  &__message {
    color: #555;
  }
}
</style>
