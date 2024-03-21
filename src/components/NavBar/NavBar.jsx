import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/index.jsx";
import "./NavBar.css";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-black sticky-top">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <Logo />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink to="/about-us" className="nav-link">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/view-all" className="nav-link">
                View All
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/my-saved-cars" className="nav-link">
                My Saved Cars ♡
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact" className="nav-link">
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
