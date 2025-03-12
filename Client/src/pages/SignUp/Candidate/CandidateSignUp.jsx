import React, { useState } from "react";
import styles from "./CandidateSignUp.module.css";
import LeftPortion from "../../../Common/LeftPortion"; 

const CandidateSignUp = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    countryCode: "+91", // Default country code
    phoneNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNext = () => {
    if (formData.fullName && formData.countryCode && formData.phoneNumber) {
      onNext(formData);
    } else {
      alert("Please fill in all fields");
    }
  };

  return (
    <div className={styles.signupContainer}>
      {/* Use the reusable LeftPortion component */}
      <LeftPortion />

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

            {/* Phone Number with Country Code */}
            <div className={styles.phoneInputGroup}>
              <div className={styles.countryCodeInput}>
                <label>Country Code*</label>
                <input
                  type="text"
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleChange}
                  placeholder="+91"
                  required
                />
              </div>
              <div className={styles.phoneNumberInput}>
                <label>Phone Number*</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  required
                />
              </div>
            </div>
          </div>

          {/* Next Button */}
          <div className={styles.buttonContainer}>
            <button className={styles.nextButton} onClick={handleNext}>
              Next
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

export default CandidateSignUp;