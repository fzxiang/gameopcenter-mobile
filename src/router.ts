import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/user'
  },
  {
    name: '/user',
    component: () => {
      import('@/views/user/index.vue')
    },
    path: '/user',
    meta: {
      title: '会员中心'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})


export default router



