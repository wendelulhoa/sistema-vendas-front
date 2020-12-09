
export default {
    state: {
        cpf:0,
        username: '',
        logged: false
    },
    getters:{
        getCpf(state: any){
            return state.cpf;
        },
        getUserName(state: any){
            return state.username;
        },
        getLogged(state: any){
            return state.logged;
        }
    },
    mutations:{
        setCpf(state: any, value: number){
            state.cpf = value
        },
        setUserName(state: any, value: string){
            state.username = value
        },
        setLogged(state: any, value: boolean){
            state.logged = value
        }
    },
    actions:{
        changeCpf(context: any, value: number){
            context.commit('setCpf', value)
        },
        changeUserName(context: any, value: number){
            context.commit('setUserName', value)
        },
        changeLogged(context: any, value: boolean){
            context.commit('setLogged', value)
        }
    }
}