import React from 'react'
import EngineeringBenefits from './EngineeringBenefits';
import CTASection from './CTASection';
import PartnershipSection from './PartnershipSection';
import StatsSection from './StatsSection';
import SolutionsSection from './SolutionsSection';
import DXHeroSection from './DXHeroSection';

const page = () => {
  return (
    <>
        <DXHeroSection />
        <EngineeringBenefits />
        <CTASection />
        <PartnershipSection />
        <StatsSection />
        <SolutionsSection />
    </>
  )
}

export default page