<template>
  <div class="login">
    <c-card>
      <img class="login__logo" :src="logo" alt="eplug design" />
      <div class="login__slogan">面向企业（toB）领域的设计语言及规范组件</div>
      <c-form
        ref="form"
        :model="user"
        :rules="rules"
        class="login__form"
        @submit.native.prevent="onSubmit"
      >
        <c-form-item prop="name">
          <c-input v-model="user.name" placeholder="用户名" :style="inputStyle">
            <c-icon-user slot="prefix-icon" />
          </c-input>
        </c-form-item>
        <c-form-item prop="password">
          <c-input
            v-model="user.password"
            placeholder="密码"
            :style="inputStyle"
            html-type="password"
          >
            <c-icon-user slot="prefix-icon" />
          </c-input>
        </c-form-item>
        <c-form-item>
          <c-checkbox v-model="user.remember">自动登录</c-checkbox>
          <a class="login__forget" href="#">忘记密码？</a>
        </c-form-item>
        <c-button block type="primary" html-type="submit" :loading="loading">
          登录
        </c-button>
      </c-form>
    </c-card>
  </div>
</template>

<script>
import { login } from '@/services/user'
import { mapState } from 'vuex'

export default {
  data() {
    return {
      user: {
        name: 'admin',
        password: 'clair',
        remember: true
      },
      loading: false,
      inputStyle: {
        width: '100%'
      },
      rules: {
        name: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }]
      }
    }
  },

  computed: mapState('app', ['logo']),

  methods: {
    async onSubmit() {
      const isValid = await this.$refs.form.validate()
      if (!isValid) return

      this.loading = true
      const result = await login(this.user)
      this.loading = false
      if (result.error) {
        this.$message({
          type: 'error',
          message: result.message
        })
      } else {
        this.$router.push('/dashboard/overview')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  height: 100vh;
  background: #e5ebf1;

  .c-card {
    width: 440px;
    margin: auto;
  }

  &__logo {
    display: block;
    width: 220px;
    margin: 24px auto 12px;
  }

  &__slogan {
    color: #999;
    font-size: 14px;
    text-align: center;
  }

  &__form {
    width: 360px;
    margin: 24px auto 36px;
  }

  &__forget {
    float: right;
    line-height: 1;
  }
}
</style>
