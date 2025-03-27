import React from "react";
import styles from "./SignUp3.module.css";
import RLeftPortion from "../../Common/RLeftPortion";
import { useLocation } from "react-router-dom";

const SignUp3 = () => {
  const location = useLocation();
  // Get email from location state or default to empty string
  const email = location.state?.companyEmail || "";

  return (
    <div className={styles.signupContainer}>
      <RLeftPortion />
      
      <div className={styles.signupRight}>
        <div className={styles.signupForm}>
          <img 
            src="/path-to-your-email-icon.svg" 
            alt="Email icon" 
            className={styles.emailIcon} 
          />
          <h2 className={styles.verifyText}>Verify your email to proceed</h2>
          <p className={styles.emailMessage}>
            An email has been sent to {email}. Please click the verification 
            link in the email to confirm your address and proceed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;