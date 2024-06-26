import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/auth/login/Login.vue'
import PasswordReset from '@/views/auth/login/PasswordReset.vue'
import Register from '@/views/auth/register/index.vue'
import HomePage from "@/views/home/index.vue"
import Drivers from "@/views/drivers/index.vue"
import Vehicles from "@/views/vehicles/index.vue"
import Branches from "@/views/branches/index.vue"
import Product from "@/views/products/index.vue"
import Transactions from "@/views/transactions/index.vue"
import Users from "@/views/users/index.vue"

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
      path: '/settings',
      name: 'settings',
      component: ''
    },
    {
      path: '/users',
      name: 'users',
      component: Users
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
    {
      path: '/transactions',
      name: 'Transactions',
      component: Transactions
    },

  ]
})

export default router
