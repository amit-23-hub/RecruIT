import CandidateProfile from '../Models/CandidateProfile.js';

// Create or update basic info
export const updateBasicInfo = async (req, res) => {
  try {
    const { title, bio, currentLocation, availability, experience } = req.body;
    let profile = await CandidateProfile.findOne({ user: req.user.id });
    
    if (!profile) {
      profile = new CandidateProfile({ user: req.user.id });
    }
    
    profile.basicInfo = { title, bio, currentLocation, availability, experience };
    await profile.save();
    
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update skills
export const updateSkills = async (req, res) => {
  try {
    const { skills } = req.body;
    let profile = await CandidateProfile.findOne({ user: req.user.id });
    
    if (!profile) {
      profile = new CandidateProfile({ user: req.user.id });
    }
    
    profile.skills = skills;
    await profile.save();
    
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get full profile
export const getProfile = async (req, res) => {
  try {
    const profile = await CandidateProfile.findOne({ user: req.user.id })
      .populate('user', 'fullName email');
    
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};