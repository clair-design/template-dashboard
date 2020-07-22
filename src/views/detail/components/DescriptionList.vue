<script>
export default {
  functional: true,

  props: {
    colProps: {
      type: Object,
      default: () => ({
        lg: { span: 4 },
        md: { span: 6 },
        xs: { span: 12 }
      })
    }
  },

  render(h, ctx) {
    const { colProps } = ctx.props
    const items = ctx.scopedSlots.default()
    const cols = items.map(item => h('c-col', { props: colProps }, [item]))
    return h('c-row', { props: { gutter: '12px' } }, cols)
  }
}
</script>
