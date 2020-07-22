import Vue from 'vue'
import VueRouter from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout.vue'
import RouteLayout from '@/layouts/RouteLayout.vue'

Vue.use(VueRouter)

// data of sidebar menu
export const menuData = [
  {
    path: 'dashboard',
    icon: 'dashboard',
    meta: { title: 'Dashboard' },
    component: RouteLayout,
    children: [
      {
        path: 'overview',
        meta: { title: '主控台' },
        component: () => import('@/views/dashboard/Overview.vue')
      },
      {
        path: 'workspace',
        meta: { title: '工作台' },
        component: () => import('@/views/dashboard/Workspace.vue')
      }
    ]
  },
  {
    path: 'list',
    icon: 'list',
    meta: { title: '列表' },
    component: RouteLayout,
    children: [
      {
        path: 'basic',
        meta: { title: '基础列表' },
        component: () => import('@/views/list/Basic.vue')
      },
      {
        path: 'card',
        meta: { title: '卡片列表' },
        component: () => import('@/views/list/Card.vue')
      },
      {
        path: 'filtering',
        meta: { title: '条件筛选列表' },
        component: () => import('@/views/list/Filtering.vue')
      }
    ]
  },
  {
    path: 'form',
    icon: 'edit',
    meta: { title: '表单' },
    component: RouteLayout,
    children: [
      {
        path: 'basic',
        meta: { title: '基础表单' },
        component: () => import('@/views/form/Basic.vue')
      },
      {
        path: 'step',
        meta: { title: '分步表单' },
        component: () => import('@/views/form/Step.vue')
      }
    ]
  },
  {
    path: 'detail',
    icon: 'file',
    meta: { title: '详情' },
    component: RouteLayout,
    children: [
      {
        path: 'basic',
        meta: { title: '基础表单' },
        component: () => import('@/views/detail/Basic.vue')
      },
      {
        path: 'complex',
        meta: { title: '高级详情' },
        component: () => import('@/views/detail/Complex.vue')
      }
    ]
  },
  {
    path: 'result',
    icon: 'checked-circle-stroke',
    meta: { title: '结果页' },
    component: RouteLayout,
    children: [
      {
        path: 'success',
        meta: { title: '成功' },
        component: () => import('@/views/result/Success.vue')
      },
      {
        path: 'fail',
        meta: { title: '失败' },
        component: () => import('@/views/result/Fail.vue')
      },
      {
        path: 'ongoing',
        meta: { title: '处理中' },
        component: () => import('@/views/result/Ongoing.vue')
      }
    ]
  },
  {
    path: 'exception',
    icon: 'alert',
    meta: { title: '异常' },
    component: RouteLayout,
    children: [
      {
        path: '403',
        meta: { title: '403' },
        component: () => import('@/views/exception/403.vue')
      },
      {
        path: '404',
        meta: { title: '404' },
        component: () => import('@/views/exception/404.vue')
      },
      {
        path: 'ongoing',
        meta: { title: '500' },
        component: () => import('@/views/exception/500.vue')
      }
    ]
  }
]

const routes = [
  {
    path: '/',
    meta: { title: '首页' },
    component: BasicLayout,
    redirect: '/dashboard/overview',
    children: menuData
  },
  {
    path: '/user/login',
    meta: { title: '登录' },
    component: () => import('@/views/user/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.afterEach(to => {
  document.title = `${to.meta.title} - 360 e+ design`
})

export default router
