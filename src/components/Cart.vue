<template>
  <div>
    <div class="row">
      <div class="col-lg-12 col-md-12 col-sm-12 bootstrap snippets">
        <!-- Cart -->
        <div class="card">
          <div class="card-header">
            <span class="card-title">Shopping Cart</span>
          </div>
          <div class="card-body hero-feature">
            <div class="table-responsive push">
              <table
                class="table table-bordered table-hover tbl-cart text-nowrap"
              >
                <thead>
                  <tr>
                    <td class="hidden-xs"></td>
                    <td>nome</td>
                    <td>preço</td>
                    <td>Size</td>
                    <td>Delete</td>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in listaProdutos" :key="index">
                    <td class="hidden-xs">
                      <a href="#">
                        <img :src="item.pathImg" width="50" height="50" />
                      </a>
                    </td>
                    <td>
                      <a href="#">{{ item.nome }}</a>
                    </td>
                    <td class="price">{{ item.precoProduto }}</td>
                    <td>
                      <div class="input-group bootstrap-touchspin w-50">
                        <span class="input-group-btn">
                          <button
                            class="btn btn-primary bootstrap-touchspin-down"
                            type="button"
                            @click="remove(index)"
                          >
                            -
                          </button>
                        </span>
                        <span
                          class="input-group-addon bootstrap-touchspin-prefix d-none"
                        ></span>
                        <input
                          type="text"
                          name="product"
                          :value="item.quantidade"
                          class="input-qty form-control text-center d-block"
                        />
                        <span
                          class="input-group-addon bootstrap-touchspin-postfix d-none"
                        ></span>
                        <span class="input-group-btn">
                          <button
                            class="btn btn-primary  bootstrap-touchspin-up"
                            type="button"
                            @click="add(index)"
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </td>
                    <td class="text-center">
                      <span class="remove_cart">
                        <button
                          class="btn btn-danger bootstrap-touchspin-down"
                          type="button"
                          @click="remove(index, true)"
                        >
                          <i class="fa fa-trash-o"></i>
                        </button>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <form class="text-left  product-cart mt-2 mb-0">
              <div class="row">
                <div class="col-6">
                  <input
                    class="productcart form-control"
                    type="text"
                    placeholder="Coupon Code"
                  />
                </div>
                <div class="col-6">
                  <a href="#" class="btn btn-primary">Apply</a>
                </div>
              </div>
            </form>
          </div>
        </div>
        <!-- End Cart -->
      </div>

      <div class="col-lg-12">
        <div class="card ">
          <div class="card-header ">
            <h3 class="card-title">Order Summery</h3>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered align-items-center">
                <tbody>
                  <tr>
                    <td>Cart Subtotal</td>
                    <td class="text-right">{{ total }}</td>
                  </tr>
                  <tr>
                    <td><span>Discount</span></td>
                    <td class="text-right text-muted"><span>0.0%</span></td>
                  </tr>
                  <tr>
                    <td><span>Totals</span></td>
                    <td class="text-right text-muted"><span>{{ total }}</span></td>
                  </tr>
                  <tr>
                    <td><span>Order Total</span></td>
                    <td>
                      <h2 class="price text-right mb-0">{{ total }}</h2>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <form class="text-center mt-0">
              
              <ModalCheckout />
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ModalCheckout from './ModalCheckout'
import Mixin from '@/mixins/mixin'
export default {
  components:{
    ModalCheckout
  },
  mixins: [Mixin],
  computed: {
    ...mapGetters({
      listaProdutos: "getListaProdutos",
      host:"getHost"
    })
  },
  mounted(){
    this.somaPedido()
  },
  methods: {
    ...mapActions({
      changeListaProdutosAdd: "changeListaProdutosAdd",
      changeListaProdutosRemove: "changeListaProdutosRemove"
    }),
    
    add(index) {
      this.changeListaProdutosAdd(index);
      this.somaPedido()
    },
    remove(index) {
      this.changeListaProdutosRemove(index);
      this.somaPedido()
    },
    
  }
};
</script>
