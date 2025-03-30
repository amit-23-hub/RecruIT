import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const recruiterSchema = new mongoose.Schema({
  fullName: { 
    type: String, 
    required: [true, 'Full name is required'],
    trim: true
  },
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true
  },
  companyEmail: { 
    type: String, 
    required: false, // Changed to false for step 1
    unique: true,
    sparse: true, // Allows multiple null values
    trim: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        // Only validate if email is provided
        return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: props => `${props.value} is not a valid email address!`
    }
  },
  password: { 
    type: String, 
    required: false, // Changed to false for step 1
    select: false
  },
  isVerified: { 
    type: Boolean, 
    default: false 
  },
  verificationToken: String,
  tokenExpires: Date,
  signupStage: { 
    type: Number, 
    default: 1,
    required: true
  }
}, { 
  timestamps: true 
});

// Password hashing middleware
recruiterSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

// Method to compare password
recruiterSchema.methods.comparePassword = async function(candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

const Recruiter = mongoose.model('Recruiter', recruiterSchema);
export default Recruiter;