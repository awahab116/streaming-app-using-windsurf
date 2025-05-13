import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import ComposedChart from '../charts/ComposedChart';
import { formatCurrency, formatCompactCurrency } from '../../utils/formatters';

interface RevenueAnalyticsCardProps {
  data: any[];
}

const RevenueAnalyticsCard: React.FC<RevenueAnalyticsCardProps> = ({ data }) => {
  return (
    <Card className="bg-gradient-to-br from-gray-800 to-gray-900 border-none overflow-hidden">
      <CardHeader className="border-b border-gray-700/50 pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">Revenue Analytics</CardTitle>
          <div className="flex items-center gap-2">
            <select className="bg-gray-800/60 text-xs backdrop-blur-sm text-gray-300 border border-gray-700 rounded-lg px-2 py-1 outline-none focus:ring-2 focus:ring-amber-500">
              <option>Monthly</option>
              <option>Quarterly</option>
              <option>Yearly</option>
            </select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[400px]">
          <ComposedChart 
            data={data}
            xAxisDataKey="name"
            elements={[
              {
                type: 'area',
                dataKey: 'subscriptions',
                name: 'Subscriptions',
                color: '#f59e0b',
                stackId: '1'
              },
              {
                type: 'area',
                dataKey: 'donations',
                name: 'Donations',
                color: '#3b82f6',
                stackId: '1'
              },
              {
                type: 'area',
                dataKey: 'ads',
                name: 'Ad Revenue',
                color: '#10b981',
                stackId: '1'
              },
              {
                type: 'area',
                dataKey: 'merchandise',
                name: 'Merchandise',
                color: '#8b5cf6',
                stackId: '1'
              },
              {
                type: 'line',
                dataKey: (data) => data.subscriptions + data.donations + data.ads + data.merchandise,
                name: 'Total Revenue',
                color: '#fff',
                strokeWidth: 2,
                dot: { r: 4, fill: '#fff', stroke: '#fff', strokeWidth: 2 }
              }
            ]}
            yAxisFormatter={(value) => formatCompactCurrency(value)}
            showBrush={true}
            referenceLines={[
              {
                y: 60000,
                label: 'Target',
                stroke: 'rgba(255, 255, 255, 0.3)',
                strokeDasharray: '3 3'
              }
            ]}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          />
        </div>
        
        {/* Revenue Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
            <div className="text-xs text-gray-400 mb-1">Subscriptions</div>
            <div className="text-lg font-bold text-amber-400">{formatCurrency(68000)}</div>
            <div className="text-xs text-green-400 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span>+5.2%</span>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
            <div className="text-xs text-gray-400 mb-1">Donations</div>
            <div className="text-lg font-bold text-blue-400">{formatCurrency(18000)}</div>
            <div className="text-xs text-green-400 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span>+12.7%</span>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
            <div className="text-xs text-gray-400 mb-1">Ad Revenue</div>
            <div className="text-lg font-bold text-green-400">{formatCurrency(11500)}</div>
            <div className="text-xs text-red-400 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
              </svg>
              <span>-2.3%</span>
            </div>
          </div>
          <div className="bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg border border-gray-700/50">
            <div className="text-xs text-gray-400 mb-1">Merchandise</div>
            <div className="text-lg font-bold text-purple-400">{formatCurrency(8000)}</div>
            <div className="text-xs text-green-400 flex items-center mt-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
              </svg>
              <span>+18.4%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RevenueAnalyticsCard;
