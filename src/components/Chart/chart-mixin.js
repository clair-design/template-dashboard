/**
 * 各种类型的图表公共的 props
 */
const fieldDescriptor = {
  type: String,
  default: undefined
}

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    },
    row: fieldDescriptor,
    col: fieldDescriptor,
    value: fieldDescriptor,
    text: fieldDescriptor,

    height: {
      type: [String, Number],
      default: '240px'
    }
  },

  computed: {
    dataFields() {
      const { row, col, value, text } = this
      return { row, col, value, text }
    },

    chartStyle() {
      const { height } = this
      const chartHeight = typeof height === 'number' ? `${height}px` : height
      return {
        height: chartHeight
      }
    }
  }
}
