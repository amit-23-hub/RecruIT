import { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from '../../assets/logo.png';
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userType, setUserType] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        // Check authentication status
        const token = localStorage.getItem('token');
        const storedUserType = localStorage.getItem('userType');
        
        if (token) {
            setIsAuthenticated(true);
            setUserType(storedUserType);
            // Here you would typically fetch the user's profile image
            // For now, we'll just use a placeholder
            // fetchUserProfile();
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
        setIsAuthenticated(false);
        setUserType(null);
        navigate('/home');
    };

    return (
        <div className="header">
            <nav className="navbar">
                <div className="companylogo">
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                </div>

                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                <div className={`menu ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li><Link to="/about">For Recruiters</Link></li>
                        <li><Link to="/product">For Candidates</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                        
                        {!isAuthenticated && (
                            <div className="mobile_signup_container">
                                <button className="mobile_button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                                    Sign Up <FaChevronDown className={`dropdown_icon ${dropdownOpen ? 'open' : ''}`} />
                                </button>
                                {dropdownOpen && (
                                    <div className="dropdown_menu mobile">
                                        <Link to="/candidate-signup">As Candidate</Link>
                                        <Link to="/recruiter-signup">As Recruiter</Link>
                                    </div>
                                )}
                            </div>
                        )}
                    </ul>
                </div>
              
                {!isAuthenticated ? (
                    <div className="desktop_signup_container">
                        <button className="desktop_button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            Sign Up <FaChevronDown className={`dropdown_icon ${dropdownOpen ? 'open' : ''}`} />
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown_menu">
                                <Link to="/candidate-signup">As Candidate</Link>
                                <Link to="/recruiter-signup">As Recruiter</Link>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="profile_container">
                        <div className="profile_icon" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            {profileImage ? (
                                <img src={profileImage} alt="Profile" className="profile_image" />
                            ) : (
                                <FaUser className="default_user_icon" />
                            )}
                        </div>
                        {dropdownOpen && (
                            <div className="dropdown_menu">
                                {userType === 'candidate' ? (
                                    <>
                                        <Link to="/candidate-profile">Profile</Link>
                                        <Link to="/profile-steps/basic-details">Update Profile</Link>
                                    </>
                                ) : (
                                    <>
                                        <Link to="/recruiter-dashboard">Dashboard</Link>
                                        <Link to="/recruiter-profile">Profile</Link>
                                    </>
                                )}
                                <button onClick={handleLogout} className="logout_button">Logout</button>
                            </div>
                        )}
                    </div>
                )}
            </nav>
        </div>
    );
};

export default Header;
