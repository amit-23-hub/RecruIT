import React from "react";
import styles from "./SignUp3.module.css";

const SignUp3 = () => {
  return (
    <div className={styles.signupContainer}>
      {/* Left Side */}
      <div className={styles.signupLeft}>
        <div className={styles.leftContent}>
          <h2>RecruIT</h2>
          <h1>Sign up</h1>
          <h1>and start hiring in minutes.</h1>
          <span>No lengthy job postings. Just instant matches.</span>
        </div>
      </div>

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
            An email has been sent to <strong>aman.singh@bluparrot.com</strong>.
            Please click the verification link in the email to confirm your
            address and proceed.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;