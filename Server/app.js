import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './Routes/UserAuth.js';
import recruiterAuthRoutes from './Routes/RecruiterAuth.js';
import candidateProfileRoutes from './Routes/CandidateProfileRoutes.js';
import path from 'path';

dotenv.config();     

const app = express();
const PORT = process.env.Backend_URL.split(':').pop() || 5003;

const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:5173';

// CORS configuration based on environment variables
app.use(cors({
  origin: FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// MongoDB connection with error handling
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Base API routes
const API_BASE = '/api';

// Routes with base path
app.use(`${API_BASE}/auth`, authRoutes);
app.use(`${API_BASE}/recruiter`, recruiterAuthRoutes);
app.use(`${API_BASE}/candidate`, candidateProfileRoutes);

// Health check endpoint
app.get(`${API_BASE}/health`, (req, res) => {
  res.json({ 
    status: 'ok',
    environment: process.env.NODE_ENV || 'development',
    serverTime: new Date().toISOString()
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Error details:', {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    body: req.body
  });

  if (err.name === 'ValidationError') {
    return res.status(400).json({
      error: 'Validation Error',
      details: err.message
    });
  }

  if (err.name === 'MongoError' || err.name === 'MongoServerError') {
    return res.status(500).json({
      error: 'Database Error',
      details: err.message
    });
  }

  res.status(500).json({
    error: 'Internal Server Error',
    message: err.message
  });
});

// 404 handler for undefined routes
app.use('*', (req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: 'The requested resource does not exist'
  });
});

// Start server only if this file is run directly
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on ${process.env.Backend_URL}`);
    console.log(`Frontend URL: ${FRONTEND_URL}`);
  });
}

// Serve static files from uploads directory
app.use('/uploads', express.static(path.join(process.cwd(), 'uploads')));

export default app;