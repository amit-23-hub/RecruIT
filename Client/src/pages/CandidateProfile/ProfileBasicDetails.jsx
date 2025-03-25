import React, { useState, useEffect } from "react";
import styles from "./ProfileBasicDetails.module.css";
import SideMenu from "../../components/SideMenu/SideMenu";
import ProgressBar from "./ProgressBar/ProgressBar";
import img from "../../assets/HomeImg.png";

const ProfileBasicDetails = ({ onNext }) => {
  const currentStep = 1;
  const [isEditMode, setIsEditMode] = useState(false); // State for edit mode
  const [formData, setFormData] = useState({
    fullName: "",
    title: "",
    shortBio: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    city: "",
    pinCode: "",
  });

  // Fetch user data from the backend (mock API call)
  useEffect(() => {
    const fetchUserData = async () => {
      const userData = await fetchUserDataFromBackend(); // Call mock function
      setFormData(userData);
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditMode(true); // Enable edit mode
  };

  const handleSaveClick = () => {
    setIsEditMode(false); // Disable edit mode
    saveUserDataToBackend(formData); // Call mock function to save data
    onNext(); // Proceed to the next step
  };

  const isFormValid = () => {
    return Object.values(formData).every((value) => value.trim() !== "");
  };

  // Dummy data for dropdowns (replace with actual data)
  const countries = ["India", "USA", "Canada", "UK"];
  const states = {
    India: ["Maharashtra", "Karnataka", "Tamil Nadu"],
    USA: ["California", "Texas", "New York"],
    Canada: ["Ontario", "Quebec", "British Columbia"],
    UK: ["England", "Scotland", "Wales"],
  };
  const cities = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur"],
    Karnataka: ["Bangalore", "Mysore", "Hubli"],
    TamilNadu: ["Chennai", "Coimbatore", "Madurai"],
    California: ["Los Angeles", "San Francisco", "San Diego"],
    Texas: ["Houston", "Dallas", "Austin"],
    NewYork: ["New York City", "Buffalo", "Rochester"],
    Ontario: ["Toronto", "Ottawa", "Mississauga"],
    Quebec: ["Montreal", "Quebec City", "Laval"],
    BritishColumbia: ["Vancouver", "Victoria", "Surrey"],
    England: ["London", "Manchester", "Birmingham"],
    Scotland: ["Edinburgh", "Glasgow", "Aberdeen"],
    Wales: ["Cardiff", "Swansea", "Newport"],
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
              <div className={styles.headerRow}>
                <h1>Personal Info</h1>
                {!isEditMode && (
                  <button
                    className={styles.editButton}
                    onClick={handleEditClick}
                  >
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 28 28"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.6665 24.4999H23.3332M6.61017 15.3847C6.11272 15.8833 5.8333 16.5588 5.83317 17.2631V20.9999H9.59334C10.298 20.9999 10.9735 20.7199 11.4717 20.2206L22.555 9.1314C23.0523 8.63277 23.3315 7.95729 23.3315 7.25307C23.3315 6.54885 23.0523 5.87337 22.555 5.37474L21.4607 4.27807C21.2139 4.03115 20.9208 3.83529 20.5983 3.7017C20.2757 3.56811 19.93 3.4994 19.5809 3.49951C19.2318 3.49962 18.8862 3.56854 18.5637 3.70233C18.2412 3.83612 17.9483 4.03216 17.7017 4.27924L6.61017 15.3847Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <p>
                You can update your profile photo and personal details here.
              </p>
              <div className={styles.profileImageContainer}>
                <img src={img} alt="profile" className={styles.profileImage} />
              </div>
            </div>
            <div className={styles.profileDetails}>
              <div className={styles.detailSection}>
                <label>Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  disabled={!isEditMode}
                />
              </div>
              <div className={styles.detailSection}>
                <label>Title *</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  disabled={!isEditMode}
                />
              </div>
              <div className={styles.detailSection}>
                <label>Short Bio *</label>
                <input
                  type="text"
                  name="shortBio"
                  value={formData.shortBio}
                  onChange={handleChange}
                  disabled={!isEditMode}
                />
              </div>
              <div className={styles.detailSection}>
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={!isEditMode}
                />
              </div>
              <div className={styles.detailSection}>
                <label>Phone No</label>
                <div className={styles.phoneInput}>
                  <span>+91</span>
                  <input
                    type="text"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.detailSection}>
                  <label>Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    disabled={!isEditMode}
                  >
                    <option value="">Select Country</option>
                    {countries.map((country, index) => (
                      <option key={index} value={country}>
                        {country}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.detailSection}>
                  <label>State</label>
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    disabled={!isEditMode || !formData.country}
                  >
                    <option value="">Select State</option>
                    {formData.country &&
                      states[formData.country].map((state, index) => (
                        <option key={index} value={state}>
                          {state}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.detailSection}>
                  <label>City</label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    disabled={!isEditMode || !formData.state}
                  >
                    <option value="">Select City</option>
                    {formData.state &&
                      cities[formData.state].map((city, index) => (
                        <option key={index} value={city}>
                          {city}
                        </option>
                      ))}
                  </select>
                </div>
                <div className={styles.detailSection}>
                  <label>Pin Code</label>
                  <input
                    type="text"
                    name="pinCode"
                    value={formData.pinCode}
                    onChange={handleChange}
                    className={styles.pin}
                    disabled={!isEditMode}
                  />
                </div>
              </div>
            </div>
            {isEditMode && isFormValid() && (
              <div className={styles.actionButtons}>
                <button
                  className={styles.cancelButton}
                  onClick={() => setIsEditMode(false)}
                >
                  Cancel
                </button>
                <button className={styles.saveButton} onClick={handleSaveClick}>
                  Save & Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Mock function to fetch user data from the backend
const fetchUserDataFromBackend = async () => {
  return {
    fullName: "John Doe",
    title: "Software Engineer",
    shortBio: "I am a passionate developer.",
    email: "john.doe@example.com",
    phone: "1234567890",
    country: "India",
    state: "Maharashtra",
    city: "Mumbai",
    pinCode: "400001",
  };
};

// Mock function to save user data to the backend
const saveUserDataToBackend = async (data) => {
  console.log("Saving data to backend:", data);
  // Replace with actual API call
};

export default ProfileBasicDetails;
