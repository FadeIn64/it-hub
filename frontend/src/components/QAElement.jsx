import { observer } from "mobx-react-lite";
import Background from "./Background";
import Sidebar from "./Sidebar";
import { useEffect, useState } from "react";
import usersUtil from "../utils/axios/users.ts";
import { config } from "../config.ts";
import { Requests } from "../utils/axios/auth.ts";
import { useNavigate } from "react-router-dom";
import qa from "../utils/stores/qa.ts";

const QAElement=observer(()=>{
    const [user, setUser]= useState(null)
    const [state, setState] = useState(false)
    const nav = useNavigate()
    useEffect(()=>{
        if(document.cookie.length==0){
            nav(config.auth.auth)
        }else{
            let author;
            if(qa.getQA!=undefined){
                author= qa.getQA().author
            }
            else{
                author = localStorage.getItem('author')
            }
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const o = new Requests()
            const res = o.auth(data.login,data.password)
            if(res){
                const user= new usersUtil()
                user.getUser(author).then(v=>{
                    setUser(v)
                })
            }

            setState(res)
        }
    },[])

    let author;
    let header
    let text;
    let date;
    let themes;
    if(qa.getQA!=undefined){
         author= qa.getQA().author
         header= qa.getQA().header
         text= qa.getQA().text
         date= qa.getQA().date
         themes = qa.getQA().themes
    }
    else{
        author = localStorage.getItem('author')
        header = localStorage.gettItem('header')
        text = localStorage.setItem('description', text)
        date = localStorage.setItem('date', date)
        themes = localStorage.setItem('themes', themes.join(','))
    }
    if(state)
    return <div className="qaelement">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="qae_b">
            <div className="header">
                <div className="info">
                    <div className="img">
                        <img src={user&&user.avatar} alt="" />
                    </div>
                    <div className="i">
                        <div className="name">
                            <span>{user&&user.surname} {user&&user.name}</span>
                        </div>
                        <div className="date">
                            <span>{new Date(date).getFullYear()}-{String(new Date(date).getMonth()).length==1?'0'+new Date(date).getMonth():new Date(date).getMonth()}-{new Date(date).getDate()} {new Date(date).getHours()}:{new Date(date).getMinutes()}</span>
                        </div>
                    </div>
                </div>
                <div className="themes">
                    <div className="themes">
                        {themes.map(v=>{return  <span>{v}</span>})}
                    </div>
                </div>
            </div>
        </div>
    </div>
    return <></>
})

export default QAElement