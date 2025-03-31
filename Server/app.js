import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './Routes/UserAuth.js';
import recruiterAuthRoutes from './Routes/RecruiterAuth.js';
import candidateProfileRoutes from './Routes/CandidateProfileRoutes.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/recruiter', recruiterAuthRoutes);
// app.get('/api/recruiter', (req, res)=>{
//   res.send("Email verified") ;
// });


// Add candidate profile routes
app.use('/api/candidate', candidateProfileRoutes);

// Error handling middleware with more detailed errors
app.use((err, req, res, next) => {
  console.error('Error details:', {
    message: err.message,
    stack: err.stack,
    path: req.path,
    method: req.method,
    body: req.body
  });

  // Send appropriate error response
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

export default app;