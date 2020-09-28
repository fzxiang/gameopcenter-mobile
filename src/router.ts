import Vue from 'vue'
import Router, {RouteRecordRaw} from 'vue-router'
/* Layout */
import Layout from '@/layout/index.vue'

Vue.use(Router);


export const constantRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: Layout,
    meta: {hidden: true},
    children: [
    ]
  }
]

