import axios from 'axios';

const API_URL = 'http://localhost:5001/api/candidate';

const getAuthHeader = (isMultipart = false) => ({
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`,
    'Content-Type': isMultipart ? 'multipart/form-data' : 'application/json'
  }
});

// Get full profile
export const getCandidateProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, getAuthHeader(false));
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update basic info
export const updateBasicInfo = async (basicInfo) => {
  try {
    const response = await axios.put(
      `${API_URL}/basic-info`, 
      basicInfo, 
      getAuthHeader()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update resume and skills
export const updateResumeSkills = async (formData) => {
  try {
    const response = await axios.put(
      `${API_URL}/resume-skills`,
      formData,
      getAuthHeader()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update education
export const updateEducation = async (education) => {
  try {
    const response = await axios.put(
      `${API_URL}/education`,
      { education },
      getAuthHeader()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update identity verification
export const updateIdentityVerification = async (formData) => {
  try {
    const response = await axios.put(
      `${API_URL}/identity-verification`,
      formData,
      getAuthHeader()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

// Update social links
export const updateSocialLinks = async (socialLinks) => {
  try {
    const response = await axios.put(
      `${API_URL}/social-links`,
      socialLinks,
      getAuthHeader()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};