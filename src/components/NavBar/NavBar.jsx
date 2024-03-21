

import {Link, NavLink} from "react-router-dom"

import Logo from "../Logo/index.jsx"
import "./NavBar.css";

 const NavBar = () => {
  return ( 
    
    <nav className="header-wrapper sticky-top">
        <Link to="/" className = "title"><Logo/></Link>
    <ul>
        <li>
            <NavLink to="/about-us" >About</NavLink>
            </li>

        <li>
            <NavLink  to="/view-all">View All</NavLink>
            </li>
        <li>
            <NavLink  to="/my-saved-cars">My Saved Cars ♡</NavLink>
            </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
    </ul>

  </nav>
  );
};

export default NavBar
import React from 'react'


