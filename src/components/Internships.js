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
        <h2>Our Virtual Internships</h2>
        <p>
          Explore a variety of virtual internships designed to help you gain hands-on
          experience and build industry-ready skills from the comfort of your home.
          Each internship comes with guided mentorship, real-world projects, and a
          verified certificate upon completion.
        </p>
      </div>

      <div className="internships-grid">
        <div className="internship-card">
          <h3>Web Development</h3>
          <p>
            Learn to build stunning and responsive websites using HTML, CSS,
            JavaScript, React.js and different web technologies.
          </p>
          <a href="https://forms.gle/sWrQzTkePc4JkDaB9" className="apply-link" target="_blank" rel="noopener noreferrer">Apply Now</a>
        </div>
        <div className="internship-card">
  <h3>Python Development</h3>
  <p>
    Explore Python programming by building real-world applications, focusing on problem-solving and automation.
  </p>
  <a href="https://forms.gle/sWrQzTkePc4JkDaB9" className="apply-link" target="_blank" rel="noopener noreferrer">Apply Now</a>
</div>

<div className="internship-card">
  <h3>Full Stack Development</h3>
  <p>
    Build web apps by mastering front-end and back-end technologies like React, Node.js, and databases.
  </p>
  <a href="https://forms.gle/sWrQzTkePc4JkDaB9" className="apply-link" target="_blank" rel="noopener noreferrer">Apply Now</a>
</div>

<div className="internship-card">
  <h3>Software Development</h3>
  <p>
    Dive into software engineering, focusing on designing, coding, testing, and deploying scalable applications.
  </p>
  <a href="https://forms.gle/sWrQzTkePc4JkDaB9" className="apply-link" target="_blank" rel="noopener noreferrer">Apply Now</a>
</div>

      </div>
    </motion.section>
  );
};

export default Internships;
