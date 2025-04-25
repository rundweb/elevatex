import React from 'react'
import TestimonialComponents from '../components/TestimonialComponents'
import CoverPage from '../elements/CoverPage'
import FooterComponents from '../components/FooterComponents'

const Testimonial = () => {
  return (
    <div className='mt-20'>
      <CoverPage text={"Testimonial"}/>
      <TestimonialComponents/>
      <FooterComponents/>
    </div>
  )
}

export default Testimonial
