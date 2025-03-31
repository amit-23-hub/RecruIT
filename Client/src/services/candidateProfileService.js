import axios from 'axios';

const API_URL = 'http://localhost:5001/api/candidate';

const getAuthHeader = () => ({
  headers: {
    'Authorization': `Bearer ${localStorage.getItem('token')}`
  }
});

export const getCandidateProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/profile`, getAuthHeader());
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

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

export const updateSkills = async (skills) => {
  try {
    const response = await axios.put(
      `${API_URL}/skills`, 
      { skills }, 
      getAuthHeader()
    );
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};