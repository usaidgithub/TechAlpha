import React from "react";
import "./WhyChooseUs.css";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
   const features = [
    {
      title: "Fully Custom Agents",
      description: "We build AI tailored to your exact needs — from virtual assistants to automation bots.",
      icon: "🤖",
    },
    {
      title: "API Integration",
      description: "Easily connect your AI agent with existing platforms and tools via powerful integrations.",
      icon: "🔗",
    },
    {
      title: "Private & Secure",
      description: "Your AI runs in isolated, encrypted environments to ensure complete privacy and control.",
      icon: "🔒",
    },
    {
      title: "Human-Led Support",
      description: "Our expert team is here to guide you at every step — from ideation to deployment.",
      icon: "👨‍💻",
    },
  ];

  return (
    <motion.section
      id="why-choose-us"
      className="why-choose-us"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-wrapper">
        <h2>Why Choose MakeMyAI?</h2>
        <p>
           MakeMyAI makes it effortless to build custom AI agents that work exactly the way you need. 
          Here’s why innovators and teams trust us:
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
