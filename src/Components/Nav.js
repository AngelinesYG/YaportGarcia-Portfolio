import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';

const Nav = () => {
   const navStyle = {
      color: '#c0c0c0'
   };
   return(
      <nav>
         <h3>AYG</h3>
         <ul className="nav-Links">
            <Link style={navStyle} to="/">
            <li>Home</li>
            </Link>
            <Link style={navStyle} to="/about">
            <li>About</li>
            </Link>
            <Link style={navStyle} to="/portfolio">
            <li>Portfolio/Resume</li>
            </Link>
            <Link style={navStyle} to="/contact">
            <li>Contact</li>
            </Link>
         </ul>
      </nav>
   )
}
export default Nav;
