<template>
  <div :class="classNames">
    <SidebarToggler />
    <div class="actions">
      <Search />
      <ThemeSwitcher />
      <NoticeList />
      <UserStatus />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SidebarToggler from './SidebarToggler.vue'
import Search from './Search.vue'
import ThemeSwitcher from './ThemeSwitcher.vue'
import NoticeList from './NoticeList.vue'
import UserStatus from './UserStatus.vue'

export default {
  components: {
    SidebarToggler,
    Search,
    ThemeSwitcher,
    NoticeList,
    UserStatus
  },

  computed: {
    classNames() {
      return ['header', `header--${this.theme}`]
    },
    ...mapState('app', ['theme'])
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.header {
  display: flex;
  justify-content: space-between;
  height: $--header-height;
}

// TODO: 网站是亮色主题下，header背景却是深色，有些奇怪
.header--light {
  color: #e2e4e9;
  background-color: #30323a;
}

.actions {
  display: flex;
  padding-right: 10px;
}
</style>
