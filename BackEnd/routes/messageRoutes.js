const express = require('express');
const { sendMessage, deleteMessage, getMessages } = require('../Controllers/messageController');
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');
const router = express.Router();

router.post('/send', authMiddleware, roleMiddleware(['student']), sendMessage);
router.delete('/delete/:messageId', authMiddleware, roleMiddleware(['lecturer']), deleteMessage);
router.get('/user/:userId', authMiddleware, roleMiddleware(['lecturer']), getMessages);
router.get('/lecturers', authMiddleware, roleMiddleware(['student', 'lecturer']), getLecturerList);
router.get('/lecturers/:id', authMiddleware, roleMiddleware(['student', 'lecturer']), getLecturerById);


module.exports = router;
