import { observer } from "mobx-react-lite";
import '../assets/css/demomearticle.css'
import { useNavigate } from "react-router-dom";
import profile from "../utils/stores/profile.ts";
import post from "../utils/stores/post.ts";
import { config } from "../config.ts";
const DemoMeArticle =observer(({title, img, text})=>{
    const nav = useNavigate()
    return <div className="article">
        <h2>{title}</h2>
        <div className="img">
            <a href={img} target="_black">
                <img src={img} alt="" />
            </a>
        </div>
        <div className="text">
            <p>{text.slice(0,300)}...</p>
        </div>
        <div className="more" onClick={()=>{
              post.setPost({avatar: profile.getAvatar(), name: profile.getName()+' '+profile.getSername(), title, img, text})
              localStorage.setItem('avatar',profile.getAvatar())
              localStorage.setItem('name',profile.getName()+' '+profile.getSername())
              localStorage.setItem('title', title)
              localStorage.setItem('img', img)
              localStorage.setItem('text', text)
              nav(config.posts.post)
        }}>
            <span>Читать далее</span>
        </div>
    </div>
})

export default DemoMeArticle