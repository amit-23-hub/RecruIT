import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './EmailVerified.module.css';

const EmailVerified = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1>🎉 Email Verified Successfully!</h1>
      <p>Your account is now active. You can proceed to login.</p>
      <button 
        onClick={() => navigate('/login')}
        className={styles.button}
      >
        Go to Login
      </button>
    </div>
  );
};

export default EmailVerified;