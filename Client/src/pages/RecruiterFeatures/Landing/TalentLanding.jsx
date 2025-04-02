import React from 'react';
import styles from './TalentLanding.module.css';
import Navbar from '../../../components/Navbar/Navbar';
import img1 from '../../../assets/recruiterFeature1.png';
import img2 from '../../../assets/recruiterFeature2.png';
import img3 from '../../../assets/recruiterFeature3.png';
import img4 from '../../../assets/recruiterFeature4.png';
import img5 from '../../../assets/recruiterFeature5.png';

const TalentLanding = () => {
  const profiles = [img1, img2, img3, img4, img5];

  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.content}>
        

        <span className={styles.mainContent}>
          <h1>
            Find Top Talent <span>Faster </span>
            <br></br>
            <span>with AI-Powered Solutions</span>
          </h1>
          <p>
            Streamline your hiring process, uncover the best candidates, and
            make smarter decisions with our cutting-edge AI tools.
          </p>
          <button className={styles.getStartedButton}>
            Get started <span>→</span>
          </button>
        </span>
        <div className={styles.profileGrid}>
          {profiles.map((profile, index) => (
            <div 
              key={index} 
              className={`${styles.profileCard} ${
                index === 0 || index === profiles.length - 1 
                  ? styles.largeProfile 
                  : styles.smallProfile
              }`}
              style={{
                backgroundImage: `url(${profile})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TalentLanding;