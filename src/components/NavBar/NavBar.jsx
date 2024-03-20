

import {Link, NavLink} from "react-router-dom"

import Logo from "../Logo/index.jsx"


 const NavBar = () => {
  return ( 
    <div className="header-wrapper sticky-top">
    <nav>
        <Link to="/" className = "title"><Logo/></Link>
    <ul>
        <li>
            <NavLink to="/about-us" >About</NavLink>
            </li>
        <li>
            <NavLink to="/browse cars" >Browse Cars</NavLink>
            </li>
        <li>
            <NavLink  to="/view-all">View All</NavLink>
            </li>
        <li>
            <NavLink  to="/my-saved-cars">My Saved Cars</NavLink>
            </li>
        <li>
            <NavLink to="/contact">Contact</NavLink>
        </li>
    </ul>

  </nav>
  </div>
  );
};

export default NavBar
import React from 'react'

{/* <li>
            <NavLink to="/favourites">Favourites ♡</NavLink>
            </li> */}

