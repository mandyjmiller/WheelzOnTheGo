import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';
import Logo from '../Logo'; //  Import logo from logo folder 

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

// Linked the header to each pages 

function Header() {
  return (
    <div className="header-wrapper">
      <Logo />
        <ul className="nav-links"> 

          <li><Link to="/about-us">About Us</Link></li>   
          <li><Link to="/view-all">View All Cars</Link></li>

        </ul>
    </div>
  );
}

export default Header;
