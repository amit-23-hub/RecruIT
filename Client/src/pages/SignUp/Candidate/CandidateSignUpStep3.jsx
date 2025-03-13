import React from "react";
import styles from "./CandidateSignUpStep3.module.css";
import CLeftPortion from "../../../Common/CLeftPortion";
const CandidateSignUpStep3 = () => {
  return (
    <div className={styles.signupContainer}>
     
      <CLeftPortion />

      <div className={styles.signupRight}>
        <div className={styles.signupForm}>
          
          <div className={styles.emailIcon}>
                      <svg
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M28.5 36H6L5.9955 13.359L23.1465 25.233C23.3973 25.4065 23.695 25.4995 24 25.4995C24.305 25.4995 24.6027 25.4065 24.8535 25.233L42 13.365V27H45V12C44.9988 11.2047 44.6824 10.4423 44.12 9.87999C43.5577 9.31764 42.7953 9.00119 42 9H6C5.20435 9 4.44129 9.31607 3.87868 9.87868C3.31607 10.4413 3 11.2044 3 12V36C3.00119 36.7953 3.31764 37.5577 3.87999 38.12C4.44235 38.6824 5.20472 38.9988 6 39H28.5V36ZM38.6985 12L24 22.176L9.3015 12H38.6985Z" fill="#313131"/>
                        <path d="M39 42C42.3137 42 45 39.3137 45 36C45 32.6863 42.3137 30 39 30C35.6863 30 33 32.6863 33 36C33 39.3137 35.6863 42 39 42Z" fill="#FF5F5F"/>
                      </svg>
                    </div>

        
          <h2 className={styles.verifyText}>Verify your email to proceed</h2>

        
          <p className={styles.emailMessage}>
            An email has been sent to <strong>aman.singh@gmail.com</strong>.
            Please click the verification link in the email to confirm your
            address and proceed.
          </p>

          
          <p className={styles.loginLink}>
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateSignUpStep3;