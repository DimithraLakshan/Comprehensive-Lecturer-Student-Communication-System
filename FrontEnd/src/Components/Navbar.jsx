import React from 'react';
import './navBar.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Navbar = () => {

    const Navigate = useNavigate();

    const handleLogout = () => {
      Navigate('/Loginpage');
    }

  return (
    <div className="navbar-container">
      <header className="header">
        <div className="logo">
          <img src="./images/UniversityLogo.jpeg" alt="University Logo" />
        </div>
        <div className="header-title">
          <h1>Trincomalee Campus Eastern University</h1>
          <h2>Student Communication System</h2>
        </div>
        <div className="user-info">
          <p>WEERASEKARA E.A.D.L</p>
          <p>EUSL/TC/IS/2019/COM/63</p>
          <div className="profile-icon">
            <img src="./images/userDp.jpg" alt="Profile" />
          </div>
        </div>
      </header>

      <div className="navbar-menu">
        <nav>
          <a href="/HomePage">Home</a>
          <a href="/Messages">Messages</a>
          <a href="/AppointmentSelectPage">Appointments</a>
         {/*} <a href="/Announcements">Announcements</a>*/}
          {/*<a href='/Schedule'>Schedule</a>*/}
          <a href="/Settings">Settings</a>
          <a href="/">Notifications</a>
          <a href="/Profile">Profile</a>
        </nav>

        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button className="search-btn">
            <i className="fa fa-search"></i>
          </button>
        </div>

        {/*<div className='logoute'>
          <button className='logoutButton'onClick={handleLogout}>Logout</button>
        </div>*/}
        <nav>
        <a href="/">Logout</a>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
