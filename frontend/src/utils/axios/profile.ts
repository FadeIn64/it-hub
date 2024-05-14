import axios from 'axios'
import { config } from '../../config'
import { api } from '../../api.ts'
import profile from '../stores/profile.ts'
import { Requests } from './auth.ts'
class profileUtil{

    async request(data: any){
        try {
            const o = new Requests()
            const res = await o.auth(data.login, data.password)
            if(!res){
               return false 
            }
            await this.getUserByMe()
            await this.getMePosts()
            profile.setSkills(['1C','Java','Js','C++'])
            return true
            
        } catch (error) {
            
        }
    }
    async getUserByMe(){
        try {
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const res = await axios.get(api.host+api.getUserByLogin+'/'+data.login, {auth:{
                username: data.login,
                password: data.password
            }})
            profile.setName(res.data.name)
            profile.setSername(res.data.surname)
            profile.setPar(res.data.patronymic)
            profile.setAvatar(res.data.avatar)
            profile.setEmailLink(res.data.email)
            profile.setTgLink(res.data.telegram)
            profile.setGitLink(res.data.git)
            profile.setTextAboutMe(res.data.description)
            profile.setRole(res.data.status)
        } catch (error) {
            
        }
    }
    
    async getMePosts(){

        try {
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            if(profile.getRole()=='student'){
                const res = await axios.get(api.host+api.getAllArticles, {auth:{
                    username: data.login,
                    password: data.password
                }})
                res.data=data.filter((v)=>{if(v.status=='student') return v})
                profile.setArticles(res.data)
            }
            if(profile.getRole()=='teacher'){
                const res = await axios.get(api.host+api.getAllComp, {auth:{
                    username: data.login,
                    password: data.password
                }})
                res.data=data.filter((v)=>{if(v.status=='teacher') return v})
                profile.setArticles(res.data)
            }
           

        } catch (error) {
            
        }
        

    }
}

export default profileUtil