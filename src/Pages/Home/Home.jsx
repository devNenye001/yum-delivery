import React from 'react'
import Hero from '../../Components/Sections/Hero/Hero'
import AboutSection from '../../Components/Sections/AboutSection/AboutSection'
import ServicesSection from '../../Components/Sections/ServicesSection/ServicesSection'
import OtherSection from '../../Components/Sections/OtherSection/OtherSection'
import ShopSection from '../../Components/Sections/ShopSection/ShopSection'

const Home = () => {
  return (
    <div>
        <Hero />
        <AboutSection />
        <ServicesSection />
        <OtherSection />
        <ShopSection />
    </div>
  )
}

export default Home