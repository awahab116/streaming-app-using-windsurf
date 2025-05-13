import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import PieChart from '../charts/PieChart';
import { COLORS } from '../../utils/colors';
import { formatPercentage } from '../../utils/formatters';

interface UserSegmentsCardProps {
  data: any[];
}

const UserSegmentsCard: React.FC<UserSegmentsCardProps> = ({ data }) => {
  const total = data.reduce((acc, curr) => acc + curr.value, 0);

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
      <CardHeader className="border-b border-gray-700/50 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">User Segments</CardTitle>
          <div className="flex items-center gap-2">
            <select className="bg-gray-800/60 text-xs backdrop-blur-sm text-gray-300 border border-gray-700 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-purple-500">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[250px] flex items-center justify-center">
          <PieChart 
            data={data}
            colors={COLORS.secondary}
            innerRadius={70}
            outerRadius={90}
            paddingAngle={4}
            cornerRadius={8}
          />
        </div>
        
        <div className="flex justify-center gap-6 mt-4">
          {data.map((entry, index) => (
            <div key={`legend-${index}`} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: COLORS.secondary[index] }}></div>
              <div className="flex flex-col">
                <span className="text-sm text-gray-300">{entry.name}</span>
                <span className="text-xs text-gray-400">{formatPercentage((entry.value / total) * 100)}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UserSegmentsCard;
