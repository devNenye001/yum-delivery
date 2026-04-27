import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { FaStar, FaArrowRight } from 'react-icons/fa';
import './TestimonialSection.css';

const TestimonialSection = () => {
    const reviews = [
        {
            id: 1,
            name: "Aisha M.",
            location: "Kano",
            text: "“Fast delivery and the food was really fresh. It honestly tastes like home cooking.”",
            avatar: "/a1.png"
        },
        {
            id: 2,
            name: "Daniel K.",
            location: "Lagos",
            text: "“I ordered for my office and everyone loved it. Definitely ordering again!”",
            avatar: "/a2.png"
        },
        {
            id: 3,
            name: "Fatima S.",
            location: "Abuja",
            text: "“Very reliable service. My food always arrives hot and on time.”",
            avatar: "/a3.png"
        }
    ];

    const steps = [
        { id: 1, title: "Inquire", desc: "Share a few details about your event, guest count, vision – we'll take it from there." },
        { id: 2, title: "Customize", desc: "Select your perfect menu, service style, and extras to match the vibe of your gathering." },
        { id: 3, title: "Celebrate", desc: "Sit back, relax and enjoy as we bring the flavor and flawless service to your event." }
    ];

    return (
        <section className="yum-feedback-theater">
            <div className="feedback-inner-sanctum">
                
                {/* Header */}
                <header className="feedback-intel-block">
                    <Motion.span 
                        className="feedback-status-tag" 
                        initial={{ opacity: 0 }} 
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        [Testimonials]
                    </Motion.span>
                    <Motion.h2 
                        className="feedback-epic-title" 
                        initial={{ opacity: 0, y: 20 }} 
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        What Our Clients Say
                    </Motion.h2>
                </header>

                {/* Cards */}
                <div className="feedback-carousel-nexus">
                    {reviews.map((rev, i) => (
                        <Motion.div 
                            key={rev.id} 
                            className="testimonial-pod-artifact"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.2 }}
                        >
                            <div className="pod-rating-node">
                                <FaStar /> <span>5.0 Star Rating</span>
                            </div>
                            <p className="pod-prose-quote">{rev.text}</p>
                            <div className="pod-author-nexus">
                                <img src={rev.avatar} alt={rev.name} className="author-avatar-node" />
                                <div className="author-intel-core">
                                    <h5>{rev.name}</h5>
                                    <p>{rev.location}</p>
                                </div>
                            </div>
                        </Motion.div>
                    ))}
                </div>

                {/* Green Planning Banner */}
                <Motion.div 
                    className="planning-monolith-green"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <div className="planning-call-anchor">
                        <div>
                            <span className="planning-tag">[How It Works]</span>
                            <h3 className="planning-title">Planning Made Simple</h3>
                        </div>
                        <Link to="/contact" className="planning-trigger-btn-wrapper">
                            <Motion.div 
                                className="planning-trigger-btn" 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Lets Start Planning <FaArrowRight />
                            </Motion.div>
                        </Link>
                    </div>

                    <div className="planning-steps-triad">
                        <div className="steps-connector-spine" />
                        {steps.map((step) => (
                            <div key={step.id} className="step-node-cell">
                                <div className="step-number-ring">{step.id}</div>
                                <h4 className="step-label-core">{step.title}</h4>
                                <p className="step-prose-detail">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </Motion.div>

            </div>
        </section>
    );
};

export default TestimonialSection;