import axios from "axios";
import { api } from "../../api.ts";
import qa from "../stores/qa.ts";
import filters from "../stores/filters.ts";
import createThemes from "../functions/createThemes.ts";

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
            filters.setQA(res.data)
            filters.setThemes(createThemes(res.data))
        } catch (error) {
            
        }
    }

    async getQA(id: string){
        try {
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const res = await axios.get(api.host+api.getQa+'/'+id, {auth:{
                username: data.login,
                password: data.password
            }})
            qa.setQA(res.data)
            return true
        } catch (error) {
            
        }
    }
}