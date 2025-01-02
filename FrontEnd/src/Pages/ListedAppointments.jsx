import React from 'react';
import './listedAppointments.css';
import Navbar from '../Components/Navbar';

const ListedAppointments = () => {
  // Sample appointment data
  const appointments = [
    {
      date: '26/11/2024',
      time: '1.00 p.m',
      lecturer: 'Lecturer Name',
      status: 'Accepted',
      comment: 'ok'
    }
  ];

  return (
    <div className="appointments-container">
      <Navbar/>
      <div className="appointments-content">
        <h2>LISTED APPOINTMENTS</h2>
        <h3>26/11/2024 - WEDNESDAY</h3>

        <table className="appointments-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Lecturer</th>
              <th>Status</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment, index) => (
              <tr key={index}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.lecturer}</td>
                <td>{appointment.status}</td>
                <td>{appointment.comment}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListedAppointments;
