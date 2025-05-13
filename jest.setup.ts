// Import jest-dom matchers
import '@testing-library/jest-dom';

// Polyfill TextEncoder and TextDecoder for React Router
if (typeof global.TextEncoder === 'undefined') {
  const { TextEncoder, TextDecoder } = require('util');
  global.TextEncoder = TextEncoder;
  global.TextDecoder = TextDecoder;
}

// Mock any global objects if needed
global.ResizeObserver = jest.fn().mockImplementation(() => ({
  observe: jest.fn(),
  unobserve: jest.fn(),
  disconnect: jest.fn(),
}));

// Mock URL.createObjectURL
if (typeof window !== 'undefined') {
  window.URL.createObjectURL = jest.fn();
  window.URL.revokeObjectURL = jest.fn();
}
