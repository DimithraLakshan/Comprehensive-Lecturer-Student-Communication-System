const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    studentId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lecturerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    subject: String,
    status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
    comment: String
});

module.exports = mongoose.model('Appointment', appointmentSchema);
