import React, { useState } from "react";
import styles from "./SignUp1.module.css";
import RLeftPortion from "../../Common/RLeftPortion"; 

const SignupStep1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (formData.fullName && formData.companyName) {
      onNext(formData);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className={styles.signupContainer}>
    
      <RLeftPortion />

      <div className={styles.signupRight}>
        <div className={styles.signupForm}>
          {/* Header Section */}
          <h2 className={styles.createAccount}>Create Account</h2>
          <p className={styles.subtitle}>
            Get Instant Access to Pre-Verified, Job-Ready Candidates.
          </p>
          <div className={styles.progressBar}>
            <div className={styles.progress}></div>
            <p className={styles.stepText}>Step 1 of 2</p>
          </div>

          {/* Form Inputs */}
          <div className={styles.formInput}>
            <div className={styles.formGroup}>
              <label>Full Name*</label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Company Name*</label>
              <input
                type="text"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                placeholder="Enter your company name"
                required
              />
            </div>
          </div>

          {/* Next Button with Proper Gap */}
          <div className={styles.buttonContainer}>
            <button className={styles.nextButton} onClick={handleNext}>
              Next
            </button>
          </div>

          <p className={styles.loginLink}>
            Already have an account? <a href="#">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupStep1;