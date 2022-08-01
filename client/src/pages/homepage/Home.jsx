import './Home.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;



// import React from 'react';
// import { Footer, Possibility, Features, WhatGPT3 } from '../../containers';
// import {Header} from '../../containers/header/Header';
// import  NavBar  from '../../components/navbar/Navbar';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


// const Home = () => {
//   return(
//       <div className="Home">
//         <><div className='gradient__bg'><NavBar/><Header/></div> <WhatGPT3/><Features/><Possibility/><Footer/></>
//               {/* <Route path='/Register' element={<Register/>}></Route>
//               <Route path='/Login' element={<Login/>}>
//               </Route> */}
//       </div>

    
//   )
  
// }

// export default Home;


