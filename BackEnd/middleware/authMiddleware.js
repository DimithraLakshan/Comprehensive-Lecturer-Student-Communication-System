// const jwt = require('jsonwebtoken');

// module.exports = (req, res, next) => {
//     const token = req.header('Authorization');
//     if (!token) return res.status(401).json({ message: 'Access denied' });

//     try {
//         const decoded = jwt.verify(token, process.env.JWT_SECRET);
//         req.user = decoded;
//         next();
//     } catch (error) {
//         res.status(400).json({ message: 'Invalid token' });
//     }
// };


const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) return res.status(401).json({ message: 'Access denied' });

    // Extract token from Bearer scheme
    const token = authHeader.split(' ')[1];
    if (!token) return res.status(401).json({ message: 'Access denied' });

    console.log ("token: " + token);
    try {
        console.log("secret: "+ process.env.JWT_SECRET)
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("decoded: " + decoded);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' });
    }
};
