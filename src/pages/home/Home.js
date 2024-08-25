import React from 'react'
import HeroSection from '../../components/herosection/HeroSection'
import AboutSection from '../../components/aboutsection/AboutSection'
import OurWork from '../../components/ourworksection/OurWork'
import ServicesSection from '../../components/services/ServicesSection'

const Home = () => {
  return (
    <>
   <HeroSection/>
   <AboutSection/>
   <OurWork/>
   <ServicesSection/>
    </>
  )
}

export default Home