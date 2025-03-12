import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      {/* Logo and Social Media Icons */}
      <div className={styles.topRow}>
        {/* Brand Logo and Name */}
        <div className={styles.brand}>
          <div className={styles.logo}></div>
          <span className={styles.brandName}>RecruIT</span>
        </div>

        {/* Social Media Icons */}
        <div className={styles.socialMedia}>
          <div className={styles.socialIcon}>
            <img src="/path/to/linkedin-icon.svg" alt="LinkedIn" />
          </div>
          <div className={styles.socialIcon}>
            <img src="/path/to/instagram-icon.svg" alt="Instagram" />
          </div>
          <div className={styles.socialIcon}>
            <img src="/path/to/facebook-icon.svg" alt="Facebook" />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className={styles.divider}></div>

      {/* Copyright Text */}
      <div className={styles.copyright}>
        © Copyright 2024 - RecruIT
      </div>
    </div>
  );
};

export default Footer;