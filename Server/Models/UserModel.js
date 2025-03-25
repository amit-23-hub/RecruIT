import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  countryCode: { type: String, default: '+91' },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, select: false }, 
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String },
  tokenExpires: { type: Date },
  role: { type: String, enum: ['candidate', 'recruiter'], default: 'candidate' },
}, { timestamps: true });

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export default mongoose.model('User', userSchema);