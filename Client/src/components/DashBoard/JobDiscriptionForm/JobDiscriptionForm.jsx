import React from 'react';
import styles from './JobDiscriptionForm.module.css';

const JobDescriptionForm = ({ onInputChange, onGenerateJD, isScrollerVisible }) => {
  const handleInput = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className={`${styles.formContainer} ${isScrollerVisible ? styles.adjustedWidth : ''}`}> 
      <h2 className={styles.title}>Generate Job Description</h2>
      <div className={styles.inputContainer}>
        <input
          type="text"
          placeholder="Enter keywords (e.g., Frontend Developer, 5 years experience, React, TypeScript)"
          className={styles.inputField}
          onChange={handleInput}
        />
      </div>
      <div className={styles.buttonContainer}>
        <button className={styles.uploadButton}>
          <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.28009 8.109L6.58409 2.805C6.83951 2.54965 7.14273 2.3471 7.47643 2.20893C7.81012 2.07076 8.16777 1.99967 8.52894 1.99971C8.89012 1.99976 9.24775 2.07094 9.58141 2.2092C9.91507 2.34746 10.2182 2.55008 10.4736 2.8055C10.7289 3.06093 10.9315 3.36414 11.0697 3.69784C11.2078 4.03154 11.2789 4.38918 11.2789 4.75036C11.2788 5.11153 11.2077 5.46916 11.0694 5.80282C10.9311 6.13648 10.7285 6.43965 10.4731 6.695L4.10909 13.059C3.87451 13.2936 3.55634 13.4254 3.22459 13.4254C2.89284 13.4254 2.57467 13.2936 2.34009 13.059C2.10551 12.8244 1.97372 12.5063 1.97372 12.1745C1.97372 11.8428 2.10551 11.5246 2.34009 11.29L7.99709 5.633C8.12957 5.49083 8.20169 5.30278 8.19827 5.10848C8.19484 4.91418 8.11613 4.7288 7.97871 4.59138C7.8413 4.45397 7.65591 4.37526 7.46161 4.37183C7.26731 4.3684 7.07927 4.44052 6.93709 4.573L1.28009 10.23C0.764245 10.7458 0.474445 11.4455 0.474445 12.175C0.474445 12.9045 0.764245 13.6042 1.28009 14.12C1.79594 14.6359 2.49557 14.9256 3.22509 14.9256C3.95461 14.9256 4.65424 14.6359 5.17009 14.12L11.5331 7.755C12.3148 6.95488 12.7495 5.87883 12.743 4.76025C12.7365 3.64168 12.2893 2.57077 11.4983 1.7798C10.7073 0.988833 9.63642 0.54159 8.51784 0.535076C7.39926 0.528562 6.32322 0.963302 5.52309 1.745L0.22009 7.048C0.0876104 7.19018 0.0154875 7.37822 0.0189157 7.57253C0.0223439 7.76683 0.101056 7.95221 0.238469 8.08963C0.375882 8.22704 0.561267 8.30575 0.755568 8.30918C0.949869 8.31261 1.13792 8.24048 1.28009 8.108" fill="#2E007A"/>
          </svg>
        </button>
        <button className={styles.generateButton} onClick={onGenerateJD}>Generate JD</button>
      </div>
    </div>
  );
};

export default JobDescriptionForm;