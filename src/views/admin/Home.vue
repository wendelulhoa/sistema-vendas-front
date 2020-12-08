<template>
<div class="col-md-9 col-lg-9 col-xl-10 col-sm-10 ml-auto mr-auto">
  <div>
  <b-tabs content-class="mt-3">
    <b-tab title="cadastro categoria" active><CadCategoria/></b-tab>
    <b-tab title="cadastro produto"><CadProduto/></b-tab>
    <b-tab title="cadastro usuario"><CadUser/></b-tab>
  </b-tabs>
</div>
</div>
 
</template>

<script>
import CadCategoria from '@/components/cadastros/CadCategoria';
import CadProduto from '@/components/cadastros/CadProduto';
import CadUser from '@/components/cadastros/CadUser'
export default {
  components: {
   CadCategoria,
   CadProduto,
   CadUser
  },

};
</script>
<style scope>
    
</style>