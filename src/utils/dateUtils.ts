/**
 * Utility functions for date operations
 */

/**
 * Format a date to a localized string
 */
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};

/**
 * Get date range based on predefined time periods
 */
export const getDateRange = (range: string): { start: Date; end: Date } => {
  const end = new Date();
  const start = new Date();
  
  switch (range) {
    case '7d':
      start.setDate(end.getDate() - 7);
      break;
    case '30d':
      start.setDate(end.getDate() - 30);
      break;
    case '90d':
      start.setDate(end.getDate() - 90);
      break;
    case 'ytd':
      start.setMonth(0);
      start.setDate(1);
      break;
    default:
      start.setDate(end.getDate() - 7);
  }
  
  return { start, end };
};

/**
 * Format a date range as a string
 */
export const formatDateRange = (start: Date, end: Date): string => {
  return `${formatDate(start)} - ${formatDate(end)}`;
};
