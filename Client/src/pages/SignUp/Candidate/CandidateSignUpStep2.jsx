import React, { useState } from 'react';
import styles from './CandidateSignUpStep2.module.css';
import RLeftPortion from '../../../Common/CLeftPortion';
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
    setError('');

    // Enhanced validation
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(localFormData.email)) {
      setError('Please enter a valid email address');
      return;
    }

    if (localFormData.password.length < 8) {
      setError('Password must be at least 8 characters');
      return;
    }

    if (!/[A-Z]/.test(localFormData.password)) {
      setError('Password must contain at least one uppercase letter');
      return;
    }

    if (!/[0-9]/.test(localFormData.password)) {
      setError('Password must contain at least one number');
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

    try {
      const response = await axios.post(
        'http://localhost:5001/api/auth/signup/step2',
        {
          email: localFormData.email,  
          password: localFormData.password,
          confirmPassword: localFormData.confirmPassword,
          userId: formData.userId     // Only userId comes from formData
        },
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );

      if (response.data.success) {
        onNext({ 
          email: localFormData.email,
          ...response.data // Include any additional data from backend
        });
      } else {
        setError(response.data.message || 'Registration completed but verification failed');
      }
    } catch (error) {
      let errorMessage = 'Registration failed. Please try again.';
      
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage = error.response.data.message || 'Invalid data provided';
        } else if (error.response.status === 409) {
          errorMessage = 'Email already registered';
        }
      }

      setError(errorMessage);
      console.error('Registration error:', {
        status: error.response?.status,
        data: error.response?.data,
        config: error.config
      });
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

          {error && (
            <div className={styles.error}>
              ⚠️ {error}
            </div>
          )}

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
                autoComplete="email"
              />
            </div>

            <div className={styles.formGroup}>
              <label>Create Password* (min 8 characters)</label>
              <input
                type="password"
                name="password"
                value={localFormData.password}
                onChange={handleChange}
                placeholder="••••••••"
                required
                minLength="8"
                autoComplete="new-password"
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
                autoComplete="new-password"
              />
            </div>

            <div className={styles.terms}>
              <input
                type="checkbox"
                id="agreeToTerms"
                name="agreeToTerms"
                checked={localFormData.agreeToTerms}
                onChange={handleChange}
                required
              />
              <label htmlFor="agreeToTerms">
                By creating an account, you agree to our{' '}
                <a href="/terms" target="_blank" rel="noopener noreferrer">Terms and Conditions</a> and{' '}
                <a href="/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
              </label>
            </div>
          </div>

          <div className={styles.buttonContainer}>
            {/* <button
              type="button"
              className={styles.backButton}
              onClick={onBack}
              disabled={isLoading}
            >
              Back
            </button> */}
            <button
              type="button"
              className={styles.nextButton}
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className={styles.spinner}></span> Processing...
                </>
              ) : (
                'Verify Email'
              )}
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