import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assests/AIagent.jpeg";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="logo">
        <img src={logo} alt="TechAlpha Logo" />
        <h1>MakeMyAI</h1>
      </div>

      {/* Hamburger Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navigation Links */}
      <ul className={`nav-links ${isMenuOpen ? "nav-active" : ""}`}>
        <li><a href="#home" onClick={toggleMenu}>Home</a></li>
        <li><a href="#about" onClick={toggleMenu}>About Us</a></li>
        <li><a href="#internships" onClick={toggleMenu}>Testinomals</a></li>
        <li><a href="#why-choose-us" onClick={toggleMenu}>Why Choose Us</a></li>
        <li><a href="#how-it-works" onClick={toggleMenu}>How It Works</a></li>
        <li><a href="#faqs" onClick={toggleMenu}>FAQs</a></li>
        <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
        {/* Apply Button in Dropdown */}
      </ul>
    </nav>
  );
};

export default Navbar;
