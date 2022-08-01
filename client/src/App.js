import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/Auth/login/Login';
import Register from './pages/Auth/register/Register';
import Teacher from './pages/teacher/Teacher';

import Home from './pages/homepage/Home';
import './App.css';
import Job from './pages/Job/Job';
import { REGISTER_ROUTE } from './utils/consts';

const App = () => (

  <>

    <Router>
      <div className="App">
        <Routes>
              {/* <Route path='/' element={<><div className='gradient__bg'><Navbar/><Header/></div> <WhatGPT3/><Features/><Possibility/><Footer/></>}></Route> */}
              <Route path='/' element={<Home/>}></Route>
              <Route path='/Register' element={<Register/>}></Route>
              <Route path='/Login' element={<Login/>}></Route>
              <Route path='/Teacher' element={<Teacher/>}></Route>
              <Route path='/Job' element={<Job/>}></Route>
          </Routes>
      </div>
    </Router>
  </>

);

export default App;