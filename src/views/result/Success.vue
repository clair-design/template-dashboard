<template>
  <Result>
    <template #icon>
      <c-icon-status-success></c-icon-status-success>
    </template>
    <template #title>
      恭喜您认证成功
    </template>
    <template #description>
      如需了解更多，请联系客服中心
      <a href="/">点击咨询</a>
    </template>
  </Result>
</template>

<script>
import Result from '@/components/Result'
export default {
  components: { Result }
}
</script>
