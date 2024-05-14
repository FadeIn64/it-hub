import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import '../assets/css/qa.css'
import { useEffect } from "react";
import qa from "../utils/stores/qa.ts";
import QA from "./QA.jsx";
import qaUtil from "../utils/axios/qa.ts";
import '../assets/css/qa.css'
const QAs = observer(()=>{
    useEffect(()=>{
        const q= new qaUtil()
        q.getAll()
    },[])
    return <div className="qas">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="qa_b">
            <div className="b">
                {qa.getQAs().map(v=>{
                return <QA date={v.pub_date} header={v.header} text={v.description} themes={v.themes} author={v.author}></QA>
                })}
            </div>
        </div>
    </div>
})

export default QAs