// SocialLinks.jsx
import React from 'react';
import styles from './ProfileSocialLinks.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';

const ProfileSocialLinks = () => {
  const currentStep = 5; // Social Links is the 5th step

  return (
    <div className={styles.container}>
      <SideMenu />
      <div className={styles.profileGrid}>
        <div className={styles.progressBarContainer}>
          <ProgressBar currentStep={currentStep} />
        </div>

        {/* Main Content */}
        <div className={styles.mainContent}>
          <h2 className={styles.title}>Social Links</h2>
          <p className={styles.subtitle}>
            You can update all social and certification courses here.
          </p>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>LinkedIn Profile</label>
              <input
                type="text"
                placeholder="URL link"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Git Profile</label>
              <input
                type="text"
                placeholder="URL link"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Portfolio Link</label>
              <input
                type="text"
                placeholder="URL link"
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Personal Website</label>
              <input
                type="text"
                placeholder="URL link"
                className={styles.input}
              />
            </div>
            <div className={styles.buttonGroup}>
              <button type="button" className={styles.cancelButton}>
                Cancel
              </button>
              <button type="submit" className={styles.verifyButton}>
                Verify
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSocialLinks;