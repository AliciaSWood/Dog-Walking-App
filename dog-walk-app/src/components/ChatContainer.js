import React from 'react';
import ChatDisplay from './ChatDisplay';
import ChatHeader from './ChatHeader';
import MatchesDisplay from './MatchesDisplay';

const ChatContainer = () => {
    return (
        <div className = "chat-container">
            <ChatHeader/>
            <div>
                <button className = "option">Matches</button>
                <button className = "option">Chat</button>
            </div>
            <MatchesDisplay/>
            <ChatDisplay/>
        </div>
    );
};

export default ChatContainer;