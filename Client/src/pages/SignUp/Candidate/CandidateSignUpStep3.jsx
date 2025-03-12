import React from "react";
import styles from "./CandidateSignUpStep3.module.css";
import LeftPortion from "../../../Common/LeftPortion";
const CandidateSignUpStep3 = () => {
  return (
    <div className={styles.signupContainer}>
      {/* Use the reusable LeftPortion component */}
      <LeftPortion />

      {/* Right Side */}
      <div className={styles.signupRight}>
        <div className={styles.signupForm}>
          {/* Email Icon */}
          <div className={styles.emailIcon}>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12C6 8.68629 8.68629 6 12 6H36C39.3137 6 42 8.68629 42 12V36C42 39.3137 39.3137 42 36 42H12C8.68629 42 6 39.3137 6 36V12Z"
                fill="#313131"
              />
              <path
                d="M33 22L24 28L15 22V18L24 24L33 18V22Z"
                fill="#FF5F5F"
              />
            </svg>
          </div>

          {/* Verification Text */}
          <h2 className={styles.verifyText}>Verify your email to proceed</h2>

          {/* Email Message */}
          <p className={styles.emailMessage}>
            An email has been sent to <strong>aman.singh@gmail.com</strong>.
            Please click the verification link in the email to confirm your
            address and proceed.
          </p>

          {/* Login Prompt */}
          <p className={styles.loginLink}>
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateSignUpStep3;