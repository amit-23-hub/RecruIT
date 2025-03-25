import express from 'express';
import User from '../Models/UserModel.js';
import { sendVerificationEmail } from '../Services/email.js';
import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import validator from 'validator';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: 'Too many requests from this IP'
});
router.use(authLimiter);

// Helper: Validate phone number
const isValidPhone = (phone) => /^[0-9]{10,15}$/.test(phone);

// Step 1: Create temporary user record
router.post('/signup/step1', async (req, res) => {
  try {
    const { fullName, countryCode, phoneNumber } = req.body;

    // Validation
    if (!fullName?.trim() || !countryCode || !phoneNumber) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    if (!isValidPhone(phoneNumber)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number'
      });
    }

    // Check duplicate phone
    const existingUser = await User.findOne({ phoneNumber });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: 'Phone number already registered'
      });
    }

    // Create temp user
    const user = await User.create({
      fullName,
      countryCode,
      phoneNumber,
      role: 'candidate',
      signupStage: 1
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

// Step 2: Add email/password and send verification
router.post('/signup/step2', async (req, res) => {
  try {
    const { email, password, confirmPassword, userId } = req.body;

    // Validation
    if (!email || !password || !confirmPassword || !userId) {
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

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match'
      });
    }

    // Find and update user
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Generate token and hash password
    const token = crypto.randomBytes(20).toString('hex');
    const hashedPassword = await bcrypt.hash(password, 12);

    user.email = email;
    user.password = hashedPassword;
    user.verificationToken = token;
    user.tokenExpires = Date.now() + 3600000; // 1 hour
    user.signupStage = 2;
    await user.save();

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

// Email verification endpoint
router.get('/verify-email', async (req, res) => {
  try {
    const { token } = req.query;

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

    // Mark as verified
    user.isVerified = true;
    user.verificationToken = undefined;
    user.tokenExpires = undefined;
    user.signupStage = 3;
    await user.save();

    res.json({
      success: true,
      message: 'Email verified successfully'
    });

  } catch (error) {
    console.error('Verification Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Check verification status
router.get('/check-verification', async (req, res) => {
  try {
    const { email } = req.query;
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
        message: 'Email already verified'
      });
    }

    // Generate new token
    const token = crypto.randomBytes(20).toString('hex');
    user.verificationToken = token;
    user.tokenExpires = Date.now() + 3600000;
    await user.save();

    await sendVerificationEmail(email, token);

    res.json({
      success: true,
      message: 'Verification email resent'
    });

  } catch (error) {
    console.error('Resend Error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

export default router;