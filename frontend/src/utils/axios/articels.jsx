import axios from "axios"
import lenta from "../stores/lenta.ts"
import { api } from "../../api.ts"
import { Requests } from "./auth.ts"


export default class articles{
    constructor(){}

    async getAll(){
        const cookee= document.cookie.split('=')[1]
        const data = JSON.parse(cookee)
        const res = await axios.get(api.host+api.getAllArticles, {auth:{
            username: data.login,
            password: data.password
        }})
        lenta.setPosts(res.data)
        
    }
}