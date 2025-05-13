import React from 'react';
import { 
  RadarChart as RechartsRadarChart, 
  Radar, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis,
  Tooltip,
  Legend,
  ResponsiveContainer 
} from 'recharts';
import { tooltipStyle, tooltipItemStyle } from '../../utils/chartConfigs';

export interface RadarDataKey {
  key: string;
  name: string;
  color: string;
  fillOpacity?: number;
}

export interface RadarChartProps {
  data: any[];
  dataKeys: RadarDataKey[];
  angleDataKey?: string;
  height?: number | string;
  showTooltip?: boolean;
  showLegend?: boolean;
  domain?: [number, number];
}

const RadarChart: React.FC<RadarChartProps> = ({
  data,
  dataKeys,
  angleDataKey = 'subject',
  height = 300,
  showTooltip = true,
  showLegend = true,
  domain = [0, 150],
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsRadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke="rgba(255, 255, 255, 0.1)" />
        <PolarAngleAxis dataKey={angleDataKey} tick={{ fill: '#888', fontSize: 12 }} />
        <PolarRadiusAxis angle={30} domain={domain} tick={{ fill: '#888', fontSize: 10 }} />
        
        {dataKeys.map((radar) => (
          <Radar 
            key={radar.key}
            name={radar.name} 
            dataKey={radar.key} 
            stroke={radar.color} 
            fill={radar.color} 
            fillOpacity={radar.fillOpacity || 0.5} 
            animationDuration={1500}
          />
        ))}
        
        {showLegend && <Legend iconType="circle" />}
        
        {showTooltip && (
          <Tooltip 
            contentStyle={tooltipStyle}
            itemStyle={tooltipItemStyle}
          />
        )}
      </RechartsRadarChart>
    </ResponsiveContainer>
  );
};

export default RadarChart;
