import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './FinalSection.css';

const FinalSection = () => {
    return (
        <section className="yum-termination-hub">
            <div className="hub-internal-core">
                
                {/* Narrative Section */}
                <div className="hub-narrative-vessel">
                    <Motion.span 
                        className="narrative-call-tag"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        [READY TO IMPRESS YOUR GUEST]
                    </Motion.span>

                    <Motion.h2 
                        className="narrative-epic-question"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Craving something delicious? <br />
                        — Yum Delivery is just one call away.
                    </Motion.h2>

                    <Motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        
                      
                        <a
              href="https://wa.me/2348032280081"
              target="_blank"
              rel="noopener noreferrer"
            >
                            <Motion.button 
                                className="hub-trigger-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Order Your Meal Now <HiOutlineArrowRight />
                            </Motion.button>
                            </a>
                    
                    </Motion.div>
                </div>

                {/* Imagery Section */}
                <Motion.div 
                    className="hub-artifact-stage"
                    initial={{ opacity: 0, x: 50, rotate: 5 }}
                    whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <img 
                        src="/final-tray.svg" 
                        alt="Delicious Platter" 
                        className="artifact-hero-dish"
                    />
                </Motion.div>

            </div>
        </section>
    );
};

export default FinalSection;