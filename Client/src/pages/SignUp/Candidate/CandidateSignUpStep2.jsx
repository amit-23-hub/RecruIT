import React, { useState } from 'react';
import styles from './CandidateSignUpStep2.module.css';
import RLeftPortion from '../../../Common/RLeftPortion';
import axios from 'axios';

const CandidateSignUpStep2 = ({ onNext, formData, onBack }) => {
  const [localFormData, setLocalFormData] = useState({
    email: formData.email || '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!localFormData.email) {
      setError('Please enter your email');
      return;
    }

    if (!localFormData.password) {
      setError('Please create a password');
      return;
    }

    if (localFormData.password !== localFormData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (!localFormData.agreeToTerms) {
      setError('You must agree to the terms and conditions');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      await axios.post(
        'http://localhost:5001/api/auth/signup/step2',
        {
          email: localFormData.email,
          password: localFormData.password,
          userId: formData.userId
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      onNext({ email: localFormData.email });
    } catch (error) {
      console.error('Verification error:', error);
      setError(
        error.response?.data?.message ||
        'Email verification failed. Please try again.'
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLocalFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className={styles.signupContainer}>
      <RLeftPortion />
      <div className={styles.signupRight}>
        <div className={styles.signupForm}>
          <h2 className={styles.createAccount}>Create Account</h2>
          <p className={styles.subtitle}>
            We match you with companies looking for your exact skills.
          </p>

          {error && <div className={styles.error}>{error}</div>}

          <div className={styles.progressBar}>
            <div className={styles.progress} style={{ width: '100%' }}></div>
            <p className={styles.stepText}>Step 2 of 2</p>
          </div>

          <div className={styles.formInput}>
            <div className={styles.formGroup}>
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={localFormData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
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
                onChange={handleChange}
                required
              />
              <label>
                By creating an account, you agree to our{' '}
                <a href="/terms">Terms and Conditions</a> and{' '}
                <a href="/privacy">Privacy Policy</a>.
              </label>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            <button
              className={styles.backButton}
              onClick={onBack}
              disabled={isLoading}
            >
              Back
            </button>
            <button
              className={styles.nextButton}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Verify Email'}
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

export default CandidateSignUpStep2;