<template>
    <div>
        <TableCompras :arrayContent="pedidos" />
    </div>
</template>
<script>
import TableCompras from './TablePedido'
import {api} from '@/app/http/axios/api/api'
import {mapGetters} from 'vuex'
export default {
    components: {
        TableCompras
    },
    computed: {
        ...mapGetters({
            cpf:"getCpf"
        })
    },
    data() {
        return {
            pedidos:[]
        }
    },
    mounted(){
         api.find(`find/compras?tipo=pedidos&cpf=${this.cpf}`).then(e => {
      this.pedidos = e.data.reverse();
      
    });
    }
}
</script>