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
        <h1>You Imagine. We Build Your AI.</h1>
        <p>
           Say what you need, and we’ll turn it into a custom AI agent — fully functional, private, and ready to deploy. No coding needed.
        </p>
        <a href="#internships" className="hero-cta-button">
          Request Your Agent
        </a>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Custom AI Agent Illustration" />
      </div>
    </motion.section>
  );
};

export default HeroSection;
