<template>
    <div class="row">
        <div class="col-md-4 order-md-2 mb-4">
          <h4 class="d-flex justify-content-between align-items-center mb-3">
            <span class="text-muted">Seu carrinho</span>
            <span class="badge badge-secondary badge-pill">3</span>
          </h4>
          <ul class="list-group mb-3">
            <li class="list-group-item d-flex justify-content-between lh-condensed" v-for="(item, index) in listaProdutos" :key="index">
              <div>
                <h6 class="my-0">{{item.nome}}</h6>
                <small class="text-muted">quantidade: {{item.quantidade}}</small>
              </div>
              <span class="text-muted">R${{ item.precoProduto }}</span>
            </li>
            
            
            <li class="list-group-item d-flex justify-content-between bg-light">
              <div class="text-success">
                <h6 class="my-0">Código de promoção</h6>
                <small>CODIGOEXEMEPLO</small>
              </div>
              <span class="text-success">-R$0</span>
            </li>
            <li class="list-group-item d-flex justify-content-between">
              <span>Total</span>
              <strong>{{total}}</strong>
            </li>
          </ul>

          <form class="card p-2" @submit.prevent>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="Código promocional">
              <div class="input-group-append">
                <button type="submit" class="btn btn-secondary">Resgatar</button>
              </div>
            </div>
          </form>
        </div>
        <div class="col-md-8 order-md-1">
          <h4 class="mb-3">Endereço de cobrança</h4>
          <form  @submit.prevent="pagar()">

            <div class="mb-3">
              <label for="endereco">Endereço</label>
              <input type="text" class="form-control" id="endereco" placeholder="Rua dos bobos, nº 0" >
              <div class="invalid-feedback">
                Por favor, insira seu endereço de entrega.
              </div>
            </div>

            <div class="mb-3">
              <label for="endereco2">rua<span class="text-muted">(Opcional)</span></label>
              <input type="text" class="form-control" id="endereco2" placeholder="Apartamento ou casa">
            </div>

            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cep">Cidade</label>
                <input type="text" class="form-control"  :value="cidade" placeholder="cidade" >
              </div>
              <div class="col-md-3 mb-3">
                <label for="cep">uf</label>
                <input type="text" class="form-control"  :value="uf" placeholder="uf" >
              </div>

              <div class="col-md-3 mb-3">
                <label for="cep">CEP</label>
                <input type="text" class="form-control"  @blur="buscarCep($event.target.value)" placeholder="" >
                <div class="invalid-feedback">
                  É obrigatório inserir um CEP.
                </div>
              </div>
            </div>
            <hr class="mb-4">
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="mesmo-endereco">
              <label class="custom-control-label" for="mesmo-endereco">Endereço de entrega é o mesmo que o de cobrança.</label>
            </div>
            <div class="custom-control custom-checkbox">
              <input type="checkbox" class="custom-control-input" id="salvar-info">
              <label class="custom-control-label" for="salvar-info">Lembrar desta informação, na próxima vez.</label>
            </div>
            <hr class="mb-4">

            <h4 class="mb-3">Pagamento</h4>

            <div class="d-block my-3">
              <div class="custom-control custom-radio">
                <input id="credito" name="paymentMethod" type="radio" class="custom-control-input" checked="" >
                <label class="custom-control-label" for="credito">Cartão de crédito</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="debito" name="paymentMethod" type="radio" class="custom-control-input" >
                <label class="custom-control-label" for="debito">Cartão de débito</label>
              </div>
              <div class="custom-control custom-radio">
                <input id="paypal" name="paymentMethod" type="radio" class="custom-control-input" >
                <label class="custom-control-label" for="paypal">PayPal</label>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 mb-3">
                <label for="cc-nome">Nome no cartão</label>
                <input type="text" class="form-control" id="cc-nome" placeholder="" >
                <small class="text-muted">Nome completo, como mostrado no cartão.</small>
                <div class="invalid-feedback">
                  O nome que está no cartão é obrigatório.
                </div>
              </div>
              <div class="col-md-6 mb-3">
                <label for="cc-numero">Número do cartão de crédito</label>
                <input type="text" class="form-control" id="cc-numero" placeholder="" >
                <div class="invalid-feedback">
                  O número do cartão de crédito é obrigatório.
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-3 mb-3">
                <label for="cc-expiracao">Data de expiração</label>
                <input type="text" class="form-control" id="cc-expiracao" placeholder="" >
                <div class="invalid-feedback">
                  Data de expiração é obrigatória.
                </div>
              </div>
              <div class="col-md-3 mb-3">
                <label for="cc-cvv">CVV</label>
                <input type="text" class="form-control" id="cc-cvv" placeholder="" >
                <div class="invalid-feedback">
                  Código de segurança é obrigatório.
                </div>
              </div>
            </div>
            <hr class="mb-4">
            <button class="btn btn-success btn-lg btn-block" type="submit">pagar</button>
          </form>
        </div>
      </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import cep from "@/app/http/axios/cep/cep"
import {api} from "@/app/http/axios/api/api"
import Mixin from '@/mixins/mixin'
import Vue from 'vue'

export default {
  mixins: [Mixin],
  data() {
    return {
      cidade:'',
      uf:''
    }
  },
  computed: {
    ...mapGetters({
      listaProdutos: "getListaProdutos"
    })
  },
  methods: {
    ...mapActions({
      changeListaProdutosRemove: "changeListaProdutosRemove",
      changeTotal: "changeTotal",
      changeProdutosCart: "changeProdutosCart"
    }),
    buscarCep(value){
      cep.cep(value).then(e=>{
        this.cidade = e.data.localidade,
        this.uf = e.data.uf
      })
    },
    pagar(){
      api.create('payout', this.listaProdutos).then(e=>{
        this.changeListaProdutosRemove([])
        this.changeProdutosCart(0)
        this.$router.push('/compras')
      } )
      
    }
    }
}
</script>