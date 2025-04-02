import React from 'react';
import styles from './SkillsAndPreferences.module.css';

const SkillsAndPreferences = ({ skills, jobPreferences }) => {
  return (
    <>
      <div className={styles.skillsSection}>
        <h2>Skills</h2>
        <div className={styles.skillsList}>
          {skills.map((skill, index) => (
            <div key={index} className={styles.skill}>{skill}</div>
          ))}
        </div>
      </div>
      
      <div className={styles.jobPreferences}>
        <h2>Job Preferences</h2>
        <div>
          <span>Expected salary: {jobPreferences.salary}</span>
          <span>Location: {jobPreferences.locations.join(', ')}</span>
          <span>Job model: {jobPreferences.jobModels.join(', ')}</span>
          <span>Job type: {jobPreferences.jobTypes.join(', ')}</span>
        </div>
      </div>
    </>
  );
};

export default SkillsAndPreferences;