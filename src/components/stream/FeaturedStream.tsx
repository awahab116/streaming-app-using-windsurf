// React is imported by default with JSX in newer React versions
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface FeaturedStreamProps {
  title: string;
  streamerName: string;
  category: string;
  viewerCount: number;
  thumbnailUrl: string;
  avatarUrl: string;
}

// Mock data for multiple featured streams to demonstrate slider
const FEATURED_STREAMS = [
  {
    id: '1',
    title: 'Special Events Stream - Charity Fundraiser',
    streamerName: 'AsiPom',
    category: 'Special Events',
    viewerCount: 2200,
    thumbnailUrl: 'https://placehold.co/1280x720/FFD700/FFFFFF.png?text=Special+Event',
    avatarUrl: 'https://placehold.co/80x80/FFD700/FFFFFF.png?text=A'
  },
  {
    id: '2',
    title: 'Tournament Finals - $50K Prize Pool',
    streamerName: 'GameMaster',
    category: 'Esports',
    viewerCount: 15000,
    thumbnailUrl: 'https://placehold.co/1280x720/FF4500/FFFFFF.png?text=Tournament',
    avatarUrl: 'https://placehold.co/80x80/FF4500/FFFFFF.png?text=G'
  },
  {
    id: '3',
    title: 'New Game Release - First Look',
    streamerName: 'GameReviewer',
    category: 'Just Chatting',
    viewerCount: 8500,
    thumbnailUrl: 'https://placehold.co/1280x720/32CD32/FFFFFF.png?text=New+Game',
    avatarUrl: 'https://placehold.co/80x80/32CD32/FFFFFF.png?text=R'
  }
];

const FeaturedStream: React.FC<FeaturedStreamProps> = (_props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();
  
  // Use props if provided, otherwise use the first mock stream
  const streams = FEATURED_STREAMS;
  const currentStream = streams[currentSlide];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % streams.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + streams.length) % streams.length);
  };
  
  const handleWatchClick = () => {
    navigate(`/stream/${currentStream.id}`);
  };
  
  return (
    <div className="relative w-full max-w-3xl mx-auto mb-8">
      <div className="relative w-full max-h-[450px]">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <img 
            src={currentStream.thumbnailUrl} 
            alt={currentStream.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
              <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
            </div>
          </div>
          
          {/* Stream info */}
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={currentStream.avatarUrl} 
                alt={currentStream.streamerName} 
                className="w-12 h-12 rounded-full border-2 border-primary"
              />
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">LIVE</span>
                  <span className="text-sm text-white/80">{currentStream.viewerCount.toLocaleString()} viewers</span>
                </div>
                <h2 className="text-xl font-bold text-white">{currentStream.title}</h2>
                <div className="flex items-center gap-2 text-white/80">
                  <span className="font-medium">{currentStream.streamerName}</span>
                  <span>•</span>
                  <span>{currentStream.category}</span>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <button 
                onClick={handleWatchClick}
                className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-md font-medium transition-colors"
              >
                Watch
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Slider controls */}
      <div className="absolute inset-y-0 w-full flex items-center justify-between pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white cursor-pointer mx-2 pointer-events-auto hover:bg-black/70 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white cursor-pointer mx-2 pointer-events-auto hover:bg-black/70 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
      
      {/* Slider indicators */}
      <div className="flex justify-center gap-2 mt-2">
        {streams.map((_, index) => (
          <button 
            key={index} 
            className={`w-2 h-2 rounded-full ${index === currentSlide ? 'bg-primary' : 'bg-text-secondary'} cursor-pointer`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FeaturedStream;
