import React from 'react';
import { motion as Motion } from 'framer-motion';
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
    const slideTransition = {
        initial: { opacity: 0, x: -30 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { duration: 0.6, ease: "easeOut" }
    };

    const channels = [
        {
            id: 1,
            icon: <HiOutlineLocationMarker />,
            title: "Branches",
            content: (
                <>
                    No. 2 Government House road, Fatima Plaza, Dutse, jigawa.<br />
                    No. 2 Badawa Bustop, Nassarawa G.R.A, Kano State.
                </>
            )
        },
        {
            id: 2,
            icon: <HiOutlineMail />,
            title: "Email",
            content: "yumdelivery01@gmail.com"
        },
        {
            id: 3,
            icon: <HiOutlinePhone />,
            title: "Phone Number",
            content: "+234 813 661 2150 | +234 803 228 0081"
        }
    ];

    return (
        <main className="yum-contact-sanctuary">
            {/* Header Phase */}
            <header className="contact-epic-vista">
                <Motion.h1 
                    className="vista-title-node"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    Contact Us
                </Motion.h1>
            </header>

            {/* Content Nexus */}
            <section className="contact-nexus-grid">
                
                {/* Left Side: Information */}
                <div className="nexus-intel-vessel">
                    <Motion.div {...slideTransition}>
                        <h2 className="intel-epic-headline">Get In Touch!</h2>
                        <p className="intel-sub-prose">
                            Reach out to us through any of the channels below and we’ll respond promptly.
                        </p>
                    </Motion.div>

                    <div className="intel-channels-stack">
                        {channels.map((channel, idx) => (
                            <Motion.div 
                                key={channel.id}
                                className="channel-artifact-row"
                                {...slideTransition}
                                transition={{ delay: 0.1 * idx, duration: 0.6 }}
                            >
                                <div className="channel-icon-orb">
                                    {channel.icon}
                                </div>
                                <div className="channel-details-core">
                                    <h4>{channel.title}</h4>
                                    <p>{channel.content}</p>
                                </div>
                            </Motion.div>
                        ))}
                    </div>
                </div>

                {/* Right Side: Map */}
                <Motion.div 
                    className="nexus-map-artifact"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15584.444444444444!2d8.5167!3d12.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDAwJzAwLjAiTiA4wrAzMScwMC4wIkU!5e0!3m2!1sen!2sng!4v1640000000000!5m2!1sen!2sng" 
                        className="map-iframe-frame"
                        style={{ border: 0 }} 
                        allowFullScreen="" 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Yum Delivery Locations"
                    ></iframe>
                </Motion.div>

            </section>
        </main>
    );
};

export default Contact;