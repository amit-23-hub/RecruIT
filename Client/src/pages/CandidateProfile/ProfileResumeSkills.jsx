import React, { useState, useEffect } from 'react';
import styles from './ProfileResumeSkills.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';
import { FiEdit2 } from 'react-icons/fi';
import { getCandidateProfile, updateResumeSkills } from '../../services/candidateProfileService';

const ProfileResumeSkills = ({ onNext }) => {
  const currentStep = 2;
  const [isMobile, setIsMobile] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const profile = await getCandidateProfile();
        if (profile.skills) {
          setSkills(profile.skills.map(skill => skill.name));
        }
        if (profile.resume) {
          setResumePreview({
            name: profile.resume.name,
            size: profile.resume.size,
            url: profile.resume.url
          });
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleSaveClick = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      if (resume) {
        formData.append('resume', resume);
      }
      formData.append('skills', JSON.stringify(
        skills.map(skill => ({ name: skill, level: 'Intermediate' }))
      ));

      await updateResumeSkills(formData);
      setIsEditMode(false);
      if (typeof onNext === 'function') {
        onNext();
      }
    } catch (error) {
      console.error('Error updating resume and skills:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume({
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)}kb`,
        url: URL.createObjectURL(file),
      });
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, newSkill.trim()]); // Add new skill to the list
      setNewSkill(''); // Clear the input field
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index); // Remove skill by index
    setSkills(updatedSkills);
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
    <div className={styles.profileContainer}>
      {!isMobile && (
        <div className={styles.sideMenuContainer}>
          <SideMenu />
        </div>
      )}
      <div className={styles.profileContent}>
        <div className={styles.profileGrid}>
          <div className={styles.progressBarContainer}>
            <ProgressBar currentStep={currentStep} />
          </div>

          <div className={styles.profileDetailsContainer}>
            <div className={styles.profileHeader}>
              <div className={styles.headerRow}>
                <h1>Resume & Skills</h1>
                {!isEditMode && (
                  <button className={styles.editIcon} onClick={handleEditClick}>
                    <FiEdit2 />
                  </button>
                )}
              </div>
              <p>You can update your skills and upload your resume here.</p>
            </div>

            <div className={styles.profileDetails}>
              {/* Skills Section */}
              <div className={styles.skillsSection}>
                <h2>Skills *</h2>
                {isEditMode && (
                  <div className={styles.addSkillContainer}>
                    <input
                      type="text"
                      placeholder="Add a new skill"
                      value={newSkill}
                      onChange={(e) => setNewSkill(e.target.value)}
                      className={styles.skillInput}
                    />
                    <button onClick={handleAddSkill} className={styles.addSkillButton}>
                      Add
                    </button>
                  </div>
                )}
                <div className={styles.skillsList}>
                  {skills.map((skill, index) => (
                    <div key={index} className={styles.skillItem}>
                      {skill}
                      {isEditMode && (
                        <span
                          className={styles.removeSkill}
                          onClick={() => handleRemoveSkill(index)}
                        >
                          ❌
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Resume Section */}
              <div className={styles.resumeSection}>
                <h2>Resume</h2>
                <div className={styles.resumeUpload}>
                  {resume ? (
                    <div className={styles.resumeFile}>
                      <span className={styles.resumeName}>{resume.name}</span>
                      <span className={styles.resumeSize}>{resume.size}</span>
                      <a href={resume.url} target="_blank" rel="noopener noreferrer">
                        View
                      </a>
                    </div>
                  ) : (
                    <p>No resume uploaded.</p>
                  )}
                  {isEditMode && (
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={handleResumeChange}
                      className={styles.resumeInput}
                    />
                  )}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            {isEditMode && (
              <div className={styles.actionButtons}>
                <button className={styles.cancelButton} onClick={() => setIsEditMode(false)}>
                  Cancel
                </button>
                <button className={styles.saveButton} onClick={handleSaveClick}>
                  Save & Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileResumeSkills;