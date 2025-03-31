import { useState } from "react";
import "./Navbar.css";
import Logo from '../../assets/logo.png';
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
 
    return (
        <div className="header">
            <nav className="navbar">
                <div className="companylogo">
                    <Link to="/"><img src={Logo} alt="Logo" /></Link>
                </div>

                {/* Hamburger Icon */}
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {/* Responsive Menu */}
                <div className={`menu ${menuOpen ? "active" : ""}`}>
                    <ul>
                        <li><Link to="/about">For Recruiters</Link></li>
                        <li><Link to="/product">For Candidates</Link></li>
                        <li><Link to="/blog">Blogs</Link></li>
                      
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
                    </ul>
                </div>
              
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
            </nav>
        </div>
    );
};

export default Header;
