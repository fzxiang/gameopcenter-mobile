import type{ App } from 'vue'
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

/* Layout */
import Layout from '@/layouts/logo.vue'

/* Router modules */

// base routes
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect/:path(.*)*',
    component: () => import('@/views/redirect/index.vue'),
    meta: { hidden: true },
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/welcome',
    component: () => import('@/views/dashboard/welcome/index.vue'),
    meta: {
      title: '欢迎页'
    }
  },
  {
    path: '/home',
    component: () => import('@/views/home/index.vue'),
    meta: {
      title: '首页'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})


export function setupRouter(app: App<Element>){
  app.use(router)
}

export default router




