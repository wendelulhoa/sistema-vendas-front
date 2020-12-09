import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from "@/views/shopping/Cart.vue"
import Products from "@/views/shopping/Products.vue"
import Payout from "@/views/shopping/Payout.vue"
import HomeAdmin from '@/views/admin/Home.vue'
import Compras from '@/views/shopping/Compras.vue'
import Login from "@/views/login/Login.vue"
import { store } from './../store/index';
Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Products
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
  {
    path: '/compras',
    name: 'compras',
    component: Compras
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.getLogged;
  if (to.name !== 'login' && !isAuthenticated) next({ name: 'login' })
  else{
    store.commit('setCpf',localStorage.getItem('cpf'))
    store.commit('setUserName',localStorage.getItem('username'))
    next()
  }
})
export default router
