import React, {useEffect} from 'react';
import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.jsx';
import Teacher from './pages/teacher/Teacher';

import Home from './pages/homepage/Home';
import './App.css';

import axios from 'axios';
import Job from './pages/Job/Job';

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