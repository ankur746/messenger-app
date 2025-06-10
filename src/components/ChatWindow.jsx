import React, { useEffect, useRef } from 'react';
import { MoreVertical, Phone, Video } from 'lucide-react';
import { Message } from './Message';
import { MessageInput } from './MessageInput';

export const ChatWindow = ({ friend, onSendMessage }) => {
    const messagesEndRef = useRef(null);
  
    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
  
    useEffect(() => {
      scrollToBottom();
    }, [friend?.messages]);
  
    if (!friend) {
      return (
        <div className="chat-empty">
          <div className="chat-empty-content">
            <div className="chat-empty-icon">
              <div className="chat-empty-icon-inner"></div>
            </div>
            <h3 className="chat-empty-title">
              Select a conversation
            </h3>
            <p className="chat-empty-subtitle">
              Choose a friend from the sidebar to start messaging
            </p>
          </div>
        </div>
      );
    }
  
    return (
      <div className="chat-window">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="chat-avatar-container">
              <div className="chat-avatar">
                {friend.avatar}
              </div>
              {friend.isOnline && (
                <div className="chat-online-indicator"></div>
              )}
            </div>
            <div>
              <h2 className="chat-user-name">{friend.name}</h2>
              <p className="chat-user-status">
                {friend.isOnline ? 'Active now' : `Last seen ${friend.lastSeen}`}
              </p>
            </div>
          </div>
          <div className="chat-actions">
            <button className="chat-action-btn">
              <Phone size={20} />
            </button>
            <button className="chat-action-btn">
              <Video size={20} />
            </button>
            <button className="chat-action-btn">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
  
        {/* Messages */}
        <div className="messages-container">
          <div className="messages-list">
            {friend.messages.map((message) => (
              <Message key={message.id} message={message} />
            ))}
          </div>
          <div ref={messagesEndRef} />
        </div>
  
        {/* Message Input */}
        <MessageInput onSendMessage={onSendMessage} />
      </div>
    );
  };

export default ChatWindow;