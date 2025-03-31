import express from 'express';
import { body } from 'express-validator';
import {
  updateBasicInfo,
  updateSkills,
  getProfile
} from '../Controllers/CandidateProfileController.js';
import { authenticateToken } from '../Middleware/auth.js';

const router = express.Router();

// Get profile
router.get('/profile', authenticateToken, getProfile);

// Step 1: Basic Information
router.put('/basic-info', authenticateToken, [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('bio').trim().notEmpty().withMessage('Bio is required'),
  body('currentLocation').trim().notEmpty().withMessage('Current location is required'),
  body('availability').trim().notEmpty().withMessage('Availability is required'),
  body('experience').trim().notEmpty().withMessage('Experience is required')
], updateBasicInfo);

// Step 2: Skills
router.put('/skills', authenticateToken, [
  body('skills').isArray().withMessage('Skills must be an array'),
  body('skills.*.name').trim().notEmpty().withMessage('Skill name is required'),
  body('skills.*.level').isIn(['Beginner', 'Intermediate', 'Advanced', 'Expert'])
    .withMessage('Invalid skill level')
], updateSkills);

// Add similar routes for education, work experience, and preferences...

export default router;