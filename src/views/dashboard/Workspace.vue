<template>
  <div>
    <!-- 头部信息 -->
    <c-card :bordered="false">
      <div class="work-summary">
        <c-avatar size="large" :text="avatar" />
        <div class="work-summary__user-info">
          <h3 class="work-summary__title">下午好，{{ userName }}</h3>
          <p class="work-summary__desc">{{ bio }}</p>
        </div>
        <div class="work-stats">
          <div
            v-for="item in workStats"
            :key="item.title"
            class="work-stats__item"
          >
            <div class="work-stats__item-title">
              <component :is="`c-icon-${item.icon}`" />
              {{ item.title }}
            </div>
            <div class="work-stats__item-value">{{ item.value }}</div>
          </div>
        </div>
      </div>
    </c-card>

    <c-row gutter="20px" class="grid-row">
      <c-col :xs="{ span: 12 }" :lg="{ span: 8 }">
        <!-- 常用项目 -->
        <c-card :bordered="false" title="常用项目">
          <ul class="projects">
            <li
              v-for="project in projects.list"
              :key="project.name"
              class="projects__item"
            >
              <h4 class="projects__title">
                <a href="#">{{ project.name }}</a>
              </h4>
              <div class="projects__meta">创建时间：{{ project.date }}</div>
              <c-icon-star-filled
                class="projects__icon"
                :class="{ 'projects__icon--stared': project.stared }"
                @click="project.stared = !project.stared"
              />
            </li>
          </ul>
        </c-card>

        <!-- 近期动态 -->
        <c-card :bordered="false" title="近期动态" class="grid-row">
          <ul class="activities">
            <li
              v-for="(activity, index) in activities"
              :key="index"
              class="activities__item"
            >
              <c-avatar :text="activity.avatar" />
              <div class="activities__content">
                <h4 class="activities__title">{{ activity.title }}</h4>
                <div class="activities__desc">{{ activity.description }}</div>
              </div>
            </li>
          </ul>
        </c-card>
      </c-col>
      <c-col :xs="{ span: 12 }" :lg="{ span: 4 }">
        <!-- 快捷操作 -->
        <c-card :bordered="false" title="快捷操作" :body-style="{ padding: 0 }">
          <ul class="shortcuts">
            <li
              v-for="item in shortcuts"
              :key="item.title"
              class="shortcuts__item"
            >
              <component
                :is="`c-icon-${item.icon}`"
                :style="{ color: item.color }"
                class="shortcuts__icon"
              />
              {{ item.title }}
            </li>
          </ul>
        </c-card>

        <!-- 待办任务 -->
        <c-card
          :bordered="false"
          :body-style="{ padding: 0 }"
          title="待办任务"
          class="grid-row"
        >
          <ul class="tasks">
            <li v-for="item in tasks" :key="item.title" class="tasks__item">
              <c-checkbox v-model="item.done">{{ item.title }}</c-checkbox>
            </li>
          </ul>
        </c-card>

        <!-- 团队成员 -->
        <c-card :bordered="false" title="团队成员" class="grid-row">
          <ul class="members">
            <li
              v-for="member in members"
              :key="member.name"
              class="members__item"
            >
              <c-avatar :text="member.avatar" />
              <span class="members__name">{{ member.name }}</span>
              <c-tag>{{ member.role }}</c-tag>
            </li>
          </ul>
        </c-card>
      </c-col>
    </c-row>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import {
  getPopularProjects,
  getActivities,
  getTasks,
  getMembers
} from '@/services/project'

