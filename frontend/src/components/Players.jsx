import { observer } from "mobx-react-lite";
import post from "../utils/stores/post.ts";
import Player from "./Player.jsx";
import '../assets/css/players.css'
import { useEffect } from "react";
const Players = observer(()=>{
    useEffect(()=>{
        post.setPlayers([
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
return <div className="players">
    <h3>Участники</h3>
    <div className="ps">
        {post.getPlayers().map(v=>{
            return <Player avatar={v.avatar} name={v.name} comment={v.comment}></Player>
        })}
    </div>
</div>
})

export default Players