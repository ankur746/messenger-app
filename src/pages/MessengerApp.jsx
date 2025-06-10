import { useState } from 'react';
// import { FriendsList } from '../components/FriendsList';
import ChatWindow from '../components/ChatWindow';
import { mockFriends } from '../data/mock';
import FriendsList  from '../components/FriendsList';

export const MessengerApp = () => {
  const [friends, setFriends] = useState(mockFriends);
  const [selectedFriendId, setSelectedFriendId] = useState(null);

  const selectedFriend = friends.find(friend => friend.id === selectedFriendId) || null;

  const handleSelectFriend = (friendId) => {
    setSelectedFriendId(friendId);
  };

  const handleSendMessage = (messageText) => {
    if (!selectedFriendId) return;

    const newMessage = {
      id: Date.now().toString(),
      text: messageText,
      timestamp: new Date(),
      isFromUser: true,
    };

    setFriends(prevFriends =>
      prevFriends.map(friend =>
        friend.id === selectedFriendId
          ? {
              ...friend,
              messages: [...friend.messages, newMessage],
              lastMessage: messageText,
              lastSeen: 'now',
            }
          : friend
      )
    );
  };

  return (
    <div className="h-screen bg-gray-100 flex">
      <FriendsList
        friends={friends}
        selectedFriendId={selectedFriendId}
        onSelectFriend={handleSelectFriend}
      />
      <ChatWindow
        friend={selectedFriend}
        onSendMessage={handleSendMessage}
      />
    </div>
  );
};