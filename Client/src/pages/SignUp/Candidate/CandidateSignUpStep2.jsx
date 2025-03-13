import React, { useState } from "react";
import styles from "./CandidateSignUpStep2.module.css";
import RLeftPortion from "../../../Common/RLeftPortion"; // Import the reusable RLeftPortion component

const CandidateSignUpStep2 = ({ onNext, formData }) => {
  const [localFormData, setLocalFormData] = useState({
    email: formData.email || "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLocalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      localFormData.email &&
      localFormData.password &&
      localFormData.confirmPassword &&
      localFormData.agreeToTerms
    ) {
      if (localFormData.password === localFormData.confirmPassword) {
        onNext(localFormData);
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("Please fill in all fields and agree to the terms");
    }
  };

  return (
    <div className={styles.signupContainer}>
      {/* Use the reusable RLeftPortion component */}
      <RLeftPortion />

      {/* Right Side */}
      <div className={styles.signupRight}>
        <div className={styles.signupForm}>
          {/* Header Section */}
          <h2 className={styles.createAccount}>Create Account</h2>
          <p className={styles.subtitle}>
            We match you with companies looking for your exact skills.
          </p>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
            <p className={styles.stepText}>Step 2 of 2</p>
          </div>

          {/* Form Inputs */}
          <div className={styles.formInput}>
            <div className={styles.formGroup}>
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={localFormData.email}
                onChange={handleChange}
                placeholder="amana.singh@gmail.com"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Create Password*</label>
              <input
                type="password"
                name="password"
                value={localFormData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
              />
              <span className={styles.helperText}>Caps Lock is on</span>
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

            <div className={styles.terms}>
              <input
                type="checkbox"
                name="agreeToTerms"
                checked={localFormData.agreeToTerms}
                onChange={(e) =>
                  setLocalFormData({ ...localFormData, agreeToTerms: e.target.checked })
                }
                required
              />
              <label>
                By creating an account, you agree to our{" "}
                <a href="#">Terms and Conditions</a> and{" "}
                <a href="#">Privacy Policy</a>.
              </label>
            </div>
          </div>

          {/* Next Button */}
          <div className={styles.buttonContainer}>
            <button className={styles.nextButton} onClick={handleSubmit}>
              Verify Email
            </button>
          </div>

          {/* Login Prompt */}
          <p className={styles.loginLink}>
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateSignUpStep2;