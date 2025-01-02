import React, { useState } from "react";
import "./writeMessage.css";
import { useNavigate } from "react-router-dom";

const WriteMessage = () => {
  const [formData, setFormData] = useState({
    from: "",
    subject: "",
    message: "",
    attachment: null,
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      attachment: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const messageData = new FormData();
    messageData.append("from", formData.from);
    messageData.append("subject", formData.subject);
    messageData.append("message", formData.message);
    if (formData.attachment) {
      messageData.append("attachment", formData.attachment);
    }
  
    try {
      const response = await fetch("http://localhost:5000/messages/send", {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`, // Include the token if required
        },
        body: messageData,
      });
  
      if (response.ok) {
        alert("Message sent successfully");
        navigate("/Messages");
      } else {
        // Display detailed error from the server if available
        const errorData = await response.json();
        console.error("Error response:", errorData);
        setError(errorData.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Network or server error:", err);
      setError("An error occurred. Please try again.");
    }
  };
  

  const handleCancel = () => {
    setFormData({
      from: "",
      subject: "",
      message: "",
      attachment: null,
     
    });
    setError('');
    navigate('/Messages');
  };

  return (
    <div className="new-message-container">
      <h2>New Message</h2>
      <div className="lecturer-info">
        <img src="/./images/userDp.jpg" alt="lecturer" className="lecturer-photo" />
        <span>Lecturer Name</span>
      </div>
      <form className="message-form" onSubmit={handleSubmit}>
        {error && <div className="error-message">{error}</div>}
        <div className="form-group">
          <label>From</label>
          <input
            type="text"
            name="from"
            value={formData.from}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Subject</label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Attachments</label>
          <input type="file" onChange={handleFileChange} />
        </div>
        <div className="form-buttons">
          <button type="button" className="cancel-btn" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="send-btn">
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default WriteMessage;
