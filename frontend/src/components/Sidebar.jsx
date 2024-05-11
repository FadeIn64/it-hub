import { observer } from "mobx-react-lite";
import '../assets/css/sidebar.css'
import sstu from '../assets/imgs/sstu.png'
import { useNavigate } from "react-router-dom";
import { config } from "../config.ts";
const Sidebar =observer(()=>{
    const nav = useNavigate()
    return <>
    <div className="sidebar">
        <nav>
            <ul className="menu">
                <li onClick={()=>{nav(config.profile)}}>
                    <span>
                        Моя страница
                    </span>
                </li>
                <li>
                    <span>
                        Статьи
                    </span>
                </li>
                <li>
                    <span>
                        Конкурсы
                    </span>
                </li>
                <li>
                    <span>
                        Чаты
                    </span>
                </li>
                <li>
                    <span>
                        Уведомления
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
            <li>
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
    </>
})

export default Sidebar