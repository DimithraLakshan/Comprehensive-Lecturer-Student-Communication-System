import React from 'react';
import './AppointmentStudents.css';
//import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const lecturers = [
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
];

const AppointmentStudents = () => {
    const navigate = useNavigate();

    const handleEditClick = () => {
        navigate('/MakeAppointment');
    }

    const handleListedAppointments = () => {
        navigate('/ListedAppointments');
    }

  return (
    <div className="lecturer-grid-container">
     
      <div className="appointments-content">
        <h2>APPOINTMENTS</h2>
        

         <div className="lecturer-grid">
            {lecturers.map((lecturer, index) => (
                <div className="lecturer-card" key={index}>
                <img src={"./images/userDp.jpg"} alt={lecturer.name} className="lecturer-image" />
                <button className='lecturerName' onClick={handleEditClick}>{lecturer.name}</button>
                </div>
            ))}
        </div>
        <button className='toAppointmentstate'onClick={handleListedAppointments}>Listed Appointments</button>
      </div>
    </div>
  );
};

export default AppointmentStudents;
