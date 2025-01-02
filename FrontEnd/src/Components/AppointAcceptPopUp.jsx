import React, { useState } from 'react';
import './AppointAcceptPopUp.css';
import { useNavigate } from 'react-router-dom';

const AppointAcceptPopUp = () => {
  const [showPopup, setShowPopup] = useState(true); // Controls the popup visibility
  const [comment, setComment] = useState('');
  const navigate = useNavigate();

  const handleAccept = () => {
    console.log('Accepted with comment:', comment);
    setShowPopup(false);
    navigate('./AppointmentsLecturers');
  };

  const handleReject = () => {
    console.log('Rejected with comment:', comment);
    setShowPopup(false);
    navigate('./AppointmentsLecturers');
  };

  if (!showPopup) return null;

  return (
    <div className="popup-container">
      <div className="popup-box">
        <h2>Pending Appointment</h2>
        <textarea
          placeholder="Add Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <div className="popup-buttons">
          <button onClick={handleAccept}>ACCEPT</button>
          <button onClick={handleReject}>REJECT</button>
        </div>
      </div>
    </div>
  );
};

export default AppointAcceptPopUp;
