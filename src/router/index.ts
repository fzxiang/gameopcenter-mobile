import type{ App } from 'vue'
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

/* Layout */
import Layout from '@/layout/index.vue'

/* Router modules */

// base routes
const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect/:path(.*)*',
    component: () => import('@/views/redirect/index.vue'),
    meta: { hidden: true },
    // children: [
    //   {
    //     path: '/redirect/:path(.*)',
    //     component: () => import('@/views/redirect/index.vue')
    //   }
    // ]
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


export function setupRouter(app: App<Element>){
  app.use(router)
}

export default router




