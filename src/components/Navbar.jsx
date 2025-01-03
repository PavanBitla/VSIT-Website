import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/navbar.css";

const Navbar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null);

  let hoverTimeout;

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(hoverTimeout);
    setHoveredDropdown(dropdownName);
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredDropdown(null);
    }, 200);
  };

  return (
    <>
      {/* Logo Section */}
      <div className="logo-header">
        <a href="https://vsit.edu.in/#" target="_blank" rel="noopener noreferrer">
          <img
            src="img\VSIT logo 2024 transparent background.png"
            alt="VSIT Logo"
            className="vsit-logo"
          />
        </a>
        <a>
          <img
            src="img/VCMT_logo.png"
            alt="VCMT Logo"
            className="vcmt-logo"
          />
        </a>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Us</Link>
          <Link to="/about-conference" className="nav-link">About Conference</Link>
          <Link to="/call-for-papers" className="nav-link">Call for Papers</Link>

          {/* Registration Dropdown */}
          <div
            className="dropdown-container"
            onMouseEnter={() => handleMouseEnter("registration")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">Registration</span>
            {hoveredDropdown === "registration" && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">
                  <li>
                    <a
                      href="https://forms.gle/b6ym5Krfs5kDH2sp7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                    >
                      Registration Link
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://shorturl.at/dM3W9"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                    >
                      Guidelines Link
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Contact Us Dropdown */}
          <div
            className="dropdown-container"
            onMouseEnter={() => handleMouseEnter("contact")}
            onMouseLeave={handleMouseLeave}
          >
            <span className="nav-link">Contact Us</span>
            {hoveredDropdown === "contact" && (
              <div className="dropdown-menu">
                <ul className="dropdown-list">
                  <li>
                    <a
                      href="https://www.google.com/maps/place/Vidyalankar+School+of+Information+Technology"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="dropdown-item"
                    >
                      Location (Google Maps)
                    </a>
                  </li>
                  <li>
                    <span className="dropdown-item">Telephone: (+91 2224104244)</span>
                  </li>
                  <li>
                    <a href="mailto:VCMT2024@gmail.com" className="dropdown-item">Email</a>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <Link to="/downloads" className="nav-link">Archive</Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
