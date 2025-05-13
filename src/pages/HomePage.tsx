import React from 'react';
import { FeaturedStream, StreamGrid } from '../components/stream';
import { MOCK_STREAMS, RECOMMENDED_STREAMS } from '../data/streams';
import { FEATURED_STREAM } from '../data/featuredStreams';

const HomePage: React.FC = () => {
  return (
    <div>
      <FeaturedStream 
        title={FEATURED_STREAM.title}
        streamerName={FEATURED_STREAM.streamerName}
        category={FEATURED_STREAM.category}
        viewerCount={FEATURED_STREAM.viewerCount}
        thumbnailUrl={FEATURED_STREAM.thumbnailUrl}
        avatarUrl={FEATURED_STREAM.avatarUrl}
      />
      
      <StreamGrid 
        title="Recommended Streams" 
        streams={RECOMMENDED_STREAMS} 
      />
      
      <StreamGrid 
        title="Live Channels" 
        streams={MOCK_STREAMS} 
      />
    </div>
  );
};

export default HomePage;
