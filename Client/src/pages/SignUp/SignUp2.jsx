import React, { useState, useEffect } from "react";
import styles from "./SignUp2.module.css";
import RLeftPortion from "./../../Common/RLeftPortion";
import { useNavigate } from "react-router-dom";

const SignupStep2 = ({ onNext, formData = {} }) => {  // Add default empty object
  const navigate = useNavigate();
  
  const [localFormData, setLocalFormData] = useState({
    companyEmail: formData?.companyEmail || "",  // Add optional chaining
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  // Add check for direct access
  useEffect(() => {
    if (!formData || Object.keys(formData).length === 0) {
      navigate('/signup');  // Redirect to step 1 if accessed directly
    }
  }, [formData, navigate]);

  const [capsLockOn, setCapsLockOn] = useState(false);

  // Function to detect Caps Lock
  const handleKeyPress = (e) => {
    const isCapsLockOn = e.getModifierState("CapsLock");
    setCapsLockOn(isCapsLockOn);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (
      localFormData.companyEmail &&
      localFormData.password &&
      localFormData.confirmPassword &&
      localFormData.agreeToTerms
    ) {
      if (localFormData.password === localFormData.confirmPassword) {
        onNext?.(localFormData);  // Add optional chaining
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill in all fields and agree to the terms");
    }
  };

  return (
    <div className={styles.signupContainer}>
      <RLeftPortion />
      
      <div className={styles.signupRight}>
        <div className={styles.signupForm}>
          <h2 className={styles.createAccount}>Create Account</h2>
          <p className={styles.subtitle}>
            Get Instant Access to Pre-Verified, Job-Ready Candidates.
          </p>
          
          <div className={styles.progressBar}>
            <div className={styles.progress} style={{width: '100%'}}></div>
            <p className={styles.stepText}>Step 2 of 2</p>
          </div>

          <div className={styles.formInput}>
            <div className={styles.formGroup}>
              <label>Company Email*</label>
              <input
                type="email"
                name="companyEmail"
                value={localFormData.companyEmail}
                onChange={handleChange}
                placeholder="aman.singh@bluparrot.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>
                Create Password*
                {capsLockOn && (
                  <span className={styles.capsLockWarning}>Caps Lock is ON</span>
                )}
              </label>
              <input
                type="password"
                name="password"
                value={localFormData.password}
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder="••••••••"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Confirm Password*</label>
              <input
                type="password"
                name="confirmPassword"
                value={localFormData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
            </div>

            <div className={styles.termsContainer}>
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={localFormData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeToTerms">
                By creating an account, you agree to our Terms and Conditions and
                Privacy Policy.
              </label>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button className={styles.nextButton} onClick={handleSubmit}>
              Verify Email
            </button>
          </div>

          <p className={styles.loginLink}>
            Already have an account? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupStep2;