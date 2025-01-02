import React from "react";
import "./compose.css";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/WriteMessage');
  }
  return (
    <div className="main-container">

      {/* Main Section */}
      <div className="main-content">

        {/* Lecturer List */}
        <section className="lecturer-list">
          {Array(8)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="lecturer-card" >
                <div className="lecturer-photo">
                  <img src="./images/userDp.jpg" alt="lecturer" />
                </div>
                <span className="lecturer-name" onClick={handleClick}>Lecturer Name</span>
              </div>
            ))}
        </section>
      </div>
    </div>
  );
};

export default App;
