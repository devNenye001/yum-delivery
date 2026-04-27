import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const fadeIn = {
        initial: { opacity: 0, y: 10 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5 }
    };

    return (
        <footer className="footer-container">
            <div className="footer-wrapper">
                
                {/* Left Side Image Section */}
                <div className="footer-side-img-container">
                    <Motion.img 
                        initial={{ scale: 0.9, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.8 }}
                        src="/footer3.jpg" 
                        alt="Yum Delivery Jollof" 
                        className="footer-side-img"
                    />
                </div>

                {/* Right Side Main Content */}
                <div className="footer-main-content">
                    <div className="footer-links-grid">
                        
                        {/* Logo Section */}
                        <Motion.div {...fadeIn}>
                            <Link to="/" className="outline-none">
                                <img src="/logo1.svg" alt="Yum Delivery Logo" className="footer-logo-img" />
                            </Link>
                        </Motion.div>

                        {/* Quick Links */}
                        <Motion.div {...fadeIn} transition={{ delay: 0.1 }}>
                            <h4 className="footer-heading">Quick Links</h4>
                            <nav className="footer-nav-list">
                                <Link to="/" className="footer-link-item">Home</Link>
                                <Link to="/menu" className="footer-link-item">Menu</Link>
                                <Link to="/about" className="footer-link-item">About Us</Link>
                                <Link to="/contact" className="footer-link-item">Contact</Link>
                            </nav>
                        </Motion.div>

                        {/* Follow Us */}
                        <Motion.div {...fadeIn} transition={{ delay: 0.2 }}>
                            <h4 className="footer-heading">Follow Us</h4>
                            <nav className="footer-nav-list">
                                <a href="https://www.instagram.com/yumdelivery01/" className="footer-link-item">Instagram</a>
                                <a href="https://x.com/yumdelivery01/" className="footer-link-item">Twitter</a>
                                <a href="https://facebook.com/yumdelivery01/" className="footer-link-item">Facebook</a>
                            </nav>
                        </Motion.div>

                        {/* Support */}
                        <Motion.div {...fadeIn} transition={{ delay: 0.3 }}>
                            <h4 className="footer-heading">Support</h4>
                            <div className="footer-nav-list">
                                <div className="footer-info-text">
                                    <FaPhoneAlt className="footer-icon-red text-xs" />
                                    <span>+234 813 661 2150 | <br />+234 803 228 0081</span>
                                </div>
                                <div className="footer-info-text">
                                    <FaEnvelope className="footer-icon-red" />
                                    <span>yumdelivery01@gmail.com</span>
                                </div>
                                <div className="footer-info-text">
                                    <FaMapMarkerAlt className="footer-icon-red" />
                                    <span>
                                        No. 2 Government House road, Fatima Plaza, Dutse, jigawa. <br />
                                        No. 2 Badawa Bustop, Nassarawa G.R.A, Kano State.
                                    </span>
                                </div>
                            </div>
                        </Motion.div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="footer-bottom-bar">
                        <p className="copyright-text">
                            Copyright © {currentYear} Yum Delivery.
                        </p>
    
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;