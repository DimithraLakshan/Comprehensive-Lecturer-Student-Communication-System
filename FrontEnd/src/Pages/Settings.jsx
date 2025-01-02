import React, { useState } from 'react';
import './settings.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [mode, setMode] = useState('dark');

  const navigate = useNavigate();

  const handleModeChange = (event) => {
    setMode(event.target.value);
  };

  const handleEditClick = () => {
    navigate('/EditProfile');
  }

  const handleChangePassword = () => {
    navigate('/ChangePassword');
  }




  return (
    <div className="settings-container">
      <Navbar/>

      {/* Settings Section */}
      <div className="settings-content">
        <h2>SETTINGS</h2>

        <div className="user-details">
          <div className="user-avatar-large">
            <img src="avatar-placeholder.png" alt="User Avatar Large" />
          </div>
          <div className="user-name-id">
            <span>EUSL/TC/IS/2019/COM/63</span> - <span>WEERASEKARA E.A.D.L</span>
          </div>
        </div>

        <div className="settings-options">
          <button onClick={handleEditClick}>Edit Profile</button>
          <button onClick={handleChangePassword}>Change Password</button>
          
          <div className="mode-selection">
            <label>Mode:</label>
            <input 
              type="radio" 
              id="dark" 
              name="mode" 
              value="dark" 
              checked={mode === 'dark'} 
              onChange={handleModeChange}
            />
            <label htmlFor="dark">Dark</label>
            <input 
              type="radio" 
              id="light" 
              name="mode" 
              value="light" 
              checked={mode === 'light'} 
              onChange={handleModeChange}
            />
            <label htmlFor="light">Light</label>
          </div>

          <button>Notifications</button>
        </div>

        <div className="save-button">
          <button>SAVE</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
