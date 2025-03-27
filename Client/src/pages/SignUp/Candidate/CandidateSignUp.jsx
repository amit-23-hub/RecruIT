import React, { useState } from 'react';
import styles from './CandidateSignUp.module.css';
import CLeftPortion from '../../../Common/CLeftPortion';
import axios from 'axios';

const CandidateSignUp = ({ onNext, initialData }) => {
  const [formData, setFormData] = useState({
    fullName: initialData?.fullName || '',
    countryCode: initialData?.countryCode || '+91',
    phoneNumber: initialData?.phoneNumber || ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNext = async () => {
    if (!formData.fullName.trim()) {
      setError('Please enter your full name');
      return;
    }

    if (!formData.phoneNumber) {
      setError('Please enter your phone number');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await axios.post(
        'http://localhost:5001/api/auth/signup/step1',
        formData,
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      onNext({
        ...formData,
        userId: response.data.userId
      });
    } catch (error) {
      console.error('Signup error:', error);
      setError(
        error.response?.data?.message ||
        'Registration failed. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className={styles.signupContainer}>
      <CLeftPortion />
      <div className={styles.signupRight}>
        <div className={styles.signupForm}>
          <h2 className={styles.createAccount}>Create Account</h2>
          <p className={styles.subtitle}>
            We match you with companies looking for your exact skills.
          </p>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.progressContainer}>
            <div className={styles.progressBar}>
              <div className={styles.progress} style={{width: '33%'}}></div>
            </div>
            <p className={styles.stepText}>Step 1 of 2</p>
          </div>

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

          <div className={styles.buttonContainer}>
            <button
              className={styles.nextButton}
              onClick={handleNext}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Next'}
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

export default CandidateSignUp;