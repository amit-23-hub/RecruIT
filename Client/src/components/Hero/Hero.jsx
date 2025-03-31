import React from 'react';
import styles from './Hero.module.css';
import img from '../../assets/HomeImg.png';
import leftV from '../../assets/leftV.png';
import rightsV from '../../assets/rightsV.png';
import Header from '../Navbar/NavBar';
import "./hero.css";

const Hero = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.desktopHeader}>
        <Header />
      </div>
      <div className={styles.leftVector}>
        <img src={leftV} alt="Left Vector" />
      </div>
      <div className={styles.rightVector}>
        <img src={rightsV} alt="Right Vector" />
      </div>
      <div className='photo-two'>
      <div className={styles.photo}>
        <img src={img} alt="Left Side Photo" />
        {/* <div className={styles.matchScore}>
          <span>100%</span>
        </div> */}
      </div>
      <div className='two_component'>
      <div className={styles.content}>
        <h1>AI-Powered</h1>
        <h1>Talent Matching</h1>
        <h2>Faster, Smarter, Effortless</h2>
      </div>
      <div className={styles.mobileImage}>
      <img src={img} alt="Left Side Photo" />

      </div>
      <div className={styles.sections}>
        <div className={styles.employerSection}>
          <div className={styles.employerRow}>
            <h3>For Employers</h3>
            <svg xmlns="http://www.w3.org/2000/svg"  width="40" height="40" viewBox="0 0 48 48" fill="none" className='icons'>
              <rect width="48" height="48" rx="24" fill="#F7EAFF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0856 30.9035C17.2263 31.0441 17.417 31.1231 17.616 31.1231C17.8149 31.1231 18.0056 31.0441 18.1463 30.9035L29.5859 19.4469L29.5943 27.5277C29.5909 27.6284 29.6077 27.7287 29.6439 27.8227C29.6801 27.9167 29.7348 28.0025 29.8048 28.0749C29.8748 28.1473 29.9587 28.2048 30.0514 28.2441C30.1442 28.2834 30.2439 28.3036 30.3446 28.3035C30.4453 28.3034 30.545 28.283 30.6377 28.2436C30.7303 28.2041 30.8141 28.1464 30.884 28.0739C30.9539 28.0013 31.0084 27.9155 31.0444 27.8214C31.0804 27.7273 31.0971 27.627 31.0934 27.5263L31.0849 17.6353C31.0848 17.4366 31.0058 17.246 30.8653 17.1055C30.7247 16.9649 30.5341 16.8859 30.3354 16.8858L20.4444 16.8773C20.2478 16.8806 20.0603 16.961 19.9224 17.1012C19.7845 17.2414 19.7072 17.4302 19.7071 17.6268C19.707 17.8235 19.7841 18.0123 19.9219 18.1526C20.0597 18.293 20.2471 18.3736 20.4437 18.3771L28.5266 18.3849L17.0849 29.8421C17.0152 29.9118 16.9599 29.9946 16.9222 30.0856C16.8846 30.1767 16.8652 30.2744 16.8653 30.3729C16.8653 30.4715 16.8848 30.5691 16.9226 30.6601C16.9604 30.7512 17.0158 30.8339 17.0856 30.9035Z" fill="black"/>
            </svg>
          </div>
          <p>Explore top pre-verified talent and hire faster with AI-powered matching.</p>
        </div>
        <div className={styles.recruiterSection}>
          <div className={styles.candidateRow}>
            <h3>For Candidates</h3>
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 48 48" fill="none" className='icons'>
              <rect width="48" height="48" rx="24" fill="#F7EAFF"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.0856 30.9035C17.2263 31.0441 17.417 31.1231 17.616 31.1231C17.8149 31.1231 18.0056 31.0441 18.1463 30.9035L29.5859 19.4469L29.5943 27.5277C29.5909 27.6284 29.6077 27.7287 29.6439 27.8227C29.6801 27.9167 29.7348 28.0025 29.8048 28.0749C29.8748 28.1473 29.9587 28.2048 30.0514 28.2441C30.1442 28.2834 30.2439 28.3036 30.3446 28.3035C30.4453 28.3034 30.545 28.283 30.6377 28.2436C30.7303 28.2041 30.8141 28.1464 30.884 28.0739C30.9539 28.0013 31.0084 27.9155 31.0444 27.8214C31.0804 27.7273 31.0971 27.627 31.0934 27.5263L31.0849 17.6353C31.0848 17.4366 31.0058 17.246 30.8653 17.1055C30.7247 16.9649 30.5341 16.8859 30.3354 16.8858L20.4444 16.8773C20.2478 16.8806 20.0603 16.961 19.9224 17.1012C19.7845 17.2414 19.7072 17.4302 19.7071 17.6268C19.707 17.8235 19.7841 18.0123 19.9219 18.1526C20.0597 18.293 20.2471 18.3736 20.4437 18.3771L28.5266 18.3849L17.0849 29.8421C17.0152 29.9118 16.9599 29.9946 16.9222 30.0856C16.8846 30.1767 16.8652 30.2744 16.8653 30.3729C16.8653 30.4715 16.8848 30.5691 16.9226 30.6601C16.9604 30.7512 17.0158 30.8339 17.0856 30.9035Z" fill="black"/>
            </svg>
          </div>
          <p>Explore job opportunities that match your skills and career goals instantly.</p>
        </div>
      </div>
      </div>
      </div>
      
    </div>
  );
};

export default Hero;