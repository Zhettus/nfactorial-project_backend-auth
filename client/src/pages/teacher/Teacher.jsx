import React from 'react';
import Sidebar from './navbarT/Sidebar';
import Header from './headerT/Header';
import styled from 'styled-components';
import Footer from '../../containers/footer/Footer';
import './Teacher.css'
import { createGlobalStyle } from 'styled-components'
import { AnimatePresence } from "framer-motion";

const GlobalStyle = createGlobalStyle`
  body {
    background: #2C5364;
  }
`

const Pages = styled.div`
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
backgrond: white;
h1 {
    font-size: calc(2rem + 2vw);
    background: linear-gradient(to right, #803bec 30%, #1b1b1b 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`;



function Teacher()  {
    return(
        <div className='Teacher'>
            <GlobalStyle/>
            <>
            <div><Sidebar/>
            <Pages><Header/></Pages>
            <Footer/></div>       
            </>       
        </div>

    )
} 

export default Teacher;