import {http} from './config'

export const api = ({

    create: async(url: string, data: any) =>{
            return await http.post(`${url}`, data);
    },
    find:async(url: string) =>{
        return await http.get(`${url}`);
    },
})