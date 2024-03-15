import React from 'react'

import {Link} from "react-router-dom"

export const NavBar = () => {
  return ( 
    <nav>
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
            <Link to="location">Location</Link>
            </li>
        <li>
            <Link  to="favourites">FaSvourites</Link></li>

        <li><Link to="contact">Contact</Link>
        </li>
    </ul>

  </nav>
  )
}

import React from 'react'

