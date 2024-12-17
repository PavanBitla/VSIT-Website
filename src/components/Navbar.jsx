import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/components/navbar.css";

const Navbar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState(null); // Tracks the currently hovered dropdown
  const [activeInnerDropdown, setActiveInnerDropdown] = useState(null);

  let hoverTimeout;

  const handleMouseEnter = (dropdownName) => {
    clearTimeout(hoverTimeout); // Cancel any hiding timeout
    setHoveredDropdown(dropdownName); // Set the currently hovered dropdown
  };

  const handleMouseLeave = () => {
    hoverTimeout = setTimeout(() => {
      setHoveredDropdown(null); // Hide the dropdown after a short delay
      setActiveInnerDropdown(null); // Reset any active inner dropdowns
    }, 200); // Delay to make the transition smoother
  };

  const toggleInnerDropdown = (dropdownName) => {
    setActiveInnerDropdown((prev) => (prev === dropdownName ? null : dropdownName));
  };

  return (
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
                  <span
                    onClick={() => toggleInnerDropdown("location")}
                    className="dropdown-item"
                  >
                    Location
                  </span>
                  {activeInnerDropdown === "location" && (
                    <ul className="dropdown-list">
                      <li>
                        <a
                          href="https://www.google.com/maps/place/Vidyalankar+School+of+Information+Technology"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="dropdown-item"
                        >
                          VSIT Location (Google Maps)
                        </a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <span
                    onClick={() => toggleInnerDropdown("telephone")}
                    className="dropdown-item"
                  >
                    Telephone
                  </span>
                  {activeInnerDropdown === "telephone" && (
                    <ul className="dropdown-list">
                      <li>
                        <span className="dropdown-item">+91 2224104244</span>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <span
                    onClick={() => toggleInnerDropdown("email")}
                    className="dropdown-item"
                  >
                    Email
                  </span>
                  {activeInnerDropdown === "email" && (
                    <ul className="dropdown-list">
                      <li>
                        <span className="dropdown-item">VCMT2024@gmail.com</span>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/downloads" className="nav-link">Archive</Link>
      </div>

      <div className="logo-container">
  <a href="https://vsit.edu.in/#" target="_blank" rel="noopener noreferrer">
    <img
      src="img/VSIT logo 2024 transparent background.png"
      alt="VSIT logo"
      className="logo"
    />
  </a>
  <img
    src="img/VCMT_logo.png"
    alt="VCMT logo"
    className="vcmt-logo"
  />
</div>

      
    </nav>
  );
};

export default Navbar;
