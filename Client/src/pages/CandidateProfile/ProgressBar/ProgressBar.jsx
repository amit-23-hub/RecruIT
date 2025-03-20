import React from 'react';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { id: 1, label: 'Basic details' },
    { id: 2, label: 'Resume & Skills' },
    { id: 3, label: 'Education & Certifications' },
    { id: 4, label: 'Identity Verification' },
    { id: 5, label: 'Social Links' },
  ];

  return (
    <div className={styles.progressBarContainer}>
      <h3 className={styles.title}>Profile Completion</h3>
      <ul className={styles.steps}>
        {steps.map((step) => (
          <li
            key={step.id}
            className={`${styles.step} ${currentStep === step.id ? styles.active : ''}`}
          >
            <input
              type="radio"
              name="progress"
              checked={currentStep === step.id}
              readOnly
              className={styles.radioButton}
            />
            <span className={styles.stepNumber}></span>
            <span className={styles.stepLabel}>{step.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProgressBar;