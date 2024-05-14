import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
import challenges from "../utils/stores/challenges.ts";
import { useEffect } from "react";

const ChallengeDemo=observer(({author,avatar, name, title, img, text, theme,date})=>{
    useEffect(()=>{

    },[])
    const nav = useNavigate()
    return  <div className="challenge_p">
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
            <p>{text.slice(0,300)}...</p>
        </div>
        <div className="imgg">
            <a href={img} target="_black">
                <img src={img} alt="" />
            </a>
        </div>
  
        <div className="more" onClick={()=>{
            challenges.setChallenge({avatar, name, title, img, text,theme,date})
            localStorage.setItem('avatar',avatar)
            localStorage.setItem('name',name)
            localStorage.setItem('title', title)
            localStorage.setItem('img', img)
            localStorage.setItem('text', text)
            localStorage.setItem('theme', theme.join(','))
            localStorage.setItem('date', date)
            nav(config.posts.challenge)
        }}>
            <span>Читать далее</span>
        </div>
       
    </div>
})

export default ChallengeDemo