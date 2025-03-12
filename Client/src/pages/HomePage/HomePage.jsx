import React from 'react'
import Hero from '../../components/Hero/Hero'
import StatsWrapper from '../../components/Awrapper/StatsWrapper'
import HowSection from '../../components/MiddlePart/HowSection/HowSection'
import WhyRecruit from '../../components/MiddlePart/WhySection/WhyRecruit'
import Footer from '../../components/Footer/Footer'
function HomePage() {
  return (
    <>
   <Hero/>
   <StatsWrapper/>
   <HowSection/>
   <WhyRecruit/>
   <Footer/>
    </>
  )
}

export default HomePage