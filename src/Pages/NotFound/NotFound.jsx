import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import './NotFound.css';
import { BsExclamationCircleFill } from 'react-icons/bs';

const NotFound = () => {
    return (
        <main className="notfound-container">
            <Motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="notfound-content"
            >
                {/* Floating Icon Animation */}
                <Motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="error-icon-box"
                >
                    <BsExclamationCircleFill className="error-icon" />
                </Motion.div>

                {/* Staggered Text Entrance */}
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <p className="notfound-title">Page not Found</p>
                    <p className="notfound-text">
                        This page cant be transcribed. It looks like this page has 
                        left the meeting – or maybe it never joined.
                    </p>
                </Motion.div>

                {/* Button Entrance */}
                <Motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                >
                    <Link to="/">
                        <Motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="go-home-btn"
                        >
                            Go Home
                        </Motion.button>
                    </Link>
                </Motion.div>
            </Motion.div>
        </main>
    );
};

export default NotFound;