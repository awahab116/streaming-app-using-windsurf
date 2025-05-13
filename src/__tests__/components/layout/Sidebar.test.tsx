import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Sidebar from '../../../components/layout/Sidebar';

// Mock the scroll area component since it might cause issues in tests
jest.mock('../../../components/ui/scroll-area', () => ({
  ScrollArea: ({ children }: { children: React.ReactNode }) => <div data-testid="scroll-area">{children}</div>,
}));

describe('Sidebar Component', () => {
  test('renders with correct title', () => {
    render(<Sidebar />);
    expect(screen.getByText('LIVE CHANNELS')).toBeInTheDocument();
  });

  test('displays the correct number of channels', () => {
    render(<Sidebar />);
    // There should be 10 channels based on the MOCK_CHANNELS array
    const channelCards = screen.getAllByRole('listitem');
    expect(channelCards).toHaveLength(10);
  });

  test('toggles sidebar collapse state when button is clicked', () => {
    render(<Sidebar />);
    
    // Initially the sidebar should be expanded
    expect(screen.getByText('LIVE CHANNELS')).toBeVisible();
    
    // Find and click the collapse button (it has the ChevronLeft icon)
    const collapseButton = screen.getByTestId('collapse-button');
    fireEvent.click(collapseButton);
    
    // After clicking, the title should be hidden
    expect(screen.queryByText('LIVE CHANNELS')).not.toBeVisible();
    
    // Click again to expand
    fireEvent.click(collapseButton);
    
    // Title should be visible again
    expect(screen.getByText('LIVE CHANNELS')).toBeVisible();
  });

  test('displays channel information correctly', () => {
    render(<Sidebar />);
    
    // Check for the first channel in the mock data
    expect(screen.getByText('mooda')).toBeInTheDocument();
    expect(screen.getByText('Just Sleeping')).toBeInTheDocument();
    expect(screen.getByText('4.0K')).toBeInTheDocument();
    
    // Check for another channel
    expect(screen.getByText('ironmouse')).toBeInTheDocument();
    expect(screen.getByText('Pico Park')).toBeInTheDocument();
    expect(screen.getByText('8.5K')).toBeInTheDocument();
  });

  test('shows live indicator for live channels', () => {
    render(<Sidebar />);
    
    // All channels in the mock data are live, so we should have 10 badges
    const liveBadges = document.querySelectorAll('[class*="Badge"]');
    expect(liveBadges.length).toBe(10);
  });
});
