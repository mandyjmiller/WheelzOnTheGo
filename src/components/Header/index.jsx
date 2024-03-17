import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item

function Header() {
  return (
    <div className="header-wrapper">
        <ul className="nav-links"> 
          <li><a href="/about-us">About Us</a></li>
          <li><a href="/view-all">View All Cars</a></li>
        </ul>
    </div>
  );
}

export default Header;
