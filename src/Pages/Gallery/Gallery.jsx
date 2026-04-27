import React from 'react';
import { motion as Motion } from 'framer-motion';
import './Gallery.css';
import FinalSection from '../../Components/Sections/FinalSection/FinalSection';

// Importing your final section component
// import FinalSection from './FinalSection'; 

const Gallery = () => {
    // Array of your gallery images
    const galleryAssets = [
        { id: 1, src: '/gg1.svg', alt: 'Chef cooking with fire' },
        { id: 2, src: '/gg2.svg', alt: 'Fresh stir-fry noodles' },
        { id: 3, src: '/gg3.svg', alt: 'Pineapple rice bowl' },
        { id: 4, src: '/gg1.svg', alt: 'Jollof rice and plantain platter' },
        { id: 5, src: '/gg3.svg', alt: 'Lady enjoying a meal' },
        { id: 6, src: '/gg1.svg', alt: 'Traditional Nkwobi serving' },
        { id: 7, src: '/gg1.svg', alt: 'Restaurant beach view' },
        { id: 8, src: '/gg1.svg', alt: 'Indomie and fried egg' },
    ];

    return (
        <main className="yum-gallery-voyage">
            {/* Header Vista */}
            <header className="gallery-epic-vista">
                <Motion.h1 
                    className="vista-title-core"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    Gallery
                </Motion.h1>
            </header>

            {/* Mosaic Grid */}
            <section className="gallery-mosaic-nexus">
                {galleryAssets.map((asset, index) => (
                    <Motion.div 
                        key={asset.id}
                        className="mosaic-artifact-capsule"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ 
                            delay: index * 0.1, 
                            duration: 0.5, 
                            ease: "easeOut" 
                        }}
                    >
                        <img 
                            src={asset.src} 
                            alt={asset.alt} 
                            className="artifact-visual-asset" 
                        />
                    </Motion.div>
                ))}
            </section>

            {/* Final Section Component (Assuming it is imported) */}
             <FinalSection /> 
        </main>
    );
};

export default Gallery;