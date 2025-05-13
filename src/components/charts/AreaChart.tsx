import React from 'react';
import { 
  AreaChart as RechartsAreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer 
} from 'recharts';
import { tooltipStyle, tooltipItemStyle, axisStyle, gridStyle } from '../../utils/chartConfigs';

export interface AreaDataKey {
  key: string;
  name: string;
  color: string;
  stackId?: string;
}

export interface AreaChartProps {
  data: any[];
  dataKeys: {
    xAxis: string;
    areas: AreaDataKey[];
  };
  height?: number | string;
  margin?: { top: number; right: number; left: number; bottom: number };
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
}

const AreaChart: React.FC<AreaChartProps> = ({
  data,
  dataKeys,
  height = 400,
  margin = { top: 20, right: 30, left: 20, bottom: 0 },
  showGrid = true,
  showTooltip = true,
  showLegend = true,
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsAreaChart data={data} margin={margin}>
        <defs>
          {dataKeys.areas.map((area, index) => (
            <linearGradient key={`gradient-${index}`} id={`color${area.key}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor={area.color} stopOpacity={0.8}/>
              <stop offset="95%" stopColor={area.color} stopOpacity={0.1}/>
            </linearGradient>
          ))}
        </defs>
        
        {showGrid && <CartesianGrid {...gridStyle} />}
        
        <XAxis 
          dataKey={dataKeys.xAxis} 
          {...axisStyle}
        />
        
        <YAxis 
          {...axisStyle}
        />
        
        {showTooltip && (
          <Tooltip 
            contentStyle={tooltipStyle}
            itemStyle={tooltipItemStyle}
            formatter={(value) => [`${value.toLocaleString()}`, '']}
            labelFormatter={(label) => `${label}`}
          />
        )}
        
        {showLegend && <Legend verticalAlign="top" height={36} iconType="circle" />}
        
        {dataKeys.areas.map((area) => (
          <Area 
            key={area.key}
            type="monotone" 
            dataKey={area.key} 
            name={area.name}
            stackId={area.stackId} 
            stroke={area.color} 
            fillOpacity={1} 
            fill={`url(#color${area.key})`} 
            animationDuration={1500}
          />
        ))}
      </RechartsAreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChart;
