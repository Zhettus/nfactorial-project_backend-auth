import React from 'react';
import { Footer, Possibility, Features, WhatGPT3, Header } from '../../containers';
import  NavBar  from '../../components/navbar/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const Home = () => {
  return(
      <div className="Home">
        <><div className='gradient__bg'><NavBar/><Header/></div> <WhatGPT3/><Features/><Possibility/><Footer/></>
              {/* <Route path='/Register' element={<Register/>}></Route>
              <Route path='/Login' element={<Login/>}>
              </Route> */}
      </div>

    
  )
  
}

export default Home;