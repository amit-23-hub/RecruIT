import axios from 'axios';

const API_URL = 'http://localhost:5001/api/candidate';

export const updateBasicInfo = async (basicInfo) => {
  const response = await axios.put(`${API_URL}/basic-info`, basicInfo, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

export const updateSkills = async (skills) => {
  const response = await axios.put(`${API_URL}/skills`, { skills }, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

export const getProfile = async () => {
  const response = await axios.get(`${API_URL}/profile`, {
    headers: {
      'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
  });
  return response.data;
};

// Add similar functions for education, work experience, and preferences...