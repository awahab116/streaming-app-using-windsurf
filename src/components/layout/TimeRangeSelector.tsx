import React from 'react';
import { useTimeRange } from '../../contexts/TimeRangeContext';

const TimeRangeSelector: React.FC = () => {
  const { timeRange, setTimeRange } = useTimeRange();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTimeRange(e.target.value as any);
  };

  return (
    <select 
      className="bg-gray-800/60 backdrop-blur-sm text-gray-300 border border-gray-700 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-purple-500"
      value={timeRange}
      onChange={handleChange}
    >
      <option value="7d">Last 7 days</option>
      <option value="30d">Last 30 days</option>
      <option value="90d">Last 90 days</option>
      <option value="ytd">Year to date</option>
      <option value="custom">Custom range</option>
    </select>
  );
};

export default TimeRangeSelector;
