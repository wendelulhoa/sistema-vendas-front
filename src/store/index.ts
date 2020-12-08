import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
import Cart from "@/app/models/Cart"
export const store = new Vuex.Store({
  modules:{
    Cart
  }
})
