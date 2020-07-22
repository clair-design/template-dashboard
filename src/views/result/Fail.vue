<template>
  <Result>
    <template #icon>
      <c-icon-status-danger></c-icon-status-danger>
    </template>
    <template #title>
      资质认证失败
    </template>
    <template #description>
      资质内容有误，请您修改后重新提交认证。这是一段辅助文案，可以很长也可以很短，可以单行也可以多行
    </template>
  </Result>
</template>

<script>
import Result from '@/components/Result'
export default {
  components: { Result }
}
</script>
