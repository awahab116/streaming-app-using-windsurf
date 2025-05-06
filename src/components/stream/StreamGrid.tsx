// React is imported by default with JSX in newer React versions
import StreamCard from './StreamCard';

export interface Stream {
  id: string;
  title: string;
  thumbnailUrl: string;
  username: string;
  category: string;
  viewerCount: number;
  isLive: boolean;
  avatarUrl: string;
}

interface StreamGridProps {
  streams: Stream[];
  title?: string;
}

const StreamGrid: React.FC<StreamGridProps> = ({ streams, title }) => {
  return (
    <div className="mb-8">
      {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {streams.map((stream) => (
          <StreamCard
            key={stream.id}
            id={stream.id}
            title={stream.title}
            thumbnailUrl={stream.thumbnailUrl}
            username={stream.username}
            category={stream.category}
            viewerCount={stream.viewerCount}
            isLive={stream.isLive}
            avatarUrl={stream.avatarUrl}
          />
        ))}
      </div>
    </div>
  );
};

export default StreamGrid;
