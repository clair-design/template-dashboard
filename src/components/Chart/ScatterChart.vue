<template>
  <div class="chart" :style="chartStyle">
    <s-chart :data="data" :data-fields="dataFields">
      <s-scatter :attrs="scatterAttrs" />
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
    areaField: {
      type: String,
      default: ''
    },
    areaRange: {
      type: Array,
      default: undefined
    }
  },

  computed: {
    scatterAttrs() {
      const { areaField, areaRange } = this
      return { areaField, areaRange }
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
