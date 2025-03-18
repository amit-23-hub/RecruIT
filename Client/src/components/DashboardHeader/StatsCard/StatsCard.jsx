import React from 'react';
import styles from './StatsCard.module.css';

const StatsCard = ({ title, value, icon }) => {
  return (
    <div className={styles.statsCard}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>
        <p className={styles.title}>{title}</p>
        <p className={styles.value}>{value}</p>
      </div>
    </div>
  );
};

export default StatsCard;