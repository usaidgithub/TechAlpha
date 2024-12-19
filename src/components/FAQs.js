import React, { useState } from "react";
import "./FAQs.css";
import { motion } from "framer-motion";
const FAQs = () => {
    const faqs = [
        {
            question: "What is TechAlpha?",
            answer:
                "TechAlpha is a platform offering virtual internships to help students gain industry-level experience and certifications.",
        },
        {
            question: "How can I apply for an internship?",
            answer:
                "You can explore the internships listed on our platform and click the 'Apply Now' button to start your application process.",
        },
        {
            question: "Do I need any prior experience?",
            answer:
                "No prior experience is required! Our internships are designed for students at all levels, with guidance provided throughout the process.",
        },
        {
            question: "When will I get the Certificate?",
            answer:
                "Upon successful completion, you will receive a verified internship completion certificate.",
        },
        {
            question: "What is the duration of internships?",
            answer:
                "All our internships are for a period of 1 month only",
        },
        {
            question: "Is there any fees for the internships?",
            answer:
                "The internships are completely free.However, a documentation fee of ₹99 must be paid to cover the processing charges",
        },
        {
            question: "Is the internships Offline or Online?",
            answer:
                "All our internships are conducted in Virtual mode (Online)",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <motion.section
      id="faqs"
      className="faqs"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
    >
            <div className="content-wrapper">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    {faqs.map((faq, index) => (
                        <div
                            className={`faq-item ${index === activeIndex ? "active" : ""}`}
                            key={index}
                            onClick={() => toggleFAQ(index)}
                        >
                            <div className="faq-question">
                                <h3>{faq.question}</h3>
                                <span className="toggle-icon">
                                    {index === activeIndex ? "−" : "+"}
                                </span>
                            </div>
                            {index === activeIndex && <p className="faq-answer">{faq.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </motion.section>
    );
};

export default FAQs;
