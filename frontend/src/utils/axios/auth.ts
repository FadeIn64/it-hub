import {Base64} from 'js-base64';
import axios from 'axios'
import { api } from '../../api.ts';
export class Requests{
    
    async auth(login: string, pass: string){
        const base = Base64.encode(login+":"+pass)
        try {
            const res =  await axios.get(api.host+api.auth, {auth:{
                username: login,
                password: pass
            }})
            if(document.cookie.split('=')[0]!='auth'){
                document.cookie='auth='+JSON.stringify(res.data)
            }
            return true
        } catch (error) {
            return false
        }
     
    }
}