import React from 'react';

export const Message = ({ message }) => {
    const formatTime = (date) => {
      return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true,
      });
    };
  
    return (
      <div className={`message ${message.isFromUser ? 'from-user' : 'from-friend'}`}>
        <div className={`message-bubble ${message.isFromUser ? 'from-user' : 'from-friend'}`}>
          <p className="message-text">{message.text}</p>
          <div className={`message-time ${message.isFromUser ? 'from-user' : 'from-friend'}`}>
            {formatTime(message.timestamp)}
          </div>
        </div>
      </div>
    );
  };