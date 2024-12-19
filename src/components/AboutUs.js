import React from "react";
import "./AboutUs.css";
import { motion } from "framer-motion";
import aboutImage from "../assests/about-us.png"
const AboutUs = () => {
  return (
    <motion.section
      id="about"
      className="about-us"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="about-content">
        <h2>About TechAlpha</h2>
        <p>
          TechAlpha is dedicated to empowering students and professionals by offering
          virtual internships that bridge the gap between academia and the corporate world. 
          Our mission is to foster skill development, career growth, and industry readiness
          through a cutting-edge digital platform.
        </p>
        <p>
          We strive to provide practical learning experiences, verified certifications,
          and a pathway to success for all our participants.
        </p>
      </div>
      <div className="about-image">
        <img
          src={aboutImage}
          alt="About TechAlpha"
        />
      </div>
    </motion.section>
  );
};

export default AboutUs;
