import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileBasicDetail from './ProfileBasicDetails';
import ProfileResume from './ProfileResumeSkills';
import ProfileEducation from './ProfileEducationCertification';
import ProfileIdentity from './ProfileIdentityVerification';
import ProfileSocialLinks from './ProfileSocialLinks';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import styles from './ProfileManager.module.css';

const ProfileManager = () => {
  const [isMobileView, setIsMobileView] = useState(false);
  const [expandedDropdown, setExpandedDropdown] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkScreenSize = () => {
      const isMobile = window.innerWidth <= 768;
      setIsMobileView(isMobile);
      
      // Redirect to profile-steps if on desktop
      if (!isMobile && window.location.pathname === '/profile-manager') {
        navigate('/profile-steps');
      }
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [navigate]);

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

  if (isMobileView) {
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
  }

  // Desktop View
  return (
    <div className={styles.desktopContainer}>
      <h1>My Profile</h1>
      <div className={styles.componentsGrid}>
        {dropdowns.map((dropdown) => (
          <div key={dropdown.id} className={styles.componentSection}>
            <h2>{dropdown.title}</h2>
            <dropdown.component />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProfileManager;