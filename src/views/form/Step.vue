<template>
  <div>
    <c-card title="分步表单" :bordered="false">
      <div class="nav">
        <c-steps :active-key="`${activeKey}`">
          <c-step step-key="1" title="第一步" />
          <c-step step-key="2" title="第二步" />
          <c-step step-key="3" title="完成" />
        </c-steps>
      </div>
      <div class="content">
        <step-first v-show="activeKey === 1" @nextStep="nextStep" />
        <step-second
          v-show="activeKey === 2"
          @nextStep="nextStep"
          @prevStep="prevStep"
        />
        <step-third v-show="activeKey === 3" @finish="finish" />
      </div>
    </c-card>
  </div>
</template>

<script>
import StepFirst from './includes/StepFirst'
import StepSecond from './includes/StepSecond'
import StepThird from './includes/StepThird'

export default {
  components: {
    StepFirst,
    StepSecond,
    StepThird
  },
  data() {
    return {
      activeKey: 1
    }
  },
  methods: {
    nextStep() {
      this.activeKey += 1
    },
    prevStep() {
      this.activeKey -= 1
    },
    finish() {
      this.activeKey = 1
    }
  }
}
</script>

<style lang="scss" scoped>
.nav {
  max-width: 900px;
  margin: 24px auto;
}

.content {
  max-width: 580px;
  margin: 0 auto;
}
</style>
