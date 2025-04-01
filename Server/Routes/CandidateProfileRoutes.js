import express from 'express';
import multer from 'multer';
import { body } from 'express-validator';
import { authenticateToken, isCandidate } from '../Middleware/auth.js';
import {
  getProfile,
  updateBasicInfo,
  updateResumeSkills,
  updateEducation,
  updateIdentityVerification,
  updateSocialLinks
} from '../Controllers/CandidateProfileController.js';
import { upload } from '../utils/fileUpload.js';

const router = express.Router();

// Get profile
router.get('/profile', authenticateToken, isCandidate, getProfile);

// Step 1: Basic Info
router.put('/basic-info', 
  authenticateToken, 
  isCandidate,
  [
    body('title').trim().notEmpty(),
    body('currentLocation').isObject(),
    body('availability').isIn(['Immediate', '15 Days', '30 Days', '60 Days', 'Not Available'])
  ], 
  updateBasicInfo
);

// Step 2: Resume & Skills
router.put('/resume-skills',
  authenticateToken,
  isCandidate,
  upload.single('resume'),
  updateResumeSkills
);

// Step 3: Education
router.put('/education',
  authenticateToken,
  isCandidate,
  [
    body('education').isArray(),
    body('education.*.schoolName').notEmpty(),
    body('education.*.degreeType').notEmpty()
  ],
  updateEducation
);

// Step 4: Identity Verification
router.put('/identity-verification',
  authenticateToken,
  isCandidate,
  upload.single('proofDocument'),
  [
    body('proofType').isIn(['Aadhar Card', 'Passport', "Driver's License"]),
    body('fullAddress').notEmpty(),
    body('verificationConsent').isBoolean()
  ],
  updateIdentityVerification
);

// Step 5: Social Links
router.put('/social-links',
  authenticateToken,
  isCandidate,
  [
    body('linkedin').optional().isURL(),
    body('github').optional().isURL(),
    body('portfolio').optional().isURL(),
    body('personalWebsite').optional().isURL()
  ],
  updateSocialLinks
);

export default router;