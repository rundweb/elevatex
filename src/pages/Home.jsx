import React from 'react'
import HomeComponents from '../components/HomeComponents'
import AboutComponents from '../components/AboutComponents'
import ServicesComponents from '../components/ServicesComponents'
import PortfolioComponents from '../components/PortfolioComponents'
import TestimonialComponents from '../components/TestimonialComponents'

const Home = () => {
  return (
    <div className='mt-20 lg:mt-14'>
      <HomeComponents/>
      <AboutComponents/>
      <ServicesComponents/>
      <PortfolioComponents/>
      <TestimonialComponents/>

    </div>
  )
}

export default Home
