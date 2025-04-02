import React, { useState, useEffect } from 'react';
import styles from './ProfileIdentityVerification.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';
import { getCandidateProfile, updateIdentityVerification } from '../../services/candidateProfileService';

const ProfileIdentityVerification = ({ onNext }) => {
  const currentStep = 4;
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [proofType, setProofType] = useState('');
  const [proofFile, setProofFile] = useState(null);
  const [fullAddress, setFullAddress] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [verificationStatus, setVerificationStatus] = useState('Pending');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const profile = await getCandidateProfile();
        if (profile.identityVerification) {
          setProofType(profile.identityVerification.proofType || '');
          setFullAddress(profile.identityVerification.fullAddress || '');
          setIsVerified(profile.identityVerification.verificationConsent || false);
          setVerificationStatus(profile.identityVerification.verificationStatus || 'Pending');
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
      const formData = new FormData();
      if (proofFile) {
        formData.append('proofDocument', proofFile);
      }
      formData.append('proofType', proofType);
      formData.append('fullAddress', fullAddress);
      formData.append('verificationConsent', isVerified);

      await updateIdentityVerification(formData);
      onNext();
    } catch (error) {
      console.error('Error updating verification:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleProofTypeChange = (e) => {
    setProofType(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProofFile(file);
    }
  };

  const handleCancel = () => {
    setProofType('');
    setProofFile(null);
    setFullAddress('');
    setIsVerified(false);
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
              <h1>Identity Verification</h1>
              <p>You can update your identity verification details here.</p>
            </div>

            <div className={styles.profileDetails}>
              {/* Proof Type Section */}
              <div className={styles.section}>
                <h2>Proof Type</h2>
                <select
                  value={proofType}
                  onChange={handleProofTypeChange}
                  className={styles.proofSelect}
                >
                  <option value="">Select Proof Type</option>
                  <option value="Aadhar Card">Aadhar Card</option>
                  <option value="Passport">Passport</option>
                  <option value="Driver's License">Driver's License</option>
                </select>

                {proofType && (
                  <div className={styles.fileUpload}>
                    <input
                      type="file"
                      onChange={handleFileUpload}
                      accept=".jpg, .jpeg, .png, .pdf"
                    />
                    {proofFile && <p>Uploaded: {proofFile.name}</p>}
                  </div>
                )}
              </div>

              {/* Full Address Section */}
              <div className={styles.section}>
                <h2>Full Address</h2>
                <textarea
                  placeholder="Enter your full address"
                  value={fullAddress}
                  onChange={(e) => setFullAddress(e.target.value)}
                  className={styles.addressInput}
                />
              </div>

              {/* Verification Consent */}
              <div className={styles.verificationConsent}>
                <label>
                  <input
                    type="checkbox"
                    checked={isVerified}
                    onChange={(e) => setIsVerified(e.target.checked)}
                  />
                  Authorize RecruIT to conduct necessary background verification checks for the
                  purpose of validating my profile and credentials. Understand that the results of
                  this verification will determine my approval to use the platform.
                </label>
              </div>

              {/* Action Buttons */}
              <div className={styles.actionButtons}>
                <button className={styles.cancelButton} onClick={handleCancel}>
                  Cancel
                </button>
                <button className={styles.verifyButton} onClick={handleVerify}>
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileIdentityVerification;