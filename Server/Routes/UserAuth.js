import express from 'express';
import User from '../Models/UserModel.js';
import { sendVerificationEmail } from '../Services/email.js';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting for auth endpoints
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per window
  message: 'Too many requests from this IP, please try again later'
});

router.use(authLimiter);

// Step 1: Save name & phone
router.post('/signup/step1', async (req, res) => {
  try {
    const { fullName, countryCode, phoneNumber } = req.body;

    // Validation
    if (!fullName || !countryCode || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Check if phone number already exists
    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Phone number already in use'
      });
    }

    const user = await User.create({ 
      fullName, 
      countryCode, 
      phoneNumber,
      role: 'candidate' // Default role
    });

    res.status(201).json({ 
      success: true,
      userId: user._id 
    });
  } catch (error) {
    console.error('Signup Step 1 Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Step 2: Save email & password
router.post('/signup/step2', async (req, res) => {
  try {
    const { email, password, userId } = req.body;

    // Validation
    if (!email || !password || !userId) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    if (!validator.isEmail(email)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid email format'
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: 'Password must be at least 8 characters'
      });
    }

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Email already in use'
      });
    }

    // Generate verification token
    const token = crypto.randomBytes(20).toString('hex');
    const tokenExpires = Date.now() + 3600000; // 1 hour expiry

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 12);

    await User.findByIdAndUpdate(userId, { 
      email, 
      password: hashedPassword,
      verificationToken: token,
      tokenExpires
    });

    // Send verification email
    await sendVerificationEmail(email, token);

    res.json({ 
      success: true,
      message: 'Verification email sent' 
    });
  } catch (error) {
    console.error('Signup Step 2 Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Step 3: Verify email
router.get('/verify-email', async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({
        success: false,
        message: 'Verification token is required'
      });
    }

    const user = await User.findOne({ 
      verificationToken: token,
      tokenExpires: { $gt: Date.now() } 
    });

    if (!user) {
      return res.status(400).json({ 
        success: false,
        message: 'Invalid or expired token' 
      });
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    user.tokenExpires = undefined;
    await user.save();

    // For API response
    if (req.accepts('json')) {
      return res.json({ 
        success: true,
        message: 'Email verified successfully' 
      });
    }

    // For browser redirect
    return res.redirect(process.env.FRONTEND_VERIFICATION_SUCCESS_URL || '/email-verified');
  } catch (error) {
    console.error('Email Verification Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Additional Endpoints

// Check verification status
router.get('/check-verification', async (req, res) => {
  try {
    const { email } = req.query;
    
    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({ 
      success: true,
      isVerified: user.isVerified 
    });
  } catch (error) {
    console.error('Verification Check Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Resend verification email
router.post('/resend-verification', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Email is required'
      });
    }

    const user = await User.findOne({ email });
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    if (user.isVerified) {
      return res.status(400).json({
        success: false,
        message: 'Email is already verified'
      });
    }

    // Generate new token
    const token = crypto.randomBytes(20).toString('hex');
    user.verificationToken = token;
    user.tokenExpires = Date.now() + 3600000; // 1 hour expiry
    await user.save();

    await sendVerificationEmail(email, token);

    res.json({ 
      success: true,
      message: 'Verification email resent' 
    });
  } catch (error) {
    console.error('Resend Verification Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export default router;