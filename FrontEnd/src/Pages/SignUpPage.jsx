import React, { useState } from 'react';
import './signUpPage.css';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [role, setRole] = useState('');  // New state for role
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleCreate = async () => {
    // Clear any previous error messages
    setError('');

    // Basic form validation

    if (!role) {
      setError('Please select a role.');
      return;
    }

    //if (password !== confirmPassword) {
    //  setError('Passwords do not match');
    //  return;
    //}

    try {
      const response = await fetch('http://localhost:5000/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      console.log(data)

      if (response.ok) {
        alert('Account created successfully');
        navigate('/');  // Redirect to login page
      } else {
        // Display backend error message if available
        setError(data.message || 'Signup failed. Please try again.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };

  const handleCancel = () => {
    setRole('');
    setUsername('');
    setPassword('');
    setConfirmPassword('');
    navigate('/');  // Redirect to login page on cancel
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form>
        {error && <div className="error-message">{error}</div>}

        {/* Role selection dropdown */}
        <div className="form-group">
          <label>Select Role:</label>
          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select a role</option>
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
          </select>
        </div>

        <div className="form-group">
          <label>Enter Username :</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter the username in 20**/com/** format" 
          />
        </div>
        <div className="form-group">
          <label>Create a Password :</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        {/*<div className="form-group">
          <label>Confirm Password :</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
          />
        </div>*/}
        <div className="button-group">
          <button type="button" onClick={handleCancel} className="cancel-btn">Cancel</button>
          <button type="button" onClick={handleCreate} className="create-btn">Create</button>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
