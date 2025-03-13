import React from "react";
import styles from "./Logo.module.css"; 
import logoIcon from '../assets/logoIcon.png'

const Logo = () => {
  return (
    <div className={styles.logo}>
      <img src={logoIcon} alt="Logo" className={styles.logoImg} />
      <span className={styles.logoText}>RecruIT</span>
    </div>
  );
};

export default Logo;
