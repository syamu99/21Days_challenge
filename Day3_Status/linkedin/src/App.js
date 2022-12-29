
import './App.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/index';
import MyNetworks from './Pages/MyNetworks/index'
import Jobs from './Pages/Jobs/index';
import Messaging from './Pages/Messaging/index';
import Notifications from './Pages/Notifications/index';
import Me from './Pages/Me/index';

import Navbar from './layout/navbar';




function App() {
  return (
  
    <BrowserRouter>
    <Navbar/>
   <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/MyNetwork' element={<MyNetworks/>}/>
   <Route path='/Jobs' element={<Jobs/>}/>
   <Route path='/Messaging' element={<Messaging/>}/>
   <Route path='/Notifications' element={<Notifications/>}/>
   <Route path='/Me' element={<Me/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
