import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DashboardHeader from '../../../components/layout/DashboardHeader';

// Mock the TimeRangeSelector component
jest.mock('../../../components/layout/TimeRangeSelector', () => {
  return function MockTimeRangeSelector() {
    return <div data-testid="time-range-selector">Time Range Selector</div>;
  };
});

describe('DashboardHeader Component', () => {
  test('renders with default title and subtitle', () => {
    render(<DashboardHeader />);
    
    expect(screen.getByText('Analytics Dashboard')).toBeInTheDocument();
    expect(screen.getByText('Comprehensive insights for your streaming platform')).toBeInTheDocument();
  });

  test('renders with custom title and subtitle', () => {
    const customTitle = 'Custom Dashboard';
    const customSubtitle = 'Custom insights';
    
    render(<DashboardHeader title={customTitle} subtitle={customSubtitle} />);
    
    expect(screen.getByText(customTitle)).toBeInTheDocument();
    expect(screen.getByText(customSubtitle)).toBeInTheDocument();
  });

  test('renders the current date/time', () => {
    // Mock the Date object to return a fixed date
    const mockDate = new Date('2023-01-01T12:00:00');
    jest.spyOn(global, 'Date').mockImplementation(() => mockDate);
    
    render(<DashboardHeader />);
    
    // The format might vary based on locale, so we'll check for parts of the date
    expect(screen.getByText(mockDate.toLocaleString())).toBeInTheDocument();
    
    // Restore the original Date implementation
    jest.restoreAllMocks();
  });

  test('includes TimeRangeSelector component', () => {
    render(<DashboardHeader />);
    
    expect(screen.getByTestId('time-range-selector')).toBeInTheDocument();
  });
});
