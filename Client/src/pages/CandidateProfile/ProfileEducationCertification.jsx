import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileEducationCertification.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';
import { getCandidateProfile, updateEducation } from '../../services/candidateProfileService';

const ProfileEducationCertification = () => {
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
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const profile = await getCandidateProfile();
        if (profile.education) {
          setEducationDetails(profile.education.map(edu => ({
            ...edu,
            id: edu._id || Date.now() // Use backend ID or generate temporary one
          })));
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
      navigate('/profile-steps/verification'); // Navigate to next step
    } catch (error) {
      console.error('Error updating education:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleEditClick = () => {
    setIsEditMode(true);
  };

  const handleAddEducation = () => {
    if (
      newEducation.schoolName.trim() !== '' &&
      newEducation.degreeType.trim() !== '' &&
      newEducation.startDate.trim() !== '' &&
      (newEducation.current || newEducation.endDate.trim() !== '')
    ) {
      setEducationDetails([
        ...educationDetails, 
        { 
          ...newEducation, 
          id: Date.now() // Temporary ID for new entries
        }
      ]);
      setNewEducation({ 
        schoolName: '', 
        degreeType: '', 
        startDate: '', 
        endDate: '', 
        current: false 
      });
    }
  };

  const handleRemoveEducation = (id) => {
    setEducationDetails(educationDetails.filter(edu => edu.id !== id));
  };

  const handleEducationChange = (id, field, value) => {
    setEducationDetails(educationDetails.map(edu => 
      edu.id === id ? { ...edu, [field]: value } : edu
    ));
  };

  const handleCurrentCheckboxChange = (e) => {
    setNewEducation({
      ...newEducation,
      current: e.target.checked,
      endDate: e.target.checked ? 'Present' : ''
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
                <h1>Education & Certifications</h1>
                {!isEditMode && educationDetails.length > 0 && (
                  <button 
                    className={styles.editButton} 
                    onClick={handleEditClick}
                    disabled={isLoading}
                  >
                    Edit
                  </button>
                )}
              </div>
              <p>You can update your all education and certification courses here.</p>
            </div>

            <div className={styles.profileDetails}>
              {/* Education List */}
              <div className={styles.educationSection}>
                <h2>Educational Background *</h2>
                
                {educationDetails.length === 0 && !isEditMode ? (
                  <div className={styles.emptyState}>
                    <p>No education details added yet</p>
                    <button 
                      className={styles.addFirstButton}
                      onClick={handleEditClick}
                    >
                      Add Education
                    </button>
                  </div>
                ) : (
                  educationDetails.map((edu) => (
                    <div key={edu.id} className={styles.educationItem}>
                      {isEditMode ? (
                        <div className={styles.educationForm}>
                          <input
                            type="text"
                            value={edu.schoolName}
                            onChange={(e) => handleEducationChange(edu.id, 'schoolName', e.target.value)}
                            placeholder="School Name"
                          />
                          <input
                            type="text"
                            value={edu.degreeType}
                            onChange={(e) => handleEducationChange(edu.id, 'degreeType', e.target.value)}
                            placeholder="Degree Type"
                          />
                          <div className={styles.dateRow}>
                            <input
                              type="text"
                              value={edu.startDate}
                              onChange={(e) => handleEducationChange(edu.id, 'startDate', e.target.value)}
                              placeholder="Start Date"
                            />
                            <span>to</span>
                            <input
                              type="text"
                              value={edu.endDate}
                              onChange={(e) => handleEducationChange(edu.id, 'endDate', e.target.value)}
                              placeholder="End Date"
                              disabled={edu.current}
                            />
                          </div>
                          <div className={styles.currentCheckbox}>
                            <input
                              type="checkbox"
                              id={`current-${edu.id}`}
                              checked={edu.current}
                              onChange={(e) => handleEducationChange(
                                edu.id, 
                                'current', 
                                e.target.checked
                              )}
                            />
                            <label htmlFor={`current-${edu.id}`}>Currently attending</label>
                          </div>
                        </div>
                      ) : (
                        <div className={styles.educationInfo}>
                          <h3>{edu.schoolName}</h3>
                          <p>{edu.degreeType}</p>
                          <p>
                            {edu.startDate} – {edu.endDate || 'Present'}
                          </p>
                        </div>
                      )}
                      {isEditMode && (
                        <button
                          className={styles.removeEducation}
                          onClick={() => handleRemoveEducation(edu.id)}
                        >
                          ×
                        </button>
                      )}
                    </div>
                  ))
                )}
              </div>

              {/* Add New Education Form */}
              {isEditMode && (
                <div className={styles.addEducationSection}>
                  <h3>Add New Education</h3>
                  <div className={styles.addEducationForm}>
                    <input
                      type="text"
                      value={newEducation.schoolName}
                      onChange={(e) => setNewEducation({...newEducation, schoolName: e.target.value})}
                      placeholder="School/University Name"
                    />
                    <input
                      type="text"
                      value={newEducation.degreeType}
                      onChange={(e) => setNewEducation({...newEducation, degreeType: e.target.value})}
                      placeholder="Degree/Certification"
                    />
                    <div className={styles.dateRow}>
                      <input
                        type="text"
                        value={newEducation.startDate}
                        onChange={(e) => setNewEducation({...newEducation, startDate: e.target.value})}
                        placeholder="Start Date (YYYY-MM-DD)"
                      />
                      <span>to</span>
                      <input
                        type="text"
                        value={newEducation.endDate}
                        onChange={(e) => setNewEducation({...newEducation, endDate: e.target.value})}
                        placeholder="End Date (YYYY-MM-DD)"
                        disabled={newEducation.current}
                      />
                    </div>
                    <div className={styles.currentCheckbox}>
                      <input
                        type="checkbox"
                        id="current-education"
                        checked={newEducation.current}
                        onChange={handleCurrentCheckboxChange}
                      />
                      <label htmlFor="current-education">I currently attend here</label>
                    </div>
                    <button 
                      onClick={handleAddEducation} 
                      className={styles.addButton}
                      disabled={
                        !newEducation.schoolName.trim() || 
                        !newEducation.degreeType.trim() || 
                        !newEducation.startDate.trim() ||
                        (!newEducation.current && !newEducation.endDate.trim())
                      }
                    >
                      Add Education
                    </button>
                  </div>
                </div>
              )}
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
                  disabled={isLoading || educationDetails.length === 0}
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

export default ProfileEducationCertification;