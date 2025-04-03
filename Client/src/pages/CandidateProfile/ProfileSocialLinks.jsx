import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileSocialLinks.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';
import { getCandidateProfile, updateSocialLinks } from '../../services/candidateProfileService';

const ProfileSocialLinks = () => {
  const currentStep = 5;
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [socialLinks, setSocialLinks] = useState({
    linkedin: '',
    github: '',
    portfolio: '',
    personalWebsite: ''
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const profile = await getCandidateProfile();
        if (profile.socialLinks) {
          setSocialLinks({
            linkedin: profile.socialLinks.linkedin || '',
            github: profile.socialLinks.github || '',
            portfolio: profile.socialLinks.portfolio || '',
            personalWebsite: profile.socialLinks.personalWebsite || ''
          });
        }
      } catch (error) {
        console.error('Error fetching social links:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await updateSocialLinks(socialLinks);
      navigate('/candidate-dashboard');
    } catch (error) {
      console.error('Error updating social links:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSocialLinks(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCancel = () => {
    setSocialLinks({
      linkedin: '',
      github: '',
      portfolio: '',
      personalWebsite: ''
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.container}>
      {!isMobile && <SideMenu />}
      
      <div className={styles.profileGrid}>
        {!isMobile && (
          <div className={styles.progressBarContainer}>
            <ProgressBar currentStep={currentStep} />
          </div>
        )}

        <div className={styles.mainContent}>
          <h2 className={styles.title}>Social Links</h2>
          <p className={styles.subtitle}>
            You can update all social and certification courses here.
          </p>
          
          <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formGroup}>
              <label className={styles.label}>LinkedIn Profile</label>
              <input
                type="url"
                name="linkedin"
                value={socialLinks.linkedin}
                onChange={handleChange}
                placeholder="https://linkedin.com/in/yourprofile"
                className={styles.input}
                pattern="https://.*"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Git Profile</label>
              <input
                type="url"
                name="github"
                value={socialLinks.github}
                onChange={handleChange}
                placeholder="https://github.com/yourusername"
                className={styles.input}
                pattern="https://.*"
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Portfolio Link</label>
              <input
                type="url"
                name="portfolio"
                value={socialLinks.portfolio}
                onChange={handleChange}
                placeholder="https://yourportfolio.com"
                className={styles.input}
                pattern="https://.*"
              />
            </div>

            <div className={styles.formGroup}>
              <label className={styles.label}>Personal Website</label>
              <input
                type="url"
                name="personalWebsite"
                value={socialLinks.personalWebsite}
                onChange={handleChange}
                placeholder="https://yourwebsite.com"
                className={styles.input}
                pattern="https://.*"
              />
            </div>

            <div className={styles.buttonGroup}>
              <button
                type="button"
                className={styles.cancelButton}
                onClick={handleCancel}
                disabled={isLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className={styles.verifyButton}
                disabled={isLoading}
              >
                {isLoading ? 'Saving...' : 'Verify'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfileSocialLinks;