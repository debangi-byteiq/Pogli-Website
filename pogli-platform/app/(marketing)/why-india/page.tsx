import React from 'react'
import IndiaJapanHero from './IndiaJapanHero';
import FactoryCandidateSection from './FactoryCandidateSection';
import IndiaMarketBarrier from './IndiaMarketBarrier';
import GrowthBarrierSection from '../services/picube/GrowthBarrierSection';
import GrowthMarketSection from './GrowthMarketSection';
import JapanIndiaBridge from './JapanIndiaBridge';

const page = () => {
  return (
    <>
        <IndiaJapanHero />
        <GrowthMarketSection />
        <FactoryCandidateSection />
        <IndiaMarketBarrier />
        <JapanIndiaBridge />
    </>
  )
}

export default page