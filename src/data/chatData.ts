// Chat message interface
export interface ChatMessage {
  id: string;
  username: string;
  message: string;
  isSubscriber: boolean;
  timestamp: string;
}

// Mock data for chat messages
export const MOCK_MESSAGES: ChatMessage[] = [
  { id: '1', username: 'DarkMendes', message: 'bruh?', isSubscriber: true, timestamp: '10:20' },
  { id: '2', username: 'thehaderz', message: 'did they win first game ?', isSubscriber: false, timestamp: '10:21' },
  { id: '3', username: 'DualRiders', message: 'behappy', isSubscriber: false, timestamp: '10:22' },
  { id: '4', username: 'jestersofamerica', message: 'better in compensation for this run down the street bare cheeks', isSubscriber: true, timestamp: '10:23' },
  { id: '5', username: 'daniel_das_lamm', message: 'DansWall', isSubscriber: true, timestamp: '10:24' },
  { id: '6', username: 'hitsumaru00', message: 'behappy', isSubscriber: true, timestamp: '10:25' },
  { id: '7', username: 'hitsuhuh', message: 'donswall', isSubscriber: false, timestamp: '10:26' },
  { id: '8', username: 'sortflex', message: 'blessed', isSubscriber: false, timestamp: '10:27' },
  { id: '9', username: 'WantlessDance', message: 'cArAs Music', isSubscriber: true, timestamp: '10:28' },
  { id: '10', username: 'sortflex', message: 'blessed', isSubscriber: false, timestamp: '10:29' },
];

// Emote interface
export interface Emote {
  id: string;
  name: string;
  url: string;
}

// Mock data for emotes
export const MOCK_EMOTES: Emote[] = [
  { id: '1', name: '😀', url: '😀' },
  { id: '2', name: '😂', url: '😂' },
  { id: '3', name: '❤️', url: '❤️' },
  { id: '4', name: '👍', url: '👍' },
  { id: '5', name: '🎮', url: '🎮' },
  { id: '6', name: '🔥', url: '🔥' },
];

// Gift interface
export interface Gift {
  id: string;
  name: string;
  price: string;
  url: string;
}

// Mock data for gifts
export const MOCK_GIFTS: Gift[] = [
  { id: '1', name: 'Gift 1', price: '1 sub', url: '🎁' },
  { id: '2', name: 'Gift 2', price: '5 subs', url: '💎' },
  { id: '3', name: 'Gift 3', price: '10 subs', url: '🏆' },
];
