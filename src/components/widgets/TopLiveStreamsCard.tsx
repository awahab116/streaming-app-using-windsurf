import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { topLiveStreams } from '../../data';
import { formatNumber } from '../../utils/formatters';

interface TopLiveStreamsCardProps {
  streams?: typeof topLiveStreams;
}

const TopLiveStreamsCard: React.FC<TopLiveStreamsCardProps> = ({
  streams = topLiveStreams
}) => {
  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
      <CardHeader className="border-b border-gray-700/50 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-purple-400">Top Live Streams</CardTitle>
          <div className="flex items-center gap-2">
            <select className="bg-gray-800/60 text-xs backdrop-blur-sm text-gray-300 border border-gray-700 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-purple-500">
              <option>All Categories</option>
              <option>Gaming</option>
              <option>Music</option>
              <option>Food</option>
              <option>Technology</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {streams.map((stream) => (
            <div 
              key={stream.id} 
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative">
                <div className="aspect-video overflow-hidden rounded-t-xl">
                  <img 
                    src={stream.thumbnail} 
                    alt={stream.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                  />
                </div>
                <div className="absolute top-2 left-2 flex items-center gap-2">
                  <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-md font-semibold flex items-center gap-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                    </span>
                    LIVE
                  </div>
                  {stream.trending && (
                    <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs px-2 py-1 rounded-md font-semibold">
                      TRENDING
                    </div>
                  )}
                </div>
                <div className="absolute bottom-2 right-2 bg-black/70 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  {formatNumber(stream.viewers)}
                </div>
              </div>
              
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-sm font-semibold text-white group-hover:text-purple-400 transition-colors duration-300 line-clamp-1">{stream.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="text-xs text-gray-400 px-2 py-0.5 rounded-full bg-gray-700/50">{stream.category}</div>
                      <div className="text-xs text-green-400 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-0.5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                        </svg>
                        {stream.growth}
                      </div>
                    </div>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-purple-500/10 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
                
                <div className="mt-3 pt-3 border-t border-gray-700/50">
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <div>Stream Performance</div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Excellent</span>
                    </div>
                  </div>
                  <div className="mt-2 h-1.5 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-green-500 to-emerald-400 rounded-full" 
                      style={{ width: `${Math.min(90, (stream.viewers / 50000) * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 flex items-center justify-center">
          <button className="bg-gray-800/80 hover:bg-gray-700/80 text-gray-300 hover:text-white text-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-gray-600 transition-colors duration-300 flex items-center gap-2">
            View All Streams
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopLiveStreamsCard;
