import React from 'react'
import HomeComponents from '../components/HomeComponents'
import AboutComponents from '../components/AboutComponents'
import ServicesComponents from '../components/ServicesComponents'

const Home = () => {
  return (
    <div className='mt-20 lg:mt-14'>
      <HomeComponents/>
      <AboutComponents/>
      <ServicesComponents/>
    </div>
  )
}

export default Home
