import React from "react";
import styles from "./SignUp3.module.css";
import RLeftPortion from "../../../Common/RLeftPortion";
import { useLocation, useNavigate } from "react-router-dom";
import { FaEnvelope } from 'react-icons/fa'; // Add email icon

const SignUp3 = ({ email, onComplete }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.signupContainer}>
      <RLeftPortion />
      
      <div className={styles.signupRight}>
        <div className={styles.signupForm}>
          <FaEnvelope className={styles.emailIcon} />
          <h2 className={styles.verifyText}>Verify your email to proceed</h2>
          <p className={styles.emailMessage}>
            We've sent a verification email to <strong>{email}</strong>. 
            Please click the verification link in the email to confirm your address.
          </p>
          <p className={styles.emailMessage}>
            Once verified, you can <a href="/login" onClick={() => onComplete()}>login to your account</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp3;