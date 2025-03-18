import React from 'react';
import styles from './JobDiscriptionForm.module.css';

const JobDescriptionForm = () => {
  return (
    <div className={styles.formContainer}>
      <h2 className={styles.title}>Generate Job Description</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter keywords (e.g., Frontend Developer, 5 years experience, React, TypeScript)"
          className={styles.inputField}
        />
        <button className={styles.generateButton}>Generate JD</button>
      </div>
    </div>
  );
};

export default JobDescriptionForm;