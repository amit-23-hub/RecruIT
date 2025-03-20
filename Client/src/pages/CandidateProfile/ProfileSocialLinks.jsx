// SocialLinks.jsx
import React from 'react';
import styles from './ProfileSocialLinks.module.css';

const ProfileSocialLinks = () => {
  return (
    <div className={styles.container}>
      {/* Side Menu */}
      <div className={styles.sideMenu}>
        <div className={styles.profileSection}>
          <img
            src="https://via.placeholder.com/40" // Placeholder for profile image
            alt="Profile"
            className={styles.profileImage}
          />
          <div className={styles.progressContainer}>
            <div className={styles.progressCircle}>
              <span className={styles.progressText}>75%</span>
            </div>
          </div>
        </div>
        <ul className={styles.menuList}>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>📋</span> Basic Details
          </li>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>📄</span> Resume & Skills
          </li>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>🎓</span> Education & Certifications
          </li>
          <li className={styles.menuItem}>
            <span className={styles.menuIcon}>🛡️</span> Identity Verification
          </li>
          <li className={styles.menuItemActive}>
            <span className={styles.menuIcon}>🔗</span> Social Links
          </li>
        </ul>
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
  );
};

export default ProfileSocialLinks;