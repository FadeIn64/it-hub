import {observer} from 'mobx-react-lite'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import ava from '../assets/imgs/ava.png'
import profile from '../utils/stores/profile.ts'
import git from '../assets/imgs/git.png'
import tg from '../assets/imgs/tg.png'
import email from '../assets/imgs/email.png'
import '../assets/css/profile.css'
import { useEffect } from 'react'
import plus from '../assets/imgs/plus.svg'

const Profile =observer(()=>{
    useEffect(()=>{
        profile.setAvatar(ava);
        profile.setName('Максим')
        profile.setSername('Марцинкевич')
        profile.setTextAboutMe(' Амбициозный студент СГТУ по направлению информационные технологии. Углубленно изучаю программирование, базы данных, сети и искусственный интеллект.Сильные стороны: • Глубокое понимание ИТ-принципов • Прочные навыки программирования • Отличные аналитические и коммуникативные навыки • Знакомство с искусственным интеллектом и машинным обучением')
    },[])
   
    return <div className='profile'>
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
                </div>
            </div>
        </div>
    </div>
})

export default Profile