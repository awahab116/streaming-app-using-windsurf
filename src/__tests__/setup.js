// Mock TextEncoder/TextDecoder for Jest environment
if (typeof TextEncoder === 'undefined') {
  global.TextEncoder = require('util').TextEncoder;
}

if (typeof TextDecoder === 'undefined') {
  global.TextDecoder = require('util').TextDecoder;
}

// Mock URL.createObjectURL
if (typeof window !== 'undefined') {
  window.URL.createObjectURL = jest.fn();
  window.URL.revokeObjectURL = jest.fn();
}
