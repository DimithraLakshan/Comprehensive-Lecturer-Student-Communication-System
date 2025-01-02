const express = require('express');
const { updateProfile, changePassword } = require('./controllers/profileController');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Update profile
router.put('/update', authMiddleware, updateProfile);

// Change password
router.put('/change-password', authMiddleware, changePassword);

module.exports = router;
