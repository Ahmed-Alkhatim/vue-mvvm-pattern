import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/login/Login.vue'
import PasswordReset from '@/views/auth/login/PasswordReset.vue'
import Register from '@/views/auth/register/index.vue'
import HomePage from "@/views/home/index.vue"

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
  ]
})

export default router
