import React from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import styles from './ProfileRight.module.css';

function ProfileRight() {
  return (
    <div className={styles.rightSection}>
      <div className={styles.headerRow}>
        <h3>You're doing well!</h3>
        <button className={styles.todayButton}>
          Today <IoMdArrowDropdown />
        </button>
      </div>

      <div className={styles.matchStatsRow}>
        <div className={styles.statBox}>
          <span>4</span>
          <p>Appeared in matches</p>
        </div>
        <div className={styles.statBox}>
          <span>4</span>
          <p>Appeared in matches</p>
        </div>
      </div>

      <div className={styles.resumeSection}>
        <p>Elevate your resume with AI-powered enhancements</p>
        <button className={styles.powerResumeBtn}>Get Power Resume</button>
      </div>

      <div className={styles.pendingActions}>
        <h4>Pending actions</h4>
      </div>
    </div>
  );
}

export default ProfileRight;