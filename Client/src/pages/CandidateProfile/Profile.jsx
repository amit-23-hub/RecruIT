import React from 'react';
import styles from './Profile.module.css';
import data from '../../assets/dummyData/Profile.json';
import SideMenu from '../../components/SideMenu/SideMenu';
import img from '../../assets/HomeImg.png'
const Profile = () => {
  const profile = data.profile;

  return (
    <div className={styles.profileContainer}>
    
    <SideMenu/>

     
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h4>Welcome back!</h4>
        </div>
        <div className={styles.profileSection}>
          <div className={styles.leftPanel}>
            <div className={styles.profileCard}>
              <div className={styles.profileImage}> 

              <img src={img} />
              <div className={styles.profileInfo}>
                <h2>{profile.name}</h2>
                <p>{profile.title}</p>
              </div>
              </div>
              

              <div className={styles.profileDetails}>
              <div>
                <span>{profile.experience}</span>
                <span> Experience</span>
              </div>
              <div>
                <span>{profile.location}</span>
                <span> Location</span>
              </div>
              <div>
                <span>{profile.availability}</span>
                <span> Availability</span>
              </div>
            </div>
            </div>
            <div className={styles.profileCompletion}>
              <span>Profile completion</span>
              <div className={styles.completionBar}>
                <div style={{ width: `${profile.completion}%` }}></div>
              </div>
              <span>{profile.completion}%</span>
            </div>
            
          </div>
          <div className={styles.rightPanel}>
            <div className={styles.stats}>
              <div className={styles.statBox}>
                <span>4</span>
                <p>Appeared in matches</p>
              </div>
              <div className={styles.statBox}>
                <span>4</span>
                <p>Approved in matches</p>
              </div>
            </div>
            <div className={styles.pendingActions}>Pending actions</div>
          </div>
        </div>
        <div className={styles.bioSection}>
          <h2>Short bio</h2>
          <p>{profile.bio}</p>
        </div>
        <div className={styles.skillsSection}>
          <h2>Skills</h2>
          <div className={styles.skillsList}>
            {profile.skills.map((skill, index) => (
              <div key={index} className={styles.skill}>{skill}</div>
            ))}
          </div>
        </div>
        <div className={styles.jobPreferences}>
          <h2>Job Preferences</h2>
          <div>
            <span>Expected salary: {profile.jobPreferences.salary}</span>
            <span>Location: {profile.jobPreferences.locations.join(', ')}</span>
            <span>Job model: {profile.jobPreferences.jobModels.join(', ')}</span>
            <span>Job type: {profile.jobPreferences.jobTypes.join(', ')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;