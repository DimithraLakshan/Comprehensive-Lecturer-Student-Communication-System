const express = require('express');
const { createAppointment, updateAppointmentStatus } = require('../Controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();

// Route to create a new appointment
router.post('/create', authMiddleware, roleMiddleware(['student']), createAppointment);

// Route to update appointment status (accept/reject with comment)

router.put('/:appointmentId/status', authMiddleware, roleMiddleware(['lecturer']),  updateAppointmentStatus);

module.exports = router;
