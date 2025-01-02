import React from 'react';
import './announcements.css';
import Navbar from '../Components/Navbar';

const Announcements = () => {
  return (
    <div className="announcements-container">

        <Navbar/>

      {/* Announcements Section */}
      <div className="content">
        <div className="announcements-list">
          <h2>ANNOUNCEMENTS</h2>
          <div className="announcement">
            <div className="date-time">DATE<br />TIME</div>
            <div className="announcement-details">
              <div className="announcement-title">ANNOUNCEMENT</div>
              <div className="announcement-sender">SENDER</div>
            </div>
          </div>
          <div className="announcement">
            <div className="date-time">DATE<br />TIME</div>
            <div className="announcement-details">
              <div className="announcement-title">ANNOUNCEMENT</div>
              <div className="announcement-sender">SENDER</div>
            </div>
          </div>
          <div className="announcement">
            <div className="date-time">DATE<br />TIME</div>
            <div className="announcement-details">
              <div className="announcement-title">ANNOUNCEMENT</div>
              <div className="announcement-sender">SENDER</div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="sidebar">
          <div className="calendar">
            <h3>CALENDAR</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