export default {
  data() {
    return {
      projects: {
        total: 0,
        pending: 0,
        list: []
      },
      activities: [],
      tasks: [],
      members: [],
      shortcuts: [
        { title: '个人主页', color: '#47A1FF', icon: 'dashboard', href: '' },
        { title: '新建项目', color: '#59CB74', icon: 'folder-add', href: '' },
        { title: '项目排期', color: '#FFB952', icon: 'calendar', href: '' },
        { title: '关联平台', color: '#FC6980', icon: 'data-trend', href: '' },
        { title: '综合搜索', color: '#6367EC', icon: 'search', href: '' },
        { title: '偏好设置', color: '#999999', icon: 'control', href: '' }
      ]
    }
  },

  computed: {
    workStats() {
      return [
        { title: '项目总数', icon: 'project', value: this.projects.total },
        { title: '正在审批', icon: 'approval', value: this.projects.pending },
        { title: '未读消息', icon: 'message', value: 2 }
      ]
    },
    ...mapState('user', ['userName', 'avatar', 'bio'])
  },

  async created() {
    const [projects, activities, tasks, members] = await Promise.all([
      getPopularProjects(),
      getActivities(),
      getTasks(),
      getMembers()
    ])
    Object.assign(this, { projects, activities, tasks, members })
  }
}
</script>

<style lang="scss" scoped>
@import '~@/styles/variables';

.grid-row {
  margin-top: 20px;
}

.work-summary {
  display: flex;
  align-items: center;

  &__user-info {
    flex: 1;
    margin-left: 20px;
  }

  &__title {
    margin: 0 0 8px;
    color: $--base-text-color;
  }

  &__desc {
    margin: 0;
  }
}

.work-stats {
  display: flex;

  &__item:not(:first-child) {
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #dedfea;
  }

  &__item-value {
    margin-top: 4px;
    color: $--base-text-color;
    font-size: 20px;
    text-align: right;
  }
}

.projects {
  display: flex;
  flex-wrap: wrap;
  margin: -6px;
  padding: 0;

  &__item {
    position: relative;
    display: block;
    flex-grow: 1;
    box-sizing: border-box;
    width: 30%;
    height: 100px;
    margin: 6px;
    padding: 12px;
    border: 1px solid #e8e8e8;

    &:hover {
      box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1);
    }
  }

  &__title {
    margin-top: 0;
    margin-bottom: 4px;
    color: $--base-text-color;
    font-weight: 500;

    a {
      color: inherit;
      text-decoration: none;

      &:hover {
        color: $--primary-color;
      }
    }
  }

  &__meta {
    color: $--tertiary-text-color;
  }

  &__icon {
    position: absolute;
    top: 0;
    right: 0;
    display: none;
    padding: 16px;
    color: #ccc;
    cursor: pointer;
  }

  &__item:hover &__icon {
    display: block;
  }

  &__item &__icon--stared {
    display: block;
    color: $--warning-color;
  }
}

.activities {
  display: block;
  margin: 0;
  padding: 0;

  .c-avatar {
    flex-shrink: 0;
  }

  &__item {
    display: flex;
    margin: 0;
    padding: 16px;

    &:not(:first-child) {
      border-top: 1px solid #ddd;
    }
  }

  &__content {
    margin-left: 16px;
  }

  &__title {
    margin: 0 0 8px;
    color: $--base-text-color;
    font-weight: 400;
    font-size: 16px;
  }

  &__desc {
    color: $--tertiary-text-color;
  }
}

.shortcuts {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -1px -1px 0;
  padding: 0;

  &__item {
    display: block;
    flex-grow: 1;
    box-sizing: border-box;
    width: 33%;
    margin: -1px 0 0 -1px;
    padding: 30px;
    text-align: center;
    border: 1px solid #eff0f2;
  }

  &__icon {
    display: block;
    width: 1em;
    margin: 0 auto 12px;
    font-size: 28px;
    stroke-width: 2px;
  }
}

.tasks {
  display: block;
  margin: 4px 0;
  padding: 0;

  &__item {
    padding: 12px 20px;

    &:not(:first-child) {
      border-top: 1px solid #eff0f2;
    }
  }

  .c-checkbox {
    vertical-align: middle;
  }
}

.members {
  margin: 0;
  padding: 0;

  &__item {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 12px 0;
  }

  &__name {
    flex-grow: 1;
    margin-left: 12px;
  }
}
</style>
