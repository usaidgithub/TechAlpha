import React from "react";
import "./HowItWorks.css";
import { motion } from "framer-motion";
const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Explore Opportunities",
      description:
        "Browse a wide range of virtual internships across various domains and industries.",
      icon: "🔍",
    },
    {
      number: 2,
      title: "Apply Online",
      description: "Select your preferred internship and apply in just a few clicks.",
      icon: "🖊️",
    },
    {
      number: 3,
      title: "Learn & Upskill",
      description:
        "Participate in real-world projects guided by industry experts to enhance your skills.",
      icon: "📈",
    },
    {
      number: 4,
      title: "Get Certified",
      description: "Receive a verified certificate upon successful completion of the internship.",
      icon: "🏆",
    },
  ];

  return (
    <motion.section
      id="how-it-works"
      className="how-it-works"
      initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.05 }} // Lower amount for earlier trigger
  transition={{ duration: 0.6 }}
    >
      <div className="content-wrapper">
        <h2>How It Works</h2>
        <p>Getting started with TechAlpha is simple and straightforward. Follow these steps:</p>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="icon">{step.icon}</div>
              <div className="step-number">Step {step.number}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HowItWorks;
