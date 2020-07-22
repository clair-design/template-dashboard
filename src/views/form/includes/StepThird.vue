<template>
  <Result class="result">
    <template #icon>
      <c-icon-status-success></c-icon-status-success>
    </template>
    <template #title>
      提交成功
    </template>
    <template #description>
      本区域用于展示补充说明
    </template>
    <template #action>
      <c-button
        type="primary"
        style="margin-right: 10px;"
        @click="$emit('finish')"
      >
        重新提交
      </c-button>
      <c-button>查看详情</c-button>
    </template>
  </Result>
</template>

<script>
import Result from '@/components/Result'

export default {
  components: { Result }
}
</script>

<style lang="scss" scoped>
.result {
  min-height: auto;
  padding: 56px 0;
}
</style>
