<template>
  <c-row class="card-list" gutter="12px">
    <c-col v-bind="gridSpan">
      <c-card :body-style="{ padding: 0, height: '100%' }" :bordered="false">
        <div role="button" class="card-list__add">
          <c-icon-plus class="card-list__add-icon" />
          创建新项目
        </div>
      </c-card>
    </c-col>
    <c-col v-for="project in projects" :key="project.name" v-bind="gridSpan">
      <c-card :title="project.name" :bordered="false">
        <template #actions>
          <a href="#" class="card-list__action" @click.prevent>查看详情</a>
        </template>
        <div class="card-list__body">
          360 e+ Design 是一个面向企业（toB）领域的设计语言及规范组件，
          致力于为企业类用户提供统一简单高效的体验。
        </div>
      </c-card>
    </c-col>
  </c-row>
</template>

<script>
import { getPopularProjects } from '@/services/project'

export default {
  data() {
    return {
      gridSpan: {
        xs: { span: 12 },
        md: { span: 6 },
        lg: { span: 4 }
      },
      projects: []
    }
  },

  async created() {
    this.projects = (await getPopularProjects()).list
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.card-list {
  .c-card:first-child {
    height: 100%;
  }

  &__add {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 100%;
    padding: 20px;
    color: #999;
    border: 1px dashed #ddd;
    cursor: pointer;

    &:hover {
      color: $--primary-color;
      border-color: unset;
    }
  }

  &__add-icon {
    margin-bottom: 10px;
    font-size: 28px;
    stroke-width: 2px;
  }

  &__action {
    color: $--primary-color;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  &__body {
    min-height: 7.5em;
  }
}
</style>
