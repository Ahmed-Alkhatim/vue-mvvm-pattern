import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/login/Login.vue'
import PasswordReset from '@/views/auth/login/PasswordReset.vue'
import Register from '@/views/auth/register/index.vue'
import HomePage from "@/views/home/index.vue"
import Drivers from "@/views/drivers/index.vue"
import Vehicles from "@/views/vehicles/index.vue"
import Branches from "@/views/branches/index.vue"
import Product from "@/views/products/index.vue"
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
      component: Branches
    },
    {
      path: '/product',
      name: 'product',
      component: Product
    },
    {
      path: '/drivers',
      name: 'drivers',
      component: Drivers
    },
    {
      path: '/vehicles',
      name: 'vehicles',
      component: Vehicles
    },
    {
      path: '/cpanel',
      name: 'cpanel',
      component: ''
    },

  ]
})

export default router
