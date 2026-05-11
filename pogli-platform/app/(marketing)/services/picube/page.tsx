import React from 'react'
import Hero from './Hero';
import BusinessCards from './BusinessCards';
import PartnerSection from './PartnerSection';
import GrowthBarrierSection from './GrowthBarrierSection';
import NineDLensSection from './NineDLensSection';

const page = () => {
  return (
    <>
        <Hero />
        <BusinessCards />
        <NineDLensSection />
        <GrowthBarrierSection />
        <PartnerSection />
    </>
  )
}

export default page