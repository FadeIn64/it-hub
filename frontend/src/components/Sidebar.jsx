import { observer } from "mobx-react-lite";
import '../assets/css/sidebar.css'
import sstu from '../assets/imgs/sstu.png'
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import challenges from "../utils/stores/challenges.ts";
import profile from "../utils/stores/profile.ts";
import { useEffect, useState } from "react";
import menu from '../assets/imgs/menu.svg'
const Sidebar =observer(()=>{
    const nav = useNavigate()
    return <div className="n">
    <div className="sidebar_cont">
        <div className="sidebar">
            <nav>
                <ul className="menu">
                    <li onClick={()=>{nav(config.profile.way+config.profile.me)}}>
                        <span>
                            Моя страница
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.posts.posts)}}>
                        <span>
                            Статьи
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.posts.challenges)}}>
                        <span>
                            Конкурсы
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.chats.chats)}}>
                        <span>
                            Чаты
                        </span>
                    </li>
                    <li>
                        <span>
                            Уведомления
                        </span>
                    </li>
                    <li onClick={()=>{nav(config.qa.qa)}}>
                        <span>
                            Q&A
                        </span>
                    </li>
                    <li>
                        <span >
                            <a href="http://178.154.225.104:8081/">
                                Git
                            </a>
                            
                        </span>
                    </li>
                </ul>
            </nav>
        
            <ul className="bottom">
                <li>
                    <span>
                        Редактировать
                    </span>
                </li>
                <li onClick={()=>{
                        document.cookie='auth="22"; max-age=0;'
                        nav('/')
                        challenges.setChallenges([])
                        challenges.setChallenge(undefined)
                        profile.setArticles([])
                        
                    }}>
                    <span>
                        Выйти
                    </span>
                </li>
                <li>
                    <a href="https://www.sstu.ru/">
                        <img src={sstu} alt="" />
                    </a>
                
                </li>
            </ul>
        </div>
    </div>
   
    </div>
})

export default Sidebar