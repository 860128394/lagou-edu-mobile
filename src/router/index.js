import Vue from 'vue'
import VueRouter from 'vue-router'
import Course from '@/views/course'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: 'login' */'@/views/login')
  },
  {
    path: '/',
    name: 'locoursegin',
    component: Course
  },
  {
    path: '/learn',
    name: 'learn',
    component: () => import(/* webpackChunkName: 'learn' */'@/views/learn')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: 'user' */'@/views/user')
  },
  {
    path: '*',
    name: 'error',
    component: () => import(/* webpackChunkName: 'error' */'@/views/error')
  }
]

const router = new VueRouter({
  routes
})

export default router
