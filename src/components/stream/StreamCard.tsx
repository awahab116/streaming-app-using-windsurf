import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../ui/card';
import * as Avatar from '@radix-ui/react-avatar';

interface StreamCardProps {
  id: string;
  title: string;
  thumbnailUrl: string;
  username: string;
  category: string;
  viewerCount: number;
  isLive: boolean;
  avatarUrl: string;
}

const StreamCard: React.FC<StreamCardProps> = ({
  id,
  title,
  thumbnailUrl,
  username,
  category,
  viewerCount,
  isLive,
  avatarUrl
}) => {
  const navigate = useNavigate();
  
  const formatViewerCount = (count: number) => {
    if (count >= 1000) {
      return `${(count / 1000).toFixed(1)}K`;
    }
    return count.toString();
  };
  
  const handleClick = () => {
    navigate(`/stream/${id}`);
  };

  return (
    <Card 
      className="overflow-hidden transition-transform duration-200 hover:scale-[1.02] cursor-pointer" 
      onClick={handleClick}
    >
      <div className="relative">
        <img 
          src={thumbnailUrl} 
          alt={title}
          className="w-full aspect-video object-cover"
        />
        {isLive && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">
            LIVE
          </div>
        )}
        <div className="absolute bottom-2 left-2 bg-black bg-opacity-70 px-2 py-0.5 rounded text-white text-sm">
          {formatViewerCount(viewerCount)} viewers
        </div>
      </div>
      <CardContent className="p-3">
        <div className="flex gap-3">
          <Avatar.Root className="w-10 h-10 rounded-full overflow-hidden">
            <Avatar.Image 
              src={avatarUrl} 
              alt={username} 
              className="w-full h-full object-cover"
            />
            <Avatar.Fallback className="w-full h-full bg-gray-700 flex items-center justify-center text-white">
              {username.charAt(0).toUpperCase()}
            </Avatar.Fallback>
          </Avatar.Root>
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-sm truncate" title={title}>
              {title}
            </h3>
            <p className="text-text-secondary text-sm">{username}</p>
            <p className="text-text-secondary text-sm">{category}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StreamCard;
