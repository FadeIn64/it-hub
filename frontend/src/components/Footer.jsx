import { observer } from "mobx-react-lite";
import '../assets/css/footer.css'
import logo from '../assets/imgs/logo.svg'
import sstu from '../assets/imgs/sstu.png'
const Footer = observer(()=>{
    return <footer>
        <div className="footer">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="m">
                <div className="col1">
                    <h4>Ваш аккаунт</h4>
                    <span>Войти</span>
                    <span>Регистрация</span>
                </div>
                <div className="col2">
                    <h4>Разделы</h4>
                    <span>Статьи</span>
                    <span>Конкурсы</span>
                    <span>Хакатоны</span>
                </div>
                <div className="col3">
                    <h4>Информация</h4>
                    <span>Для студентов</span>
                    <span>Для преподавателей</span>
                    <span>Для компаний</span>
                    <span>Соглашение</span>
                    <span>Конфиденциальность</span>
                </div>
            </div>
        </div>
        <div className="ff">
            <span>Тезническая поддержка</span>
            <img src={sstu} alt="" />
        </div>
    </footer>
})

export default Footer