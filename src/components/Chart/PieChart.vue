<template>
  <div class="chart" :style="chartStyle">
    <s-chart :data="data" :data-fields="dataFields">
      <s-pie
        :attrs="pieAttrs"
        css-guide-text
        :css-sector="{ lineWidth: 1, strokeColor: '#fff' }"
      />
      <s-legend
        :attrs="{ orient: 'vertical', align: ['right', 'bottom'] }"
        :css-icon="{ borderRadius: 10, marginBottom: 15 }"
        :css-text="{ fontSize: 12, marginBottom: 15 }"
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
    radius: {
      type: Number,
      default: 0.9
    },
    rose: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    pieAttrs() {
      const { radius, rose } = this
      return { radius, rose }
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
