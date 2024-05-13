import { observer } from "mobx-react-lite";

const Player = observer(({avatar, date, name, comment})=>{
    return <div className="player">
        <div className="info">
            <div className="img">
                <img src={avatar} alt="" />
            </div>
            <div className="i">
                <h4>{name}</h4>
                <span>3 часа назад</span>
            </div>
        </div>
        <div className="text">
            <p>
                {comment}
            </p>
        </div>
        <div className="btn">
            <span>Написать</span>
        </div>
    </div>
})

export default Player