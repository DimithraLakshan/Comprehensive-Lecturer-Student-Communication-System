const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cookieParser = require('cookie-parser');
const cors = require('cors');


// Route imports
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/messages', messageRoutes); // Register message routes here
app.use('/appointments', appointmentRoutes);
app.use(cors({ origin: 'http://localhost:3000', credentials: true })); // Adjust the origin to match your frontend URL

app.get('/', (req, res) => {
    res.send('Server is running!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
