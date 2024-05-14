import axios from "axios";
import { api } from "../../api.ts";

export default class usersUtil{
    constructor(){}

    async getUser(login: string){
        try {
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const res = await axios.get(api.host+api.getUser+'/'+login, {auth:{
                username: data.login,
                password: data.password
            }})
            return res.data
        } catch (error) {
            
        }
    }
}