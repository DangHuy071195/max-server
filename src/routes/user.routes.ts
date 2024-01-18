import express from 'express';
import User from '../models/user.model';

const router = express.Router();

// POST endpoint to record user info
router.post('/record-user', async (req, res) => {
  try {
    const { username, os, browser, extVersion } = req.body;

    // Create a new user record
    const newUser = new User({ username, os, browser, extVersion });

    // Save the user record in the database
    await newUser.save();

    res.status(201).json({ message: 'User info recorded successfully', newUser });
  } catch (error) {
    console.log('error',error)
    res.status(500).json({ message: 'Error recording user info', error: error.message });
  }
});

export default router;
