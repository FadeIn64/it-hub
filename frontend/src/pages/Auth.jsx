import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import '../assets/css/auth.css'
import { useState } from "react";
import { Requests } from "../utils/axios/auth.ts";

const Auth = observer(()=>{
    const [login,setLogin] = useState('')
    const [pass, setPass] = useState('')
    const o= new Requests()
return <>
    <div className="auth">
        <Background></Background>
        <div className="form">
            <input type="text" value={login} onChange={(e)=>{setLogin(e.target.value)}}/>
            <input type="text" value={pass} onChange={(e)=>{setPass(e.target.value)}}/>
            <div className="btn" onClick={()=>{o.auth(login,pass)}}>
                <span>Отправить</span>
            </div>
        </div>
    </div>
</>
})

export default Auth