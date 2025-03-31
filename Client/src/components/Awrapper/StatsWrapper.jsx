import React from 'react';
import styles from './StatsWrapper.module.css'; 

const StatsWrapper = () => {
  return (
    <div className={styles.statsWrapper}>
      <div className={styles.statContainer}>
       
        <div className={styles.statItem}>
          <div className={styles.statValue}>50M</div>
          <div className={styles.statDescription}>Interviews completed</div>
        </div>

        <div className={styles.verticalLine}></div>

        
        <div className={styles.statItem}>
          <div className={styles.statValue}>80%</div>
          <div className={styles.statDescription}>Decrease in time to hire</div>
        </div>

        <div className={styles.verticalLine}></div>

    
        <div className={styles.statItem}>
          <div className={styles.statValue}>50%</div>
          <div className={styles.statDescription}>Decrease cost per interview</div>
        </div>

        <div className={styles.verticalLine}></div>

        
        <div className={styles.statItem}>
          <div className={styles.statValue}>16%</div>
          <div className={styles.statDescription}>Increase in DEI hiring goals</div>
        </div>
      </div>
    </div>
  );
};

export default StatsWrapper;
