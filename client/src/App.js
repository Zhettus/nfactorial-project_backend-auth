import React from 'react';
import { Footer, Possibility, Features, WhatGPT3, Header } from './containers';
import { Navbar } from './components';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './pages/login/Login.jsx';
import Register from './pages/register/Register.js';
import './App.css';

const App = () => (
  <Router>
    <div className="App">
        <Routes>
            <Route path='/' element={<><div className='gradient__bg'><Navbar/><Header/></div> <WhatGPT3/><Features/><Possibility/><Footer/></>}></Route>
            <Route path='/Register' element={<Register/>}></Route>
            <Route path='/Login' element={<Login/>}>
            </Route>
        </Routes>
    </div>
  </Router>
);

export default App;