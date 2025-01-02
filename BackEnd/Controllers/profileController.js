const bcrypt = require('bcrypt');
const User = require('../models/User');

exports.updateProfile = async (req, res) => {
    try {
        const { contact, email, github, linkedin, address } = req.body;

        await User.findByIdAndUpdate(req.user.id, { contact, email, github, linkedin, address });
        res.status(200).json({ message: 'Profile updated' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update profile' });
    }
};

exports.changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;
        const user = await User.findById(req.user.id);

        if (user && await bcrypt.compare(currentPassword, user.password)) {
            user.password = await bcrypt.hash(newPassword, 10);
            await user.save();
            res.status(200).json({ message: 'Password changed' });
        } else {
            res.status(400).json({ error: 'Incorrect current password' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to change password' });
    }
};
