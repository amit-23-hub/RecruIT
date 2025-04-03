import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileResumeSkills.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';
import { FiEdit2 } from 'react-icons/fi';
import { getCandidateProfile, updateResumeSkills } from '../../services/candidateProfileService';

const ProfileResumeSkills = () => {
  const currentStep = 2;
  const [isMobile, setIsMobile] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [skills, setSkills] = useState([]);
  const [newSkill, setNewSkill] = useState('');
  const [resume, setResume] = useState(null);
  const [resumePreview, setResumePreview] = useState(null);
  const navigate = useNavigate();

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
      
      // Add resume file if it's a new upload
      if (resume && resume instanceof File) {
        formData.append('resume', resume);
      }
      
      // Format skills for backend
      formData.append('skills', JSON.stringify(
        skills.map(skill => ({ name: skill, level: 'Intermediate' }))
      ));

      await updateResumeSkills(formData);
      setIsEditMode(false);
      navigate('/profile-steps/education'); // Navigate to next step
    } catch (error) {
      console.error('Error updating resume and skills:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setResume(file); // Store the File object directly
      setResumePreview({
        name: file.name,
        size: `${(file.size / 1024).toFixed(2)} KB`,
        url: URL.createObjectURL(file)
      });
    }
  };

  const handleAddSkill = () => {
    if (newSkill.trim() !== '' && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...skills];
    updatedSkills.splice(index, 1);
    setSkills(updatedSkills);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddSkill();
    }
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
            <ProgressBar 
              currentStep={currentStep}
              isMobileExpanded={false}
              setIsMobileExpanded={() => {}}
            />
          </div>

          <div className={styles.profileDetailsContainer}>
            <div className={styles.profileHeader}>
              <div className={styles.headerRow}>
                <h1>Resume & Skills</h1>
                {!isEditMode && (
                  <button 
                    className={styles.editIcon} 
                    onClick={handleEditClick}
                    disabled={isLoading}
                  >
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
                {isEditMode ? (
                  <>
                    <div className={styles.addSkillContainer}>
                      <input
                        type="text"
                        placeholder="Add a new skill"
                        value={newSkill}
                        onChange={(e) => setNewSkill(e.target.value)}
                        onKeyPress={handleKeyPress}
                        className={styles.skillInput}
                      />
                      <button 
                        onClick={handleAddSkill} 
                        className={styles.addSkillButton}
                        disabled={!newSkill.trim()}
                      >
                        Add
                      </button>
                    </div>
                    <div className={styles.skillsList}>
                      {skills.map((skill, index) => (
                        <div key={index} className={styles.skillItem}>
                          {skill}
                          <span
                            className={styles.removeSkill}
                            onClick={() => handleRemoveSkill(index)}
                          >
                            ×
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className={styles.skillsList}>
                    {skills.length > 0 ? (
                      skills.map((skill, index) => (
                        <div key={index} className={styles.skillItem}>
                          {skill}
                        </div>
                      ))
                    ) : (
                      <p>No skills added yet</p>
                    )}
                  </div>
                )}
              </div>

              {/* Resume Section */}
              <div className={styles.resumeSection}>
                <h2>Resume</h2>
                <div className={styles.resumeUpload}>
                  {resumePreview ? (
                    <div className={styles.resumeFile}>
                      <span className={styles.resumeName}>{resumePreview.name}</span>
                      <span className={styles.resumeSize}>{resumePreview.size}</span>
                      <a 
                        href={resumePreview.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={styles.viewLink}
                      >
                        View
                      </a>
                    </div>
                  ) : (
                    <p>No resume uploaded.</p>
                  )}
                  {isEditMode && (
                    <div className={styles.fileInputContainer}>
                      <label className={styles.fileInputLabel}>
                        Choose File
                        <input
                          type="file"
                          accept=".pdf,.doc,.docx"
                          onChange={handleResumeChange}
                          className={styles.resumeInput}
                        />
                      </label>
                      {resumePreview && (
                        <span className={styles.fileName}>{resumePreview.name}</span>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {isEditMode && (
              <div className={styles.actionButtons}>
                <button 
                  className={styles.cancelButton} 
                  onClick={() => setIsEditMode(false)}
                  disabled={isLoading}
                >
                  Cancel
                </button>
                <button 
                  className={styles.saveButton} 
                  onClick={handleSaveClick}
                  disabled={isLoading || skills.length === 0}
                >
                  {isLoading ? 'Saving...' : 'Save & Next'}
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