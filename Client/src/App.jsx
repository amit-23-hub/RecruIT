import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from "react";
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
// import SignUp3 from './pages/SignUp/SignUp3';
import ProfileManager from './pages/CandidateProfile/ProfileManager';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  // Separate states for candidate and recruiter
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

  // Profile states remain same
  const [profileStep, setProfileStep] = useState(1);
  const [profileData, setProfileData] = useState({});

  // Separate handlers for recruiter
  const handleRecruiterStep1 = (data) => {
    setRecruiterData(prev => ({
      ...prev,
      ...data,
      userId: data.userId
    }));
    setRecruiterSignupStep(2);
  };

  const handleRecruiterStep2 = (data) => {
    setRecruiterData(prev => ({
      ...prev,
      ...data
    }));
    setRecruiterSignupStep(3);
  };

  const resetRecruiterFlow = () => {
    setRecruiterSignupStep(1);
    setRecruiterData({
      userId: null,
      fullName: '',
      companyName: '',
      companyEmail: '',
      password: ''
    });
  };

  // Handlers for candidate
  const handleCandidateStep1 = (data) => {
    setCandidateData(prev => ({
      ...prev,
      ...data,
      userId: data.userId
    }));
    setCandidateSignupStep(2);
  };

  const handleCandidateStep2 = (data) => {
    setCandidateData(prev => ({
      ...prev,
      ...data
    }));
    setCandidateSignupStep(3);
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
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<RecruiterLogin />} />
          <Route path="/candidate-login" element={<CandidateLogin />} />
          <Route path="/verify-email" element={<EmailVerified />} />
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Protected routes */}
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          } />
          <Route path="/findcandidate" element={<FindCandidate />} />
          <Route path="/profile" element={<Profile />} />
          {/* Remove the standalone signup2 route */}
          
          {/* Candidate Signup Flow */}
          <Route
            path="/candidate-signup"
            element={
              <div className="signup-flow-container">
                {candidateSignupStep === 1 && (
                  <CandidateSignUp 
                    onNext={handleCandidateStep1}
                    initialData={candidateData}
                  />
                )}
                {candidateSignupStep === 2 && candidateData.userId ? (
                  <CandidateSignUpStep2
                    onNext={handleCandidateStep2}
                    formData={candidateData}
                    onBack={() => setCandidateSignupStep(1)}
                  />
                ) : candidateSignupStep === 2 ? (
                  <Navigate to="/candidate-signup" replace />
                ) : null}
                {candidateSignupStep === 3 && (
                  <SignupStep3 
                    email={candidateData.email}
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
                {recruiterSignupStep === 1 && (
                  <RecruiterSignupStep1 
                    onNext={handleRecruiterStep1}
                    initialData={recruiterData}
                  />
                )}
                {recruiterSignupStep === 2 && recruiterData.userId ? (
                  <RecruiterSignupStep2
                    onNext={handleRecruiterStep2}
                    formData={recruiterData}
                    onBack={() => setRecruiterSignupStep(1)}
                  />
                ) : recruiterSignupStep === 2 ? (
                  <Navigate to="/signup" replace />
                ) : null}
                {recruiterSignupStep === 3 && (
                  <RecruiterSignupStep3
                    email={recruiterData.companyEmail}
                    onComplete={resetRecruiterFlow}
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
    </AuthProvider>
  );
};

// Protected Route component
const ProtectedRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate('/login');
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return user ? children : null;
};

export default App;