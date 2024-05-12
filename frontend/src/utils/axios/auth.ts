import {Base64} from 'js-base64';
import axios from 'axios'
import { api } from '../../api.ts';
export class Requests{
    async auth(login: string, pass: string){
        const base = Base64.encode(login+":"+pass)
        try {
            const res =  await axios.get(api.host+api.auth, {headers: {Authorization: 'Basic '+base}})
            console.log(res)
        } catch (error) {
            console.log(error)
        }
     
    }
}