import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './Routes/UserAuth.js';

dotenv.config();

const app = express(); // Remove export here

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// Database
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Debugging: Log registered routes
const printRoutes = (router) => {
  router.stack.forEach(layer => {
    if (layer.route) {
      console.log(
        `${Object.keys(layer.route.methods)[0].toUpperCase()} /api/auth${layer.route.path}`
      );
    }
  });
};

// Routes
app.use('/api/auth', authRoutes);
printRoutes(authRoutes); // Log all auth routes

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error' });
});

export default app; // Export at the end