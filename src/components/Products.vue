<template>
  <div>
    <div class="row row-cards">
      <div class="col-lg-12 col-xl-9">
        <div class="row">
          <div
            class="col-sm-4 col-xl-4"
            v-for="(item, index) in produtos"
            :key="index"
          >
            <div class="card item-card ">
              <div class="card-body">
                <div class="product">
                  <div class="text-center product-img">
                    <img :src="item.path_img" alt="img" class="img-fluid" />
                  </div>

                  <div class="text-center mt-4">
                    <div class="text-center text-warning">
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star"></i>
                      <i class="fa fa-star-half-o"></i>
                      <i class="fa fa-star-o"></i>
                    </div>
                    <a href="#"
                      ><h5 class="mb-0 mt-2">{{ item.nome_produto }}</h5></a
                    >
                    <div class="price mt-3 h4 mb-0 ">
                      R$: {{ item.preco_produto }}
                    </div>
                  </div>
                  <div class="product-info">
                    <a
                      href="#"
                      class="btn  btn-info btn-sm mt-1 mb-1 text-sm  text-white"
                    >
                      <i class="fe fe-heart"></i>
                    </a>
                    <a
                      href="#"
                      class="btn btn-icon btn-sm btn-danger mt-1 text-sm  mb-1 text-white"
                    >
                      <i class="fe fe-share-2"></i>
                    </a>
                    <a
                      @click="
                        add(
                          item.id,
                          item.preco_produto,
                          item.nome_produto,
                          item.path_img
                        )
                      "
                      class="btn btn-icon btn-sm btn-warning mt-1 text-sm  mb-1 text-white"
                    >
                      <i class="fe fe-shopping-cart"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- row end -->
      </div>
      <div class="col-lg-12 col-xl-3">
        <div class="card">
          <div class="row card-body p-2">
            <div class="col-sm-12 pl-2 pr-2">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search ..."
                  v-model="nomeProduto"
                />
                <span class="input-group-append">
                  <button class="btn btn-primary" @click="find('produto')" type="button">
                    Search
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-lg-12">
            <div class="card">
              <div class="card-header">
                <div class="card-title">Categorias</div>
              </div>
              <div class="card-body">
                <div class="form-group">
                  <form @submit.prevent name="categoria">
                  <label class="form-label">categorias</label>
                  <select
                    name="categorias"
                    id="select-beast"
                    class="form-control custom-select select2"
                  >
                    <option v-for="(item, index) in categorias" :key="index" :value="item.id">{{item.nome}}</option>
                  </select>
                  <div class="p-2">
                    <button
                      class="btn btn-primary"
                      @click="find('categoria')"
                      type="button"
                    >
                      Search
                    </button>
                    
                  </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- Filter -->
        
          </div>
        </div>
        <!-- row end -->
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { api } from "@/app/http/axios/api/api";
import Mixin from '@/mixins/mixin'
export default {
  data() {
    return {
      produtos: [],
      nomeProduto: "",
      categorias: []
    };
  },
   mixins: [Mixin],
  mounted() {
    api.find("find/produtos?tipo=produto").then(e => {
      this.produtos = e.data;
    });
    api.find("find/produtos?tipo=categoria").then(e => {
      this.categorias = e.data;
    });
  },
  computed: {
    ...mapGetters({
      listaProdutos: "getListaProdutos",
      total: "getTotal",
      cpf: "getCpf",
      totalCart:"getProdutosCart"
    })
  },
  methods: {
    ...mapActions({
      changeListaProdutos: "changeListaProdutos",
      changeProdutosCart: "changeProdutosCart"
    }),
    find(type) {
        if(type == 'produto'){
             api
        .find(`find/produtos?tipo=produtoFind&value=${this.nomeProduto}`)
        .then(e => {
          this.produtos = e.data;
        });
        }else if(type == 'categoria'){
          const form = document.forms.namedItem("categoria");
             api
        .find(`find/produtos?tipo=categoriaFind&value=${form[0].value}`)
        .then(e => {
          this.produtos = e.data;
        });
        }else{
           api
        .find(`find/produtos?tipo=produtoFind&value=${this.nomeProduto}`)
        .then(e => {
          this.produtos = e.data;
        });
        }
    },
    add(cod, preco, nome, path) {

      if (this.listaProdutos.find((e) => e.codProduto === cod)){
        this.$bvToast.toast('por favor, selecione outro item', {
                title: 'item já incluso na lista',
                variant: 'danger',
                solid: true
              })
      }else{
        this.changeListaProdutos({
        codProduto: cod,
        precoProduto: preco,
        nome: nome,
        quantidade: 1,
        pathImg: path,
        cpf: this.cpf
      });
      this.somaPedido()
      this.$bvToast.toast('item adicionado ao carrinho', {
                title: 'item adicionado ao carrinho',
                variant: 'success',
                solid: true
              })
              let totalCart = parseInt(this.totalCart)
              totalCart++
              this.changeProdutosCart( totalCart)
      }

      
    }
  }
};
</script>