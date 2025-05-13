import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import  AreaChart  from '../charts/AreaChart';
import ComposedChart from '../charts/ComposedChart';
// import { useTimeRange } from '../../contexts/TimeRangeContext';

interface ActiveUsersChartProps {
  dailyData: any[];
  weeklyData: any[];
  monthlyData: any[];
}

const ActiveUsersChart: React.FC<ActiveUsersChartProps> = ({ dailyData, weeklyData, monthlyData }) => {
  // const { timeRange } = useTimeRange();

  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
      <CardHeader className="border-b border-gray-700/50 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Active Users</CardTitle>
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-purple-500"></div>
              <span>New</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-blue-500"></div>
              <span>Returning</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <Tabs defaultValue="daily" className="w-full">
          <div className="px-6 pt-4">
            <TabsList className="w-full grid grid-cols-3 bg-gray-800/50 backdrop-blur-sm p-1 rounded-lg">
              <TabsTrigger value="daily" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white rounded-md">Daily</TabsTrigger>
              <TabsTrigger value="weekly" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white rounded-md">Weekly</TabsTrigger>
              <TabsTrigger value="monthly" className="data-[state=active]:bg-gray-700 data-[state=active]:text-white rounded-md">Monthly</TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="daily" className="h-[400px] mt-0">
            <AreaChart 
              data={dailyData}
              dataKeys={{
                xAxis: 'name',
                areas: [
                  {
                    key: 'returningUsers',
                    name: 'Returning Users',
                    color: '#3b82f6',
                    stackId: '1'
                  },
                  {
                    key: 'newUsers',
                    name: 'New Users',
                    color: '#8884d8',
                    stackId: '1'
                  }
                ]
              }}
              height="100%"
              margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
            />
          </TabsContent>
          
          <TabsContent value="weekly" className="h-[400px] mt-0">
            <AreaChart 
              data={weeklyData}
              dataKeys={{
                xAxis: 'name',
                areas: [
                  {
                    key: 'returningUsers',
                    name: 'Returning Users',
                    color: '#3b82f6',
                    stackId: '1'
                  },
                  {
                    key: 'newUsers',
                    name: 'New Users',
                    color: '#8884d8',
                    stackId: '1'
                  }
                ]
              }}
              height="100%"
              margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
            />
          </TabsContent>
          
          <TabsContent value="monthly" className="h-[400px] mt-0">
            <ComposedChart 
              data={monthlyData}
              xAxisDataKey="name"
              elements={[
                {
                  type: 'area',
                  dataKey: 'returningUsers',
                  name: 'Returning Users',
                  color: '#3b82f6',
                  stackId: '1'
                },
                {
                  type: 'area',
                  dataKey: 'newUsers',
                  name: 'New Users',
                  color: '#8884d8',
                  stackId: '1'
                },
                {
                  type: 'line',
                  dataKey: 'users',
                  name: 'Total Users',
                  color: '#10b981',
                  strokeWidth: 3,
                  dot: { r: 4, fill: '#10b981', stroke: '#10b981', strokeWidth: 2 }
                }
              ]}
              height="100%"
              margin={{ top: 20, right: 30, left: 20, bottom: 0 }}
              showBrush={true}
            />
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ActiveUsersChart;
