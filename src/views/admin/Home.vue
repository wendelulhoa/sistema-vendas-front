<template>
<div class="col-md-9 col-lg-9 col-xl-10 col-sm-10 ml-auto mr-auto">
  <div>
  <b-tabs content-class="mt-3">
    <b-tab title="cadastro categoria" active><CadCategoria/></b-tab>
    <b-tab title="cadastro produto" @click="find()"><CadProduto :categoria="categorias"/></b-tab>
    <b-tab title="cadastro usuario"><CadUser/></b-tab>
  </b-tabs>
</div>
</div>
 
</template>

<script>
import { api } from "@/app/http/axios/api/api";
import CadCategoria from '@/components/cadastros/CadCategoria';
import CadProduto from '@/components/cadastros/CadProduto';
import CadUser from '@/components/cadastros/CadUser'
export default {
  components: {
   CadCategoria,
   CadProduto,
   CadUser
  },
  data() {
    return {
      categorias:[]
    }
  },
  methods: {
    find(){
    api.find('find/produtos?tipo=categoria').then(e=>{
      this.categorias = e.data
    })
  }
  }
};
</script>
<style scope>
    
</style>