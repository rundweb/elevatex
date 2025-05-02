import React from 'react'
import PortfolioComponents from '../components/PortfolioComponents'
import ContactComponents from '../components/ContactComponents'
import FooterComponents from '../components/FooterComponents'
import CoverPage from '../elements/CoverPage'

const Portfolio = () => {
  return (
    <div className='mt-20'>
      <CoverPage text={'Our Portfolio'}/>
      <PortfolioComponents/>
      <ContactComponents/>
      <FooterComponents/>
    </div>
  )
}

export default Portfolio
