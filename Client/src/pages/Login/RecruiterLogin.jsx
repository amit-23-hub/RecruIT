import React from "react";
import styles from "./RecruiterLogin.module.css";
import LeftPortion from "../../Common/LeftPortion"; // Import the reusable LeftPortion component

const RecruiterLogin = () => {
    return (
      <div className={styles.loginContainer}>
        {/* Use the reusable LeftPortion component */}
        <LeftPortion />
  
        {/* Right Side */}
        <div className={styles.loginRight}>
          <div className={styles.loginForm}>
            {/* Header */}
            <h2 className={styles.loginHeader}>Log in</h2>
  
            {/* Email Input */}
            <div className={styles.formGroup}>
              <label>Email*</label>
              <input
                type="email"
                placeholder="amansingh@bluparrot.com"
                defaultValue="amansingh@bluparrot.com"
              />
            </div>
  
            {/* Password Input */}
            <div className={styles.formGroup}>
              <label>Password*</label>
              <input
                type="password"
                placeholder="••••••••"
              />
              <span className={styles.helperText}>Caps Lock is on</span>
            </div>
  
            {/* Forgot Password Link */}
            <a href="#" className={styles.forgotPassword}>
              Forgot password?
            </a>
  
            {/* Login Button */}
            <button className={styles.loginButton}>Login</button>
  
            {/* Divider */}
            <div className={styles.divider}>
              <span>Or</span>
            </div>
  
            {/* Microsoft and Google Login Options */}
            <div className={styles.socialLogin}>
              <button className={styles.microsoftButton}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
                  alt="Microsoft Logo"
                  className={styles.socialIcon}
                />
              </button>
              <button className={styles.googleButton}>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google Logo"
                  className={styles.socialIcon}
                />
              </button>
            </div>
  
            {/* Sign Up Prompt */}
            <p className={styles.signupPrompt}>
              Don’t have an account? <a href="#">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default RecruiterLogin;
  