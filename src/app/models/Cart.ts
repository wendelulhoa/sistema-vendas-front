
export default {
    state:{
        listaProdutos:[],
        total:0
    },
    getters:{
        getListaProdutos(state: any){
            return state.listaProdutos
        },
        getTotal(state: any){
            return state.total
        }
    },
    mutations:{
        setListaProdutos(state: any, value: any){
            state.listaProdutos.push(value)
        },
        setTotal(state: any, value: any){
            state.total = value
        },
        setListaProdutosAdd(state: any, index: any){
            state.listaProdutos[index]['quantidade']++
        },
        setListaProdutosRemove(state: any, index: any){
            if (state.listaProdutos[index]['quantidade'] <= 1) {
                state.listaProdutos[index]['quantidade'] = 1
            } else {
                state.listaProdutos[index]['quantidade']--;
            }
        }
    },
    actions:{
        changeListaProdutos(context: any, value: any){
            context.commit('setListaProdutos', value)
        },
        changeTotal(context: any, value: any){
            context.commit('setTotal', value)
        },
        changeListaProdutosAdd(context: any, value: any){
            context.commit('setListaProdutosAdd', value)
        },
        changeListaProdutosRemove(context: any, value: any){
            context.commit('setListaProdutosRemove', value)
        },
    }
}