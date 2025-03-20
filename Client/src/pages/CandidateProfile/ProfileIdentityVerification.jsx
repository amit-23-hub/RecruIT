import React, { useState } from 'react';
import styles from './ProfileIdentityVerification.module.css';
import SideMenu from '../../components/SideMenu/SideMenu';
import ProgressBar from './ProgressBar/ProgressBar';

const ProfileIdentityVerification = ({ onNext }) => {
  const currentStep = 4;
  const [proofType, setProofType] = useState('');
  const [proofFile, setProofFile] = useState(null);
  const [fullAddress, setFullAddress] = useState('');
  const [isVerified, setIsVerified] = useState(false);

  const handleProofTypeChange = (e) => {
    setProofType(e.target.value);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProofFile(file);
    }
  };

  const handleVerify = () => {
    if (proofType && proofFile && fullAddress && isVerified) {
      console.log('Verifying:', { proofType, proofFile, fullAddress });
      onNext();
    } else {
      alert('Please fill all fields and agree to the verification.');
    }
  };

  const handleCancel = () => {
    setProofType('');
    setProofFile(null);
    setFullAddress('');
    setIsVerified(false);
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