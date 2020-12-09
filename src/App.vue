<template>
  <div id="app">
    
    <div class="pb-5" v-if="!logged == false">
      <Navbar />
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Menu"
import {mapGetters} from 'vuex'
export default {
  components:{
    Navbar
  },
  computed: mapGetters({
    logged:"getLogged"
  })
}
</script>
<style >
  @import './assets/style.css';
</style>
