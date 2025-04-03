import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import './App.css';
import RecruiterSignupStep1 from './pages/SignUp/Recruiter/SignUp1';
import RecruiterSignupStep2 from './pages/SignUp/Recruiter/SignUp2';
import RecruiterSignupStep3 from './pages/SignUp/Recruiter/SignUp3';
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
import ProfileManager from './pages/CandidateProfile/ProfileManager';
import { AuthProvider } from './context/AuthContext';
import HomePage from './pages/HomePage/HomePage';
import TalentLanding from './pages/RecruiterFeatures/Landing/TalentLanding';
import RecruiterFeatures from './pages/RecruiterFeatures/RecruiterFeatures';

const App = () => {
  const [candidateSignupStep, setCandidateSignupStep] = useState(1);
  const [recruiterSignupStep, setRecruiterSignupStep] = useState(1);
  
  const [candidateData, setCandidateData] = useState({
    userId: null,
    fullName: '',
    countryCode: '+91',
    phoneNumber: '',
    email: '',
    password: ''
  });

  const [recruiterData, setRecruiterData] = useState({
    userId: null,
    fullName: '',
    companyName: '',
    companyEmail: '',
    password: ''
  });

  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/recruiter-login" element={<RecruiterLogin />} />
          <Route path="/candidate-login" element={<CandidateLogin />} />
          <Route path="/email-verified" element={<EmailVerified />} />
          <Route path="/recruiterfeature" element={<RecruiterFeatures/>} />
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Profile Manager Route for Mobile */}
          <Route path="/profile-manager" element={
            <ProtectedRoute allowedUserType="candidate">
              {isMobileView ? <ProfileManager /> : <Navigate to="/profile-steps/basic-details" />}
            </ProtectedRoute>
          } />

          {/* Candidate Profile Steps */}
          <Route path="/profile-steps/basic-details" element={
            <ProtectedRoute allowedUserType="candidate">
              {isMobileView ? <Navigate to="/profile-manager" /> : <ProfileBasicDetails />}
            </ProtectedRoute>
          } />
          <Route path="/profile-steps/resume-skills" element={
            <ProtectedRoute allowedUserType="candidate">
              {isMobileView ? <Navigate to="/profile-manager" /> : <ProfileResumeSkills />}
            </ProtectedRoute>
          } />
          <Route path="/profile-steps/education" element={
            <ProtectedRoute allowedUserType="candidate">
              {isMobileView ? <Navigate to="/profile-manager" /> : <ProfileEducationCertification />}
            </ProtectedRoute>
          } />
          <Route path="/profile-steps/verification" element={
            <ProtectedRoute allowedUserType="candidate">
              {isMobileView ? <Navigate to="/profile-manager" /> : <ProfileIdentityVerification />}
            </ProtectedRoute>
          } />
          <Route path="/profile-steps/social-links" element={
            <ProtectedRoute allowedUserType="candidate">
              {isMobileView ? <Navigate to="/profile-manager" /> : <ProfileSocialLinks />}
            </ProtectedRoute>
          } />

          {/* Other protected routes */}
          <Route path="/candidate-dashboard" element={
            <ProtectedRoute allowedUserType="candidate">
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/recruiter-dashboard" element={
            <ProtectedRoute allowedUserType="recruiter">
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/find-candidate" element={
            <ProtectedRoute allowedUserType="recruiter">
              <FindCandidate />
            </ProtectedRoute>
          } />

          {/* Signup flows */}
          <Route path="/candidate-signup" element={
            <CandidateSignupFlow 
              candidateSignupStep={candidateSignupStep}
              setCandidateSignupStep={setCandidateSignupStep}
              candidateData={candidateData}
              setCandidateData={setCandidateData}
            />
          } />
          <Route path="/recruiter-signup" element={
            <RecruiterSignupFlow 
              recruiterSignupStep={recruiterSignupStep}
              setRecruiterSignupStep={setRecruiterSignupStep}
              recruiterData={recruiterData}
              setRecruiterData={setRecruiterData}
            />
          } />

          {/* Fallback route */}
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

// Component for Candidate Signup Flow
const CandidateSignupFlow = ({ candidateSignupStep, setCandidateSignupStep, candidateData, setCandidateData }) => {
  const handleStep1 = (data) => {
    setCandidateData(prev => ({ ...prev, ...data, userId: data.userId }));
    setCandidateSignupStep(2);
  };

  const handleStep2 = (data) => {
    setCandidateData(prev => ({ ...prev, ...data }));
    setCandidateSignupStep(3);
  };

  const resetFlow = () => {
    setCandidateSignupStep(1);
    setCandidateData({
      userId: null,
      fullName: '',
      countryCode: '+91',
      phoneNumber: '',
      email: '',
      password: ''
    });
  };

  return (
    <div className="signup-flow-container">
      {candidateSignupStep === 1 && (
        <CandidateSignUp 
          onNext={handleStep1}
          initialData={candidateData}
        />
      )}
      {candidateSignupStep === 2 && candidateData.userId ? (
        <CandidateSignUpStep2
          onNext={handleStep2}
          formData={candidateData}
          onBack={() => setCandidateSignupStep(1)}
        />
      ) : candidateSignupStep === 2 ? (
        <Navigate to="/candidate-signup" replace />
      ) : null}
      {candidateSignupStep === 3 && (
        <EmailVerified 
          email={candidateData.email}
          onComplete={resetFlow}
        />
      )}
    </div>
  );
};

// Component for Recruiter Signup Flow
const RecruiterSignupFlow = ({ recruiterSignupStep, setRecruiterSignupStep, recruiterData, setRecruiterData }) => {
  const handleStep1 = (data) => {
    setRecruiterData(prev => ({ ...prev, ...data, userId: data.userId }));
    setRecruiterSignupStep(2);
  };

  const handleStep2 = (data) => {
    setRecruiterData(prev => ({ ...prev, ...data }));
    setRecruiterSignupStep(3);
  };

  const resetFlow = () => {
    setRecruiterSignupStep(1);
    setRecruiterData({
      userId: null,
      fullName: '',
      companyName: '',
      companyEmail: '',
      password: ''
    });
  };

  return (
    <div className="signup-flow-container">
      {recruiterSignupStep === 1 && (
        <RecruiterSignupStep1 
          onNext={handleStep1}
          initialData={recruiterData}
        />
      )}
      {recruiterSignupStep === 2 && recruiterData.userId ? (
        <RecruiterSignupStep2
          onNext={handleStep2}
          formData={recruiterData}
          onBack={() => setRecruiterSignupStep(1)}
        />
      ) : recruiterSignupStep === 2 ? (
        <Navigate to="/recruiter-signup" replace />
      ) : null}
      {recruiterSignupStep === 3 && (
        <EmailVerified 
          email={recruiterData.companyEmail}
          onComplete={resetFlow}
        />
      )}
    </div>
  );
};

// Protected Route component
const ProtectedRoute = ({ children, allowedUserType }) => {
  const token = localStorage.getItem('token');
  const userType = localStorage.getItem('userType');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate(userType === 'recruiter' ? '/recruiter-login' : '/candidate-login');
    } else if (allowedUserType && userType !== allowedUserType) {
      navigate(`/${userType === 'recruiter' ? 'recruiter' : 'candidate'}-dashboard`);
    }
  }, [token, userType, navigate, allowedUserType]);

  if (!token) return null;
  return children;
};

export default App;