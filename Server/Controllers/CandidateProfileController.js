import CandidateProfile from '../Models/CandidateProfile.js';
import { uploadToLocal, deleteFile } from '../utils/fileUpload.js';

// Get full profile
export const getProfile = async (req, res) => {
  try {
    const profile = await CandidateProfile.findOne({ user: req.user.id })
      .populate('user', 'fullName email phoneNumber countryCode');
    
    if (!profile) {
      // Return a new object with user data if no profile exists yet
      const user = await User.findById(req.user.id);
      return res.json({
        ...user.toObject(), // Include user data at root level
        basicInfo: {},
        skills: [],
        education: [],
        socialLinks: {}
      });
    }
    
    // Merge profile and user data
    const response = {
      ...profile.toObject(),
      fullName: profile.user?.fullName || '',
      email: profile.user?.email || '',
      phone: profile.user?.countryCode + profile.user?.phoneNumber || '',
      // Remove the nested user object
      user: undefined
    };
    
    res.json(response);
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
    const { skills: skillsInput } = req.body;
    const resumeFile = req.file;
    let profile = await CandidateProfile.findOne({ user: req.user.id });
    
    if (!profile) {
      profile = new CandidateProfile({ user: req.user.id });
    }

    // Handle resume file upload
    if (resumeFile) {
      const fileInfo = await uploadToLocal(resumeFile);
      profile.resume = {
        url: fileInfo.url,
        name: resumeFile.originalname,
        size: resumeFile.size,
        lastUpdated: new Date()
      };
    }
    
    // Handle skills update
    if (skillsInput) {
      let skillsArray;
      
      // Parse if skills is a JSON string
      if (typeof skillsInput === 'string') {
        try {
          skillsArray = JSON.parse(skillsInput);
        } catch (e) {
          return res.status(400).json({ 
            error: 'Invalid skills format - must be valid JSON array',
            example: '[{"name":"JavaScript","level":"Intermediate"}]'
          });
        }
      } else if (Array.isArray(skillsInput)) {
        skillsArray = skillsInput;
      } else {
        return res.status(400).json({ 
          error: 'Skills must be an array',
          example: '[{"name":"JavaScript","level":"Intermediate"}]'
        });
      }
      
      // Validate each skill object
      const isValidSkills = skillsArray.every(skill => 
        skill && 
        typeof skill === 'object' && 
        skill.name && 
        typeof skill.name === 'string' &&
        skill.level && 
        ['Beginner', 'Intermediate', 'Advanced', 'Expert'].includes(skill.level)
      );
      
      if (!isValidSkills) {
        return res.status(400).json({ 
          error: 'Each skill must have a name (string) and level (Beginner/Intermediate/Advanced/Expert)',
          example: '[{"name":"JavaScript","level":"Intermediate"}]'
        });
      }
      
      profile.skills = skillsArray;
    }
    
    await profile.save();
    res.json(profile);
  } catch (error) {
    console.error('Error updating resume/skills:', error);
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
    
    // Validate education array
    if (!Array.isArray(education)) {
      return res.status(400).json({ error: 'Education must be an array' });
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