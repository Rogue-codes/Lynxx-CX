import React from 'react'
import Exchange from '../components/careers/Exchange'
import LandingScreen from '../components/careers/LandingScreen'
import Team from '../components/careers/Team'
import Values from '../components/careers/Values'
import WhyWorkHere from '../components/careers/WhyWorkHere'
import WorkWithUs from '../components/careers/WorkWithUs'

export default function Careers() {
  return (
    <div className='pb-24'>
        <div className="t40-container">
            <LandingScreen/>
            <Values/>
            <Team/>
            <WorkWithUs/>
            <WhyWorkHere/>
            <Exchange/>
        </div>
    </div>
  )
}
