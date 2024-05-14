import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import usersUtil from "../utils/axios/users.ts";
import qa from "../utils/stores/qa.ts";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import { Requests } from "../utils/axios/auth.ts";
import articles from "../utils/axios/articels.jsx";


const QA = observer(({date, header, text,themes,author})=>{
    const [user, setUser]= useState(null)
    const nav = useNavigate()
    useEffect(()=>{
        if(document.cookie.length==0){
            nav(config.auth.auth)
        }else{
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const o = new Requests()
            const r = new articles()
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
    const [state, setState] = useState(false)
    if(state)
    return <div className="qa" onClick={()=>{
        qa.setQA({date, header, text,themes,author})
        localStorage.setItem('author',author)
        localStorage.setItem('header', header)
        localStorage.setItem('description', text)
        localStorage.setItem('date', date)
        localStorage.setItem('themes', themes.join(','))
        nav(config.qa.question)
    }}>
        <div className="h">
            <div className="date">
                <span>{new Date(date).getFullYear()}-{String(new Date(date).getMonth()).length==1?'0'+new Date(date).getMonth():new Date(date).getMonth()}-{new Date(date).getDate()} {new Date(date).getHours()}:{new Date(date).getMinutes()}</span>
            </div>
            <div className="themes">
                {themes.map(v=>{
                    return <span>
                        {v}
                    </span>
                })}
            </div>
        </div>
        <div className="header">
            <h4>{header}</h4>
        </div>
        <div className="text">
            <p>{text.slice(0,100)}...</p>
        </div>
        <div className="author">
            <div className="img">
                <img src={user&&user.avatar} alt="" />
            </div>
            <div className="name">
                <span>{user&&user.surname}</span>
                <span>{user&&user.name}</span>
            </div>
        </div>
    </div>
    return <></>
})

export default QA