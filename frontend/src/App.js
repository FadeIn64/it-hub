import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { config } from './config.ts';
import Profile from './pages/Profile.jsx';
import './assets/css/default.css'
function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path={config.profile} element={<Profile></Profile>}>

      </Route>
    </Routes>
  </BrowserRouter>
  </>
  
}

export default App;
