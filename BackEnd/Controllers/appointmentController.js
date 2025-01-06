const Appointment = require('../models/Appointment');
const Notification = require('../models/Notification');

// Create Appointment
exports.createAppointment = async (req, res) => {
    try {
        const { studentId, lecturerId, date, time, subject } = req.body;
        const newAppointment = new Appointment({ studentId, lecturerId, date, time, subject });
        await newAppointment.save();

        // Notify lecturer
        const notification = new Notification({ userId: lecturerId, message: 'New appointment request' });
        await notification.save();

        res.status(201).json({ message: 'Appointment request sent' });
    } catch (error) {
        console.error("Error creating appointment:", error)
        res.status(500).json({ message: 'Error while creating appointment',  error: error.message });
    }
};

// Update Appointment Status
exports.updateAppointmentStatus = async (req, res) => {
    try {
        const { appointmentId } = req.params;
        const { status, comment } = req.body;
        const updatedAppointment = await Appointment.findByIdAndUpdate(appointmentId, { status, comment }, { new: true });

        const notification = new Notification({
            userId: updatedAppointment.studentId,
            message: `Your appointment has been ${status}`
        });
        await notification.save();

        res.status(200).json({ message: 'Appointment updated' });
    } catch (error) {
        res.status(500).json({ message: 'Error while updating appointment' });
    }

    

    // Controller function to get the registered lecturer list
    const getLecturerList = async (req, res) => {
        try {
            const lecturers = await Lecturer.find(); // Assuming you have a Lecturer model
            res.status(200).json(lecturers);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching lecturers', error });
        }
    };

    // Controller function to get a lecturer by ID
    const getLecturerById = async (req, res) => {
        try {
            const lecturer = await Lecturer.findById(req.params.id); // Assuming you have a Lecturer model
            if (!lecturer) {
                return res.status(404).json({ message: 'Lecturer not found' });
            }
            res.status(200).json(lecturer);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching lecturer', error });
        }
    };


    module.exports = {
        createAppointment,
        updateAppointmentStatus,
        getLecturerList, // Export the new controller function
        getLecturerById,// Export the new controller function
    };
};
