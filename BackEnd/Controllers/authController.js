// // authController.js
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// exports.signup = async (req, res) => {
//     try {
//         const { username, password, role } = req.body;

//         // Hash the password with bcrypt
//         const hashedPassword = await bcrypt.hash(password, 10);

//         // Create and save a new user
//         const newUser = new User({
//             username,
//             password: hashedPassword,
//             role
//         });
//         await newUser.save();

//         res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//         res.status(500).json({ error: 'Registration failed' });
//     }
// };

// exports.login = async (req, res) => {
//     try {
//         const { username, password } = req.body;
//         const user = await User.findOne({ username });

//         // Check if user exists and if the password is correct
//         if (user && await bcrypt.compare(password, user.password)) {
//             // Generate JWT token
//             const token = jwt.sign(
//                 { id: user._id, role: user.role },
//                 process.env.JWT_SECRET,
//                 { expiresIn: '1h' } // Token expires in 1 hour
//             );

//             res.cookie('token', token, {
//                 httpOnly: true,
//                 secure: process.env.NODE_ENV === 'production', // Use secure flag in production
//                 maxAge: 3600000 // 1 hour in milliseconds
//             });
    
//             res.status(200).json({ message: 'Login successful', token });
//         } catch (error) {
//             res.status(500).json({ message: 'Login failed', error: error.message });
//         }

    
    
// };

// // Add this logout function to your authController.js
// exports.logout = (req, res) => {
//     console.log("Logout called"); // Log for debugging
//     res.clearCookie('token'); // Clear the token cookie
//     res.status(200).json({ message: 'Logged out successfully' });
// };

// authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

exports.signup = async (req, res) => {
    try {
        const { username, password, role } = req.body;

        // Hash the password with bcrypt
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create and save a new user
        const newUser = new User({
            username,
            password: hashedPassword,
            role
        });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed', details: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        console.log(req.body)
        const { username, password } = req.body;
        const user = await User.findOne({ username });

        // Check if user exists and if the password is correct
        if (user && await bcrypt.compare(password, user.password)) {
            // Generate JWT token
            const token = jwt.sign(
                { id: user._id, role: user.role },
                process.env.JWT_SECRET,
                { expiresIn: '1h' } // Token expires in 1 hour
            );

            // Set the JWT token as an HTTP-only cookie
            res.cookie('token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production', // Use secure flag in production
                maxAge: 3600000 // 1 hour in milliseconds
            });

            res.status(200).json({ message: 'Login successful', token });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Login failed', error: error.message });
    }
};

// Logout function to clear the authentication cookie
exports.logout = (req, res) => {
    res.clearCookie('token'); // Clear the token cookie
    res.status(200).json({ message: 'Logged out successfully' });
};


