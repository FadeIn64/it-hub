import { observer } from "mobx-react-lite";
import loop from '../assets/imgs/search.svg'
import '../assets/css/chats.css'
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import { Requests } from "../utils/axios/auth.ts";
import Background from "../components/Background.jsx";
import Sidebar from "../components/Sidebar.jsx";
import chats from "../utils/stores/chats.ts";
import ChatElement from "../components/ChatElement.jsx";
const Chats = observer(()=>{
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
        chats.setChats([
            {
                avatar:  'https://cdn.ren.tv/cache/1200x630/media/img/6d/54/6d54c97705a4d0225a5935b35adc9a078d30442d.jpg',
                name: 'Максим Марцинкевич Тесак',
                text: 'Привет! Меня зовут Илья, и я студент ИнПИТ.  программирования на различных языках, тлогий.'
            },
            {
                avatar:  'https://cdn.ren.tv/cache/1200x630/media/img/6d/54/6d54c97705a4d0225a5935b35adc9a078d30442d.jpg',
                name: 'Максим Марцинкевич Тесак',
                text: 'Привет! Меня зовут Илья, и я студент ИнПИТ.  программирования на различных языках, тлогий.'
            }
        ])
    },[])
    if(state)
    return <div className="chats_c">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="chats">
            <div className="left">
                <div className="search_b">
                    <div className="search">
                        <input type="text" />
                        <img src={loop} alt="" />
                    </div>
                </div>
                <div className="list">
                    {chats.getChats().map(v=>{
                        return <ChatElement avatar={v.avatar} name={v.name} text={v.text}></ChatElement>
                    })}
                </div>
            </div>
            <div className="right">
                <div className="def">
                    <span className="l">Пока пусто</span>
                    <span className="u">Добавьте чат</span>
                </div>
                
            </div>
        </div>
    </div>
 
    return <></>
})

export default Chats