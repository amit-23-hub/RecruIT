import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProgressBar.module.css';

const ProgressBar = ({ currentStep, onStepChange, isMobileExpanded, setIsMobileExpanded }) => {
  const navigate = useNavigate();
  
  const steps = [
    { id: 1, label: 'Personal Info', path: '/candidate/personal-info' },
    { id: 2, label: 'Resume & Skills', path: '/candidate/resume-skills' },
    { id: 3, label: 'Education & Certifications', path: '/candidate/education' },
    { id: 4, label: 'Identity Verification', path: '/candidate/verification' },
    { id: 5, label: 'Social Links', path: '/candidate/social-links' },
  ];

  const toggleMobileView = () => {
    setIsMobileExpanded(!isMobileExpanded);
  };

  const handleStepClick = (stepId) => {
    const selectedStep = steps.find(step => step.id === stepId);
    onStepChange(stepId);
    navigate(selectedStep.path);
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
              onClick={() => handleStepClick(step.id)}
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
          {/* <span>{steps.find(step => step.id === currentStep)?.label}</span>
          <span className={styles.dropdownArrow}>
            {isMobileExpanded ? '▲' : '▼'}
          </span> */}
        </div>
        {isMobileExpanded && (
          <ul className={styles.mobileSteps}>
            {steps.map((step) => (
              <li
                key={step.id}
                className={`${styles.mobileStep} ${currentStep === step.id ? styles.active : ''}`}
                onClick={() => handleStepClick(step.id)}
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