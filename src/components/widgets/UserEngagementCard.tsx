import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import RadarChart from '../charts/RadarChart';

interface UserEngagementCardProps {
  data: any[];
}

const UserEngagementCard: React.FC<UserEngagementCardProps> = ({ data }) => {
  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
      <CardHeader className="border-b border-gray-700/50 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">User Engagement Metrics</CardTitle>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span>Current</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Previous</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] flex items-center justify-center">
          <RadarChart 
            data={data}
            dataKeys={[
              {
                key: 'B',
                name: 'Previous Period',
                color: '#3b82f6',
                fillOpacity: 0.3
              },
              {
                key: 'A',
                name: 'Current Period',
                color: '#8884d8',
                fillOpacity: 0.5
              }
            ]}
            domain={[0, 150]}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default UserEngagementCard;
