import React from 'react'
import CaseStudySection from './CaseStudySection';
import ProcessSection from './ProcessSection';
import Hero from './Hero';
import PogliSection from './PogliSection';
import QuoteSection from './QuoteSection';
import EcosystemSection from './EcosystemSection';
import QuoteCardSection from './QuoteCardSection';


const page = () => {
  return (
    <>
        <Hero />
        <QuoteSection />
        <PogliSection />
        <ProcessSection />
        <EcosystemSection />
        <QuoteCardSection />
        <CaseStudySection />
    </>
  )
}

export default page