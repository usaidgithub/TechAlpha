import React from "react";
import "./Internships.css";
import { motion } from "framer-motion";

const Internships = () => {
  return (
    <motion.section
      id="internships"
      className="internships"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="internships-content">
        <h2>What Our Users Say</h2>
        <p>
          Hear directly from people who have used MakeMyAI to bring AI into their businesses. 
          These testimonials showcase the real impact and reliability of our no-code AI solutions.
        </p>
      </div>

      <div className="internships-grid">
        <div className="internship-card">
          <h3>Riya Shah, Startup Founder</h3>
          <p>
            MakeMyAI helped us build a support bot that cut our response time by 80%. 
            The process was seamless, and the results were beyond what we expected.
          </p>
        </div>

        <div className="internship-card">
          <h3>Akash Mehta, Sales Manager</h3>
          <p>
            We replaced our lead form with a smart AI agent and started seeing better 
            conversion rates within days. It's like having a 24x7 salesperson online.
          </p>
        </div>

        <div className="internship-card">
          <h3>Neha Kulkarni, HR Executive</h3>
          <p>
            We now use MakeMyAI for resume screening. It quickly sorts candidates and 
            saves us hours every week. It’s a powerful time-saving tool for HR tasks.
          </p>
        </div>

        <div className="internship-card">
          <h3>Dr. Ravi Patil, Healthcare Pro</h3>
          <p>
            Their AI assistant answers patient queries accurately using our content. 
            It reduced our staff workload and improved response consistency instantly.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Internships;
