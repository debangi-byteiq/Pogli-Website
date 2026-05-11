import React from 'react'
import BusinessCards from './BusinessCards';
import MissionSection from './MissionSection';
import CompanyOverview from './CompanyOverview';


const page = () => {
  return (
    <>
        <CompanyOverview />
        <MissionSection />
        <BusinessCards />
    </>
  )
}

export default page