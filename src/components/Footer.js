import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
const Footer = () => {
    return (
        <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
        >
            <footer className="footer">
                <div className="content-wrapper">
                    <div className="footer-columns">
                        <div className="footer-logo">
                            <h2>TechAlpha</h2>
                            <p>Empowering students with virtual internships and certifications.</p>
                        </div>
                        <div className="footer-links">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#home">Home</a></li>
                                <li><a href="#about">About Us</a></li>
                                <li><a href="#how-it-works">How It Works</a></li>
                                <li><a href="#internships">Internships</a></li>
                                <li><a href="#faqs">FAQs</a></li>
                            </ul>
                        </div>
                        <div className="footer-contact">
                            <h3>Contact Us</h3>
                            <ul>
                                <li>Email: hr.techalpha.adm@gmail.com</li>
                                <li>Address: Mumbai, India</li>
                            </ul>
                        </div>
                        <div className="footer-socials">
                            <h3>Follow Us</h3>
                            <div className="social-icons">
                                <a href="https://www.instagram.com/techalpha__/profilecard/?igsh=czM3NnN3eXB6d243" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
                                <a href="https://www.linkedin.com/company/techalpha-services/?viewAsMember=true" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} TechAlpha. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </motion.section>
    );
};

export default Footer;