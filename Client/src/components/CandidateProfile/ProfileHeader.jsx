import React from 'react';
import styles from './ProfileHeader.module.css';
import img from "../../assets/HomeImg.png";
import { IoMdArrowDropdown } from 'react-icons/io';

const ProfileHeader = ({ profileData }) => {
  return (
    <div className={styles.profileSection}>
      <div className={styles.leftSection}>
        <div className={styles.profileHeader}>
          <div className={styles.profileBasicInfo}>
            <img src={img} alt="profile" className={styles.profileImage} />
            <div className={styles.profileText}>
              <h2>{profileData.name}</h2>
              <p>{profileData.title}</p>
              
            </div>
            </div>
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
            The more complete your profile, the better your chances of being matched with your ideal job.
          </p>
           </div>
         
      </div>
          
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

        
      </div>

     
    </div>
  );
};

export default ProfileHeader;