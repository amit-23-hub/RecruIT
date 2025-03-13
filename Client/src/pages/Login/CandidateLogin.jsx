import React from "react";
import styles from "./RecruiterLogin.module.css";
import CLeftPortion from "../../Common/CLeftPortion"; 

const RecruiterLogin = () => {
  return (
    <div className={styles.loginContainer}>
   
      <CLeftPortion />

      
      <div className={styles.loginRight}>
        <div className={styles.loginForm}>
        
          <h2 className={styles.loginHeader}>Log in</h2>

          
          <div className={styles.formGroup}>
            <label>Email*</label>
            <input
              type="email"
              placeholder="amansingh@bluparrot.com"
              defaultValue="amansingh@bluparrot.com"
            />
          </div>

        
          <div className={styles.formGroup}>
            <label>Password*</label>
            <input type="password" placeholder="••••••••" />
            <span className={styles.helperText}>Caps Lock is on</span>
          </div>

      
          <a href="#" className={styles.forgotPassword}>
            Forgot password?
          </a>

          
          <button className={styles.loginButton}>Login</button>

         
          <div className={styles.divider}>
            <span>Or</span>
          </div>

        
          <div className={styles.socialLogin}>
          
            <button className={styles.microsoftButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 23 23"
                width="25"
                height="25"
              >
                <rect fill="#f25022" x="1" y="1" width="10" height="10" />
                <rect fill="#7fba00" x="12" y="1" width="10" height="10" />
                <rect fill="#00a4ef" x="1" y="12" width="10" height="10" />
                <rect fill="#ffb900" x="12" y="12" width="10" height="10" />
              </svg>
            </button>

           
            <button className={styles.googleButton}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
              >
                <path
                  d="M23.001 12.2331C23.001 11.3698 22.9296 10.7398 22.7748 10.0864H12.7153V13.983H18.62C18.501 14.9514 17.8582 16.4097 16.4296 17.3897L16.4096 17.5202L19.5902 19.9349L19.8106 19.9564C21.8343 18.1247 23.001 15.4297 23.001 12.2331Z"
                  fill="#4285F4"
                />
                <path
                  d="M12.714 22.5001C15.6068 22.5001 18.0353 21.5667 19.8092 19.9567L16.4282 17.39C15.5235 18.0083 14.3092 18.44 12.714 18.44C9.88069 18.44 7.47596 16.6083 6.61874 14.0767L6.49309 14.0871L3.18583 16.5955L3.14258 16.7133C4.90446 20.1433 8.5235 22.5001 12.714 22.5001Z"
                  fill="#34A853"
                />
                <path
                  d="M6.62046 14.0765C6.39428 13.4232 6.26337 12.7231 6.26337 11.9998C6.26337 11.2764 6.39428 10.5765 6.60856 9.92313L6.60257 9.78398L3.25386 7.23535L3.14429 7.28642C2.41814 8.70977 2.00146 10.3081 2.00146 11.9998C2.00146 13.6915 2.41814 15.2897 3.14429 16.7131L6.62046 14.0765Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12.7141 5.55997C14.7259 5.55997 16.083 6.41163 16.8569 7.12335L19.8807 4.23C18.0236 2.53834 15.6069 1.5 12.7141 1.5C8.52353 1.5 4.90447 3.85665 3.14258 7.28662L6.60686 9.92332C7.47598 7.39166 9.88073 5.55997 12.7141 5.55997Z"
                  fill="#EB4335"
                />
              </svg>
            </button>
          </div>

        
          <p className={styles.signupPrompt}>
            Don’t have an account? <a href="#">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruiterLogin;
