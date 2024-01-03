import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/login/Login.vue'
import PasswordReset from '@/views/auth/login/PasswordReset.vue'
import Register from '@/views/auth/register/index.vue'
import HomePage from "@/views/home/index.vue"
import Drivers from "@/views/drivers/index.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path : '/',
      name : 'home',
      component : HomePage
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/password-reset',
      name: 'password-reset',
      component: PasswordReset
    },
    {
      path: '/deals',
      name: 'deals',
      component: ''
    },
    {
      path: '/settings',
      name: 'settings',
      component: ''
    },
    {
      path: '/users',
      name: 'users',
      component: ''
    },
    {
      path: '/branches',
      name: 'branches',
      component: ''
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: Drivers
    },
    // {
    //   path: '/mr',
    //   name: 'mr',
    //   component: ''
    // },
    {
      path: '/cpanel',
      name: 'cpanel',
      component: ''
    },

  ]
})

export default router
