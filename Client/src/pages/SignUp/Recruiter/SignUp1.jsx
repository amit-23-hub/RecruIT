import React, { useState } from "react";
import axios from 'axios';
import styles from "./SignUp1.module.css";
import RLeftPortion from "../../../Common/RLeftPortion";

const SignupStep1 = ({ onNext }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setError(''); // Clear error when user types
  };

  const handleNext = async () => {
    try {
      if (!formData.fullName || !formData.companyName) {
        setError('Please fill in all fields');
        return;
      }

      const response = await axios.post('http://localhost:5001/api/recruiter/signup/step1', {
        fullName: formData.fullName,
        companyName: formData.companyName
      }, {
        headers: {
          'Content-Type': 'application/json'
        },
        timeout: 5000 // 5 second timeout
      });

      onNext({
        ...formData,
        userId: response.data.recruiterId
      });
    } catch (error) {
      console.error('Signup error:', error);
      if (error.code === 'ERR_NETWORK') {
        setError('Unable to connect to server. Please check your connection or try again later.');
      } else {
        setError(error.response?.data?.message || 'An error occurred during signup');
      }
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
          {error && <p className={styles.errorMessage}>{error}</p>}
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

          <div className={styles.buttonContainer}>
            <button className={styles.nextButton} onClick={handleNext}>
              Next
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

export default SignupStep1;