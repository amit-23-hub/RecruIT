import React, { useState, useEffect } from 'react'
import TalentLanding from './Landing/TalentLanding'
import AiPowered from './Ai-Powered/Ai-Powered'
import Pricing from './Pricing/Pricing'
import RecruiterMobile from './recruitHero/recruitHero'
import Cta from './Cta/cta'
import Footer from '../../components/Footer/Footer'

function RecruiterFeatures() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      {width < 768 ? <RecruiterMobile /> : <TalentLanding />}
      <AiPowered/>
      <Pricing/>
      <Cta/>
      <Footer/>
    </>
  )
}

export default RecruiterFeatures