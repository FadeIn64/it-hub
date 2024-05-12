import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { config } from './config.ts';
import Profile from './pages/Profile.jsx';
import './assets/css/default.css'
import ProfilePerson from './pages/ProfilePerson.jsx'
import Posts from './pages/Posts.jsx';
import Post from './pages/Post.jsx';
function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path={config.profile.way+config.profile.me} element={<Profile></Profile>}>
      </Route>
      <Route path={config.profile.way+config.profile.person} element={<ProfilePerson></ProfilePerson>}>
      </Route>
      <Route path={config.posts.posts} element={<Posts></Posts>}>
      </Route>
      <Route path={config.posts.post} element={<Post></Post>}>
      </Route>
    </Routes>
  </BrowserRouter>
  </>
  
}

export default App;
