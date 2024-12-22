import React from 'react'
import HomeBanner from '../HomeBanner/HomeBanner'
import InfoCards from '../InfoCards/InfoCards'
import Services from '../Services/Services'
import DentalCare from '../DentalCare/DentalCare'
import HomeAppointment from './HomeAppointment/HomeAppointment'
import Testimonial from '../Testimonial/Testimonial'
import ContactUs from './ContactUs/ContactUs'






const Home = () => {
  return (
    <div>
        <HomeBanner></HomeBanner>
        <InfoCards></InfoCards>
        <Services></Services>
        <DentalCare></DentalCare>
        <HomeAppointment></HomeAppointment>
        <Testimonial></Testimonial>
        <ContactUs></ContactUs>
        
       
        
        
        
    </div>
  )
}

export default Home