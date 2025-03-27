import React, { useState } from 'react';

import ProfileResume from './ProfileResumeSkills';
import ProfileEducation from './ProfileEducationCertification';
import ProfileIdentity from './ProfileIdentityVerification';
import ProfileSocialLinks from './ProfileSocialLinks';
import ProgressBar from './ProgressBar/ProgressBar';
import styles from './ProfileManager.module.css';

const ProfileManager = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  const renderComponent = () => {
    switch (currentStep) {
      case 1:
        return <ProfileBasicDetail />;
      case 2:
        return <ProfileResume />;
      case 3:
        return <ProfileEducation />;
      case 4:
        return <ProfileIdentity />;
      case 5:
        return <ProfileSocialLinks />;
      default:
        return <ProfileBasicDetail />;
    }
  };

  const handleStepChange = (step) => {
    setCurrentStep(step);
    setIsMobileExpanded(false);
  };

  return (
    <div className={styles.profileManagerContainer}>
      <ProgressBar 
        currentStep={currentStep} 
        onStepChange={handleStepChange}
        isMobileExpanded={isMobileExpanded}
        setIsMobileExpanded={setIsMobileExpanded}
      />
      <div className={styles.componentContainer}>
        {(!isMobileExpanded || window.innerWidth > 1024) && renderComponent()}
      </div>
    </div>
  );
};

export default ProfileManager;