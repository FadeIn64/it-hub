import { observer } from "mobx-react-lite";
import challenges from "../utils/stores/challenges.ts";
import Background from "../components/Background.jsx";
import Sidebar from "../components/Sidebar.jsx";

const Challenge=observer(()=>{
    let avatar;
    let name;
    let title;
    let img;
    let text;
    if(challenges.getChallenge()!=undefined){
         avatar= challenges.getChallenge().avatar
         name= challenges.getChallenge().name
         title= challenges.getChallenge().title
         img= challenges.getChallenge().img
         text= challenges.getChallenge().text
    }
    else{
        avatar = localStorage.getItem('avatar',avatar)
        name = localStorage.getItem('name',name)
        title = localStorage.getItem('title', title)
        img = localStorage.getItem('img', img)
        text = localStorage.getItem('text', text)
    }
    return  <div className="challenges">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="chals_cont">
            <div className="challenge_p">
                    <h2>Конкурс «{title}»</h2>
                    <div className="meaners">
                        <span className="y">Организаторы:</span>
                        <div className="meaner">
                            <div className="img">
                                <img src={avatar} alt="" />
                            </div>
                            <span>{name}</span>
                        </div>
                    </div>
                    <div className="text">
                        <p>{text}</p>
                    </div>
                    <div className="imgg">
                        <a href={img} target="_black">
                            <img src={img} alt="" />
                        </a>
                    </div>
            
                    <div className="ye" onClick={()=>{
                    }}>
                        <span>Хочу участвовать</span>
                    </div>
            </div>
        </div>
        
    </div>
    
})

export default Challenge