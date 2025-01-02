import React from 'react';
import './homePage.css';
import Navbar from '../Components/Navbar';
//import {Calendar} from '../Components/Calendar';

const HomePage = () => {
  return (
    <div className="homepage-container">
      
      <Navbar/>
      
      {/* Homepage Body Section */}
      <div className="homepage-body">
        

        
        <div className="row">
          <div className="column full">
            <div className="section-title">Appointments</div>
            <div className="section-content"> {/* Add announcements content here */} </div>
          </div>
        </div>
        

        <div className="row">
          <div className="column full">
            <div className="section-title">Messages</div>
            <div className="section-content"> {/* Add messages content here */} </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


//<div className="row">
          //<div className="column large">
           // <div className="section-title">Daily Schedule</div>
           // <div className="section-content"> {/* Add daily schedule content here */} </div>
          //</div>

          //<div className="column small">
            
            //<div className="section-title">Calendar</div>
            //<div className="section-content">{}</div>
            
         // </div>
//</div>