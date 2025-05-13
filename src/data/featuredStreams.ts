// Mock data for featured streams
export interface FeaturedStream {
  id: string;
  title: string;
  streamerName: string;
  category: string;
  viewerCount: number;
  thumbnailUrl: string;
  avatarUrl: string;
}

// Mock data for multiple featured streams to demonstrate slider
export const FEATURED_STREAMS: FeaturedStream[] = [
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

// Single featured stream for the homepage
export const FEATURED_STREAM: FeaturedStream = FEATURED_STREAMS[0];
