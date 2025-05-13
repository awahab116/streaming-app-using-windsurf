import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import PieChart from '../charts/PieChart';
import { COLORS } from '../../utils/colors';

interface PlatformDistributionCardProps {
  data: any[];
}

const PlatformDistributionCard: React.FC<PlatformDistributionCardProps> = ({ data }) => {
  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
      <CardHeader className="border-b border-gray-700/50 pb-3">
        <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Platform Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] flex items-center justify-center">
          <PieChart 
            data={data}
            colors={COLORS.tertiary}
            showLabels={true}
            labelType="name-percent"
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PlatformDistributionCard;
