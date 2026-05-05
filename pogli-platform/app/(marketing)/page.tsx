import React from 'react'
import Hero from './HomeComponents/Hero'
import About from './HomeComponents/About'
import BusinessSection from './HomeComponents/BusinessSection'  
import NewsSection from './HomeComponents/NewsSection'
import ChallengeSection from './HomeComponents/ChallengesSection'
import CapabilitiesSection from './HomeComponents/CapabilitiesSection'
import ServiceSection from './HomeComponents/ServiceSection'

function page() {
  return (
    <>
      <Hero />
      <About />
      <BusinessSection />
      <ServiceSection />
      <CapabilitiesSection />
      <NewsSection />
      <ChallengeSection />
    </> 
  )
}

export default page