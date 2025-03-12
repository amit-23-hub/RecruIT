import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.menu}>
        <a href="/solutions">Solutions</a>
        <a href="/pricing">Pricing</a>
        <a href="/faqs">FAQs</a>
      </div>
      <a href="/signup" className={styles.signupButton}>Sign Up</a>
    </div>
  );
};

export default Navbar;