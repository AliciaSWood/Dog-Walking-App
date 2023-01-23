import './App.css';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Onboarding from './components/Onboarding';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

const App = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/dashboard" element={<Dashboard/>}/>
  <Route path="/onboarding" element={<Onboarding/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
