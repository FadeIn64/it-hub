import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import challenges from "../utils/stores/challenges.ts";
import { useEffect, useState } from "react";
import '../assets/css/challenges.css'
import ChallengeDemo from "../components/ChallengeDemo.jsx";
import Footer from "../components/Footer.jsx";
import { Requests } from "../utils/axios/auth.ts";
import { config } from "../config.ts";
import { useNavigate } from "react-router-dom";
import { competitions } from "../utils/axios/competitions.ts";
const Challenges = observer(()=>{
    const [state, setState] = useState(false)
    const nav = useNavigate()
    useEffect(()=>{
        if(document.cookie.length==0){
            nav(config.auth.auth)
        }else{
            const o = new Requests()
            const cookee= document.cookie.split('=')[1]
            const data = JSON.parse(cookee)
            const res = o.auth(data.login, data.password)
            setState(res)
        }
    },[])
    useEffect(()=>{
        const c = new competitions()
        c.getAll()
    },[])
    if(state)
    return <>
    <div className="challenges">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="chals_cont">
            {challenges.getChallenges().map(v=>{
                return <ChallengeDemo author={v.author} title={v.header} img={v.headerImg} text={v.description} theme={v.themes} date={v.pub_date}></ChallengeDemo>
            })}
        </div>
    </div>
    <Footer></Footer>
    </>
    return <></>
})

export default Challenges