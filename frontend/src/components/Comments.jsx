import { observer } from "mobx-react-lite";
import post from "../utils/stores/post.ts";
import Comment from "./Comment.jsx";
import send from '../assets/imgs/send.svg'
import o from '../assets/imgs/o.svg'
import '../assets/css/comments.css'
import { useEffect } from "react";
import profile from "../utils/stores/profile.ts";
const Comments =observer(()=>{
    useEffect(()=>{
        post.setComments([
            {
                avatar: 'https://cdn.ren.tv/cache/1200x630/media/img/6d/54/6d54c97705a4d0225a5935b35adc9a078d30442d.jpg',
                name: 'Максим Марцинкевич Тесак',
                comment: 'Здравствуйте мои маленькие любители экстремизма'
            },
            {
                avatar: 'https://cdn.ren.tv/cache/1200x630/media/img/6d/54/6d54c97705a4d0225a5935b35adc9a078d30442d.jpg',
                name: 'Максим Марцинкевич Тесак',
                comment: 'Здравствуйте мои маленькие любители экстремизма'
            }
        ])
    },[])
    return <div className="comments">
        <h3>Комментарии</h3>
        <div className="cs">
            {post.getComments().map(v=>{
                return <Comment avatar={v.avatar} name={v.name} comment={v.comment}></Comment>
            })}
        </div>
        <div className="form">
            <h4>Написать комметарий</h4>
            <div className="r">
                <div className="input">
                    <textarea type="text" placeholder="Комментарий"/>
                    <img src={o} alt="" />
                </div>
                <div className="send">
                    <img src={send} alt="" />
                </div>
            </div>
        </div>
        
    </div>
})

export default Comments