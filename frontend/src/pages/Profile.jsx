import {observer} from 'mobx-react-lite'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import ava from '../assets/imgs/ava.png'
import profile from '../utils/stores/profile.ts'
import git from '../assets/imgs/git.png'
import tg from '../assets/imgs/tg.png'
import email from '../assets/imgs/email.png'
import '../assets/css/profile.css'
import { useEffect, useState } from 'react'
import plus from '../assets/imgs/plus.svg'
import plus2 from '../assets/imgs/plus2.svg'
import s from '../assets/imgs/search.svg'
import DemoMeArticle from '../components/DemoMeArticle.jsx'
import Footer from '../components/Footer.jsx'
import { Requests } from '../utils/axios/auth.ts'
import { config } from '../config.ts'
import { useNavigate } from 'react-router-dom'

const Profile =observer(()=>{
    const [state, setState] = useState(false)
    const nav =useNavigate()
    useEffect(()=>{
        const o = new Requests()
        if(document.cookie.length==0){
            nav(config.auth.auth)
        }else{
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const res = o.auth(data.login, data.password)
            setState(res)
        }
       
        profile.setAvatar(ava);
        profile.setName('Максим')
        profile.setSername('Марцинкевич')
        profile.setTextAboutMe(' Амбициозный студент СГТУ по направлению информационные технологии. Углубленно изучаю программирование, базы данных, сети и искусственный интеллект. Сильные стороны: • Глубокое понимание ИТ-принципов • Прочные навыки программирования • Отличные аналитические и коммуникативные навыки • Знакомство с искусственным интеллектом и машинным обучением')
        profile.setArticles([
            {title: 'Привет! Меня зовут Илья, и я студент ИнПИТ',
            img: 'https://avatars.dzeninfra.ru/get-zen-vh/6269254/2a00000181758c3b585bb3b81dccc29c4b6a/orig',
            text: 'Привет! Меня зовут Илья, и я студент ИнПИТ. Я увлечен технологиями и информатикой. Мне интересно создавать программное обеспечение, веб-сайты, анализировать данные и заниматься кибербезопасностью. У меня есть навыки программирования на различных языках, таких как Java, Python, C++ и других. Я также изучаю современные технологии облачных вычислений, машинного обучения и искусственного интеллекта. В свободное время я часто участвую в хакатонах, конференциях и мастер-классах, чтобы расширить свои знания и навыки в области информационных технологий.'
            }
        ])
        profile.setSkills(['1C','Java','Js','C++'])
    },[])
    if(state)
    return <>
    <div className='profile'>
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="container">
            <div className="middle">
                <div className="fio">
                    <span>{profile.getName()!=undefined?profile.getName()+' ':' '}</span>
                    <span>{profile.getSername()!=undefined?profile.getSername():''}</span>
                </div>
                <div className="aboutme">
                    <h3>О себе</h3>
                    <p>{profile.getTextAboutMe()!=undefined?profile.getTextAboutMe():''}</p>
                </div>
                <div className="projects_block">
                    <span>Проекты</span>
                    <div className="icons">
                        <img src={s} alt="" />
                        <img src={plus2} alt="" />
                    </div>
                </div>
                <div className="articles">
                    {profile.getArticles().map(v=>{
                        return <DemoMeArticle title={v.title} img={v.img} text={v.text}></DemoMeArticle>
                    })}
                </div>
            </div>
            <div className="p_card">
                <div className="avatar">
                    <div className="img">
                        <input type="file" onChange={(e)=>{
                            if(e.target.files[0]!=undefined){
                                profile.setLoadImage(e.target.files[0]); 
                                profile.setAvatar(URL.createObjectURL(e.target.files[0]))
                            }
                      }}/>
                        <img src={profile.getAvatar()!=undefined?profile.getAvatar():''} alt="" />
                    </div>
                </div>
                <div className="links">
                    <div className="link">
                        <a href={profile.getGitLink()!=undefined&&profile.getGitLink()}>
                            <img src={git} alt="" />
                            <span>{profile.getGitLink()!=undefined&&profile.getGitLink()}</span>
                        </a>
                    </div>
                    <div className="link">
                        <a href={profile.getTgLink()!=undefined&&profile.getTgLink()}>
                            <img src={tg} alt="" />
                            <span>{profile.getTgLink()!=undefined&&profile.getTgLink()}</span>
                        </a>
                    </div>
                    <div className="link">
                        <a href={profile.getEmailLink()!=undefined&&profile.getEmailLink()}>
                            <img src={email} alt="" />
                            <span>{profile.getEmailLink()!=undefined&&profile.getEmailLink()}</span>
                        </a>
                    </div>
                </div>
                <div className="skills">
                    <div className="s_top">
                      <span>Направления</span>
                      <img src={plus} alt="" />
                    </div>
                    <div className="list">
                        {profile.getSkills().map((v)=>{
                            return <div className="skill">
                                <span>{v}</span>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
      
    </div>
    <Footer></Footer>
    </>
    return <></>
})

export default Profile