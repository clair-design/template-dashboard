<template>
  <div>
    <Exception status="500" message="抱歉，服务器出错了" />
  </div>
</template>

<script>
import Exception from './components/Exception.vue'

export default {
  components: { Exception }
}
</script>
