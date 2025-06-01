import React from "react";
import "./HowItWorks.css";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Describe Your Idea",
      description:
        "Tell us what you want your AI agent to do — no technical knowledge needed.",
      icon: "💡",
    },
    {
      number: 2,
      title: "We Build It",
      description:
        "Our team develops a fully custom AI agent tailored to your exact needs and use case.",
      icon: "🛠️",
    },
    {
      number: 3,
      title: "Integrate & Deploy",
      description:
        "Connect your AI with your apps or tools, and launch it for real-world use.",
      icon: "🚀",
    },
    {
      number: 4,
      title: "Get Ongoing Support",
      description:
        "We stay with you post-launch to refine and optimize your AI as your needs grow.",
      icon: "🤝",
    },
  ];

  return (
    <motion.section
      id="how-it-works"
      className="how-it-works"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.6 }}
    >
      <div className="content-wrapper">
        <h2>How It Works</h2>
        <p>Getting your own custom AI agent is simple. Here's how MakeMyAI helps you every step of the way:</p>

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
