import { observer } from "mobx-react-lite";
import Background from "../components/Background";
import Sidebar from "../components/Sidebar";
import post from "../utils/stores/post.ts";
import '../assets/css/post.css'
const Post = observer(()=>{
    let avatar;
    let name;
    let title;
    let img;
    let text;
    if(post.getPost()!=undefined){
         avatar= post.getPost().avatar
         name= post.getPost().name
         title= post.getPost().title
         img= post.getPost().img
         text= post.getPost().text
    }
    else{
        avatar = localStorage.getItem('avatar',avatar)
        name = localStorage.getItem('name',name)
        title = localStorage.getItem('title', title)
        img = localStorage.getItem('img', img)
        text = localStorage.getItem('text', text)
    }

    return <div className="post">
        <Background></Background>
        <Sidebar></Sidebar>
        <div className="post_cont">
            <div className="c">
                <div className="header">
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                    <span>{name}</span>
                </div>
                <h2>{title}</h2>
                <div className="img">
                    <a href={img} target="_black">
                        <img src={img} alt="" />
                    </a>
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
               
            </div>
          
        </div>
    </div>
})
export default Post