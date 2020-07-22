<template>
  <FlatButton class="toggle" @click="toggleSidebar">
    <component :is="toggleIcon" />
  </FlatButton>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import FlatButton from '@/components/FlatButton'

export default {
  components: { FlatButton },

  computed: {
    toggleIcon() {
      return this.sidebarCollapsed ? 'c-icon-menu-unfold' : 'c-icon-menu-fold'
    },
    ...mapState('app', ['sidebarCollapsed'])
  },

  methods: {
    ...mapActions('app', ['toggleSidebar'])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.toggle {
  width: $--header-height;
  font-size: 16px;
}
</style>
