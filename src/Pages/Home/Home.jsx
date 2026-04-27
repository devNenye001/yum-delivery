import React from 'react'
import Hero from '../../Components/Sections/Hero/Hero'
import AboutSection from '../../Components/Sections/AboutSection/AboutSection'
import ServicesSection from '../../Components/Sections/ServicesSection/ServicesSection'
import OtherSection from '../../Components/Sections/OtherSection/OtherSection'
import ShopSection from '../../Components/Sections/ShopSection/ShopSection'
import GallerySection from '../../Components/Sections/GallerySection/GallerySection'
import TestimonialSection from '../../Components/Sections/TestimonialSection/TestimonialSection'
import FinalSection from '../../Components/Sections/FinalSection/FinalSection'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <OtherSection />
        <ShopSection />
        <GallerySection />
        <TestimonialSection />
        <FinalSection />
    </div>
  )
}

export default Home