import React from 'react';
import styles from './recruitHero.module.css';
import img from '../../../assets/recruiterPhoneHero.png';
import leftBg from '../../../assets/recruiterWave.png';
import { ArrowRight } from 'lucide-react';
import Header from '../../../components/Navbar/NavBar';

const RecruiterMobile = () => {
  return (
    <div className={styles.mobileContainer}>
      <div className={styles.headerWrapper}>
        <Header/>
      </div>
      {/* <div className={styles.backgroundPattern}></div> */}
      <div className={styles.leftBackground} >
        <img src={leftBg} alt="background"  />
      </div>
      <div className={styles.contentSection}>
        <div className={styles.headerContent}>
          <div className={styles.headerBox}>
            Find Top Talent Faster
            with AI-Powered Solutions
          </div>
          <p className={styles.description}>Streamline your hiring process, uncover the best candidates, and make smarter decisions with our cutting-edge AI tools.</p>
          <button className={styles.button}>
            <span>Get Started</span>
            <ArrowRight className={styles.arrowIcon} />
          </button>
        </div>
        <div className={styles.imageSection}>
          <img src={img} alt="Recruitment AI" className={styles.profileImage} />
          <div className={styles.matchScore}>
            <span>95%</span>
            <span>MATCH SCORE</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecruiterMobile;