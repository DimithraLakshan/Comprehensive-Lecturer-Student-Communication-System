import React from 'react';
import './profile.css';
import Navbar from '../Components/Navbar';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    //CREATE navigation to editProfile page
    const handleEditClick = () => {
        navigate('/EditProfile');
    }
  return (
    <div className="container">
      <Navbar/>

      <div className="profile-section">
        <div className="profile-header">
          <div className="profile-info">
            <img className="profile-image" src="profile-icon.png" alt="Profile" />
            <p>EUSL/TC/IS/2019/COM/63 - WEERASEKARA E.A.D.L</p>
          </div>
          <button className="edit-button" onClick={handleEditClick}>Edit</button>
        </div>

        <div className="details-bio-container">
          <div className="details-card">
            <h3>User Details</h3>
            <p><strong>Name:</strong> E.A.D.L.Weerasekara</p>
            <p><strong>Email:</strong> abcdefg99653@gmail.com</p>
            <p><strong>Student Registration Number:</strong> EUSL/TC/IS/2019/COM/965</p>
            <p><strong>Student Index Number:</strong> 19/COM/000</p>
            <a href="#" className="more-details">More details</a>
          </div>

          <div className="bio-card">
            <h3>Bio</h3>
            <p>LinkedIn</p>
            <p>GitHub</p>
            <a href="#" className="add-more">Add more</a>
          </div>
        </div>

        <div className="privacy-policy">
          <h3>Privacy & Policy</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
