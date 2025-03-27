import React from 'react';
import styles from './StatsWrapper.module.css';

const StatsWrapper = () => {
  return (
    <div className={styles.statsWrapper}>
      <div className={styles.statContainer}>
        <div className={styles.statItem}>
          <span className={styles.statValue}>50M</span>
          <span className={styles.statDescription}>Interviews completed</span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.statValue}>80%</span>
          <span className={styles.statDescription}>Decrease in time to hire</span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.statValue}>50%</span>
          <span className={styles.statDescription}>Decrease cost per interview</span>
        </div>

        <div className={styles.statItem}>
          <span className={styles.statValue}>16%</span>
          <span className={styles.statDescription}>Increase in DEI hiring goals</span>
        </div>
      </div>
    </div>
  );
};

export default StatsWrapper;
