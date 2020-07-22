<template>
  <div>
    <Exception status="404" message="抱歉，你访问的页面不存在" />
  </div>
</template>

<script>
import Exception from './components/Exception.vue'

export default {
  components: { Exception }
}
</script>
