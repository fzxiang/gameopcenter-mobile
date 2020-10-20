import {createRouter, createWebHashHistory, RouteRecordRaw, Router} from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

/* Router modules */

// base routes
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    redirect: '/loyout',
    meta: { hidden: true },
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index.vue')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
})

export default router




