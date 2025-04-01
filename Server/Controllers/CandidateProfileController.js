import CandidateProfile from '../Models/CandidateProfile.js';
import { uploadToLocal, deleteFile } from '../utils/fileUpload.js';

// Get full profile
export const getProfile = async (req, res) => {
  try {
    const profile = await CandidateProfile.findOne({ user: req.user.id })
      .populate('user', 'fullName email phoneNumber');
    
    if (!profile) {
      return res.status(404).json({ message: 'Profile not found' });
    }
    
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update basic info
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

// Update resume and skills
export const updateResumeSkills = async (req, res) => {
  try {
    const { skills } = req.body;
    const resumeFile = req.file;
    let profile = await CandidateProfile.findOne({ user: req.user.id });
    
    if (!profile) {
      profile = new CandidateProfile({ user: req.user.id });
    }

    if (resumeFile) {
      const fileInfo = await uploadToLocal(resumeFile);
      profile.resume = {
        url: fileInfo.url,
        name: resumeFile.originalname,
        size: resumeFile.size,
        lastUpdated: new Date()
      };
    }
    
    if (skills) {
      profile.skills = skills;
    }
    
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update education
export const updateEducation = async (req, res) => {
  try {
    const { education } = req.body;
    let profile = await CandidateProfile.findOne({ user: req.user.id });
    
    if (!profile) {
      profile = new CandidateProfile({ user: req.user.id });
    }
    
    profile.education = education;
    await profile.save();
    
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update identity verification
export const updateIdentityVerification = async (req, res) => {
  try {
    const { proofType, fullAddress, verificationConsent } = req.body;
    const proofFile = req.file;
    
    let profile = await CandidateProfile.findOne({ user: req.user.id });
    
    if (!profile) {
      profile = new CandidateProfile({ user: req.user.id });
    }

    if (proofFile) {
      const fileInfo = await uploadToLocal(proofFile);
      profile.identityVerification = {
        proofType,
        proofDocument: {
          url: fileInfo.url,
          verified: false
        },
        fullAddress,
        verificationConsent,
        verificationStatus: 'Pending'
      };
    }
    
    await profile.save();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update social links
export const updateSocialLinks = async (req, res) => {
  try {
    const { linkedin, github, portfolio, personalWebsite } = req.body;
    let profile = await CandidateProfile.findOne({ user: req.user.id });
    
    if (!profile) {
      profile = new CandidateProfile({ user: req.user.id });
    }
    
    profile.socialLinks = { linkedin, github, portfolio, personalWebsite };
    await profile.save();
    
    res.json(profile);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};