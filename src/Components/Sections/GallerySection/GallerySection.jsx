import React from 'react';
import { Link } from 'react-router-dom';
import { motion as Motion } from 'framer-motion';
import { HiOutlineArrowRight } from 'react-icons/hi';
import './GallerySection.css';

const GallerySection = () => {
    const images = [
        { id: 1, src: '/g1.png', class: 'node-outer-left' },
        { id: 2, src: '/g2.png', class: 'node-inner-left' },
        { id: 3, src: '/g3.png', class: 'node-center' },
        { id: 4, src: '/g4.png', class: 'node-inner-right' },
        { id: 5, src: '/g5.png', class: 'node-outer-right' },
    ];

    return (
        <section className="yum-gallery-portal">
            <div className="gallery-inner-horizon">
                
                {/* Header Phase */}
                <header className="gallery-intel-block">
                    <Motion.span 
                        className="gallery-status-tag"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        [Past Events]
                    </Motion.span>
                    <Motion.h2 
                        className="gallery-epic-title"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        See What You’re Missing
                    </Motion.h2>
                    <Motion.p 
                        className="gallery-sub-narrative"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        Fresh, tasty meals made with care and served hot every time.
                    </Motion.p>
                </header>

                {/* Visual Fan Phase */}
                <div className="gallery-visual-fan">
                    {images.map((img, index) => (
                        <Motion.img
                            key={img.id}
                            src={img.src}
                            alt="Past Event Meal"
                            className={`visual-artifact-node ${img.class}`}
                            initial={{ opacity: 0, y: 40, rotate: 0 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ 
                                delay: index * 0.1, 
                                duration: 0.6,
                                type: "spring",
                                stiffness: 100 
                            }}
                            whileHover={{ scale: 1.1, zIndex: 20, transition: { duration: 0.2 } }}
                        />
                    ))}
                </div>

                {/* Call To Action Phase */}
                <Motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                >
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="instagram-trigger-anchor"
                    >
                        <Motion.span
                            whileHover={{ x: -5 }}
                            transition={{ duration: 0.2 }}
                        >
                            Follow us on Instagram
                        </Motion.span>
                        <HiOutlineArrowRight />
                    </a>
                </Motion.div>

            </div>
        </section>
    );
};

export default GallerySection;