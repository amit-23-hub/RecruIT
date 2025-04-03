import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileIdentityVerification.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';
import { getCandidateProfile, updateIdentityVerification } from '../../services/candidateProfileService';

const ProfileIdentityVerification = () => {
  const currentStep = 4;
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    proofType: '',
    proofDocument: null,
    fullAddress: '',
    verificationConsent: false,
    verificationStatus: 'Pending'
  });
  const [filePreview, setFilePreview] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const profile = await getCandidateProfile();
        if (profile.identityVerification) {
          setFormData({
            proofType: profile.identityVerification.proofType || '',
            proofDocument: profile.identityVerification.proofDocument || null,
            fullAddress: profile.identityVerification.fullAddress || '',
            verificationConsent: profile.identityVerification.verificationConsent || false,
            verificationStatus: profile.identityVerification.verificationStatus || 'Pending'
          });
          if (profile.identityVerification.proofDocument) {
            setFilePreview({
              name: profile.identityVerification.proofDocument.name,
              url: profile.identityVerification.proofDocument.url
            });
          }
        }
      } catch (error) {
        console.error('Error fetching verification details:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleVerify = async () => {
    try {
      setIsLoading(true);
      const formDataToSend = new FormData();
      
      // Append all form data
      formDataToSend.append('proofType', formData.proofType);
      formDataToSend.append('fullAddress', formData.fullAddress);
      formDataToSend.append('verificationConsent', formData.verificationConsent);
      
      // Only append file if it's a new upload
      if (formData.proofDocument instanceof File) {
        formDataToSend.append('proofDocument', formData.proofDocument);
      }

      await updateIdentityVerification(formDataToSend);
      navigate('/profile-steps/social-links'); // Navigate to next step
    } catch (error) {
      console.error('Error updating verification:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        proofDocument: file
      });
      setFilePreview({
        name: file.name,
        url: URL.createObjectURL(file)
      });
    }
  };

  const handleCancel = () => {
    // Reset only editable fields
    setFormData({
      ...formData,
      proofType: '',
      proofDocument: null,
      fullAddress: '',
      verificationConsent: false
    });
    setFilePreview(null);
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
              <h1>Identity Verification</h1>
              <p>Verify your identity to complete your profile</p>
              
              {formData.verificationStatus !== 'Pending' && (
                <div className={`${styles.statusBadge} ${
                  formData.verificationStatus === 'Verified' ? styles.verified : styles.rejected
                }`}>
                  Status: {formData.verificationStatus}
                </div>
              )}
            </div>

            <div className={styles.profileDetails}>
              {/* Verification Form */}
              <div className={styles.verificationForm}>
                <div className={styles.formGroup}>
                  <label>Identity Proof Type *</label>
                  <select
                    name="proofType"
                    value={formData.proofType}
                    onChange={handleInputChange}
                    className={styles.proofSelect}
                    disabled={formData.verificationStatus === 'Verified'}
                  >
                    <option value="">Select Proof Type</option>
                    <option value="Aadhar Card">Aadhar Card</option>
                    <option value="Passport">Passport</option>
                    <option value="Driver's License">Driver's License</option>
                    <option value="PAN Card">PAN Card</option>
                  </select>
                </div>

                <div className={styles.formGroup}>
                  <label>Upload Document *</label>
                  <div className={styles.fileUploadContainer}>
                    {filePreview ? (
                      <div className={styles.filePreview}>
                        <span>{filePreview.name}</span>
                        <a 
                          href={filePreview.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className={styles.viewLink}
                        >
                          View
                        </a>
                      </div>
                    ) : (
                      <p className={styles.noFile}>No document uploaded</p>
                    )}
                    <label className={styles.fileInputLabel}>
                      {filePreview ? 'Change Document' : 'Select Document'}
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        accept=".jpg,.jpeg,.png,.pdf"
                        disabled={formData.verificationStatus === 'Verified'}
                      />
                    </label>
                    <p className={styles.fileHint}>Supported formats: JPG, PNG, PDF (Max 5MB)</p>
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>Full Address *</label>
                  <textarea
                    name="fullAddress"
                    placeholder="Enter your complete address as per the document"
                    value={formData.fullAddress}
                    onChange={handleInputChange}
                    className={styles.addressInput}
                    disabled={formData.verificationStatus === 'Verified'}
                  />
                </div>

                <div className={styles.consentSection}>
                  <label className={styles.consentLabel}>
                    <input
                      type="checkbox"
                      name="verificationConsent"
                      checked={formData.verificationConsent}
                      onChange={handleInputChange}
                      disabled={formData.verificationStatus === 'Verified'}
                    />
                    <span>
                      I authorize RecruIT to verify my identity and understand this is required
                      to complete my profile verification. I confirm that all information provided
                      is accurate and belongs to me.
                    </span>
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              {formData.verificationStatus !== 'Verified' && (
                <div className={styles.actionButtons}>
                  <button 
                    className={styles.cancelButton} 
                    onClick={handleCancel}
                    disabled={isLoading}
                  >
                    Cancel
                  </button>
                  <button 
                    className={styles.verifyButton} 
                    onClick={handleVerify}
                    disabled={
                      isLoading || 
                      !formData.proofType || 
                      !formData.proofDocument || 
                      !formData.fullAddress || 
                      !formData.verificationConsent
                    }
                  >
                    {isLoading ? 'Verifying...' : 'Submit Verification'}
                  </button>
                </div>
              )}

              {formData.verificationStatus === 'Verified' && (
                <div className={styles.completedMessage}>
                  <p>Your identity verification has been completed successfully.</p>
                  <button 
                    className={styles.continueButton}
                    onClick={() => navigate('/profile-steps/social-links')}
                  >
                    Continue to Next Step
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIdentityVerification;