<template>
  <div>
    <Exception status="403" message="抱歉，你无权访问该页面" />
  </div>
</template>

<script>
import Exception from './components/Exception.vue'

export default {
  components: { Exception }
}
</script>
