import React from 'react';
import { Search } from 'lucide-react';
import FriendCard from './FriendCard';

export const FriendsList = ({ friends, selectedFriendId, onSelectFriend }) => {
    return (
      <div className="friends-list">
        {/* Header */}
        <div className="friends-list-header">
          <h1 className="friends-list-title">Messages</h1>
          <div className="search-container">
            <Search className="search-icon" />
            <input
              type="text"
              placeholder="Search conversations..."
              className="search-input"
            />
          </div>
        </div>
  
        {/* Friends List */}
        <div className="friends-list-content">
          {friends.map((friend) => (
            <FriendCard
              key={friend.id}
              friend={friend}
              isSelected={selectedFriendId === friend.id}
              onClick={() => onSelectFriend(friend.id)}
            />
          ))}
        </div>
      </div>
    );
  };
export default FriendsList;