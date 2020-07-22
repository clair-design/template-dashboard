<template>
  <div class="chart" :style="chartStyle">
    <s-chart :data="data" :data-fields="dataFields">
      <s-bar :attrs="barAttrs" />
      <s-axis :attrs="{ orient: 'left' }" />
      <s-axis :attrs="{ orient: 'bottom' }" />
      <s-legend
        :attrs="{ align: ['center', 'bottom'] }"
        :css-icon="{ borderRadius: 10 }"
        :css-text="{ fontSize: 12 }"
      />
      <slot name="tooltip">
        <s-tooltip :attrs="tooltipAttrs" />
      </slot>
    </s-chart>
  </div>
</template>

<script>
import chartMixin from './chart-mixin'

export default {
  mixins: [chartMixin],

  props: {
    stack: {
      type: Boolean,
      default: false
    },
    transpose: {
      type: Boolean,
      default: false
    },
    barWidth: {
      type: Number,
      default: 16
    }
  },

  computed: {
    barAttrs() {
      const { stack, transpose, barWidth } = this
      return { stack, transpose, barWidth }
    },
    tooltipAttrs() {
      return {
        title: rowItems => rowItems[0][this.text],
        formatter: item => item[this.value]
      }
    }
  }
}
</script>
