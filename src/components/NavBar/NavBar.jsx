

import {Link, NavLink} from "react-router-dom"

 const NavBar = () => {
  return ( 
    <nav>
        <Link to="/" className = "title">Website </Link>
    <ul>
        <li>
            <NavLink to="/about" >About</NavLink>
            </li>
        <li>
            <NavLink to="/browse cars" >Browse Cars</NavLink>
            </li>
        <li>
            <NavLink to="/services">Services</NavLink>
            </li>
        <li>
            <NavLink  to="/favourites">Favourites</NavLink></li>

        <li><NavLink to="/contact">Contact</NavLink>
        </li>
    </ul>

  </nav>
  );
};

export default NavBar
import React from 'react'

