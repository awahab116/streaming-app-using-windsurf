import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { MOCK_STREAMS, MOCK_STREAMER } from '../data/streams';
import { MOCK_MESSAGES, MOCK_EMOTES, MOCK_GIFTS } from '../data/chatData';
import { getGameOrCategory } from '../types/stream';

const StreamPage: React.FC = () => {
  const { streamerId } = useParams<{ streamerId: string }>();
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('chat');
  
  // Find the stream based on the ID from the URL params
  const streamer = streamerId === 'thebausffs' 
    ? MOCK_STREAMER 
    : MOCK_STREAMS.find(stream => stream.id === streamerId) || MOCK_STREAMS[0];
    
  // Get the game or category name using our type-safe helper function
  const gameOrCategory = getGameOrCategory(streamer);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      // In a real app, this would send the message to a backend
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-full gap-4">
      {/* Stream Player Section */}
      <div className="lg:w-[78%]">
        <div className="bg-black rounded-md overflow-hidden relative aspect-video">
          {/* Video Player */}
          <img 
            src={streamer.thumbnailUrl} 
            alt={streamer.title}
            className="w-full h-full object-cover"
          />
          
          {/* Player Controls */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent">
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="5 3 19 12 5 21 5 3"></polygon>
                </svg>
              </button>
              <div className="text-white text-sm">00:45:12</div>
            </div>
            
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
                  <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                </svg>
              </button>
              <button className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </button>
              <button className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </button>
              <button className="w-8 h-8 bg-black/50 rounded-full flex items-center justify-center text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 3h6v6"></path>
                  <path d="M10 14L21 3"></path>
                  <path d="M19 10v11H3V5h11"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Stream Info */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img 
              src={streamer.avatarUrl} 
              alt={streamer.username} 
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h1 className="text-xl font-bold">{streamer.title}</h1>
              <div className="flex items-center gap-2 text-text-secondary">
                <span className="font-medium">{streamer.username}</span>
                <span>•</span>
                <span>{gameOrCategory}</span>
                <span>•</span>
                <span>{streamer.viewerCount.toLocaleString()} viewers</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2">
            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-colors">
              Follow
            </button>
            <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Chat Section */}
      <div className="lg:w-[22%] bg-background-card rounded-md overflow-hidden flex flex-col h-[600px]">
        <div className="p-2 border-b border-border flex justify-between items-center">
          <div className="font-bold">STREAM CHAT</div>
          <div className="flex items-center">
            <button className="p-1 text-text-secondary hover:text-text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Chat Tabs */}
        <div className="border-b border-border">
          <div className="flex">
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'chat' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary'}`}
              onClick={() => setActiveTab('chat')}
            >
              Chat
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium ${activeTab === 'rooms' ? 'text-primary border-b-2 border-primary' : 'text-text-secondary'}`}
              onClick={() => setActiveTab('rooms')}
            >
              Rooms
            </button>
          </div>
        </div>
        
        {/* Gift Banner */}
        <div className="p-2 bg-background-highlight text-center text-sm">
          <span className="font-bold">Gift 1 sub</span> to take 1st!
        </div>
        
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-2 space-y-2 custom-scrollbar">
          {MOCK_MESSAGES.map((msg) => (
            <div key={msg.id} className="text-sm">
              <span className="font-bold" style={{ color: msg.isSubscriber ? '#9146FF' : 'inherit' }}>
                {msg.username}:
              </span>{' '}
              <span>{msg.message}</span>
            </div>
          ))}
        </div>
        
        {/* Emotes and Gifts */}
        <div className="p-2 border-t border-border">
          <div className="flex justify-between mb-2">
            <div className="flex gap-2">
              {MOCK_EMOTES.slice(0, 4).map((emote) => (
                <button key={emote.id} className="w-8 h-8 flex items-center justify-center bg-background-highlight rounded hover:bg-background-highlight-hover">
                  {emote.url}
                </button>
              ))}
            </div>
            <button className="text-text-secondary hover:text-text-primary">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
          
          {/* Gift Section */}
          <div className="flex justify-between mb-2">
            <div className="flex gap-2">
              {MOCK_GIFTS.map((gift) => (
                <button key={gift.id} className="w-8 h-8 flex items-center justify-center bg-background-highlight rounded hover:bg-background-highlight-hover">
                  {gift.url}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-2 border-t border-border">
          <div className="flex">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Send a message"
              className="flex-1 bg-background-highlight rounded-l-md px-3 py-2 text-sm focus:outline-none"
            />
            <button 
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-r-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StreamPage;
