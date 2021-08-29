import React from 'react';
import { Link, useLocation } from "react-router-dom";
import './styles/Navbar.css'

function Navbar() {
  
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark"> 
        <div className="container-fluid">
          <Link
           to="/"
           className="navbar-brand">
           Daryl Nauman
          </Link>
          
          <div className="d-flex">
            
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarNav">          
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    to="/about"
                    className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About Me
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/portfolio"
                    className={location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}>
                    Portfolio
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link 
                    to="/contact"
                    className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}>
                    Contact
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link 
                    to="/resume"
                    className={location.pathname === "/resume" ? "nav-link active" : "nav-link"}>
                    Resume
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>
    </nav>
  );
}

export default Navbar;