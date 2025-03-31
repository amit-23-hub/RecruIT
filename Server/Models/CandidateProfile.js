import mongoose from 'mongoose';

const candidateProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',  // References your existing UserModel
    required: true,
    unique: true
  },
  // Basic Information
  basicInfo: {
    title: String,
    bio: {
      type: String,
      maxlength: 500
    },
    currentLocation: String,
    availability: {
      type: String,
      enum: ['Immediate', '15 Days', '30 Days', '60 Days', 'Not Available']
    },
    experience: {
      years: Number,
      months: Number
    }
  },
  // Skills & Expertise
  skills: [{
    name: {
      type: String,
      required: true
    },
    level: {
      type: String,
      enum: ['Beginner', 'Intermediate', 'Advanced', 'Expert'],
      required: true
    },
    yearsOfExperience: Number
  }],
  // Education
  education: [{
    institution: {
      type: String,
      required: true
    },
    degree: {
      type: String,
      required: true
    },
    field: String,
    startDate: Date,
    endDate: Date,
    current: {
      type: Boolean,
      default: false
    },
    grade: String,
    activities: [String]
  }],
  // Work Experience
  workExperience: [{
    company: {
      type: String,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    location: String,
    startDate: Date,
    endDate: Date,
    current: {
      type: Boolean,
      default: false
    },
    description: String,
    achievements: [String],
    technologies: [String]
  }],
  // Job Preferences
  preferences: {
    expectedSalary: {
      min: Number,
      max: Number,
      currency: {
        type: String,
        default: 'INR'
      }
    },
    preferredLocations: [String],
    jobTypes: [{
      type: String,
      enum: ['Full-time', 'Part-time', 'Contract', 'Remote', 'Hybrid']
    }],
    industries: [String],
    willingToRelocate: {
      type: Boolean,
      default: false
    }
  },
  // Social & Portfolio
  socialLinks: {
    linkedin: String,
    github: String,
    portfolio: String,
    twitter: String
  },
  // Resume
  resume: {
    url: String,
    lastUpdated: Date
  },
  // Profile Completion Tracking
  completionStatus: {
    basicInfo: { type: Boolean, default: false },
    skills: { type: Boolean, default: false },
    education: { type: Boolean, default: false },
    workExperience: { type: Boolean, default: false },
    preferences: { type: Boolean, default: false }
  },
  completionPercentage: {
    type: Number,
    default: 0
  },
  isProfilePublic: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Calculate completion percentage
candidateProfileSchema.methods.calculateCompletionPercentage = function() {
  const steps = ['basicInfo', 'skills', 'education', 'workExperience', 'preferences'];
  const completedSteps = steps.filter(step => this.completionStatus[step]).length;
  this.completionPercentage = (completedSteps / steps.length) * 100;
  return this.completionPercentage;
};

// Pre-save middleware to update completion status
candidateProfileSchema.pre('save', function(next) {
  // Update basicInfo completion
  this.completionStatus.basicInfo = !!(this.basicInfo && this.basicInfo.title && this.basicInfo.bio);
  
  // Update skills completion
  this.completionStatus.skills = this.skills.length > 0;
  
  // Update education completion
  this.completionStatus.education = this.education.length > 0;
  
  // Update workExperience completion
  this.completionStatus.workExperience = this.workExperience.length > 0;
  
  // Update preferences completion
  this.completionStatus.preferences = !!(this.preferences && this.preferences.expectedSalary);
  
  // Calculate overall completion percentage
  this.calculateCompletionPercentage();
  
  next();
});

const CandidateProfile = mongoose.model('CandidateProfile', candidateProfileSchema);
export default CandidateProfile;