import React from "react";
import "./ContactUs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';

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
                    We’d love to hear from you! Reach out through any of the channels below or apply directly through our Google Form.
                </p>

                <div className="contact-container">
                    {/* Contact Information */}
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faEnvelope} />
                                <a href="mailto:hr.techalpha.adm@gmail.com"> support@techalpha.com</a>
                            </li>
                            <li> 
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                            Mumbai, India
                            </li>
                        </ul>
                        <div className="social-icons">
                            <a href="https://www.instagram.com/techalpha__/profilecard/?igsh=czM3NnN3eXB6d243" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.linkedin.com/company/techalpha-services/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        </div>
                    </div>

                    {/* Google Form CTA */}
                    <div className="contact-google-form">
                        <h3>Apply for Internships</h3>
                        <p>
                            Interested in joining us? Apply for internships directly by filling out our Google Form.
                        </p>
                        <a
                            href="https://forms.gle/sWrQzTkePc4JkDaB9" /* Replace with your Google Form link */
                            target="_blank"
                            rel="noopener noreferrer"
                            className="google-form-button"
                        >
                            Apply Now
                        </a>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default ContactUs;
