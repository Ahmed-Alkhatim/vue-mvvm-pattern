import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/login/Login.vue'
import PasswordReset from '@/views/auth/login/PasswordReset.vue'
import Register from '@/views/auth/register/index.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'home',
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
