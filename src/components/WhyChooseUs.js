import React from "react";
import "./WhyChooseUs.css";
import { motion } from "framer-motion";
const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert-Led Internships",
      description: "Gain real-world experience through internships designed by industry experts.",
      icon: "📚",
    },
    {
      title: "Verified Certificates",
      description: "Earn recognized certifications to showcase your skills and achievements.",
      icon: "🎓",
    },
    {
      title: "Flexible and Remote",
      description: "Learn at your own pace with internships that fit your schedule.",
      icon: "💻",
    },
    {
      title: "Job-Ready Skills",
      description: "Get hands-on training to bridge the gap between academics and industry.",
      icon: "🚀",
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
        <h2>Why Choose TechAlpha?</h2>
        <p>
          At TechAlpha, we are dedicated to empowering students with the skills and knowledge
          required to excel in their careers. Here’s what sets us apart:
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
