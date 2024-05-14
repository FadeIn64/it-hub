import { observer } from "mobx-react-lite";
import challenges from "../utils/stores/challenges.ts";
import Background from "../components/Background.jsx";
import Sidebar from "../components/Sidebar.jsx";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";
import { Requests } from "../utils/axios/auth.ts";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import Players from "../components/Players.jsx";

const Challenge=observer(()=>{
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
    let theme;
    let date;
    if(challenges.getChallenge()!=undefined){
        avatar= challenges.getChallenge().avatar
        name= challenges.getChallenge().name
        title= challenges.getChallenge().title
        img= challenges.getChallenge().img
        text= challenges.getChallenge().text
        theme= challenges.getChallenge().theme
        date= challenges.getChallenge().date
    }
    else{
        avatar = localStorage.getItem('avatar')
        name = localStorage.getItem('name')
        title = localStorage.getItem('title')
        img = localStorage.getItem('img')
        text = localStorage.getItem('text')
        theme = localStorage.getItem('theme').split(',')
        date = localStorage.getItem('date')
    }
    if(state)
    return <>
    <div className="challenges">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="chals_cont">
            <div className="challenge_p">
                <div className="pre">
                    <div className="date">
                        <span>{new Date(date).getFullYear()}-{String(new Date(date).getMonth()).length==1?'0'+new Date(date).getMonth():new Date(date).getMonth()}-{new Date(date).getDate()} {new Date(date).getHours()}:{new Date(date).getMinutes()}</span>
                    </div>
                    <div className="themes">
                        {theme.map(v=>{return  <span>{v}</span>})}
                    </div>
                </div>
                <h2>Конкурс «{title}»</h2>
                <div className="meaners">
                    <span className="y">Организаторы:</span>
                    <div className="meaner">
                        <div className="img">
                            <img src={avatar} alt="" />
                        </div>
                        <span>{name}</span>
                    </div>
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
                <div className="imgg">
                    <a href={img} target="_black">
                        <img src={img} alt="" />
                    </a>
                </div>
        
                <div className="ye" onClick={()=>{
                }}>
                    <span>Хочу участвовать</span>
                </div>
            </div>
            <Players></Players>
        </div>
        
    </div>
    <Footer></Footer>
    </>
    return <></>
})

export default Challenge