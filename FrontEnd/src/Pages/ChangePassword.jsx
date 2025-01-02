import React, { useState } from 'react';
import './changePassword.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const ChangePassword = () => {
  const [username, setUsername] = useState('default');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (newPassword !== confirmPassword) {
      setError({ ...error, confirmPassword: true });
    } else {
      setError({ currentPassword: false, newPassword: false, confirmPassword: false });
      // Proceed with password change
    }
  };

  const navigate = useNavigate();

  const handleCancel = () => {
    navigate('/Settings');
  }

  return (
    <div className="change-password-container">
      <Navbar/>

      {/* Change Password Form */}
      <div className="change-password-form">
        <h2>Settings/ Change Password</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">User Name:</label>
            <input type="text" id="username" value={username} disabled />
          </div>

          <div className="form-group">
            <label htmlFor="currentPassword">
              Current Password:
              {error.currentPassword && <span className="error">❗</span>}
            </label>
            <input
              type="password"
              id="currentPassword"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="newPassword">
              New Password:
              {error.newPassword && <span className="error">❗</span>}
            </label>
            <input
              type="password"
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmPassword">
              Confirm Password:
              {error.confirmPassword && <span className="error">❗</span>}
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <p className="password-note">
            The password must have at least 6 characters, at least 1 digit(s), at least 1 lower case letter(s)
          </p>

          <div className="form-actions">
            <button type="submit" className="save-btn">Save Changes</button>
            <button type="button" className="cancel-btn" onClick={handleCancel}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
