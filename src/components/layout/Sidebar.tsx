import { useState } from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Badge } from '../../components/ui/badge';
import { Card } from '../ui/card';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

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
    <aside className={`bg-background-light h-screen sticky top-0 transition-all duration-300 ${isCollapsed ? 'w-16' : 'w-60'}`}>
      <div className="p-3 border-b border-background-card">
        <div className="flex items-center justify-between">
          <h2 className={`font-semibold text-lg ${isCollapsed ? 'hidden' : 'block'}`}>LIVE CHANNELS</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="text-text-secondary hover:text-text"
          >
            {isCollapsed ? (
              <ChevronRight className="h-5 w-5" />
            ) : (
              <ChevronLeft className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      <ScrollArea className="h-[calc(100vh-60px)]">
        <ul className="py-2">
          {channels.map(channel => (
            <Card 
              key={channel.id} 
              className="mx-2 my-1 hover:bg-background-card cursor-pointer bg-transparent border-0 shadow-none"
            >
              <div className="flex items-center gap-1 p-2">
                <div className="relative">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={channel.avatar} alt={channel.name} />
                    <AvatarFallback>{channel.name.charAt(0).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  {channel.isLive && (
                    <Badge 
                      variant="destructive" 
                      className="absolute -top-1 -right-1 w-3 h-3 p-0 min-w-0 rounded-full border-2 border-background-light"
                    />
                  )}
                </div>
                
                {!isCollapsed && (
                  <div className="flex-1 ml-2 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="font-medium truncate">{channel.name}</p>
                      <div className="flex items-center gap-1 text-xs text-text-secondary">
                        <Circle className="w-2 h-2 fill-red-600 text-red-600" />
                        <span>{(channel.viewerCount / 1000).toFixed(1)}K</span>
                      </div>
                    </div>
                    <p className="text-text-secondary text-sm truncate">{channel.game}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </ul>
      </ScrollArea>
    </aside>
  );
};

export default Sidebar;
