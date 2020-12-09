import { mapGetters, mapActions} from "vuex";
import Vue from 'vue'
export default Vue.extend({
  
    computed: {
        ...mapGetters({
          listaProdutos: "getListaProdutos",
          total: "getTotal"
        })
      },
    methods: {
        ...mapActions({
            changeTotal:"changeTotal"
        }),
        somaPedido() {
            const lista = this.listaProdutos.length;
            const listaItens = this.listaProdutos;
            let soma = 0;
            for (let i = 0; i < lista; i++) {
              const quantidade = parseFloat(listaItens[i]["quantidade"]);
              const preco = quantidade * parseFloat(listaItens[i]["precoProduto"]);
              soma = soma + preco;
            }
            this.changeTotal(soma.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL"
              }))
          }
    }
})