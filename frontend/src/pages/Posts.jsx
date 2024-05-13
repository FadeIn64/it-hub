import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import '../assets/css/lenta.css'
import { useEffect, useState } from "react";
import lenta from "../utils/stores/lenta.ts";
import Article from "../components/Article.jsx";
import Footer from "../components/Footer.jsx";
import { Requests } from "../utils/axios/auth.ts";
import { config } from "../config.ts";
import { useNavigate } from "react-router-dom";
const Posts = observer(()=>{
    const [state, setState] = useState(false)
    const nav  = useNavigate()
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
    useEffect(()=>{
       lenta.setPosts([
            {
                avatar:  'https://cdn.ren.tv/cache/1200x630/media/img/6d/54/6d54c97705a4d0225a5935b35adc9a078d30442d.jpg',
                name: 'Максим Марцинкевич Тесак',
                title: 'Привет! Меня зовут Илья, и я студент ИнПИТ',
                img: 'https://avatars.dzeninfra.ru/get-zen-vh/6269254/2a00000181758c3b585bb3b81dccc29c4b6a/orig',
                text: 'Привет! Меня зовут Илья, и я студент ИнПИТ. Я увлечен технологиями и информатикой. Мне интересно создавать программное обеспечение, веб-сайты, анализировать данные и заниматься кибербезопасностью. У меня есть навыки программирования на различных языках, таких как Java, Python, C++ и других. Я также изучаю современные технологии облачных вычислений, машинного обучения и искусственного интеллекта. В свободное время я часто участвую в хакатонах, конференциях и мастер-классах, чтобы расширить свои знания и навыки в области информационных технологий.'
            },
            {
                avatar:  'https://cdn.ren.tv/cache/1200x630/media/img/6d/54/6d54c97705a4d0225a5935b35adc9a078d30442d.jpg',
                name: 'Максим Марцинкевич Тесак',
                title: 'Привет! Меня зовут Илья, и я студент ИнПИТ',
                img: 'https://cdn.ren.tv/cache/1200x630/media/img/6d/54/6d54c97705a4d0225a5935b35adc9a078d30442d.jpg',
                text: 'Привет! Меня зовут Илья, и я студент ИнПИТ. Я увлечен технологиями и информатикой. Мне интересно создавать программное обеспечение, веб-сайты, анализировать данные и заниматься кибербезопасностью. У меня есть навыки программирования на различных языках, таких как Java, Python, C++ и других. Я также изучаю современные технологии облачных вычислений, машинного обучения и искусственного интеллекта. В свободное время я часто участвую в хакатонах, конференциях и мастер-классах, чтобы расширить свои знания и навыки в области информационных технологий.'
            }
        ])
    },[])
    if(state)
    return <>
    <div className="lenta">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="lenta_cont">
            {lenta.getPosts().map(v=>{
                return <Article avatar={v.avatar} name={v.name} title={v.title} img={v.img} text={v.text}></Article>
            })}
        </div>
    </div>
    <Footer></Footer>
    </>
    return <></>
})

export default Posts