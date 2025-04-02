import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styles from './EmailVerified.module.css';

const EmailVerified = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [status, setStatus] = useState('loading');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        const token = new URLSearchParams(location.search).get('token');
        if (!token) {
          setStatus('error');
          setMessage('Verification token is missing');
          return;
        }

        const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/auth/verify-email?token=${token}`);
        
        if (response.data.success) {
          setStatus('success');
          setMessage('Your email has been verified successfully!');
        } else {
          setStatus('error');
          setMessage('Verification failed. Please try again.');
        }
      } catch (error) {
        setStatus('error');
        setMessage(error.response?.data?.message || 'Verification failed. Please try again.');
      }
    };

    verifyEmail();
  }, [location]);

  const renderContent = () => {
    switch (status) {
      case 'loading':
        return (
          <div className={styles.loading}>
            <div className={styles.spinner}></div>
            <p>Verifying your email...</p>
          </div>
        );

      case 'success':
        return (
          <>
            <h1 className={styles.title}>🎉 Email Verified Successfully!</h1>
            <p className={styles.message}>Your account is now active. You can proceed to login.</p>
            <button 
              onClick={() => navigate('/login')}
              className={styles.button}
            >
              Go to Login
            </button>
          </>
        );

      case 'error':
        return (
          <>
            <h1 className={styles.titleError}>❌ Verification Failed</h1>
            <p className={styles.messageError}>{message}</p>
            <button 
              onClick={() => navigate('/login')}
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              Back to Login
            </button>
          </>
        );

      default:
        return null;
    }
  };

  return (
    <div className={styles.container}>
      {renderContent()}
    </div>
  );
};

export default EmailVerified;