import React from 'react';
import './appointmentSelectPage.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';
import AppointmentStudents from '../Components/AppointmentStudents';
//import AppointmentsLecturers from '../Components/AppointmentsLecturers';

/*const lecturers = [
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
  { name: 'Lecturer Name', imgSrc: '/path-to-placeholder-image.png' },
];*/

const AppointmentSelectPage = () => {
    /*const navigate = useNavigate();

    const handleEditClick = () => {
        navigate('/MakeAppointment');
    }

    const handleListedAppointments = () => {
        navigate('/ListedAppointments');
    }*/

  return (
    /*<div className="lecturer-grid-container">
      
      <div className="appointments-content">
        <h2>APPOINTMENTS</h2>
        

         <div className="lecturer-grid">
            {lecturers.map((lecturer, index) => (
                <div className="lecturer-card" key={index}>
                <img src={lecturer.imgSrc} alt={lecturer.name} className="lecturer-image" />
                <button className='lecturerName' onClick={handleEditClick}>{lecturer.name}</button>
                </div>
            ))}
        </div>
        <button className='toAppointmentstate'onClick={handleListedAppointments}>Listed Appointments</button>
      </div>
    </div>*/
    <div>
      <Navbar/>
      <AppointmentStudents/>
      {/*<AppointmentsLecturers/>*/}
    </div>
    
  );
};

export default AppointmentSelectPage;
