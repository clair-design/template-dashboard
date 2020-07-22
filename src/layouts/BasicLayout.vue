<!-- Basic layout including sidebar, header and footer -->
<template>
  <c-layout class="basic-layout">
    <c-aside
      collapsible
      :class="classNames"
      :collapsed="sidebarCollapsed"
      collapsed-width="50"
    >
      <template #trigger />
      <a class="logo" href="/">
        <img :src="logoUrl" alt="eplus" />
      </a>
      <NavMenu :collapsed="sidebarCollapsed" />
    </c-aside>
    <c-layout>
      <c-header>
        <Header />
      </c-header>
      <c-main class="main">
        <router-view></router-view>
      </c-main>
    </c-layout>
  </c-layout>
</template>

<script>
import NavMenu from '@/components/GlobalNav'
import Header from '@/components/GlobalHeader'
import { mapState, mapActions } from 'vuex'

export default {
  components: {
    NavMenu,
    Header
  },

  computed: {
    logoUrl() {
      return this.sidebarCollapsed ? this.smallLogo : this.logo
    },
    classNames() {
      return ['sidebar', `theme-${this.theme}`]
    },
    ...mapState('app', ['sidebarCollapsed', 'theme', 'logo', 'smallLogo'])
  },

  created() {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', this.onResize)
      this.onResize()
    }
  },

  destroyed() {
    window.removeEventListener('resize', this.onResize)
  },

  methods: {
    onResize() {
      const breakpoint = 960
      const { innerWidth } = window
      const { sidebarCollapsed } = this
      const needExpand = innerWidth > breakpoint && sidebarCollapsed
      const needCollapse = innerWidth < breakpoint && !sidebarCollapsed
      if (needExpand || needCollapse) {
        this.toggleSidebar()
      }
    },

    ...mapActions('app', ['toggleSidebar'])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.basic-layout {
  min-height: 100vh;
}

.sidebar {
  color: #fff;
}

.logo {
  display: block;
  line-height: $--header-height;
  text-align: center;
  background: #14151b;

  img {
    vertical-align: middle;
  }
}

.theme-dark {
  background-color: #30323a;
}

.theme-light {
  background-color: #fff;
}

.main {
  padding: 12px 20px 20px;
  background: #e5ebf1;
}
</style>
