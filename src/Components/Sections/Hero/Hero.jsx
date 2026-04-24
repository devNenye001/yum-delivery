import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    // Animation Variants
    const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <section className="hero-container">
            <div className="hero-wrapper">
                
                {/* Headline */}
                <Motion.h1 
                    className="hero-headline"
                    {...fadeInUp}
                >
                    Hot Meals, Fast Delivery — <br />
                    Straight to Your Door in Minutes
                </Motion.h1>

                {/* Subtext */}
                <Motion.p 
                    className="hero-subtext"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Get your favorite meals delivered hot, fresh, and fast 
                    right to your doorstep.
                </Motion.p>

                {/* Action Button */}
                <Motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, duration: 0.4 }}
                >
                    <Link to="/menu" className="outline-none">
                        <Motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="view-menu-btn"
                        >
                            View Menu
                        </Motion.button>
                    </Link>
                </Motion.div>

                {/* Main Food Image Box */}
                <Motion.div 
                    className="hero-image-box"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <img 
                        src="/hero.svg" 
                        alt="Yum Delivery Selection" 
                        className="hero-food-img"
                    />
                </Motion.div>

            </div>
        </section>
    );
};

export default Hero;