import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./RecruiterLogin.module.css";
import CLeftPortion from "../../Common/CLeftPortion"; 

const CandidateLogin = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/api/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("userType", "candidate");
      localStorage.setItem("userData", JSON.stringify(response.data.user));
      navigate("/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <CLeftPortion />
      
      <div className={styles.loginRight}>
        <div className={styles.loginForm}>
          <h2 className={styles.loginHeader}>Log in</h2>
          {error && <div className={styles.errorMessage}>{error}</div>}

          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label>Email</label>
              <input
                type="email"
                name="email"
                placeholder="johndoe@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.formGroup}>
              <label>Password</label>
              <input 
                type="password" 
                name="password"
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <a href="/forgot-password" className={styles.forgotPassword}>
              Forgot password?
            </a>

            <button type="submit" className={styles.loginButton}>Login</button>
          </form>

          <div className={styles.divider}>
            <span>Or</span>
          </div>

          <div className={styles.socialLogin}>
            {/* Social login buttons remain the same */}
          </div>

          <p className={styles.signupPrompt}>
            Don't have an account? <a href="/candidate-signup">Sign up</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CandidateLogin;

