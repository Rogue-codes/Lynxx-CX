import React from 'react'
import { laptopmobile, mac } from '../../assets'
import Footer from '../../components/Footer'
import AutoScroller from '../../widgets/AutoScroller'
import About from './landingComponents/About'
import Faq from './landingComponents/Faq'
import Inovative from './landingComponents/Inovative'
import Perks from './landingComponents/Perks'
import PopularToken from './landingComponents/PopularToken'
import RoadMap from './landingComponents/RoadMap'
import Team from './landingComponents/Team'
import Video from './landingComponents/Video'
import Welcome from './landingComponents/Welcome'

export default function Landing() {
  return (
    <div className='lg:mt-[5.2rem]'>
      <div className='t40-container'>
      <Welcome/>
      <AutoScroller/>
      <PopularToken/>
      <Perks/>
      <Video/>
      <Inovative heading='Innovative Digital Asset Platform' img={mac}/>
      <Inovative heading='Easily Track and Manage Your Portfolio' buySell={"Buy and sell"} smText={"popular digital Assets, keep track of them in the one place."} img={laptopmobile}/>
      <About/>
      <RoadMap/>
      <Team/>
      <Faq/>
      </div>
    </div>
  )
}
