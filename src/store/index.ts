import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Cart from "@/app/models/Cart"
import User from '@/app/models/User'
export const store = new Vuex.Store({
  modules:{
    Cart,
    User
  }
})
