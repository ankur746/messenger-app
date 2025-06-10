import React from 'react';

const FriendCard = ({ friend, isSelected, onClick }) => {
    return (
      <div
        className={`friend-card ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
      >
        <div className="friend-card-content">
          <div className="friend-avatar-container">
            <div className="friend-avatar">
              {friend.avatar}
            </div>
            {friend.isOnline && (
              <div className="online-indicator"></div>
            )}
          </div>
          <div className="friend-info">
            <div className="friend-header">
              <h3 className="friend-name">
                {friend.name}
              </h3>
              <span className="friend-time">
                {friend.lastSeen}
              </span>
            </div>
            <p className="friend-last-message">
              {friend.lastMessage}
            </p>
          </div>
        </div>
      </div>
    );
  };

export default FriendCard;