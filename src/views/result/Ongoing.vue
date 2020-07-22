<template>
  <Result>
    <template #icon>
      <component
        :is="component"
        v-model="value"
        type="circle"
        :width="80"
        :stroke-width="4"
        :status="status"
      />
    </template>
    <template #title>
      {{ title }}
    </template>
    <template #description>
      {{ description }}
    </template>
  </Result>
</template>

<script>
import Result from '@/components/Result'
export default {
  components: {
    Result
  },
  data() {
    return {
      value: 0,
      timer: null,
      counter: 1
    }
  },
  computed: {
    isDone() {
      return this.value === 100
    },
    status() {
      return this.isDone ? 'success' : 'active'
    },
    title() {
      return this.isDone ? '成功' : '处理中'
    },
    description() {
      return this.isDone ? '处理完毕' : '当前内容正在处理中，请稍后'
    },
    component() {
      return this.isDone ? 'cIconStatusSuccess' : 'cProgress'
    }
  },
  mounted() {
    this.timer = setInterval(() => {
      if (100 - this.value < 0.5) {
        clearInterval(this.timer)
        this.value = 100
        return
      }
      this.value = 100 - 100 / this.counter
      this.counter++
    }, 100)
  },
  beforeDestroy() {
    clearInterval(this.timer)
  }
}
</script>

<style lang="scss" scoped>
.c-progress--circle {
  vertical-align: -0.125em;
}
</style>
