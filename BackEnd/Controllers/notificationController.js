const Notification = require('../models/Notification');

exports.createNotification = async (req, res) => {
    try {
        const { message, userId } = req.body;

        const newNotification = new Notification({
            message,
            userId
        });

        await newNotification.save();
        res.status(201).json({ message: 'Notification created' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create notification' });
    }
};

exports.getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find({ userId: req.user.id });
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve notifications' });
    }
};
