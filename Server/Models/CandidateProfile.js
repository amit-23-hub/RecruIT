import mongoose from 'mongoose';

const candidateProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
    unique: true
  },
  // Step 1: Basic Information
  basicInfo: {
    title: { type: String, required: true },
    bio: {
      type: String,
      maxlength: 500
    },
    currentLocation: {
      country: String,
      state: String,
      city: String,
      pinCode: String
    },
    availability: {
      type: String,
      enum: ['Immediate', '15 Days', '30 Days', '60 Days', 'Not Available']
    },
    experience: {
      years: Number,
      months: Number
    }
  },
  // Step 2: Resume & Skills
  resume: {
    url: String,
    name: String,
    size: String,
    lastUpdated: Date
  },
  skills: [{
    name: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert']
    }
  }],
  // Step 3: Education
  education: [{
    schoolName: {
      type: String,
      required: true
    },
    degreeType: {
      type: String,
      required: true
    },
    startDate: Date,
    endDate: Date,
    current: {
      type: Boolean,
      default: false
    }
  }],
  // Step 4: Identity Verification
  identityVerification: {
    proofType: {
      type: String,
      enum: ['Aadhar Card', 'Passport', "Driver's License"]
    },
    proofDocument: {
      url: String,
      verified: {
        type: Boolean,
        default: false
      }
    },
    fullAddress: String,
    verificationConsent: {
      type: Boolean,
      default: false
    },
    verificationStatus: {
      type: String,
      enum: ['Pending', 'Verified', 'Rejected'],
      default: 'Pending'
    }
  },
  // Step 5: Social Links
  socialLinks: {
    linkedin: String,
    github: String,
    portfolio: String,
    personalWebsite: String
  },
  // Profile Completion Tracking
  completionStatus: {
    basicInfo: { type: Boolean, default: false },
    resumeSkills: { type: Boolean, default: false },
    education: { type: Boolean, default: false },
    identityVerification: { type: Boolean, default: false },
    socialLinks: { type: Boolean, default: false }
  },
  completionPercentage: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

// Calculate completion percentage
candidateProfileSchema.methods.calculateCompletionPercentage = function() {
  const steps = ['basicInfo', 'resumeSkills', 'education', 'identityVerification', 'socialLinks'];
  const completedSteps = steps.filter(step => this.completionStatus[step]).length;
  this.completionPercentage = (completedSteps / steps.length) * 100;
  return this.completionPercentage;
};

// Pre-save middleware to update completion status
candidateProfileSchema.pre('save', function(next) {
  // Basic Info completion
  this.completionStatus.basicInfo = !!(
    this.basicInfo && 
    this.basicInfo.title && 
    this.basicInfo.currentLocation
  );
  
  // Resume & Skills completion
  this.completionStatus.resumeSkills = !!(
    this.skills.length > 0
  );
  
  // Education completion
  this.completionStatus.education = !!(
    this.education.length > 0
  );
  
  // Identity verification completion
  this.completionStatus.identityVerification = !!(
    this.identityVerification &&
    this.identityVerification.proofDocument &&
    this.identityVerification.verificationStatus === 'Verified'
  );
  
  // Social links completion
  this.completionStatus.socialLinks = !!(
    this.socialLinks &&
    (this.socialLinks.linkedin || this.socialLinks.github || this.socialLinks.portfolio)
  );
  
  // Calculate overall completion percentage
  this.calculateCompletionPercentage();
  
  next();
});

const CandidateProfile = mongoose.model('CandidateProfile', candidateProfileSchema);
export default CandidateProfile;