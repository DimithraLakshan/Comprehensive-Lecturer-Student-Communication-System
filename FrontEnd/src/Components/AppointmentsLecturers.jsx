import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./AppointmentsLecturers.css";
//import AppointAcceptPopUp from "./AppointAcceptPopUp";

const AppointmentsLecturers = () => {
  const appointments = [
    {
      date: "26/10/2024",
      time: "1.30 p.m",
      studentRegNo: "EUSL/TC/IS/2019/COM/63",
      subject: "Subject",
      status: "Pending",
    },
    // Add more appointments here if needed
  ];

  const navigate = useNavigate();

  const handlePending = () => {
    navigate('/AppointAcceptPopUp');
  }

  return (
    <div className="appointments-container">
      <h2>Appointments</h2>
      <div className="appointments-header">
        <span>Date</span>
        <span>Time</span>
        <span>Student Reg.No.</span>
        <span>Subject</span>
        <span>Status</span>
      </div>

      <div className="appointments-list">
        {appointments.map((appointment, index) => (
          <div key={index} className="appointment-item">
            <span>{appointment.date}</span>
            <span>{appointment.time}</span>
            <span>{appointment.studentRegNo}</span>
            <span>{appointment.subject}</span>
            <span onClick={handlePending}>
              <Link to="/appointment-details" className="status-link">
                {appointment.status}
                {/*<AppointAcceptPopUp/>*/}
              </Link>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentsLecturers;
