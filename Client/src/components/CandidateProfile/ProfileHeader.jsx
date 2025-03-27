import React from 'react';
import styles from './ProfileHeader.module.css';
import img from "../../assets/HomeImg.png";

const ProfileHeader = ({ profileData }) => {
  return (
    <>
    <div className={styles.profileSection}>
      {/* Left Section - Profile and Completion */}
      <div className={styles.leftSection}>
        <div className={styles.profileColumn}>
          <div className={styles.profileBasicInfo}>
            <img src={img} alt="profile" className={styles.profileImage} />
            <div className={styles.profileText}>
              <h2>{profileData.name}</h2>
              <p>{profileData.title}</p>
            </div>
          </div>
          <div className={styles.completionColumn}>
          <div className={styles.completionSection}>
            <div className={styles.completionText}>
              <span>Profile completion</span>
              <span>{profileData.completion}%</span>
            </div>
            <div className={styles.progressBar}>
              <div 
                className={styles.progress} 
                style={{ width: `${profileData.completion}%` }}
              ></div>
            </div>
            <p className={styles.completionNote}>
              Complete your profile for better matches
            </p>
          </div>
        </div>
        </div>
        
        
      </div>

      {/* Right Section - Stats */}
      <div className={styles.statsInfo}>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>📅</span>
          <div>
            <span>{profileData.experience}</span>
            <p>Experience</p>
          </div>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>📍</span>
          <div>
            <span>{profileData.location}</span>
            <p>Location</p>
          </div>
        </div>
        <div className={styles.statItem}>
          <span className={styles.statIcon}>⏰</span>
          <div>
            <span>{profileData.availability}</span>
            <p>Availability</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ProfileHeader;