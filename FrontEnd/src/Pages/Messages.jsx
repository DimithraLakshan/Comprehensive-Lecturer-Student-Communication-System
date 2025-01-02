import React, { useState } from 'react';
import './messages.css';
import Navbar from '../Components/Navbar';
import Inbox from '../Components/Inbox';
import SentBox from '../Components/SentBox';
import Drafts from '../Components/Drafts';
import Bin from '../Components/Bin';
import Compose from '../Components/Compose';

const Messages = () => {
  const [activeComponent, setActiveComponent] = useState('inbox');

  // Function to switch between components
  const renderComponent = () => {
    switch (activeComponent) {
      case 'compose':
        return <Compose/>;
      case 'inbox':
        return <Inbox />;
      case 'sent':
        return <SentBox />;
      case 'drafts':
        return <Drafts />;
      case 'bin':
        return <Bin />;
      default:
        return <Inbox />;
    }
  };

  return (
    <div className="container">
      <Navbar />

      <div className="message-container">
        <aside className="sidebar">
          <button className="compose-btn">Compose</button>
          <ul>
            <li onClick={() => setActiveComponent('compose')}>Compose</li>
            <li onClick={() => setActiveComponent('inbox')}>Inbox</li>
            <li onClick={() => setActiveComponent('sent')}>Sent</li>
            <li onClick={() => setActiveComponent('drafts')}>Drafts</li>
            <li onClick={() => setActiveComponent('bin')}>Bin</li>
          </ul>
        </aside>

        <main className="message-list">
          <div className="search-message">
            <input type="text" placeholder="Search Message" />
          </div>
          {renderComponent()}
        </main>
      </div>
    </div>
  );
};

export default Messages;
