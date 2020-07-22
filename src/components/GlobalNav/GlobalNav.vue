<template>
  <c-menu
    mode="vertical"
    :theme="theme"
    use-router
    :expanded-names="expanded"
    :active-name="active"
    :collapsed="collapsed"
  >
    <c-submenu
      v-for="subMenu in menuData"
      :key="subMenu.path"
      :name="subMenu.path"
    >
      <template #title>
        <component :is="`c-icon-${subMenu.icon}`" v-if="subMenu.icon" />
        {{ subMenu.meta.title }}
      </template>
      <c-menu-item
        v-for="item in subMenu.children"
        :key="item.path"
        :name="`${subMenu.path}-${item.path}`"
        :to="`/${subMenu.path}/${item.path}`"
      >
        {{ item.meta.title }}
      </c-menu-item>
    </c-submenu>
  </c-menu>
</template>

<script>
import { mapState } from 'vuex'
import { menuData } from '@/router'

export default {
  props: {
    collapsed: Boolean
  },

  data() {
    return {
      menuData,
      expanded: [],
      active: ''
    }
  },

  computed: {
    ...mapState('app', ['theme'])
  },

  watch: {
    '$route.path': {
      immediate: true,
      handler() {
        this.initMenuState()
      }
    }
  },

  created() {
    this.initMenuState()
  },

  methods: {
    initMenuState() {
      const { path } = this.$route
      const segments = path.split('/').filter(Boolean)
      const menuName = segments[0]
      if (!this.expanded.includes(menuName)) {
        this.expanded.push(menuName)
      }
      this.active = segments.join('-')
    }
  }
}
</script>
