import React from 'react';
import styles from './StatsWrapper.module.css'; // Import module CSS

const StatsWrapper = () => {
  return (
    <div className={styles.statsWrapper}>
      <div className={styles.statContainer}>
        {/* 50M - Interviews completed */}
        <div className={styles.statItem}>
          <div className={styles.statValue}>50M</div>
          <div className={styles.statDescription}>Interviews completed</div>
        </div>

        <div className={styles.verticalLine}></div>

        {/* 80% - Decrease in time to hire */}
        <div className={styles.statItem}>
          <div className={styles.statValue}>80%</div>
          <div className={styles.statDescription}>Decrease in time to hire</div>
        </div>

        <div className={styles.verticalLine}></div>

        {/* 50% - Decrease cost per interview */}
        <div className={styles.statItem}>
          <div className={styles.statValue}>50%</div>
          <div className={styles.statDescription}>Decrease cost per interview</div>
        </div>

        <div className={styles.verticalLine}></div>

        {/* 16% - Increase in DEI hiring goals */}
        <div className={styles.statItem}>
          <div className={styles.statValue}>16%</div>
          <div className={styles.statDescription}>Increase in DEI hiring goals</div>
        </div>
      </div>
    </div>
  );
};

export default StatsWrapper;
