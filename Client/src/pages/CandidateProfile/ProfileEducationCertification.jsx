import React, { useState, useEffect } from 'react';
import styles from './ProfileEducationCertification.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';
import { getCandidateProfile, updateEducation } from '../../services/candidateProfileService';

const ProfileEducationCertification = ({ onNext }) => {
  const currentStep = 3;
  const [isMobile, setIsMobile] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [educationDetails, setEducationDetails] = useState([]);
  const [newEducation, setNewEducation] = useState({
    schoolName: '',
    degreeType: '',
    startDate: '',
    endDate: '',
    current: false
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const profile = await getCandidateProfile();
        if (profile.education) {
          setEducationDetails(profile.education);
        }
      } catch (error) {
        console.error('Error fetching education:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleSaveClick = async () => {
    try {
      setIsLoading(true);
      await updateEducation(educationDetails);
      setIsEditMode(false);
      onNext();
    } catch (error) {
      console.error('Error updating education:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true); // Enable edit mode
  };

  // const handleSaveClick = () => {
  //   setIsEditMode(false); // Disable edit mode
  //   // Save updated data to the backend
  //   console.log('Saving data:', educationDetails);
  //   onNext(); // Proceed to the next step
  // };

  const handleAddEducation = () => {
    if (
      newEducation.schoolName.trim() !== '' &&
      newEducation.degreeType.trim() !== '' &&
      newEducation.startDate.trim() !== '' &&
      newEducation.endDate.trim() !== ''
    ) {
      setEducationDetails([...educationDetails, { ...newEducation, id: Date.now() }]); // Add new education
      setNewEducation({ schoolName: '', degreeType: '', startDate: '', endDate: '' }); // Clear input fields
    }
  };

  const handleRemoveEducation = (id) => {
    const updatedEducation = educationDetails.filter((edu) => edu.id !== id); // Remove education by id
    setEducationDetails(updatedEducation);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    handleResize(); // Initial check
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
          {!isMobile && (
            <div className={styles.progressBarContainer}>
              <ProgressBar currentStep={currentStep} />
            </div>
          )}

          <div className={styles.profileDetailsContainer}>
            <div className={styles.profileHeader}>
              <div className={styles.headerRow}>
                <h1>Education & Certifications</h1>
                {!isEditMode && (
                  <button className={styles.editButton} onClick={handleEditClick}>
                    Edit
                  </button>
                )}
              </div>
              <p>You can update your all education and certification courses here.</p>
            </div>

            <div className={styles.profileDetails}>
              {/* Education Details Section */}
              <div className={styles.educationSection}>
                <h2>Educational Background *</h2>
                {educationDetails.map((edu) => (
                  <div key={edu.id} className={styles.educationItem}>
                    <div className={styles.educationInfo}>
                      <h3>{edu.schoolName}</h3>
                      <p>{edu.degreeType}</p>
                      <p>
                        {edu.startDate} – {edu.endDate}
                      </p>
                    </div>
                    {isEditMode && (
                      <span
                        className={styles.removeEducation}
                        onClick={() => handleRemoveEducation(edu.id)}
                      >
                        ❌
                      </span>
                    )}
                  </div>
                ))}
              </div>

              {/* Add Education Section */}
              {isEditMode && (
                <div className={styles.addEducationSection}>
                  <h3>Add Education</h3>
                  <div className={styles.addEducationForm}>
                    <input
                      type="text"
                      placeholder="School Name"
                      value={newEducation.schoolName}
                      onChange={(e) =>
                        setNewEducation({ ...newEducation, schoolName: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Degree Type"
                      value={newEducation.degreeType}
                      onChange={(e) =>
                        setNewEducation({ ...newEducation, degreeType: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Start Date"
                      value={newEducation.startDate}
                      onChange={(e) =>
                        setNewEducation({ ...newEducation, startDate: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="End Date"
                      value={newEducation.endDate}
                      onChange={(e) =>
                        setNewEducation({ ...newEducation, endDate: e.target.value })
                      }
                    />
                    <button onClick={handleAddEducation} className={styles.addButton}>
                      Add
                    </button>
                  </div>
                </div>
              )}
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

export default ProfileEducationCertification;