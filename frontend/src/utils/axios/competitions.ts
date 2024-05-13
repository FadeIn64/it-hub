import axios from "axios";
import { api } from "../../api.ts";
import challenges from "../stores/challenges.ts";

export class competitions{
    async getAll(){
        try {
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const res = await axios.get(api.host+api.getAllComp, {auth:{
                username: data.login,
                password: data.password
            }})
            challenges.setChallenges(res.data)
        } catch (error) {
            
        }
    }
}