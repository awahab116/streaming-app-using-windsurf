import { useState } from 'react';

interface Channel {
  id: string;
  name: string;
  isLive: boolean;
  game: string;
  viewerCount: number;
  avatar: string;
}

const MOCK_CHANNELS: Channel[] = [
  { id: '1', name: 'mooda', isLive: true, game: 'Just Sleeping', viewerCount: 4000, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=M' },
  { id: '2', name: 'DDG', isLive: true, game: 'Just Chatting', viewerCount: 2000, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=D' },
  { id: '3', name: 'acer', isLive: true, game: 'Apex Legends', viewerCount: 9100, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=A' },
  { id: '4', name: 'Silky', isLive: true, game: 'Just Chatting', viewerCount: 7000, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=S' },
  { id: '5', name: 'ironmouse', isLive: true, game: 'Pico Park', viewerCount: 8500, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=I' },
  { id: '6', name: 'Oatley', isLive: true, game: 'Fortnite', viewerCount: 1700, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=O' },
  { id: '7', name: 'Oilrats', isLive: true, game: 'Rust', viewerCount: 2400, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=O' },
  { id: '8', name: 'PirateSoftware', isLive: true, game: 'Game Development', viewerCount: 2600, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=P' },
  { id: '9', name: 'Maximilian_DOOD', isLive: true, game: 'Street Fighter', viewerCount: 6800, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=M' },
  { id: '10', name: '39daph', isLive: true, game: 'Art', viewerCount: 2300, avatar: 'https://placehold.co/32x32/9146FF/FFFFFF.png?text=3' },
];

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [channels] = useState<Channel[]>(MOCK_CHANNELS);

  return (
    <aside className={`bg-background-light h-screen sticky top-0 overflow-y-auto transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-60'}`}>
      <div className="p-3 border-b border-background-card">
        <div className="flex items-center justify-between">
          <h2 className={`font-semibold text-lg ${isCollapsed ? 'hidden' : 'block'}`}>LIVE CHANNELS</h2>
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-text-secondary hover:text-text p-1 rounded-md"
          >
            {isCollapsed ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      <ul className="py-2">
        {channels.map(channel => (
          <li key={channel.id} className="px-2 py-1 hover:bg-background-card cursor-pointer">
            <div className="flex items-center gap-1">
              <div className="relative">
                <img 
                  src={channel.avatar} 
                  alt={channel.name} 
                  className="w-8 h-8 rounded-full"
                />
                {channel.isLive && (
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-600 rounded-full border-2 border-background-light"></div>
                )}
              </div>
              
              {!isCollapsed && (
                <div className="flex-1 ml-2 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{channel.name}</p>
                    <div className="flex items-center gap-1 text-xs text-text-secondary">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      <span>{(channel.viewerCount / 1000).toFixed(1)}K</span>
                    </div>
                  </div>
                  <p className="text-text-secondary text-sm truncate">{channel.game}</p>
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
