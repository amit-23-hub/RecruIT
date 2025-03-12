import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import React, { useState } from "react";
import './App.css';
import SignupStep1 from './pages/SignUp/SignUp1';
import SignupStep2 from './pages/SignUp/SignUp2';
import SignupStep3 from './pages/SignUp/SignUp3';
import RecruiterLogin from './pages/Login/RecruiterLogin';
import CandidateSignUp from './pages/SignUp/Candidate/CandidateSignUp';
import CandidateSignUpStep2 from './pages/SignUp/Candidate/CandidateSignUpStep2';
import Home from './pages/HomePage/HomePage'; 

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});

  const handleNextStep1 = (data) => {
    setFormData(data);
    setStep(2);
  };

  const handleNextStep2 = (data) => {
    setFormData({ ...formData, ...data });
    setStep(3); // Move to Step 3 (Email Verification)
  };

  return (
    <Router>
      <Routes>
        {/* Route for the Home Page */}
        <Route path="/home" element={<Home />} />

        {/* Route for the Recruiter Login Page */}
        <Route path="/login" element={<RecruiterLogin />} />

        {/* Route for the Candidate Sign-Up Page */}
        <Route
          path="/candidate-signup"
          element={
            <>
              {step === 1 && <CandidateSignUp onNext={handleNextStep1} />}
              {step === 2 && <CandidateSignUpStep2 onNext={handleNextStep2} formData={formData} />}
              {step === 3 && <SignupStep3 />}
            </>
          }
        />

        {/* Route for the Recruiter Sign-Up Process */}
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

        {/* Default Route: Redirect to Home Page */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </Router>
  );
};

export default App;