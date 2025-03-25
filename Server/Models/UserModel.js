import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  countryCode: { type: String, required: true },
  phoneNumber: { type: String, required: true, unique: true },
  email: { 
    type: String, 
    unique: true,
    sparse: true, // Allows multiple nulls
    default: null // Explicitly set null as default
  },
  password: { type: String, select: false },
  isVerified: { type: Boolean, default: false },
  verificationToken: String,
  tokenExpires: Date,
  role: { type: String, enum: ['candidate', 'recruiter'], default: 'candidate' },
  signupStage: { type: Number, default: 1 }
}, { timestamps: true });

// Create partial index for email (better than sparse)
userSchema.index({ email: 1 }, { 
  unique: true,
  partialFilterExpression: { email: { $type: "string" } } 
});

// Hash password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

export default mongoose.model("User", userSchema);