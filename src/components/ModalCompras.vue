<template>
    <div>
  <b-button @click="find()" variant="primary">detalhes pedido</b-button>
  <b-modal v-model="show" id="modal-scrollable" scrollable size="lg" title="compras detalhe">
      
            <Table :arrayContent="compras" />
  </b-modal>

</div>
</template>
<script>
import Table from './TableCompra'
import {api} from '@/app/http/axios/api/api'
import {mapGetters} from 'vuex'
export default {
    components:{
        Table
    },
    props: {
        cod: {
            type: String
        }
    },
    data() {
        return {
            show: false,
            compras: []
        }
    },
    computed: {
        ...mapGetters({
            cpf:"getCpf"
        })
    },
    methods: {
        find(){
        this.show = true
         api.find(`find/compras?tipo=compras&cod=${this.cod}&cpf=${this.cpf}`).then(e => {
      this.compras = e.data;
      
    });
    }
    }
}
</script>