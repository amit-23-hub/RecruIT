import express from 'express';
import { body } from 'express-validator';
import { authenticateToken } from '../Middleware/auth.js';
import {
  updateBasicInfo,
  updateSkills,
  getProfile
} from '../Controllers/CandidateProfileController.js';

const router = express.Router();

// Get profile
router.get('/profile', authenticateToken, getProfile);

// Update basic info
router.put('/basic-info', authenticateToken, [
  body('title').trim().notEmpty().withMessage('Title is required'),
  body('bio').trim().isLength({ max: 500 }).withMessage('Bio must not exceed 500 characters'),
  body('currentLocation').trim().notEmpty().withMessage('Current location is required'),
  body('availability').isIn(['Immediate', '15 Days', '30 Days', '60 Days', 'Not Available'])
    .withMessage('Invalid availability status'),
  body('experience').isObject().withMessage('Experience must be an object')
], updateBasicInfo);

// Update skills
router.put('/skills', authenticateToken, [
  body('skills').isArray().withMessage('Skills must be an array'),
  body('skills.*.name').trim().notEmpty().withMessage('Skill name is required'),
  body('skills.*.level').isIn(['Beginner', 'Intermediate', 'Advanced', 'Expert'])
    .withMessage('Invalid skill level')
], updateSkills);

export default router;