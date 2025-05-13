import StreamCard from './StreamCard';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

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
    <Card className="mb-8 border-0 bg-transparent shadow-none">
      {title && (
        <CardHeader className="px-0 pt-0">
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent className="p-0">
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
      </CardContent>
    </Card>
  );
};

export default StreamGrid;
