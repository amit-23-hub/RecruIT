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

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    userId: null, // Initialize userId
    fullName: "",
    countryCode: "+91",
    phoneNumber: "",
    email: "",
    password: ""
  });

  const handleNextStep1 = (data) => {
    setFormData(prev => ({
      ...prev,
      ...data,
      userId: data.userId // Ensure userId is preserved
    }));
    setStep(2);
  };

  const handleNextStep2 = (data) => {
    setFormData(prev => ({
      ...prev,
      ...data
    }));
    setStep(3);
  };

  const handleNextProfileStep = (data) => {
    setFormData({ ...formData, ...data });
    setStep(step + 1);
  };

  const handlePreviousProfileStep = () => {
    setStep(step - 1);
  };
  // ... other handlers ...

  return (
    <Router>
      <Routes>
        {/* ... other routes ... */}
        <Route
          path="/candidate-signup"
          element={
            <>
              {step === 1 && (
                <CandidateSignUp 
                  onNext={handleNextStep1} 
                  initialData={formData}
                />
              )}
              {step === 2 && formData.userId ? (
                <CandidateSignUpStep2 
                  onNext={handleNextStep2} 
                  formData={formData}
                />
              ) : (
                <Navigate to="/candidate-signup" replace />
              )}
              {step === 3 && <SignupStep3 />}
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              {step === 1 && <SignupStep1 onNext={handleNextStep1} />}
              {step === 2 && <SignupStep2 onNext={handleNextStep2} formData={formData} />}
              {step === 3 && <SignupStep3 />}
            </>
          }
        />
        <Route
          path="/profile-steps"
          element={
            <>
              {step === 1 && <ProfileBasicDetails onNext={handleNextProfileStep} formData={formData} />}
              {step === 2 && <ProfileResumeSkills onNext={handleNextProfileStep} onPrevious={handlePreviousProfileStep} formData={formData} />}
              {step === 3 && <ProfileEducationCertification onNext={handleNextProfileStep} onPrevious={handlePreviousProfileStep} formData={formData} />}
              {step === 4 && <ProfileIdentityVerification onNext={handleNextProfileStep} onPrevious={handlePreviousProfileStep} formData={formData} />}
              {step === 5 && <ProfileSocialLinks onPrevious={handlePreviousProfileStep} formData={formData} />}
            </>
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/email-verified" element={<EmailVerified />} />
      </Routes>
    </Router>
  );
};

export default App;