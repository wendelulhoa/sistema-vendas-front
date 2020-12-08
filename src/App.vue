<template>
  <div id="app">
    
    <div class="pb-5">
      <Navbar/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "@/components/Menu"
export default {
  components:{
    Navbar
  }
}
</script>
