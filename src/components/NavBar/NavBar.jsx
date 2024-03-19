import React from 'react'

import {Link} from "react-router-dom"

export const NavBar = () => {
  return ( 
    <nav>
        <Link to="/">Website </Link>
    <ul>
        <li>
            <Link to="/about" >About</Link>
            </li>
        <li>
            <Link to="/browse cars" >Browse Cars</Link>
            </li>
        <li>
            <Link to="services">Services</Link>
            </li>
        <li>
            <Link  to="favourites">Favourites</Link></li>

        <li><Link to="contact">Contact</Link>
        </li>
    </ul>

  </nav>
  )
}

import React from 'react'

