import React from 'react';
import { 
  PieChart as RechartsPieChart, 
  Pie, 
  Cell, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { tooltipStyle, tooltipItemStyle } from '../../utils/chartConfigs';

export interface PieChartProps {
  data: Array<{ name: string; value: number }>;
  colors: string[];
  dataKey?: string;
  nameKey?: string;
  innerRadius?: number;
  outerRadius?: number;
  paddingAngle?: number;
  cornerRadius?: number;
  height?: number | string;
  showTooltip?: boolean;
  showLabels?: boolean;
  labelType?: 'percent' | 'value' | 'name' | 'name-percent';
}

const PieChart: React.FC<PieChartProps> = ({
  data,
  colors,
  dataKey = 'value',
  nameKey = 'name',
  innerRadius = 0,
  outerRadius = 80,
  paddingAngle = 0,
  cornerRadius = 0,
  height = 300,
  showTooltip = true,
  showLabels = false,
  labelType = 'percent',
}) => {
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, name, value }: any) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    let label = '';
    switch (labelType) {
      case 'percent':
        label = `${(percent * 100).toFixed(0)}%`;
        break;
      case 'value':
        label = `${value}`;
        break;
      case 'name':
        label = name;
        break;
      case 'name-percent':
        label = `${name}: ${(percent * 100).toFixed(0)}%`;
        break;
      default:
        label = `${(percent * 100).toFixed(0)}%`;
    }

    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {label}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsPieChart>
        <defs>
          {data.map((_entry, index) => (
            <linearGradient key={`gradient-${index}`} id={`colorSegment${index}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={colors[index % colors.length]} stopOpacity={1}/>
              <stop offset="100%" stopColor={colors[index % colors.length]} stopOpacity={0.7}/>
            </linearGradient>
          ))}
        </defs>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={showLabels}
          label={showLabels ? renderCustomizedLabel : undefined}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={paddingAngle}
          cornerRadius={cornerRadius}
          dataKey={dataKey}
          nameKey={nameKey}
          stroke="rgba(255, 255, 255, 0.1)"
          strokeWidth={2}
        >
          {data.map((_, index) => (
            <Cell 
              key={`cell-${index}`} 
              fill={`url(#colorSegment${index})`} 
              className="drop-shadow-xl hover:opacity-80 transition-opacity duration-300"
            />
          ))}
        </Pie>
        {showTooltip && (
          <Tooltip 
            contentStyle={tooltipStyle}
            itemStyle={tooltipItemStyle}
            formatter={(value) => [`${value.toLocaleString()}`, '']}
          />
        )}
      </RechartsPieChart>
    </ResponsiveContainer>
  );
};

export default PieChart;
