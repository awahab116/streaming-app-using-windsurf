import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Stream as BaseStream } from '../components/stream/StreamGrid';

// Extended Stream interface that includes game property
interface Stream extends BaseStream {
  game?: string;
}

// Mock data for chat messages
const MOCK_MESSAGES = [
  { id: '1', username: 'DarkMendes', message: 'bruh?', isSubscriber: true, timestamp: '10:20' },
  { id: '2', username: 'thehaderz', message: 'did they win first game ?', isSubscriber: false, timestamp: '10:21' },
  { id: '3', username: 'DualRiders', message: 'behappy', isSubscriber: false, timestamp: '10:22' },
  { id: '4', username: 'jestersofamerica', message: 'better in compensation for this run down the street bare cheeks', isSubscriber: true, timestamp: '10:23' },
  { id: '5', username: 'daniel_das_lamm', message: 'DansWall', isSubscriber: true, timestamp: '10:24' },
  { id: '6', username: 'hitsumaru00', message: 'behappy', isSubscriber: true, timestamp: '10:25' },
  { id: '7', username: 'hitsuhuh', message: 'donswall', isSubscriber: false, timestamp: '10:26' },
  { id: '8', username: 'sortflex', message: 'blessed', isSubscriber: false, timestamp: '10:27' },
  { id: '9', username: 'WantlessDance', message: 'cArAs Music', isSubscriber: true, timestamp: '10:28' },
  { id: '10', username: 'sortflex', message: 'blessed', isSubscriber: false, timestamp: '10:29' },
];

// Mock data for emotes
const MOCK_EMOTES = [
  { id: '1', name: '😀', url: '😀' },
  { id: '2', name: '😂', url: '😂' },
  { id: '3', name: '❤️', url: '❤️' },
  { id: '4', name: '👍', url: '👍' },
  { id: '5', name: '🎮', url: '🎮' },
  { id: '6', name: '🔥', url: '🔥' },
];

// Mock data for gifts
const MOCK_GIFTS = [
  { id: '1', name: 'Gift 1', price: '1 sub', url: '🎁' },
  { id: '2', name: 'Gift 2', price: '5 subs', url: '💎' },
  { id: '3', name: 'Gift 3', price: '10 subs', url: '🏆' },
];

// Mock data for our streams (same as in HomePage)
const MOCK_STREAMS: Stream[] = [
  {
    id: '1',
    title: 'Playing Apex Legends Ranked - Road to Predator!',
    thumbnailUrl: 'https://placehold.co/640x360/9146FF/FFFFFF.png?text=Apex+Legends',
    username: 'acer',
    category: 'Apex Legends',
    viewerCount: 9100,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/9146FF/FFFFFF.png?text=A'
  },
  {
    id: '2',
    title: 'Just chatting with viewers - AMA!',
    thumbnailUrl: 'https://placehold.co/640x360/FF4500/FFFFFF.png?text=Just+Chatting',
    username: 'DDG',
    category: 'Just Chatting',
    viewerCount: 2000,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/FF4500/FFFFFF.png?text=D'
  },
  {
    id: '3',
    title: 'Chill Vibes - Late Night Stream',
    thumbnailUrl: 'https://placehold.co/640x360/00B5AD/FFFFFF.png?text=Just+Chatting',
    username: 'Silky',
    category: 'Just Chatting',
    viewerCount: 7000,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/00B5AD/FFFFFF.png?text=S'
  },
  {
    id: '4',
    title: 'Pico Park with Friends!',
    thumbnailUrl: 'https://placehold.co/640x360/FF69B4/FFFFFF.png?text=Pico+Park',
    username: 'ironmouse',
    category: 'Pico Park',
    viewerCount: 8500,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/FF69B4/FFFFFF.png?text=I'
  },
  {
    id: '5',
    title: 'Fortnite Tournament - $10K Prize Pool!',
    thumbnailUrl: 'https://placehold.co/640x360/1DA1F2/FFFFFF.png?text=Fortnite',
    username: 'Oatley',
    category: 'Fortnite',
    viewerCount: 1700,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/1DA1F2/FFFFFF.png?text=O'
  },
  {
    id: '6',
    title: 'Rust - Building a New Base',
    thumbnailUrl: 'https://placehold.co/640x360/FF7F50/FFFFFF.png?text=Rust',
    username: 'Oilrats',
    category: 'Rust',
    viewerCount: 2400,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/FF7F50/FFFFFF.png?text=O'
  },
  {
    id: '7',
    title: 'Game Dev Stream - Building a Platformer',
    thumbnailUrl: 'https://placehold.co/640x360/32CD32/FFFFFF.png?text=Game+Dev',
    username: 'PirateSoftware',
    category: 'Game Development',
    viewerCount: 2600,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/32CD32/FFFFFF.png?text=P'
  },
  {
    id: '8',
    title: 'Street Fighter 6 Tournament Finals',
    thumbnailUrl: 'https://placehold.co/640x360/FF0000/FFFFFF.png?text=Street+Fighter',
    username: 'Maximilian_DOOD',
    category: 'Street Fighter',
    viewerCount: 6800,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/FF0000/FFFFFF.png?text=M'
  },
  {
    id: '9',
    title: 'Digital Art - Commission Work',
    thumbnailUrl: 'https://placehold.co/640x360/800080/FFFFFF.png?text=Art',
    username: '39daph',
    category: 'Art',
    viewerCount: 2300,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/800080/FFFFFF.png?text=3'
  },
  {
    id: '10',
    title: 'Just Sleeping - ASMR',
    thumbnailUrl: 'https://placehold.co/640x360/4B0082/FFFFFF.png?text=Sleeping',
    username: 'mooda',
    category: 'Just Sleeping',
    viewerCount: 4000,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/4B0082/FFFFFF.png?text=M'
  }
];

// Mock data for the League of Legends streamer (Thebausffs)
const MOCK_STREAMER: {
  id: string;
  username: string;
  title: string;
  game: string;
  category?: string; // Added category to match the Stream interface
  viewerCount: number;
  isLive: boolean;
  avatarUrl: string;
  thumbnailUrl: string;
} = {
  id: 'thebausffs',
  username: 'Thebausffs',
  title: 'League of Legends Ranked - Road to Challenger!',
  game: 'League of Legends',
  category: 'League of Legends', // Added to match the Stream interface
  viewerCount: 14500,
  isLive: true,
  avatarUrl: 'https://placehold.co/80x80/9146FF/FFFFFF.png?text=T',
  thumbnailUrl: 'https://placehold.co/1280x720/9146FF/FFFFFF.png?text=League+of+Legends'
};

const StreamPage: React.FC = () => {
  const { streamerId } = useParams<{ streamerId: string }>();
  const [message, setMessage] = useState('');
  const [activeTab, setActiveTab] = useState('chat');
  
  // Find the stream based on the ID from the URL params
  const streamer = streamerId === 'thebausffs' 
    ? MOCK_STREAMER 
    : MOCK_STREAMS.find(stream => stream.id === streamerId) || MOCK_STREAMS[0];
    
  // Use category as game if game is not available
  const game = streamer.game || streamer.category;

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
                <span>{game}</span>
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
