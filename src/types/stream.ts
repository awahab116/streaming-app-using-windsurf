// Base Stream interface
export interface BaseStream {
  id: string;
  title: string;
  thumbnailUrl: string;
  username: string;
  viewerCount: number;
  isLive: boolean;
  avatarUrl: string;
}

// Regular Stream interface with category
export interface CategoryStream extends BaseStream {
  category: string;
  game?: never; // Ensure game is not present
}

// Game Stream interface with game
export interface GameStream extends BaseStream {
  game: string;
  category?: string; // Category can be optional in game streams
}

// Union type that represents all possible stream types
export type Stream = CategoryStream | GameStream;

// Type guard to check if a stream has a game property
export function hasGame(stream: Stream): stream is GameStream {
  return 'game' in stream && typeof (stream as GameStream).game === 'string';
}

// Type guard to check if a stream has a category property
export function hasCategory(stream: Stream): stream is CategoryStream {
  return 'category' in stream && typeof (stream as CategoryStream).category === 'string';
}

// Function to get the game or category safely as a string
export function getGameOrCategory(stream: Stream): string {
  if (hasGame(stream)) {
    return stream.game;
  } else if (hasCategory(stream)) {
    return stream.category;
  }
  return 'Unknown';
}
