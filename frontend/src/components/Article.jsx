import { observer } from "mobx-react-lite";
import post from "../utils/stores/post.ts";
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";

const Article = observer(({avatar, name, title, img, text})=>{
    const nav = useNavigate()
    return <div className="article_p">
        <div className="header">
            <div className="avatar">
                <img src={avatar} alt="" />
            </div>
            <span>{name}</span>
        </div>
        <h2>{title}</h2>
        <div className="text">
            <p>{text.slice(0,300)}...</p>
        </div>
        <div className="img">
            <a href={img} target="_black">
                <img src={img} alt="" />
            </a>
        </div>
      
        <div className="more" onClick={()=>{
            post.setPost({avatar, name, title, img, text})
            localStorage.setItem('avatar',avatar)
            localStorage.setItem('name',name)
            localStorage.setItem('title', title)
            localStorage.setItem('img', img)
            localStorage.setItem('text', text)
            nav(config.posts.post)
        }}>
            <span>Читать далее</span>
        </div>
    </div>
})

export default Article