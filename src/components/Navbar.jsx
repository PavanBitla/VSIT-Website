import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../styles/components/navbar.css';

const Navbar = () => {
  const [isRegistrationDropdownOpen, setIsRegistrationDropdownOpen] = useState(false);
  const [isContactDropdownOpen, setIsContactDropdownOpen] = useState(false);
  const [activeInnerDropdown, setActiveInnerDropdown] = useState(null);
  const [isGuidelinesDropdownOpen, setIsGuidelinesDropdownOpen] = useState(false);

  let timeout;

  const handleMouseEnter = (setDropdown) => {
    clearTimeout(timeout);
    setDropdown(true);
  };

  const handleMouseLeave = (setDropdown) => {
    timeout = setTimeout(() => {
      setDropdown(false);
      setActiveInnerDropdown(null);
      setIsGuidelinesDropdownOpen(false);
    }, 200);
  };

  const toggleInnerDropdown = (dropdownName) => {
    setActiveInnerDropdown((prev) => prev === dropdownName ? null : dropdownName);
  };

  return (
    <nav className="navbar">
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About Us</Link>
        <Link to="/about-conference" className="nav-link">About Conference</Link>
        <Link to="/call-for-papers" className="nav-link">Call for Papers</Link>

        <div
          className="dropdown-container"
          onMouseEnter={() => handleMouseEnter(setIsRegistrationDropdownOpen)}
          onMouseLeave={() => handleMouseLeave(setIsRegistrationDropdownOpen)}
        >
          <span className="nav-link">Registration</span>
          {isRegistrationDropdownOpen && (
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
                  <span
                    onClick={() => setIsGuidelinesDropdownOpen((prev) => !prev)}
                    className="dropdown-item"
                  >
                    Guidelines
                  </span>
                  {isGuidelinesDropdownOpen && (
                    <div className="dropdown-menu">
                      <ul className="dropdown-list">
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
                </li>
              </ul>
            </div>
          )}
        </div>

        <div
          className="dropdown-container"
          onMouseEnter={() => handleMouseEnter(setIsContactDropdownOpen)}
          onMouseLeave={() => handleMouseLeave(setIsContactDropdownOpen)}
        >
          <span className="nav-link">Contact Us</span>
          {isContactDropdownOpen && (
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
                    <div className="dropdown-menu">
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
                    </div>
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
                    <div className="dropdown-menu">
                      <ul className="dropdown-list">
                        <li>
                          <span className="dropdown-item">+91 2224104244</span>
                        </li>
                      </ul>
                    </div>
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
                    <div className="dropdown-menu">
                      <ul className="dropdown-list">
                        <li>
                          <span className="dropdown-item">VCMT2024@gmail.com</span>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
          )}
        </div>

        <Link to="/downloads" className="nav-link">Archive</Link>
      </div>

      <div className="logo-container">
        <img
          src="img/VSIT logo 2024 transparent background.png"
          alt="VSIT logo"
          className="logo"
        />
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