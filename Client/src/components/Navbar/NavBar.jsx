import React, { useState } from 'react';
import styles from './Navbar.module.css';
import Logo from '../../Common/logo';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (userType) => {
    if (userType === 'candidate') {
      navigate('/signup/candidate');
    } else if (userType === 'recruiter') {
      navigate('/signup/recruiter');
    }
    setShowDropdown(false);
    setMobileMenuOpen(false); // Close mobile menu after selection
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setShowDropdown(false); // Close dropdown when mobile menu toggles
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            <Logo />
          </div>
          
          <div className={`${styles.menu} ${mobileMenuOpen ? styles.mobileMenuActive : ''}`}>
            <a href="/solutions" onClick={() => setMobileMenuOpen(false)}>Solutions</a>
            <a href="/pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
            <a href="/faqs" onClick={() => setMobileMenuOpen(false)}>FAQs</a>
          </div>
        </div>
        
        <div className={`${styles.signupContainer} ${mobileMenuOpen ? styles.mobileMenuActive : ''}`}>
          <button 
            className={styles.signupButton}
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Sign Up
          </button>
          
          {showDropdown && (
            <div className={styles.dropdown}>
              <button onClick={() => handleSignup('candidate')}>As Candidate</button>
              <button onClick={() => handleSignup('recruiter')}>As Recruiter</button>
            </div>
          )}
        </div>
        
        <button 
          className={`${styles.mobileMenuButton} ${mobileMenuOpen ? styles.open : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;