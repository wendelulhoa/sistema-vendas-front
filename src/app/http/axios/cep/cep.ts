import {http} from './configApi'
export default {

    cep: (cep: number) => {
        return http.get(`${cep}/json/`)
    },
    

}