import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import { motion } from "framer-motion";

const ContactUs = () => {
    return (
        <motion.section
            id="contact"
            className="contact-section"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            <div className="contact-wrapper">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-subtitle">
                    Have questions or want to explore AI-powered solutions? Reach out to the MakeMyAI team — we’re here to help!
                </p>

                <div className="contact-container">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:support@makemyai.com">support@makemyai.com</a>
                            </li>
                            <li> 
                                <FontAwesomeIcon icon={faMapMarkerAlt} />
                                Mumbai, India
                            </li>
                        </ul>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/makemyai_official" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com/company-official/makemyai" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                        </div>
                    </div>

                    {/* Google Form CTA */}
                    <div className="contact-google-form">
                        <h3>Request a Demo</h3>
                        <p>
                            Interested in seeing MakeMyAI in action? Request a personalized demo by filling out our quick form.
                        </p>
                        <a
                            href="https://forms.gle/yourmakemyai-demoform" /* Replace with actual MakeMyAI form */
                            target="_blank"
                            rel="noopener noreferrer"
                            className="google-form-button"
                        >
                            Request Demo
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactUs;
