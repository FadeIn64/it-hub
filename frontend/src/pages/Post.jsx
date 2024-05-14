import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import post from "../utils/stores/post.ts";
import '../assets/css/post.css';
import Footer from "../components/Footer.jsx";
import { Requests } from "../utils/axios/auth.ts";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import Comments from "../components/Comments.jsx";
const Post = observer(()=>{
    const [state, setState] = useState(false)
    const nav = useNavigate()
    useEffect(()=>{
        if(document.cookie.length==0){
            nav(config.auth.auth)
        }else{
            const o = new Requests()
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const res = o.auth(data.login, data.password)
            setState(res)
        }
    },[])
    let avatar;
    let name;
    let title;
    let img;
    let text;
    let date;
    let themes;
    if(post.getPost()!=undefined){
         avatar= post.getPost().avatar
         name= post.getPost().name
         title= post.getPost().title
         img= post.getPost().img
         text= post.getPost().text
         date= post.getPost().date
         themes = post.getPost().themes
    }
    else{
        avatar = localStorage.getItem('avatar')
        name = localStorage.getItem('name')
        title = localStorage.getItem('title')
        img = localStorage.getItem('img')
        text = localStorage.getItem('text')
        date = localStorage.getItem('date')
        themes = localStorage.getItem('themes').split(',')
    }
    if(state)
    return <>
    <div className="post">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="post_cont">
            <div className="c">
                <div className="pre">
                    <div className="date">
                        <span>{new Date(date).getFullYear()}-{String(new Date(date).getMonth()).length==1?'0'+new Date(date).getMonth():new Date(date).getMonth()}-{new Date(date).getDate()} {new Date(date).getHours()}:{new Date(date).getMinutes()}</span>
                    </div>
                    <div className="themes">
                        {themes.map(v=>{return  <span>{v}</span>})}
                    </div>
                </div>
                <div className="header">
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <span>{name}</span>
                </div>
                <h2>{title}</h2>
                <div className="img">
                    <a href={img} target="_black">
                        <img src={img} alt="" />
                    </a>
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
               
            </div>
            <Comments></Comments>
          
        </div>
    </div>
    <Footer></Footer>
    </>
    return <></>
})
export default Post