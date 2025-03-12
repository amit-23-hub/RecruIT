import React from "react";
import styles from "../pages/SignUp/SignUp1.module.css"; 

const LeftPortion = () => {
  return (
    <div className={styles.signupLeft}>
      <div className={styles.leftContent}>
        <h2>RecruIT</h2>
        <h1>Sign up</h1>
        <h1>and start hiring in minutes.</h1>
        <span>No lengthy job postings. Just instant matches.</span>
      </div>
    </div>
  );
};

export default LeftPortion;