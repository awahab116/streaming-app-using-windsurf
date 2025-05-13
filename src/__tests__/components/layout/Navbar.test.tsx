import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from '../../../components/layout/Navbar';
import { BrowserRouter } from 'react-router-dom';

// Mock the dropdown components to avoid issues in testing
jest.mock('../../../components/ui/dropdown-menu', () => ({
  DropdownMenu: ({ children }: { children: React.ReactNode }) => <div data-testid="dropdown-menu">{children}</div>,
  DropdownMenuContent: ({ children }: { children: React.ReactNode }) => <div data-testid="dropdown-content">{children}</div>,
  DropdownMenuTrigger: ({ children }: { children: React.ReactNode }) => <div data-testid="dropdown-trigger">{children}</div>,
}));

// Mock the scroll area component
jest.mock('../../../components/ui/scroll-area', () => ({
  ScrollArea: ({ children }: { children: React.ReactNode }) => <div data-testid="scroll-area">{children}</div>,
}));

// Mock the tabs components
jest.mock('../../../components/ui/tabs', () => ({
  Tabs: ({ children }: { children: React.ReactNode }) => <div data-testid="tabs">{children}</div>,
  TabsList: ({ children }: { children: React.ReactNode }) => <div data-testid="tabs-list">{children}</div>,
  TabsTrigger: ({ value, children }: { value: string, children: React.ReactNode }) => 
    <div data-testid={`tab-${value}`}>{children}</div>,
  TabsContent: ({ value, children }: { value: string, children: React.ReactNode }) => 
    <div data-testid={`tab-content-${value}`}>{children}</div>,
}));

const renderWithRouter = (ui: React.ReactElement) => {
  return render(ui, { wrapper: BrowserRouter });
};

describe('Navbar Component', () => {
  test('renders the logo and navigation links', () => {
    renderWithRouter(<Navbar />);
    
    // Check for the Browse link
    expect(screen.getByText('Browse')).toBeInTheDocument();
    
    // Check for the Analytics link
    expect(screen.getByText('Analytics')).toBeInTheDocument();
  });

  test('renders the search input', () => {
    renderWithRouter(<Navbar />);
    
    const searchInput = screen.getByPlaceholderText('Search');
    expect(searchInput).toBeInTheDocument();
  });

  test('updates search query when typing', () => {
    renderWithRouter(<Navbar />);
    
    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: 'test query' } });
    
    expect(searchInput.value).toBe('test query');
  });

  test('renders authentication buttons', () => {
    renderWithRouter(<Navbar />);
    
    expect(screen.getByText('Log In')).toBeInTheDocument();
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
  });

  test('renders the star/prime gaming button', () => {
    renderWithRouter(<Navbar />);
    
    // The Star icon should be present (we can't test for the icon directly,
    // but we can check for the dropdown trigger that contains it)
    expect(screen.getByTestId('dropdown-trigger')).toBeInTheDocument();
  });

  test('renders the user profile button', () => {
    renderWithRouter(<Navbar />);
    
    // Find the button that contains the User icon
    const userButtons = screen.getAllByRole('button');
    // The last button should be the user profile button
    const userButton = userButtons[userButtons.length - 1];
    expect(userButton).toBeInTheDocument();
  });
});
