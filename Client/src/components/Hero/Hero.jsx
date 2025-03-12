import React from 'react';
import styles from './Hero.module.css';
import img from '../../assets/HomeImg.png';
import leftV from '../../assets/leftV.png';
import rightsV from '../../assets/rightsV.png';
import Navbar from '../Navbar/NavBar';

const Hero = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Navbar */}
      <Navbar />

      {/* Left Vector */}
      <div className={styles.leftVector}>
        <img src={leftV} alt="Left Vector" />
      </div>

      {/* Right Vector */}
      <div className={styles.rightVector}>
        <img src={rightsV} alt="Right Vector" />
      </div>

      {/* Photo */}
      <div className={styles.photo}>
        <img src={img} alt="Left Side Photo" />
        {/* Match Score Indicator */}
        <div className={styles.matchScore}>
          <span>100%</span>
        </div>
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h1>AI-Powered</h1>
        <h1>Talent Matching</h1>
        <h2>Faster, Smarter, Effortless</h2>
</div>
        {/* Sections */}
        <div className={styles.sections}>
          <div className={styles.employerSection}>
            <h3>For Employers</h3>
            <p>Explore top pre-verified talent and hire faster with AI-powered matching.</p>
          </div>
          <div className={styles.recruiterSection}>
            <h3>For Candidates</h3>
            <p>Explore job opportunities that match your skills and career goals instantly.</p>
          </div>
        </div>
      
    </div>
  );
};

export default Hero;
