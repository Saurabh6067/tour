import React from 'react';
import 'animate.css';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import Menu from './component/Menu';
import Main from './component/home/Main';



function App() {
  return (
    <>
    <Router>
      <Menu/>  
      <Routes>
        <Route path='/home' element={<Main />}/>
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
