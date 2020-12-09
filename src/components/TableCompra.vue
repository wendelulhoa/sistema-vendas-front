<template>
  <div>
    <!-- Row -->
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 bootstrap snippets">
        <!-- Cart -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">compras</span>
          </div>
          <div class="card-body hero-feature">
            <div class="table-responsive push">
              <table
                class="table table-bordered table-hover tbl-cart text-nowrap"
              >
                <thead>
                  <tr > 
                    <td>nome</td>
                    <td>preço</td>
                    <td>quantidade</td>
                    <td>data compra</td>
                    <td>numero pedido</td>
                  </tr>
                </thead>
                <tbody>
                  <tr  v-for="(item, index) in arrayContent" :key="index" >
                    <td >{{item.nome_produto}}</td>
                    <td >{{ item.preco_produto }}</td>
                    <td >{{ item.quantidade }}</td>
                    <td >{{ item.data_compra }}</td>
                    <td >{{ item.num_pedido }}</td>
                    

                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- End Cart -->
      </div>
    </div>
    <!-- End Row -->
  </div>
</template>

<script>

export default {
 props:{
   arrayContent:{
     type: Array
   },
  
   }
};
</script>

