import React from 'react';
import { motion as Motion } from 'framer-motion';
import './ServicesSection.css';

const ServicesSection = () => {
    const serviceData = [
        {
            id: 1,
            title: "Food Delivery",
            desc: "Get hot, freshly prepared meals delivered straight to your door — fast, safe, and stress-free.",
            img: "/service1.svg" // 3D Delivery icon
        },
        {
            id: 2,
            title: "Restaurant Dining",
            desc: "Enjoy a comfortable dining experience with delicious meals served fresh in a clean environment.",
            img: "/service2.svg" // 3D Leaves/Greenery icon
        },
        {
            id: 3,
            title: "Catering Services",
            desc: "From birthdays to corporate events, we handle everything — food, setup, and service.",
            img: "/service31.png" // Add catering icon
        },
        {
            id: 4,
            title: "Bulk & Daily Orders",
            desc: "Perfect for offices, meetings, and families who need consistent, quality meals.",
            img: "/service41.png" // Add bulk icon
        }
    ];

    const entranceAnimation = {
        initial: { opacity: 0, x: 50 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    return (
        <section className="yum-utility-sphere">
            <div className="sphere-inner-vault">
                
                {/* Section Header */}
                <header className="utility-intel-header">
                    <Motion.span 
                        className="utility-tagline-accent"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        [WHAT WE OFFER]
                    </Motion.span>
                    <Motion.h2 
                        className="utility-epic-headline"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Everything You Need — <br />
                        Served Fresh & Fast
                    </Motion.h2>
                </header>

                {/* Horizontal Scroll Area */}
                <div className="utility-grid-nexus">
                    {serviceData.map((service, index) => (
                        <Motion.div 
                            key={service.id}
                            className="utility-card-pod"
                            {...entranceAnimation}
                            transition={{ delay: index * 0.15 }}
                        >
                            <div className="pod-text-vessel">
                                <h3 className="pod-title-core">{service.title}</h3>
                                <p className="pod-prose-description">{service.desc}</p>
                            </div>
                            
                            <Motion.img 
                                src={service.img} 
                                alt={service.title} 
                                className="pod-artifact-visual"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                            />
                        </Motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ServicesSection;