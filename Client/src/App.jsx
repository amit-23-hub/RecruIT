import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from "react";
import './App.css';
import SignupStep1 from './pages/SignUp/SignUp1';
import SignupStep2 from './pages/SignUp/SignUp2';
import SignupStep3 from './pages/SignUp/SignUp3';
import RecruiterLogin from './pages/Login/RecruiterLogin';
import CandidateLogin from './pages/Login/CandidateLogin';
import CandidateSignUp from './pages/SignUp/Candidate/CandidateSignUp';
import CandidateSignUpStep2 from './pages/SignUp/Candidate/CandidateSignUpStep2';
import Home from './pages/HomePage/HomePage'; 
import Dashboard from './components/DashBoard/Dashboard';
import ProfileBasicDetails from './pages/CandidateProfile/ProfileBasicDetails';
import ProfileResumeSkills from './pages/CandidateProfile/ProfileResumeSkills';
import ProfileEducationCertification from './pages/CandidateProfile/ProfileEducationCertification';
import ProfileIdentityVerification from './pages/CandidateProfile/ProfileIdentityVerification';
import ProfileSocialLinks from './pages/CandidateProfile/ProfileSocialLinks';
import Profile from './pages/CandidateProfile/Profile';
import EmailVerified from './pages/EmailVarify';
import FindCandidate from './components/DashBoard/FindCandidate/FindCandidate';
import SignUp3 from './pages/SignUp/SignUp3';
import ProfileManager from './pages/CandidateProfile/ProfileManager';

const App = () => {
  // State for signup flow
  const [signupStep, setSignupStep] = useState(1);
  const [signupData, setSignupData] = useState({
    userId: null,
    fullName: '',
    countryCode: '+91',
    phoneNumber: '',
    email: '',
    password: ''
  });

  // State for profile steps
  const [profileStep, setProfileStep] = useState(1);
  const [profileData, setProfileData] = useState({});

  // Signup handlers
  const handleNextStep1 = (data) => {
    setSignupData(prev => ({
      ...prev,
      ...data,
      userId: data.userId // Ensure userId is preserved
    }));
    setSignupStep(2);
  };

  const handleNextStep2 = (data) => {
    setSignupData(prev => ({
      ...prev,
      ...data
    }));
    setSignupStep(3);
  };

  const resetSignupFlow = () => {
    setSignupStep(1);
    setSignupData({
      userId: null,
      fullName: '',
      countryCode: '+91',
      phoneNumber: '',
      email: '',
      password: ''
    });
  };

  // Profile handlers
  const handleNextProfileStep = (data) => {
    setProfileData(prev => ({
      ...prev,
      ...data
    }));
    setProfileStep(prev => prev + 1);
  };

  const handlePreviousProfileStep = () => {
    setProfileStep(prev => prev - 1);
  };

  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<RecruiterLogin />} />
        <Route path="/candidate-login" element={<CandidateLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/findcandidate" element={<FindCandidate />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/phone-Profile" element={<ProfileManager />} />
        <Route path="/verify-email" element={<EmailVerified />} />
        {/* Update the SignupStep2 route */}
        <Route 
          path="/signup2" 
          element={
            <SignupStep2 
              onNext={(data) => {
                handleNextStep2(data);
                navigate('/signup3');
              }} 
              formData={signupData}
            />
          } 
        />
        <Route path="/signup3" element={<SignUp3 />} />
        
        
        {/* Candidate Signup Flow */}
        <Route
          path="/candidate-signup"
          element={
            <div className="signup-flow-container">
              {signupStep === 1 && (
                <CandidateSignUp 
                  onNext={handleNextStep1}
                  initialData={signupData}
                />
              )}
              {signupStep === 2 && signupData.userId ? (
                <CandidateSignUpStep2
                  onNext={handleNextStep2}
                  formData={signupData}
                  onBack={() => setSignupStep(1)}
                />
              ) : signupStep === 2 ? (
                <Navigate to="/candidate-signup" replace />
              ) : null}
              {signupStep === 3 && (
                <SignupStep3 
                  email={signupData.email}
                  onComplete={resetSignupFlow}
                />
              )}
            </div>
          }
        />

        {/* Recruiter Signup Flow */}
        <Route
          path="/signup"
          element={
            <div className="signup-flow-container">
              {signupStep === 1 && (
                <SignupStep1 
                  onNext={handleNextStep1}
                />
              )}
              {signupStep === 2 && signupData.userId ? (
                <SignupStep2
                  onNext={handleNextStep2}
                  formData={signupData}
                  onBack={() => setSignupStep(1)}
                />
              ) : signupStep === 2 ? (
                <Navigate to="/signup" replace />
              ) : null}
              {signupStep === 3 && (
                <SignupStep3 
                  email={signupData.email}
                  onComplete={resetSignupFlow}
                />
              )}
            </div>
          }
        />

        {/* Profile Completion Flow */}
        <Route
          path="/profile-steps"
          element={
            <div className="profile-steps-container">
              {profileStep === 1 && (
                <ProfileBasicDetails 
                  onNext={handleNextProfileStep} 
                  formData={profileData} 
                />
              )}
              {profileStep === 2 && (
                <ProfileResumeSkills 
                  onNext={handleNextProfileStep}
                  onPrevious={handlePreviousProfileStep}
                  formData={profileData}
                />
              )}
              {profileStep === 3 && (
                <ProfileEducationCertification
                  onNext={handleNextProfileStep}
                  onPrevious={handlePreviousProfileStep}
                  formData={profileData}
                />
              )}
              {profileStep === 4 && (
                <ProfileIdentityVerification
                  onNext={handleNextProfileStep}
                  onPrevious={handlePreviousProfileStep}
                  formData={profileData}
                />
              )}
              {profileStep === 5 && (
                <ProfileSocialLinks
                  onPrevious={handlePreviousProfileStep}
                  formData={profileData}
                />
              )}
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;