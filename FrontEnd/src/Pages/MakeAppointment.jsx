import React, { useState } from 'react';
import './makeAppointment.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';


const MakeAppointment = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ date, time, subject });
  };

  const navigate = useNavigate();

  const handleListedAppointments = () => {
    navigate('/ListedAppointments');
  }

  const handleCancel = () => {
    navigate('/AppointmentSelectPage');
  }

  return (
    
    <div className="appointment-container">
        <Navbar/>

      <div className="appointment-form-container">
        <h2>New Appointment</h2>
        <div className="lecturer-info">
          <img src="/./images/userDp.jpg" alt="Lecturer" />
          <p>Lecturer Name</p>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>
          <label>
            Date
            <select value={date} onChange={(e) => setDate(e.target.value)} required>
              <option value="">Select Date</option>
              <option value="2024-10-23">2024-10-23</option>
              <option value="2024-11-26">2024-11-26</option>
              {/* Add more options as needed */}
            </select>
          </label>

          <label>
            Time
            <select value={time} onChange={(e) => setTime(e.target.value)} required>
              <option value="">Select Time</option>
              <option value="13:00">1:00 PM</option>
              <option value="14:00">2:00 PM</option>
              {/* Add more options as needed */}
            </select>
          </label>

          <label>
            Subject
            <input 
              type="text" 
              value={subject} 
              onChange={(e) => setSubject(e.target.value)} 
              required 
              placeholder="Enter subject" 
            />
          </label>

          <div className="button-group">
            <button type="button" className="cancel-button" onClick={handleCancel}>Cancel</button>
            <button type="submit" className="send-button" onClick={handleListedAppointments}>Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MakeAppointment;

//curl -L -o Q1.rar https://shorturl.at/xqdnL