import { observer } from "mobx-react-lite";
import Player from "./Player.jsx";
import '../assets/css/players.css'
import { useEffect } from "react";
import challenges from "../utils/stores/challenges.ts";
const Players = observer(()=>{
    useEffect(()=>{
        challenges.setPlayers([
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
        {challenges.getPlayers().map(v=>{
            return <Player avatar={v.avatar} name={v.name} comment={v.comment}></Player>
        })}
    </div>
</div>
})

export default Players