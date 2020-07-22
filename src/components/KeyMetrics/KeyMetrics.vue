<template>
  <c-card :bordered="false">
    <div class="c-key-metrics">
      <slot name="icon">
        <div v-if="icon" :class="iconClassNames">
          <component :is="`c-icon-${icon}`" />
        </div>
      </slot>
      <div class="c-key-metrics__number">
        <slot name="number">
          <div class="c-key-metrics__value">{{ value }}</div>
          <div class="c-key-metrics__title">{{ title }}</div>
        </slot>
      </div>
      <div class="c-key-metrics__trends">
        <slot></slot>
      </div>
    </div>
  </c-card>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'info',
      validator: val => ['info', 'success', 'warning', 'danger'].includes(val)
    },
    value: {
      type: [Number, String],
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },

  computed: {
    iconClassNames() {
      return ['c-key-metrics__icon', `c-key-metrics__icon--${this.type}`]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.c-key-metrics {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 12px;

  &__icon {
    display: flex;
    width: 56px;
    height: 56px;
    margin-right: 20px;
    font-size: 20px;
    border-radius: 50%;
    stroke-width: 2px;

    > * {
      margin: auto;
    }

    &--info {
      color: $--primary-color;
      background-color: change-color($--primary-color, $alpha: 0.2);
    }

    &--success {
      color: $--success-color;
      background-color: change-color($--success-color, $alpha: 0.2);
    }

    &--warning {
      color: $--warning-color;
      background-color: change-color($--warning-color, $alpha: 0.2);
    }

    &--danger {
      color: $--danger-color;
      background-color: change-color($--danger-color, $alpha: 0.2);
    }
  }

  &__number {
    flex: 1;
    line-height: 20px;
  }

  &__value {
    margin-bottom: 8px;
    color: $--base-text-color;
    font-weight: 500;
    font-size: 20px;
  }

  &__trends {
    position: relative;
    padding-left: 20px;
    line-height: 2.5;

    &::after {
      position: absolute;
      top: 50%;
      left: 0;
      width: 1px;
      height: 20px;
      margin-top: -10px;
      background: #cfdae5;
      content: '';
    }
  }
}
</style>
