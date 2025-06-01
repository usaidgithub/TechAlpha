import React, { useState } from "react";
import "./FAQs.css";
import { motion } from "framer-motion";

const FAQs = () => {
  const faqs = [
    {
      question: "What is MakeMyAI?",
      answer:
        "MakeMyAI is a service where you can get a fully customized AI agent built for your unique use case — no coding required.",
    },
    {
      question: "Do I need to know programming to use MakeMyAI?",
      answer:
        "Not at all! You just describe your idea, and we’ll handle all the technical work to build and deploy your AI.",
    },
    {
      question: "How long does it take to build my AI agent?",
      answer:
        "Most AI agents are delivered within a few days, depending on complexity. We’ll communicate timelines clearly after understanding your requirements.",
    },
    {
      question: "Can I use the AI in my existing app or workflow?",
      answer:
        "Yes, we’ll help you integrate your AI into websites, apps, CRMs, or any tools you already use.",
    },
    {
      question: "Is there any ongoing support or maintenance?",
      answer:
        "Yes, we offer post-launch support and optimization to ensure your AI continues performing well as your needs evolve.",
    },
    {
      question: "How much does it cost to build an AI agent?",
      answer:
        "Pricing depends on the complexity of the use case. Contact us with your idea, and we’ll give you a clear, upfront quote — no hidden fees.",
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
              {index === activeIndex && (
                <p className="faq-answer">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default FAQs;
