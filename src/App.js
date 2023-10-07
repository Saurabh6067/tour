 import React from 'react';
import 'animate.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
// import Menu from './component/Menu';
import Main from './component/home/Main';
import Enter from './Enter';
import Numer from './Numer';
import Login from './Login';
import Admin from './Admin-pannel/Admin';
import Dashbord from './Admin-pannel/Dashbord';
import Report from './Admin-pannel/Report';
import Userefff from './Userefff';
import Fetch from './jsonnn/Fetch';
// import AboutMain from './component/aboutsection/AboutMain';




function App() {
  return (
    <>
    <Router>
      {/* <Menu/>   */}
      <Routes>

        <Route path='/' element={<Login />}/>
        <Route path='/home' element={<Main />}/>
        <Route path='/input' element={<Enter />}/>
        <Route path='/num' element={<Numer />}/>
        <Route path='/admin' element={<Admin />}/>
        <Route path='/dash' element={<Dashbord />}/>
        <Route path='/report' element={<Report />}/>
        <Route path='/reff' element={<Userefff />}/>
        <Route path='/fet' element={<Fetch />}/>



        {/* <Route path='/about' element={<AboutMain/>}/> */}
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
