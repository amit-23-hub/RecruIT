import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import Recruiter from '../Models/RecruiterModel.js';
import { sendVerificationEmail } from '../Services/email.js';

export const recruiterSignupStep1 = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const { fullName, companyName } = req.body;

    // Log the request data
    console.log('Signup Step 1 Request:', { fullName, companyName });

    const recruiter = new Recruiter({
      fullName,
      companyName,
      signupStage: 1
    });

    const savedRecruiter = await recruiter.save();
    console.log('Recruiter saved:', savedRecruiter);

    res.status(201).json({
      message: 'Step 1 completed successfully',
      recruiterId: savedRecruiter._id
    });
  } catch (error) {
    console.error('Recruiter signup error:', error);
    throw error; // This will be caught by the error handling middleware
  }
};

export const recruiterSignupStep2 = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { recruiterId, companyEmail, password } = req.body;

    const recruiter = await Recruiter.findById(recruiterId);
    if (!recruiter) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    recruiter.companyEmail = companyEmail;
    recruiter.password = password;
    recruiter.signupStage = 2;

    // Generate verification token
    const verificationToken = jwt.sign(
      { id: recruiter._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );
    recruiter.verificationToken = verificationToken;
    recruiter.tokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours

    await recruiter.save();

    // Send verification email
    await sendVerificationEmail(companyEmail, verificationToken, 'recruiter');

    res.status(200).json({
      message: 'Registration successful. Please verify your email.',
      email: companyEmail
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const verifyRecruiterEmail = async (req, res) => {
  try {
    const { token } = req.params;
    
    if (!token) {
      return res.status(400).json({ message: 'Verification token is required' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const recruiter = await Recruiter.findById(decoded.id);

    if (!recruiter) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    if (recruiter.isVerified) {
      return res.status(400).json({ message: 'Email already verified' });
    }

    // Check if token has expired
    if (recruiter.tokenExpires && recruiter.tokenExpires < Date.now()) {
      return res.status(400).json({ message: 'Verification link has expired' });
    }

    // Verify the email
    recruiter.isVerified = true;
    recruiter.verificationToken = undefined;
    recruiter.tokenExpires = undefined;
    await recruiter.save();

    // Redirect to login page with success message
    res.redirect(`${process.env.FRONTEND_URL}/login?verified=true`);
  } catch (error) {
    console.error('Verification error:', error);
    res.status(500).json({ 
      message: 'Invalid or expired token',
      error: error.message 
    });
  }
};

export const resendVerification = async (req, res) => {
  try {
    const { email } = req.body;
    const recruiter = await Recruiter.findOne({ companyEmail: email });

    if (!recruiter) {
      return res.status(404).json({ message: 'Recruiter not found' });
    }

    if (recruiter.isVerified) {
      return res.status(400).json({ message: 'Email already verified' });
    }

    // Generate new verification token
    const verificationToken = jwt.sign(
      { id: recruiter._id },
      process.env.JWT_SECRET,
      { expiresIn: '24h' }
    );

    // Update recruiter with new token
    recruiter.verificationToken = verificationToken;
    recruiter.tokenExpires = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    await recruiter.save();

    // Send new verification email
    await sendVerificationEmail(email, verificationToken, 'recruiter');

    res.status(200).json({ 
      message: 'Verification email resent successfully',
      email: email
    });
  } catch (error) {
    console.error('Resend verification error:', error);
    res.status(500).json({ 
      message: 'Failed to resend verification email',
      error: error.message 
    });
  }
};

export const recruiterLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find recruiter and include password field
    const recruiter = await Recruiter.findOne({ companyEmail: email }).select('+password');
    if (!recruiter) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if email is verified
    if (!recruiter.isVerified) {
      return res.status(403).json({ 
        message: 'Please verify your email before logging in',
        needsVerification: true
      });
    }

    // Check password
    const isMatch = await recruiter.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT token
    const token = jwt.sign(
      { id: recruiter._id },
      process.env.JWT_SECRET,
      { expiresIn: '30d' }
    );

    // Send response without sensitive data
    res.status(200).json({
      message: 'Login successful',
      token,
      recruiter: {
        id: recruiter._id,
        fullName: recruiter.fullName,
        companyName: recruiter.companyName,
        email: recruiter.companyEmail
      }
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};