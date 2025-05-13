import React, { createContext, useState, useContext, ReactNode } from 'react';

export type TimeRange = '7d' | '30d' | '90d' | 'ytd' | 'custom';

interface TimeRangeContextType {
  timeRange: TimeRange;
  setTimeRange: (range: TimeRange) => void;
  startDate: Date | null;
  endDate: Date | null;
  setCustomDateRange: (start: Date, end: Date) => void;
}

const TimeRangeContext = createContext<TimeRangeContextType | undefined>(undefined);

export interface TimeRangeProviderProps {
  children: ReactNode;
}

export const TimeRangeProvider: React.FC<TimeRangeProviderProps> = ({ children }) => {
  const [timeRange, setTimeRange] = useState<TimeRange>('7d');
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const setCustomDateRange = (start: Date, end: Date) => {
    setStartDate(start);
    setEndDate(end);
    setTimeRange('custom');
  };

  return (
    <TimeRangeContext.Provider value={{ 
      timeRange, 
      setTimeRange, 
      startDate, 
      endDate, 
      setCustomDateRange 
    }}>
      {children}
    </TimeRangeContext.Provider>
  );
};

export const useTimeRange = (): TimeRangeContextType => {
  const context = useContext(TimeRangeContext);
  if (context === undefined) {
    throw new Error('useTimeRange must be used within a TimeRangeProvider');
  }
  return context;
};
