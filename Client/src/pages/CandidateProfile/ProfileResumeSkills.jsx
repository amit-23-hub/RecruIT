import React, { useState, useEffect } from 'react';
import styles from './ProfileResumeSkills.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';
import { FiEdit2 } from 'react-icons/fi';

const ProfileResumeSkills = ({ onNext }) => {
  const currentStep = 2; // Current step for the progress bar
  const [isEditMode, setIsEditMode] = useState(false); // State for edit mode
  const [skills, setSkills] = useState([]); // State for skills
  const [newSkill, setNewSkill] = useState(''); // State for new skill input
  const [resume, setResume] = useState(null); // State for resume

  // Mock data for skills
  const mockSkills = [
    'CSS',
    'HTML',
    'Responsive Design',
    'JavaScript Frameworks',
    'Version Control',
    'Testing and Debugging',
    'Cross-Browser Development',
    'Search Engine Optimization (SEO)',
    'User Experience',
    'RESTful APIs',
  ];

  // Fetch skills and resume data from the backend (mock API call)
  useEffect(() => {
    const fetchData = async () => {
      // Simulate fetching skills and resume data
      setSkills(mockSkills);
      setResume({
        name: 'Sameer_resume.pdf',
        size: '212kb',
        url: 'https://www.asm.com/',
      });
    };
    fetchData();
  }, []);

  const handleEditClick = () => {
    setIsEditMode(true); // Enable edit mode
  };

  const handleSaveClick = () => {
    setIsEditMode(false); // Disable edit mode
    // Save updated data to the backend
    console.log('Saving data:', { skills, resume });
    onNext(); // Proceed to the next step
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

  return (
    <div className={styles.profileContainer}>
      <div className={styles.sideMenuContainer}>
        <SideMenu />
      </div>

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