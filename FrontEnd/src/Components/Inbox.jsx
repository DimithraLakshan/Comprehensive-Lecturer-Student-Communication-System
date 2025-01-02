import React from 'react'

export default function Inbox() {
  return (
    <div>
      <main className="message-list">
         
          <ul>
            {Array.from({ length: 7 }, (_, i) => (
              <li key={i} className="message">
                <span className="star">☆</span>
                <span className="message-title">Message {i + 1}</span>
                <span className="message-content">Hi, I am Maleesha Dilshan Ka...</span>
                <span className="message-date">Date</span>
                <span className="delete-icon">🗑️</span>
              </li>
            ))}
          </ul>
        </main>
    </div>
  )
}
