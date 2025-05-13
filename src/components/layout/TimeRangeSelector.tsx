import React from 'react';
import { useTimeRange } from '../../contexts/TimeRangeContext';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const TimeRangeSelector: React.FC = () => {
  const { timeRange, setTimeRange } = useTimeRange();

  const handleValueChange = (value: string) => {
    setTimeRange(value as any);
  };

  return (
    <Select value={timeRange} onValueChange={handleValueChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select time range" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="7d">Last 7 days</SelectItem>
        <SelectItem value="30d">Last 30 days</SelectItem>
        <SelectItem value="90d">Last 90 days</SelectItem>
        <SelectItem value="ytd">Year to date</SelectItem>
        <SelectItem value="custom">Custom range</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default TimeRangeSelector;
