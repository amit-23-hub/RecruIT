import React, { useState } from 'react';
import styles from './Profile.module.css';
import data from '../../assets/dummyData/Profile.json';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProfileHeader from '../../components/PhoneCandidateProfile/ProfileHeader';
import ProfileRight from '../../components/PhoneCandidateProfile/ProfileRight';
import ShortBio from '../../components/PhoneCandidateProfile/ShortBio';
import SkillsAndPreferences from '../../components/PhoneCandidateProfile/SkillsAndPreferences';

const Profile = () => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const profile = data.profile;

  return (
    <div className={styles.profileContainer}>
      <div className={styles.hamburgerMenu} onClick={() => setIsSideMenuOpen(!isSideMenuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <div className={`${styles.sideMenuWrapper} ${isSideMenuOpen ? styles.showSideMenu : ''}`}>
        <SideMenu />
      </div>

      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h4>Welcome back!</h4>
        </div>
        <ProfileHeader profileData={profile} />
        <ShortBio bio={profile.bio} />
        <div className={styles.mobileProfileRight}>
          <ProfileRight />
        </div>
        <SkillsAndPreferences 
          skills={profile.skills} 
          jobPreferences={profile.jobPreferences} 
        />
        
      </div>
      
      <div className={styles.desktopProfileRight}>
        <ProfileRight />
      </div>
    </div>
  );
};

export default Profile;