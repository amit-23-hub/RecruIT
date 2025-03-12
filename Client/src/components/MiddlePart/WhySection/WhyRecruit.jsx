import React from 'react';
import styles from './WhyRecruit.module.css';

const WhyRecruit = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.frame}>
        <div className={styles.container}>
          <div className={styles.leftSection}></div>
          <div className={styles.rightSection}>
            <div className={styles.header}>
              <span className={styles.subTitle}>Why Recruit?</span>
              <h1 className={styles.mainTitle}>Smarter Hiring, Stronger Teams</h1>
            </div>
            <div className={styles.features}>
              <div className={styles.feature}>
                <div className={styles.icon}></div>
                <div className={styles.featureText}>
                  <h3>Fastest hiring process</h3>
                  <p>Find job-ready candidates in seconds.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}></div>
                <div className={styles.featureText}>
                  <h3>Pre-verified talent</h3>
                  <p>No more unqualified applicants. Every candidate is skills-tested.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}></div>
                <div className={styles.featureText}>
                  <h3>AI-powered smart matching</h3>
                  <p>Instant recommendations with a profile match score.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}></div>
                <div className={styles.featureText}>
                  <h3>End-to-end interview assistance</h3>
                  <p>We handle screening & tech interviews for you.</p>
                </div>
              </div>
              <div className={styles.feature}>
                <div className={styles.icon}></div>
                <div className={styles.featureText}>
                  <h3>Market insights at a glance</h3>
                  <p>Get salary trends and hiring recommendations.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRecruit;