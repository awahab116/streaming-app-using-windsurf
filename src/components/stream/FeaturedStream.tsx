import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FEATURED_STREAMS } from '../../data/featuredStreams';
import { Card, CardContent } from '../ui/card';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';
import * as Avatar from '@radix-ui/react-avatar';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface FeaturedStreamProps {
  title: string;
  streamerName: string;
  category: string;
  viewerCount: number;
  thumbnailUrl: string;
  avatarUrl: string;
}

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
    <Card className="relative w-full max-w-3xl mx-auto mb-8 border-0 shadow-lg overflow-hidden">
      <div className="relative w-full max-h-[450px]">
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <img 
            src={currentStream.thumbnailUrl} 
            alt={currentStream.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          
          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors">
              <Play className="h-8 w-8 text-white ml-1" />
            </div>
          </div>
          
          {/* Stream info */}
          <CardContent className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
            <div className="flex items-center gap-3">
              <Avatar.Root className="w-12 h-12 rounded-full border-2 border-primary overflow-hidden">
                <Avatar.Image 
                  src={currentStream.avatarUrl} 
                  alt={currentStream.streamerName} 
                  className="w-full h-full object-cover"
                />
                <Avatar.Fallback className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
                  {currentStream.streamerName.charAt(0).toUpperCase()}
                </Avatar.Fallback>
              </Avatar.Root>
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
          </CardContent>
        </div>
      </div>
      
      {/* Slider controls */}
      <div className="absolute inset-y-0 w-full flex items-center justify-between pointer-events-none">
        <button 
          onClick={prevSlide}
          className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white cursor-pointer mx-2 pointer-events-auto hover:bg-black/70 transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white cursor-pointer mx-2 pointer-events-auto hover:bg-black/70 transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>
      
      {/* Slider indicators using Tabs */}
      <Tabs value={currentSlide.toString()} onValueChange={(value) => setCurrentSlide(parseInt(value))}>
        <TabsList className="flex justify-center gap-2 mt-2 border-0 bg-transparent">
          {streams.map((_, index) => (
            <TabsTrigger 
              key={index} 
              value={index.toString()} 
              className={`w-2 h-2 rounded-full p-0 ${index === currentSlide ? 'bg-primary' : 'bg-text-secondary'} border-0`}
            />
          ))}
        </TabsList>
      </Tabs>
    </Card>
  );
};

export default FeaturedStream;
