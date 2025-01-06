const express = require('express');
const { createAppointment, updateAppointmentStatus, getLecturerList } = require('../Controllers/appointmentController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

const router = express.Router();



// Route to get the registered lecturer list
router.get('/lecturers', authMiddleware, roleMiddleware(['student', 'lecturer']), getLecturerList);

// Route to get a lecturer by ID
router.get('/lecturers/:id', authMiddleware, roleMiddleware(['student', 'lecturer']), getLecturerById);

// Route to create a new appointment
router.post('/create', authMiddleware, roleMiddleware(['student']), createAppointment);



// Route to update appointment status (accept/reject with comment)

router.put('/:appointmentId/status', authMiddleware, roleMiddleware(['lecturer']),  updateAppointmentStatus);



module.exports = router;
