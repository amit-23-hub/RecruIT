import React from 'react';
import styles from './HowSection.module.css';

const HowSection = () => {
  return (
    <div className={styles.frame}>
      <div className={styles.group}>
        <div className={styles.header}>
          <div className={styles.title}>
            <span className={styles.seeHowItWorks}>See How It Works</span>
            <h1 className={styles.mainTitle}>Find Top Talent Effortlessly</h1>
          </div>
          <div className={styles.buttons}>
            <button className={styles.recruitersButton}>For Recruiters</button>
            <button className={styles.candidatesButton}>For Candidates</button>
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.leftContent}>
            <div className={styles.step}>
              <div className={styles.icon}></div>
              <span className={styles.stepTextMain}>Enter job keywords</span>
            </div>
            <div className={styles.step}>
              <div className={styles.icon}></div>
              <span className={styles.stepText}>Get best-matched candidates</span>
            </div>
            <div className={styles.step}>
              <div className={styles.icon}></div>
              <span className={styles.stepText}>Download profiles</span>
            </div>
            <div className={styles.step}>
              <div className={styles.icon}></div>
              <span className={styles.stepText}>Request a tech interview</span>
            </div>
            <div className={styles.step}>
              <div className={styles.icon}></div>
              <span className={styles.stepText}>Get a detailed interview report</span>
            </div>
          </div>
          <div className={styles.rightContent}></div>
        </div>
      </div>
    </div>
  );
};

export default HowSection;