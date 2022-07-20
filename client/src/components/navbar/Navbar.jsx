import React, { useState, useEffect } from 'react';
import {Link} from "react-router-dom";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="site__navbar">
      <div className="site__navbar-links">
        <div className="site__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="site__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wied">Features of our website</a></p>
          <p><a href="#features">What is inclusive education?</a></p>
        </div>
      </div>
      <div className="site__navbar-sign">
        <Link to="/Register">
          <button type="button"
            onClick={() => console.log('sign up')}>Sign up</button>
        </Link>
      </div>

      <div className="site__navbar-log">
        <Link to="/Login">
          <button type="button">Log In</button>
        </Link>
      </div>
      <div className="site__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="site__navbar-menu_container scale-up-center">
          <div className="site__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wied">Features of our website</a></p>
            <p><a href="#features">What is inclusive education?</a></p>
          </div>
          <div className="site__navbar-menu_container-links-sign">
            <p>Sign in</p>
              <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
