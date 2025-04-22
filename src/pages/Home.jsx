import React from 'react'
import HomeComponents from '../components/HomeComponents'
import AboutComponents from '../components/AboutComponents'
import ServicesComponents from '../components/ServicesComponents'
import PortfolioComponents from '../components/PortfolioComponents'
import TestimonialComponents from '../components/TestimonialComponents'
import FaqComponents from '../components/FaqComponents'
import PricingComponents from '../components/PricingComponents'

const Home = () => {
  return (
    <div className='mt-20 lg:mt-14'>
      <HomeComponents/>
      <AboutComponents/>
      <ServicesComponents/>
      <PortfolioComponents/>
      <TestimonialComponents/>
      <FaqComponents/>
      <PricingComponents/>
    </div>
  )
}

export default Home
