import {observer} from 'mobx-react-lite'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
const Profile =observer(()=>{
    return <>
        <Background></Background>
        <Sidebar></Sidebar>
    </>
})

export default Profile