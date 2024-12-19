import React from "react";
import "./HeroSection.css";
import heroImage from "../assests/hero-img.webp"; // Add a relevant image
import { motion } from "framer-motion";
const HeroSection = () => {
  return (
    <motion.section
      id="home"
      className="hero-section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-content">
        <h1>Empower Your Career with TechAlpha</h1>
        <p>
          Kickstart your career with practical virtual internships, skill-building
          opportunities, and verified certifications.
        </p>
        <a href="#internships" className="hero-cta-button">
          Explore Internships 
        </a>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="TechAlpha Opportunities" />
      </div>
    </motion.section>
  );
};

export default HeroSection;
