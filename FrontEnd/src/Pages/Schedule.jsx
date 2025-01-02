import React from 'react';
import './schedule.css';
import Navbar from '../Components/Navbar';

const Schedule = () => {
  return (
    <div className="schedule-container">

        <Navbar/>
    

      {/* Schedule Table */}
      <div className="schedule-table">
        <div className="schedule-row">
          <div className="schedule-time">8.30 A.M - 10.30 A.M</div>
          <div className="schedule-subject">CO2223 - Human Computer Interaction</div>
          <div className="schedule-notice">Special Notes About The Lecture</div>
        </div>
        <div className="schedule-row">
          <div className="schedule-time">8.30 A.M - 10.30 A.M</div>
          <div className="schedule-subject">CO2223 - Human Computer Interaction</div>
          <div className="schedule-notice">Special Notes About The Lecture</div>
        </div>
      </div>

      {/* Day Navigation Buttons */}
      <div className="day-navigation">
        <button>Yesterday</button>
        <button>Tomorrow</button>
      </div>
    </div>
  );
};

export default Schedule;
