import React from 'react';
import { motion as Motion } from 'framer-motion';
import './ShopSection.css';

const ShopSection = () => {
    const favoritesData = [
        {
            id: 1,
            name: "Oreo Cookies and Cream",
            price: "N5500",
            img: "/shop3.svg" 
        },
        {
            id: 2,
            name: "Naija Native Rice",
            price: "N5500",
            img: "/shop4.svg" 
        },
        {
            id: 3,
            name: "Peppered Turkey",
            price: "N5000",
            img: "/shop2.png" 
        },
        {
            id: 4,
            name: "Beef Sharwama",
            price: "N4500",
            img: "/shop11.png" 
        }
    ];

    const cardEntrance = {
        initial: { opacity: 0, scale: 0.9, y: 20 },
        whileInView: { opacity: 1, scale: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.5, ease: "easeOut" }
    };

    return (
        <section className="yum-gallery-orbit">
            <div className="orbit-inner-theater">
                
                {/* Header Phase */}
                <header className="orbit-intel-module">
                    <Motion.span 
                        className="orbit-badge-label"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        [ Hot Picks ]
                    </Motion.span>
                    <Motion.h2 
                        className="orbit-main-title"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Customer Favorites <br />
                        — Loved by Many
                    </Motion.h2>
                </header>

                {/* Items Phase */}
                <div className="orbit-grid-array">
                    {favoritesData.map((item, index) => (
                        <Motion.div 
                            key={item.id}
                            className="orbit-item-capsule"
                            {...cardEntrance}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <Motion.img 
                                src={item.img} 
                                alt={item.name} 
                                className="capsule-visual-core"
                                initial={{ rotate: -5 }}
                                whileHover={{ rotate: 0, scale: 1.1 }}
                            />
                            
                            <div className="capsule-text-vessel">
                                <h3 className="capsule-prose-name">{item.name}</h3>
                                <p className="capsule-price-tag">{item.price}</p>
                            </div>
                        </Motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default ShopSection;