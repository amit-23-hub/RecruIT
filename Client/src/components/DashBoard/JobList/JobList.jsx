import React from 'react';
import styles from './JobList.module.css';

const JobList = () => {
  const jobs = [
    "Product Designer, 4 years experience, Figma, XD",
    "AI/ML Expert, 2 years experience, Python",
    "AI/ML Expert, 2 years experience, Python, SQL, Deep learning",
    "Product Designer, 4 years experience, Figma, XD, Wireframing",
  ];

  return (
    <div className={styles.jobList}>
      {jobs.map((job, index) => (
        <div key={index} className={styles.jobItem}>
          {job}
        </div>
      ))}
    </div>
  );
};

export default JobList;