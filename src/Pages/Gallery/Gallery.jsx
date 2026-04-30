import React from 'react';
import { motion as Motion } from 'framer-motion';
import './Gallery.css';
import FinalSection from '../../Components/Sections/FinalSection/FinalSection';

// Importing your final section component
// import FinalSection from './FinalSection'; 

const Gallery = () => {
    // Array of your gallery images
    const galleryAssets = [
        { id: 1, src: '/gallery1.webp', alt: 'Chef cooking with fire' },
        { id: 2, src: '/gallery2.webp', alt: 'Fresh stir-fry noodles' },
        { id: 3, src: '/gallery3.webp', alt: 'Pineapple rice bowl' },
        { id: 4, src: '/gallery4.webp', alt: 'Jollof rice and plantain platter' },
        { id: 5, src: '/gallery5.webp', alt: 'Lady enjoying a meal' },
        { id: 6, src: '/gallery6.webp', alt: 'Traditional Nkwobi serving' },
        { id: 7, src: '/gallery8.webp', alt: 'Restaurant beach view' },
        { id: 8, src: '/gallery7.webp', alt: 'Indomie and fried egg' },
        { id: 9, src: '/gallery9.webp', alt: 'Chef preparing a dish' },
        { id: 10, src: '/gallery10.webp', alt: 'Grilled chicken and sides' },
        { id: 11, src: '/gallery12.webp', alt: 'Family enjoying a meal together' },
        { id: 12, src: '/gallery11.webp', alt: 'Close-up of a delicious dish' },
        { id: 13, src: '/gallery13.webp', alt: 'Chef plating a meal' },
        { id: 14, src: '/gallery14.webp', alt: 'Restaurant interior with diners' },
        { id: 15, src: '/gallery15.webp', alt: 'Chef tossing food in a wok' },
        { id: 16, src: '/gallery16.webp', alt: 'Fresh ingredients on display' },
        { id: 17, src: '/gallery17.webp', alt: 'Happy customer enjoying food' },
        { id: 18, src: '/gallery18.webp', alt: 'Chef preparing a meal' },
        { id: 19, src: '/gallery19.webp', alt: 'Close-up of a delicious dish' },
        { id: 20, src: '/gallery20.webp', alt: 'Grilled chicken and sides' },
        { id: 21, src: '/gallery21.webp', alt: 'Family enjoying a meal together' },
        { id: 22, src: '/gallery22.webp', alt: 'Close-up of a delicious dish' },
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