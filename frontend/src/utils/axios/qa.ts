import axios from "axios";
import { api } from "../../api.ts";
import qa from "../stores/qa.ts";

export default class qaUtil{
    constructor(){}

    async getAll(){
        try {
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const res = await axios.get(api.host+api.getAllQa, {auth:{
                username: data.login,
                password: data.password
            }})
            qa.setQAs(res.data)
        } catch (error) {
            
        }
    }
}