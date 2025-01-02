import React from 'react';
import './editProfile.css';
import Navbar from '../Components/Navbar';
import { unstable_HistoryRouter, useNavigate } from 'react-router-dom';

const EditProfile = () => {
    const navigate = useNavigate();
    //const history = unstable_HistoryRouter();

    const handleClick = () => {
        navigate('/Profile');
    }

    /*const handleCancel = () => {
        history.goBack();
    }*/


  return (
    <div className="container">
      <Navbar/>

      <div className="edit-profile-section">
        <h2>Edit Profile</h2>

        <div className="form-section">
          <h3>General</h3>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Registration No.</label>
            <input type="text" placeholder="Enter registration number" />
          </div>
          <div className="form-group">
            <label>Index No.</label>
            <input type="text" placeholder="Enter index number" />
          </div>
        </div>

        <div className="form-section">
          <h3>Personal</h3>
          <div className="form-group">
            <label>Permanent Address</label>
            <input type="text" placeholder="Enter your address" />
          </div>
          <div className="form-group">
            <label>Mobile Number</label>
            <input type="text" placeholder="Enter mobile number" />
          </div>
          <div className="form-group">
            <label>Telephone Number</label>
            <input type="text" placeholder="Enter telephone number" />
          </div>
        </div>

        <div className="form-section">
          <h3>Bio</h3>
          <div className="form-group">
            <label>LinkedIn</label>
            <input type="text" placeholder="Enter LinkedIn profile" />
          </div>
          <div className="form-group">
            <label>GitHub</label>
            <input type="text" placeholder="Enter GitHub profile" />
          </div>
        </div>
        <div>
            <button className="cancel-button" onClick={handleClick}>Cancel</button>
            <button className="save-button" onClick={handleClick}>Save</button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
