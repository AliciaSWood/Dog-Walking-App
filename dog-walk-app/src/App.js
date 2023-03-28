import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Onboarding from './components/Onboarding';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useCookies } from 'react-cookie';

const App = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])

const authToken = cookies.AuthToken


  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  {authToken && <Route path="/dashboard" element={<Dashboard/>}/>}
  {authToken && <Route path="/onboarding" element={<Onboarding/>}/>}
</Routes>
</BrowserRouter>
  );
}

export default App;
