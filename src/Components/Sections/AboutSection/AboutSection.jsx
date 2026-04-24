import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import './AboutSection.css';

const AboutSection = () => {
    const fadeUp = {
        initial: { opacity: 0, y: 32 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.65, ease: 'easeOut' },
    };

    return (
        <section className="yum-chronicle-theater">
            <div className="chronicle-inner-shell">
                
                {/* LEFT COLUMN */}
                <div className="theater-intro-nexus">
                    <Motion.div className="prose-header-container" {...fadeUp}>
                        <span className="narrative-identity-tag">[ABOUT YUM DELIVERY]</span>
                        <h2 className="epic-prose-title">
                            Busy day? No time to cook?<br />
                            We've got you covered.
                        </h2>
                    </Motion.div>

                    <Motion.div 
                        className="artifact-canvas-lower"
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <img src="/about2.svg" alt="Egusi Soup" className="artifact-visual-asset" />
                    </Motion.div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="theater-body-nexus">
                    <Motion.div 
                        className="artifact-canvas-upper"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <img src="/about1.svg" alt="Jollof Rice" className="artifact-visual-asset" />
                    </Motion.div>

                    <div className="prose-intel-box">
                        <Motion.p 
                            className="mission-statement-text"
                            {...fadeUp}
                            transition={{ delay: 0.2 }}
                        >
                            At Yum Delivery, we make good food simple. Whether you're feeding yourself,
                            your family, or planning an event, we deliver fresh, affordable, and satisfying
                            meals without stress.
                        </Motion.p>

                        <Motion.div 
                            className="metric-bridge-board"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="metric-cluster">
                                <div className="social-proof-stack">
                                    <img src="/a1.png" alt="Patron" className="proof-avatar-node" />
                                    <img src="/a2.png" alt="Patron" className="proof-avatar-node" />
                                    <img src="/a3.png" alt="Patron" className="proof-avatar-node" />
                                </div>
                                <div className="metric-intel-core">
                                    <h5>300+</h5>
                                    <p>Customers Satisfied</p>
                                </div>
                            </div>

                            <div className="metric-separator-spine" />

                            <div className="metric-cluster">
                                <FaStar className="stella-icon-accent" />
                                <div className="metric-intel-core">
                                    <h5>4.8</h5>
                                    <p>Positive Ratings Everywhere</p>
                                </div>
                            </div>
                        </Motion.div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutSection;