import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/manage',
    name: 'manage',
    component: () => import('@/views/Manage.vue'),
    children: [
      {
        path: 'message',
        name: 'messageManage',
        component: () => import('@/layouts/Manage/message.vue')
      },
      {
        path: 'sticker',
        name: 'stickerManage',
        component: () => import('@/layouts/Manage/sticker.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
