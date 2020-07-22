<template>
  <div class="user-status">
    <c-dropdown placement="bottom-right">
      <FlatButton><c-icon-user /></FlatButton>
      <c-dropdown-menu slot="menu">
        <c-dropdown-item>
          <c-icon-setting />
          账户设置
        </c-dropdown-item>
        <c-dropdown-item @click.native="logout">
          <c-icon-log-out />
          退出登录
        </c-dropdown-item>
      </c-dropdown-menu>
    </c-dropdown>
  </div>
</template>

<script>
import FlatButton from '@/components/FlatButton'

export default {
  components: { FlatButton },

  methods: {
    logout() {
      this.$router.push('/user/login')
    }
  }
}
</script>
