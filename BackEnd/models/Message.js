const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: String,
    content: String,
    attachment: String,
    sentAt: { type: Date, default: Date.now },
    status: { type: String, enum: ['inbox', 'sent', 'bin'], default: 'inbox' }
});

module.exports = mongoose.model('Message', messageSchema);
