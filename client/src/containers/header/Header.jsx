import React from 'react';
import im from '../../assets/someimage.png';
import './header.css';

const Header = () => (
  <div className="site__header section__padding" id="home">
    <div className="site__header-content">
      <h1 className="gradient__text">Cool Headline about Inclusive Education</h1>
      <p> Cool text about importance of inclusive education blalalalala</p>
    </div>

    <div className="site__header-image">
      <img src={im} />
    </div>
  </div>
);

export default Header;
