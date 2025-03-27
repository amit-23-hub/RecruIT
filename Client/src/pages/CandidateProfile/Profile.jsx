import React from 'react';
import styles from './Profile.module.css';
import data from '../../assets/dummyData/Profile.json';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProfileHeader from '../../components/CandidateProfile/ProfileHeader';
import ProfileRight from '../../components/CandidateProfile/ProfileRight';

const Profile = () => {
  const profile = data.profile;

  return (
    <div className={styles.profileContainer}>
      <SideMenu />
      <div className={styles.mainContent}>
        <div className={styles.header}>
          <h4>Welcome back!</h4>
        </div>
        <ProfileHeader profileData={profile} />
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
      <ProfileRight/>
    </div>
  );
};

export default Profile;