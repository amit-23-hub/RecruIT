import React, { useState, useEffect } from 'react';
import Hero from '../../components/Hero/Hero';
import HeroMobile from '../../components/Hero/HeroMobile';
import StatsWrapper from '../../components/Awrapper/StatsWrapper';
import HowSection from '../../components/MiddlePart/HowSection/HowSection';
import WhyRecruit from '../../components/MiddlePart/WhySection/WhyRecruit';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Navbar/NavBar';

function HomePage() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width <= 768);
    };

    // Initial check
    handleResize();
    
    // Add resize listener with debounce
    let timeoutId;
    const debouncedResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', debouncedResize);
    return () => {
      window.removeEventListener('resize', debouncedResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <>
      {isMobile && <Header />}
      {isMobile ? <HeroMobile /> : <Hero />}
      <StatsWrapper />
      <HowSection />
      <WhyRecruit />
      <Footer />
    </>
  );
}

export default HomePage;