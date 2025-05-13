import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import StreamCard from '../../../components/stream/StreamCard';

// Mock the react-router-dom useNavigate hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate
}));

// Mock the Avatar components from Radix UI
jest.mock('@radix-ui/react-avatar', () => ({
  Root: ({ children, className }: { children: React.ReactNode, className: string }) => 
    <div data-testid="avatar-root" className={className}>{children}</div>,
  Image: ({ src, alt, className }: { src: string, alt: string, className: string }) => 
    <img data-testid="avatar-image" src={src} alt={alt} className={className} />,
  Fallback: ({ children, className }: { children: React.ReactNode, className: string }) => 
    <div data-testid="avatar-fallback" className={className}>{children}</div>
}));

describe('StreamCard Component', () => {
  const defaultProps = {
    id: '1',
    title: 'Test Stream Title',
    thumbnailUrl: 'https://example.com/thumbnail.jpg',
    username: 'testuser',
    category: 'Just Chatting',
    viewerCount: 1500,
    isLive: true,
    avatarUrl: 'https://example.com/avatar.jpg'
  };

  beforeEach(() => {
    mockNavigate.mockClear();
  });

  test('renders with correct content', () => {
    render(<StreamCard {...defaultProps} />);
    
    // Check if title and other text content is rendered
    expect(screen.getByText(defaultProps.title)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.username)).toBeInTheDocument();
    expect(screen.getByText(defaultProps.category)).toBeInTheDocument();
    
    // Check if viewer count is formatted correctly
    expect(screen.getByText('1.5K viewers')).toBeInTheDocument();
    
    // Check if LIVE badge is shown
    expect(screen.getByText('LIVE')).toBeInTheDocument();
    
    // Check if thumbnail is rendered
    const thumbnail = screen.getByAltText(defaultProps.title);
    expect(thumbnail).toBeInTheDocument();
    expect(thumbnail).toHaveAttribute('src', defaultProps.thumbnailUrl);
    
    // Check if avatar is rendered
    const avatar = screen.getByTestId('avatar-image');
    expect(avatar).toBeInTheDocument();
    expect(avatar).toHaveAttribute('src', defaultProps.avatarUrl);
  });

  test('formats viewer count correctly', () => {
    // Test with count less than 1000
    const { unmount } = render(<StreamCard {...defaultProps} viewerCount={500} />);
    expect(screen.getByText('500 viewers')).toBeInTheDocument();
    
    // Cleanup and render with count in thousands
    unmount();
    render(<StreamCard {...defaultProps} viewerCount={5500} />);
    expect(screen.getByText('5.5K viewers')).toBeInTheDocument();
  });

  test('does not show LIVE badge when stream is not live', () => {
    render(<StreamCard {...defaultProps} isLive={false} />);
    expect(screen.queryByText('LIVE')).not.toBeInTheDocument();
  });

  test('navigates to stream page when clicked', () => {
    render(<StreamCard {...defaultProps} />);
    
    // Find the card and click it
    const card = screen.getByRole('article');
    fireEvent.click(card);
    
    // Check if navigate was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith(`/stream/${defaultProps.id}`);
  });

  test('shows avatar fallback when avatar image fails to load', () => {
    render(<StreamCard {...defaultProps} avatarUrl="" />);
    
    // The fallback should contain the first letter of the username
    const fallback = screen.getByTestId('avatar-fallback');
    expect(fallback).toBeInTheDocument();
    expect(fallback.textContent).toBe('T'); // First letter of 'testuser' capitalized
  });
});
