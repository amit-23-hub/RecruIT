import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ currentStep, isMobileExpanded, setIsMobileExpanded }) => {
  const navigate = useNavigate();
  
  const steps = [
    { id: 1, label: 'Personal Info', path: '/profile-steps/basic-details' },
    { id: 2, label: 'Resume & Skills', path: '/profile-steps/resume-skills' },
    { id: 3, label: 'Education & Certifications', path: '/profile-steps/education' },
    { id: 4, label: 'Identity Verification', path: '/profile-steps/verification' },
    { id: 5, label: 'Social Links', path: '/profile-steps/social-links' },
  ];

  const toggleMobileView = () => {
    setIsMobileExpanded(!isMobileExpanded);
  };

  const handleStepClick = (path) => {
    navigate(path);
  };

  return (
    <div className={styles.progressBarContainer}>
      {/* Desktop View */}
      <div className={styles.desktopView}>
        <h3 className={styles.title}>Profile Completion</h3>
        <ul className={styles.steps}>
          {steps.map((step) => (
            <li
              key={step.id}
              className={`${styles.step} ${currentStep === step.id ? styles.active : ''}`}
              onClick={() => handleStepClick(step.path)}
            >
              <span className={styles.stepNumber}>{step.id}</span>
              <span className={styles.stepLabel}>{step.label}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile View */}
      <div className={styles.mobileView}>
        <div className={styles.mobileHeader} onClick={toggleMobileView}>
        </div>
        {isMobileExpanded && (
          <ul className={styles.mobileSteps}>
            {steps.map((step) => (
              <li
                key={step.id}
                className={`${styles.mobileStep} ${currentStep === step.id ? styles.active : ''}`}
                onClick={() => handleStepClick(step.path)}
              >
                {step.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProgressBar;