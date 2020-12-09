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
                    <td>data compra</td>
                    <td>total</td>
                    <td></td>
                  </tr>
                </thead>
                <tbody>
                  <tr  v-for="(item, index) in arrayContent" :key="index" >
                    <td >{{item.data_compra}}</td>
                    <td >{{ item.cod_pedido }}</td>
                    <td >
                      <ModalCompra :pedido="item.cod_pedido" :cod="item.cod_pedido"/>
                    </td>
                    

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
import {mapActions} from "vuex";
import ModalCompra from './ModalCompras'
export default {
  components:{
    ModalCompra
  },
 props:{
   arrayContent:{
     type: Array
   },
  
   }
};
</script>

