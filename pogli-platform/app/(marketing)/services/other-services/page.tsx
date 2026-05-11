import React from 'react'
import TalentSection from './TalentSection';
import ConsultingCardsSection from './ConsultingCardsSection';
import ServiceCards from './ServiceCards';
import ExpertiseHeader from './ExpertiseHeader';
import StrategyHero from './StrategyHero';
import CTASection from './CTASection';

const page = () => {
  return (
    <>
        <StrategyHero />
        <ExpertiseHeader />
        <TalentSection />
        <ConsultingCardsSection />
        <ServiceCards />
        <CTASection />
    </>
  )
}

export default page