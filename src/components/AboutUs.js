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
        <h2>About MakeMyAI</h2>
        <p>
           MakeMyAI is your partner in building custom AI agents without writing a single line of code. 
           Whether you need a smart assistant, automation bot, or a content generator, we transform your 
           ideas into powerful, ready-to-use AI solutions.
        </p>
        <p>
           Our mission is to simplify AI adoption by offering private, scalable, and fully integrated agents 
           tailored specifically to your needs — all backed by human-led support and end-to-end customization.
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
