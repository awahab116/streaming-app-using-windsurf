import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import StreamGrid, { Stream } from '../../../components/stream/StreamGrid';

// Mock the StreamCard component
jest.mock('../../../components/stream/StreamCard', () => {
  return function MockStreamCard(props: any) {
    return (
      <div data-testid="stream-card" data-stream-id={props.id}>
        <div data-testid="stream-title">{props.title}</div>
        <div data-testid="stream-username">{props.username}</div>
      </div>
    );
  };
});

describe('StreamGrid Component', () => {
  const mockStreams: Stream[] = [
    {
      id: '1',
      title: 'Stream 1',
      thumbnailUrl: 'https://example.com/thumb1.jpg',
      username: 'user1',
      category: 'Gaming',
      viewerCount: 1000,
      isLive: true,
      avatarUrl: 'https://example.com/avatar1.jpg'
    },
    {
      id: '2',
      title: 'Stream 2',
      thumbnailUrl: 'https://example.com/thumb2.jpg',
      username: 'user2',
      category: 'Just Chatting',
      viewerCount: 2000,
      isLive: true,
      avatarUrl: 'https://example.com/avatar2.jpg'
    },
    {
      id: '3',
      title: 'Stream 3',
      thumbnailUrl: 'https://example.com/thumb3.jpg',
      username: 'user3',
      category: 'Music',
      viewerCount: 3000,
      isLive: false,
      avatarUrl: 'https://example.com/avatar3.jpg'
    }
  ];

  test('renders the correct number of StreamCard components', () => {
    render(<StreamGrid streams={mockStreams} />);
    
    const streamCards = screen.getAllByTestId('stream-card');
    expect(streamCards).toHaveLength(mockStreams.length);
  });

  test('passes the correct props to each StreamCard', () => {
    render(<StreamGrid streams={mockStreams} />);
  
    const streamCards = screen.getAllByTestId('stream-card');
    expect(streamCards).toHaveLength(mockStreams.length);
  
    mockStreams.forEach((stream, index) => {
      const streamCard = streamCards[index];
  
      // Check data-stream-id attribute
      expect(streamCard).toHaveAttribute('data-stream-id', stream.id);
  
      // Check if title and username appear in the document
      expect(screen.getByText(stream.title)).toBeInTheDocument();
      expect(screen.getByText(stream.username)).toBeInTheDocument();
    });
  });
  

  test('renders the title when provided', () => {
    const title = 'Popular Streams';
    render(<StreamGrid streams={mockStreams} title={title} />);
    
    expect(screen.getByText(title)).toBeInTheDocument();
  });

  test('does not render a title when not provided', () => {
    render(<StreamGrid streams={mockStreams} />);
    
    // There should be no h2 or h3 elements (which would typically be used for titles)
    const headings = document.querySelectorAll('h2, h3');
    expect(headings.length).toBe(0);
  });

  test('renders correctly with an empty streams array', () => {
    render(<StreamGrid streams={[]} title="Empty Grid" />);
    
    // Title should still be rendered
    expect(screen.getByText('Empty Grid')).toBeInTheDocument();
    
    // No stream cards should be rendered
    const streamCards = screen.queryAllByTestId('stream-card');
    expect(streamCards).toHaveLength(0);
  });
});
