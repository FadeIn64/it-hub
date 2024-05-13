import { observer } from "mobx-react-lite";

const Comment = observer(({avatar, name, comment})=>{
    return <div className="comment">
            <div className="info">
                <div className="img">
                    <img src={avatar} alt="" />
                </div>
                <span>{name}</span>
            </div>
            <div className="text">
                <p>
                    {comment}
                </p>
            </div>
    </div>
})

export default Comment