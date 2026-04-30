import React from 'react';
import { motion as Motion } from 'framer-motion';
import { FiSend, FiEye } from 'react-icons/fi';
import './About.css';
import FinalSection from '../../Components/Sections/FinalSection/FinalSection';
import ServicesSection from '../../Components/Sections/ServicesSection/ServicesSection';

// import WhatWeOffer from './WhatWeOffer';
// import FinalSection from './FinalSection';

const About = () => {
    const team = [
        { name: "Nelkan Happiness Dickson", role: "Chef Yum (CEO)", img: "/team1.jpeg" },
        { name: "Lois Ayuba Maidoki", role: "Human Resource", img: "/team2.jpeg" },
        { name: "Musa Mahdi", role: "Operations Supervisor", img: "/team3.jpeg" },
        { name: "Chidimma Akwuo", role: "Sales & Finance Manager", img: "/team4.jpeg" },
    ];

    const slideUp = {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.6 }
    };

    return (
        <main className="yum-genesis-container">
            {/* Hero Vista */}
            <section className="genesis-hero-vista">
                <Motion.h1 
                    className="vista-title-node"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    About Us
                </Motion.h1>
            </section>

            {/* Narrative Nexus */}
            <section className="genesis-narrative-nexus">
                <Motion.div className="narrative-prose-vessel" {...slideUp}>
                    <p>
                        Yum Delivery is a food delivery, catering, and restaurant service proudly serving Kano State and Jigawa State. We specialize in preparing fresh, home-cooked meals and delivering them straight to our customers' doorsteps. Our meals are cooked with care, using quality ingredients and hygienic cooking methods to ensure great taste and safety at all times.
                    </p>
                    <p>
                        We understand that many people have busy schedules and may not always have the time or energy to cook. At Yum Delivery, our aim is to make good food easily available without stress. Whether you are ordering a daily meal, feeding your family, or planning food for a special event, Yum Delivery is always just a call away and ready to serve you.
                    </p>
                </Motion.div>
                <Motion.div className="narrative-visual-anchor" {...slideUp} transition={{ delay: 0.2 }}>
                    <img src="/gg1.svg" alt="Our Quality Food" className="anchor-img-artifact" />
                </Motion.div>
            </section>

            {/* Values Triad */}
            <section className="genesis-values-triad">
                <Motion.div className="value-cell-module" {...slideUp}>
                    <div className="value-icon-orb"><FiSend /></div>
                    <h3 className="value-label-core">Our Mission</h3>
                    <p className="value-prose-detail">
                        To provide delicious, affordable, and hygienic homecooked meals while offering reliable catering and restaurant services across Kano and Jigawa States. We aim to make quality food accessible to individuals, families, and organizations.
                    </p>
                </Motion.div>
                <Motion.div className="value-cell-module" {...slideUp} transition={{ delay: 0.2 }}>
                    <div className="value-icon-orb"><FiEye /></div>
                    <h3 className="value-label-core">Our Vision</h3>
                    <p className="value-prose-detail">
                        Our Vision is to become one of the most trusted food delivery and catering brands in Kano and Jigawa, known for excellent service, great taste, and strong customer relationships.
                    </p>
                </Motion.div>
            </section>

            {/* Component Placeholder: What We Offer */}
            <ServicesSection />

            {/* Team Theatre */}
            <section className="genesis-team-theatre">
                <header className="team-theatre-header">
                    <span className="theatre-status-tag">[Meet Our Team]</span>
                    <h2 className="theatre-epic-headline">The Team That Makes It Happen</h2>
                </header>

                <div className="team-grid-array">
                    {team.map((member, idx) => (
                        <Motion.div 
                            key={idx} 
                            className="team-member-capsule"
                            {...slideUp}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <img src={member.img} alt={member.name} className="member-visual-node" />
                            <h4 className="member-name-text">{member.name}</h4>
                            <p className="member-role-text">{member.role}</p>
                        </Motion.div>
                    ))}
                </div>
            </section>

            {/* Component Placeholder: Final Section */}
            <FinalSection />
        </main>
    );
};

export default About;