<template>
  <div :class="classNames">
    <span class="c-metrics-trend__label">{{ label }}：</span>
    <span class="c-metrics-trend__percent">{{ value }}</span>
    <component :is="icon" class="c-metrics-trend__icon" />
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [Number, String],
      default: ''
    }
  },

  computed: {
    isAscending() {
      return parseFloat(this.value) > 0
    },
    classNames() {
      return [
        'c-metrics-trend',
        `c-metrics-trend--${this.isAscending ? 'up' : 'down'}`
      ]
    },
    icon() {
      return `c-icon-arrowhead-${this.isAscending ? 'up' : 'down'}`
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.c-metrics-trend {
  &--up &__icon,
  &--up &__percent {
    color: $--success-color;
  }

  &--down &__icon,
  &--down &__percent {
    color: $--danger-color;
  }
}
</style>
