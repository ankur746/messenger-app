import React, { useState } from 'react';
import { Send, Paperclip, Smile } from 'lucide-react';

export const MessageInput = ({ onSendMessage, disabled = false }) => {
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (message.trim() && !disabled) {
        onSendMessage(message.trim());
        setMessage('');
      }
    };
  
    const handleKeyPress = (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        handleSubmit(e);
      }
    };
  
    return (
      <div className="message-input-container">
        <form onSubmit={handleSubmit} className="message-input-form">
          <div className="message-input-wrapper">
            <div className="message-input-field">
              <button
                type="button"
                className="message-input-btn"
              >
                <Paperclip size={20} />
              </button>
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={disabled ? "Select a friend to start messaging..." : "Type a message..."}
                disabled={disabled}
                className="message-input"
              />
              <button
                type="button"
                className="message-input-btn"
              >
                <Smile size={20} />
              </button>
            </div>
          </div>
          <button
            type="submit"
            disabled={!message.trim() || disabled}
            className={`message-send-btn ${
              message.trim() && !disabled ? 'active' : 'inactive'
            }`}
          >
            <Send size={20} />
          </button>
        </form>
      </div>
    );
  };