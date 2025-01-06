const Message = require('../models/Message');
const Notification = require('../models/Notification');

// Get the registered lecturer list
exports.getLecturerList = async (req, res) => {
    try {
        const lecturers = await Lecturer.find(); // Assuming you have a Lecturer model
        res.status(200).json(lecturers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lecturers', error });
    }
};

// Get a lecturer by ID
exports.getLecturerById = async (req, res) => {
    try {
        const lecturer = await Lecturer.findById(req.params.id);
        if (!lecturer) {
            return res.status(404).json({ message: 'Lecturer not found' });
        }
        res.status(200).json(lecturer);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching lecturer', error });
    }
};


// Send Message
exports.sendMessage = async (req, res) => {
    try {
        const { senderId, receiverId, title, content, attachment } = req.body;
        const newMessage = new Message({ senderId, receiverId, title, content, attachment });
        await newMessage.save();

        // Notify receiver
        const notification = new Notification({ userId: receiverId, message: 'New message received' });
        await notification.save();

        res.status(201).json({ message: 'Message sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error while sending message' });
    }
};

// Delete Message (move to bin)
exports.deleteMessage = async (req, res) => {
    try {
        const { messageId } = req.params; // Get messageId from URL parameters
        const message = await Message.findByIdAndUpdate(messageId, { status: 'bin' });

        // Check if message was found
        if (!message) {
            return res.status(404).json({ message: 'Message not found' });
        }

        res.status(200).json({ message: 'Message moved to bin' });
    } catch (error) {
        console.error(error); // Log the error for debugging
        res.status(500).json({ message: 'Error while deleting message' });
    }


};

// Get Messages for a User
exports.getMessages = async (req, res) => {
    try {
        const { userId } = req.params; // Get userId from URL parameters
        const messages = await Message.find({ receiverId: userId }).populate('senderId', 'username'); // Populate senderId for more details

        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error while retrieving messages' });
    }
};