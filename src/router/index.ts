import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from "@/views/shopping/Cart.vue"
import Products from "@/views/shopping/Products.vue"
import Payout from "@/views/shopping/Payout.vue"
import HomeAdmin from '@/views/admin/Home.vue'
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/products',
    name: 'Products',
    component: Products
  },
  {
    path: '/payout',
    name: 'payout',
    component: Payout
  },
  {
    path: '/admin',
    name: 'admin/home',
    component: HomeAdmin
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
