<template>
  <div>
    <c-breadcrumb class="breadcrumb">
      <c-icon-arrow-right slot="separator" class="seperator" />
      <c-breadcrumb-item
        v-for="item in breadcrumbs"
        :key="item.path"
        :to="item.path"
      >
        <span>{{ item.title }}</span>
      </c-breadcrumb-item>
    </c-breadcrumb>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    breadcrumbs() {
      const getPath = path => {
        const result = path || '/'
        // 不显示一级页面链接
        return /^\/\w+$/.test(result) ? undefined : result
      }
      return this.$route.matched.map(route => ({
        title: route.meta.title,
        path: getPath(route.path)
      }))
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.breadcrumb {
  margin-bottom: 12px;
}
</style>
