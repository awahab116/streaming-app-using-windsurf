import React from 'react';
import TimeRangeSelector from './TimeRangeSelector';
import { Card, CardContent } from '../ui/card';
import { Clock } from 'lucide-react';

interface DashboardHeaderProps {
  title?: string;
  subtitle?: string;
}

const DashboardHeader: React.FC<DashboardHeaderProps> = ({
  title = 'Analytics Dashboard',
  subtitle = 'Comprehensive insights for your streaming platform'
}) => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
          {title}
        </h1>
        <p className="text-gray-400 mt-1">{subtitle}</p>
      </div>
      <div className="flex items-center gap-4">
        <Card className="bg-gray-800/60 backdrop-blur-sm border-gray-700">
          <CardContent className="flex items-center gap-2 px-4 py-2">
            <Clock className="h-5 w-5 text-purple-400" />
            <span className="text-gray-300">{new Date().toLocaleString()}</span>
          </CardContent>
        </Card>
        <TimeRangeSelector />
      </div>
    </div>
  );
};

export default DashboardHeader;
