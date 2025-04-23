import React from 'react';
import './Nav.css';
import { useNavigate, useLocation } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  // Function to check if the current path matches the link
  const isActive = (path) => location.pathname === path ? "active" : "";

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <img src="logo.png" alt="Logo" />
          <span className="logoname">Portfolio</span>
        </div>

        <ul className="nav-menu">
          <button
            className={`nav-item ${isActive("/")}`}
            onClick={() => navigate("/")}
          >
            Home
          </button>
          <button
            className={`nav-item ${isActive("/portfolio")}`}
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
          </button>
          <button
            className={`nav-item ${isActive("/Resume")}`}
            onClick={() => navigate("/Resume")}
          >
            Resume
          </button>
          <button
            className={`nav-item ${isActive("/contact")}`}
            onClick={() => navigate("/contact")}
          >
            Contact
          </button>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
