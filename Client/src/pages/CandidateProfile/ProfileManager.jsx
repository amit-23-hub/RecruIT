import React, { useState, useEffect } from 'react';
import ProfileBasicDetail from './ProfileBasicDetails';
import ProfileResume from './ProfileResumeSkills';
import ProfileEducation from './ProfileEducationCertification';
import ProfileIdentity from './ProfileIdentityVerification';
import ProfileSocialLinks from './ProfileSocialLinks';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './ProfileManager.module.css';

const ProfileManagerMobile = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const dropdowns = [
    { id: 1, title: 'Personal Info', component: ProfileBasicDetail },
    { id: 2, title: 'Resume & Skills', component: ProfileResume },
    { id: 3, title: 'Education & Certifications', component: ProfileEducation },
    { id: 4, title: 'Identity Verification', component: ProfileIdentity },
    { id: 5, title: 'Social Links', component: ProfileSocialLinks },
  ];

  const toggleDropdown = (id) => {
    setExpandedDropdown(expandedDropdown === id ? null : id);
  };

  // Don't render anything if not mobile view
  if (!isMobileView) {
    return null;
  }

  // Mobile View - Only render when screen is <= 768px
  return (
    <div className={styles.mobileContainer}>
      <h1 className={styles.mobileHeader}>My Profile</h1>
      
      {dropdowns.map((dropdown) => (
        <div key={dropdown.id} className={styles.dropdownContainer}>
          <button 
            className={styles.dropdownHeader}
            onClick={() => toggleDropdown(dropdown.id)}
            aria-expanded={expandedDropdown === dropdown.id}
          >
            <span>{dropdown.title}</span>
            {expandedDropdown === dropdown.id ? <FiChevronUp /> : <FiChevronDown />}
          </button>
          
          {expandedDropdown === dropdown.id && (
            <div className={styles.dropdownContent}>
              <dropdown.component />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProfileManagerMobile;