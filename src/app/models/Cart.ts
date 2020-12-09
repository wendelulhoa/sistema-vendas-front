
export default {
    state:{
        listaProdutos:[],
        total:0,
        produtosCart:0
    },
    getters:{
        getListaProdutos(state: any){
            return state.listaProdutos
        },
        getTotal(state: any){
            return state.total
        },
        getProdutosCart(state: any){
            return state.produtosCart
        }
    },
    mutations:{
        setListaProdutos(state: any, value: any){
            state.listaProdutos.push(value)
        },
        setTotal(state: any, value: any){
            state.total = value
        },
        setProdutosCart(state: any, value: number){
            state.produtosCart = value
        },
        setListaProdutosAdd(state: any, index: any){
            state.listaProdutos[index]['quantidade']++
        },
        setListaProdutosRemove(state: any, value: any){
            state.listaProdutos = value
        }
    },
    actions:{
        changeListaProdutos(context: any, value: any){
            context.commit('setListaProdutos', value)
        },
        changeTotal(context: any, value: any){
            context.commit('setTotal', value)
        },
        changeProdutosCart(context: any, value: number){
            context.commit('setProdutosCart', value)
        },
        changeListaProdutosAdd(context: any, value: any){
            context.commit('setListaProdutosAdd', value)
        },
        changeListaProdutosRemove(context: any, value: any){
            context.commit('setListaProdutosRemove', value)
        },
    }
}