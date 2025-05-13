import { Stream } from '../components/stream';

// Mock data for regular streams
export const MOCK_STREAMS: Stream[] = [
  {
    id: '1',
    title: 'Playing Apex Legends Ranked - Road to Predator!',
    thumbnailUrl: 'https://placehold.co/640x360/9146FF/FFFFFF.png?text=Apex+Legends',
    username: 'acer',
    category: 'Apex Legends',
    viewerCount: 9100,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/9146FF/FFFFFF.png?text=A'
  },
  {
    id: '2',
    title: 'Just chatting with viewers - AMA!',
    thumbnailUrl: 'https://placehold.co/640x360/FF4500/FFFFFF.png?text=Just+Chatting',
    username: 'DDG',
    category: 'Just Chatting',
    viewerCount: 2000,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/FF4500/FFFFFF.png?text=D'
  },
  {
    id: '3',
    title: 'Chill Vibes - Late Night Stream',
    thumbnailUrl: 'https://placehold.co/640x360/00B5AD/FFFFFF.png?text=Just+Chatting',
    username: 'Silky',
    category: 'Just Chatting',
    viewerCount: 7000,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/00B5AD/FFFFFF.png?text=S'
  },
  {
    id: '4',
    title: 'Pico Park with Friends!',
    thumbnailUrl: 'https://placehold.co/640x360/FF69B4/FFFFFF.png?text=Pico+Park',
    username: 'ironmouse',
    category: 'Pico Park',
    viewerCount: 8500,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/FF69B4/FFFFFF.png?text=I'
  },
  {
    id: '5',
    title: 'Fortnite Tournament - $10K Prize Pool!',
    thumbnailUrl: 'https://placehold.co/640x360/1DA1F2/FFFFFF.png?text=Fortnite',
    username: 'Oatley',
    category: 'Fortnite',
    viewerCount: 1700,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/1DA1F2/FFFFFF.png?text=O'
  },
  {
    id: '6',
    title: 'Rust - Building a New Base',
    thumbnailUrl: 'https://placehold.co/640x360/FF7F50/FFFFFF.png?text=Rust',
    username: 'Oilrats',
    category: 'Rust',
    viewerCount: 2400,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/FF7F50/FFFFFF.png?text=O'
  },
  {
    id: '7',
    title: 'Game Dev Stream - Building a Platformer',
    thumbnailUrl: 'https://placehold.co/640x360/32CD32/FFFFFF.png?text=Game+Dev',
    username: 'PirateSoftware',
    category: 'Game Development',
    viewerCount: 2600,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/32CD32/FFFFFF.png?text=P'
  },
  {
    id: '8',
    title: 'Street Fighter 6 Tournament Finals',
    thumbnailUrl: 'https://placehold.co/640x360/FF0000/FFFFFF.png?text=Street+Fighter',
    username: 'Maximilian_DOOD',
    category: 'Street Fighter',
    viewerCount: 6800,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/FF0000/FFFFFF.png?text=M'
  },
  {
    id: '9',
    title: 'Digital Art - Commission Work',
    thumbnailUrl: 'https://placehold.co/640x360/800080/FFFFFF.png?text=Art',
    username: '39daph',
    category: 'Art',
    viewerCount: 2300,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/800080/FFFFFF.png?text=3'
  },
  {
    id: '10',
    title: 'Just Sleeping - ASMR',
    thumbnailUrl: 'https://placehold.co/640x360/4B0082/FFFFFF.png?text=Sleeping',
    username: 'mooda',
    category: 'Just Sleeping',
    viewerCount: 4000,
    isLive: true,
    avatarUrl: 'https://placehold.co/40x40/4B0082/FFFFFF.png?text=M'
  }
];

// Mock data for recommended streams (using the same data for simplicity)
export const RECOMMENDED_STREAMS = MOCK_STREAMS.slice(0, 5);

// Extended Stream interface that includes game property
export interface ExtendedStream extends Stream {
  game?: string;
}

// Mock data for the League of Legends streamer (Thebausffs)
export const MOCK_STREAMER: ExtendedStream = {
  id: 'thebausffs',
  username: 'Thebausffs',
  title: 'League of Legends Ranked - Road to Challenger!',
  game: 'League of Legends',
  category: 'League of Legends',
  viewerCount: 14500,
  isLive: true,
  avatarUrl: 'https://placehold.co/80x80/9146FF/FFFFFF.png?text=T',
  thumbnailUrl: 'https://placehold.co/1280x720/9146FF/FFFFFF.png?text=League+of+Legends'
};
