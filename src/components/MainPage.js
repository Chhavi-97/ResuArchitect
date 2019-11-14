import React from "react";

import './MainPage.css'
import {Link}from 'react-router-dom';
function MainPage() {
 const navStyle ={
     color:'white',
     textDecoration:'none'
 };

  
    return (
      <div className="MainPage">
      <nav className="nav">
         <Link style={{paddingLeft: 13, textDecoration: 'none'}} to="/"><h3 className="resu-logo">ResuArchitect</h3></Link> 
          <ul className='nav-links'>
              <Link style={navStyle} to="/about"> <li>About Us</li></Link>
              <Link style={navStyle} to="/form"> <li>Get Started</li></Link>
             
          </ul>
      </nav>
     
      </div>
    );
  }


export default MainPage;