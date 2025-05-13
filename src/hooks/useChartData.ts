import { useMemo } from 'react';
import { useTimeRange } from '../contexts/TimeRangeContext';
import { dailyActiveUsers, weeklyActiveUsers, monthlyActiveUsers } from '../data/activeUsers';
import { revenueData } from '../data/revenueData';

/**
 * Hook to get active users data based on the selected time range
 */
export const useActiveUsersData = () => {
  const { timeRange } = useTimeRange();
  
  return useMemo(() => {
    switch (timeRange) {
      case '7d':
        return dailyActiveUsers.slice(-7);
      case '30d':
        return weeklyActiveUsers;
      case '90d':
      case 'ytd':
      case 'custom':
        return monthlyActiveUsers;
      default:
        return dailyActiveUsers.slice(-7);
    }
  }, [timeRange]);
};

/**
 * Hook to get revenue data based on the selected time range
 */
export const useRevenueData = () => {
  const { timeRange } = useTimeRange();
  
  return useMemo(() => {
    switch (timeRange) {
      case '7d':
        // For simplicity, we'll just return a subset of the monthly data
        return revenueData.slice(-2);
      case '30d':
        return revenueData.slice(-3);
      case '90d':
      case 'ytd':
      case 'custom':
        return revenueData;
      default:
        return revenueData.slice(-3);
    }
  }, [timeRange]);
};
