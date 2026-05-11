import React from 'react'
import StrategicInitiatives from './StrategicInitiatives';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import PogliMissionSection from './PogliMissionSection';

const page = () => {
  return (
    <>
      <Hero />
      <PogliMissionSection />
      <LeftSection />
      <RightSection />
      <StrategicInitiatives />
    </>
  )
}

export default page