import React from 'react';
import { 
  ComposedChart as RechartsComposedChart, 
  Area, 
  Line,
  Bar,
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  Brush,
  ReferenceLine,
  ResponsiveContainer 
} from 'recharts';
import { tooltipStyle, tooltipItemStyle, axisStyle, gridStyle } from '../../utils/chartConfigs';

export interface ChartElement {
  type: 'area' | 'line' | 'bar';
  dataKey: string | ((data: any) => any);
  name: string;
  color: string;
  stackId?: string;
  fillOpacity?: number;
  strokeWidth?: number;
  dot?: boolean | object;
}

export interface ReferenceLineConfig {
  y?: number;
  x?: number | string;
  label?: string;
  stroke?: string;
  strokeDasharray?: string;
}

export interface ComposedChartProps {
  data: any[];
  elements: ChartElement[];
  xAxisDataKey: string;
  height?: number | string;
  margin?: { top: number; right: number; left: number; bottom: number };
  showGrid?: boolean;
  showTooltip?: boolean;
  showLegend?: boolean;
  showBrush?: boolean;
  yAxisFormatter?: (value: number) => string;
  referenceLines?: ReferenceLineConfig[];
}

const ComposedChart: React.FC<ComposedChartProps> = ({
  data,
  elements,
  xAxisDataKey,
  height = 400,
  margin = { top: 20, right: 30, left: 20, bottom: 0 },
  showGrid = true,
  showTooltip = true,
  showLegend = true,
  showBrush = false,
  yAxisFormatter,
  referenceLines = [],
}) => {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <RechartsComposedChart data={data} margin={margin}>
        <defs>
          {elements
            .filter(el => el.type === 'area' && typeof el.dataKey === 'string')
            .map((element, index) => (
              <linearGradient key={`gradient-${index}`} id={`color${element.dataKey}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={element.color} stopOpacity={0.8}/>
                <stop offset="95%" stopColor={element.color} stopOpacity={0.1}/>
              </linearGradient>
            ))}
        </defs>
        
        {showGrid && <CartesianGrid {...gridStyle} />}
        
        <XAxis 
          dataKey={xAxisDataKey} 
          {...axisStyle}
        />
        
        <YAxis 
          {...axisStyle}
          tickFormatter={yAxisFormatter}
        />
        
        {showTooltip && (
          <Tooltip 
            contentStyle={tooltipStyle}
            itemStyle={tooltipItemStyle}
            formatter={(value) => [`${value.toLocaleString()}`, '']}
            labelFormatter={(label) => `${label}`}
          />
        )}
        
        {showLegend && (
          <Legend 
            verticalAlign="top" 
            height={36} 
            iconType="circle" 
            iconSize={10}
            wrapperStyle={{ paddingBottom: '10px' }}
          />
        )}
        
        {elements.map((element, index) => {
          if (element.type === 'area') {
            return (
              <Area 
                key={`area-${index}`}
                type="monotone" 
                dataKey={element.dataKey} 
                name={element.name} 
                stackId={element.stackId}
                stroke={element.color} 
                fill={typeof element.dataKey === 'string' ? `url(#color${element.dataKey})` : element.color} 
                fillOpacity={element.fillOpacity || 1}
                animationDuration={1500}
              />
            );
          } else if (element.type === 'line') {
            return (
              <Line 
                key={`line-${index}`}
                type="monotone" 
                dataKey={element.dataKey} 
                name={element.name}
                stroke={element.color} 
                strokeWidth={element.strokeWidth || 2} 
                dot={element.dot}
                animationDuration={1500}
              />
            );
          } else if (element.type === 'bar') {
            return (
              <Bar 
                key={`bar-${index}`}
                dataKey={element.dataKey} 
                name={element.name}
                stackId={element.stackId}
                fill={element.color} 
                animationDuration={1500}
              />
            );
          }
          return null;
        })}
        
        {referenceLines.map((line, index) => (
          <ReferenceLine 
            key={`ref-line-${index}`}
            y={line.y} 
            x={line.x}
            stroke={line.stroke || "rgba(255, 255, 255, 0.3)"} 
            strokeDasharray={line.strokeDasharray || "3 3"} 
            label={{ 
              value: line.label, 
              position: 'right', 
              fill: '#888',
              fontSize: 12
            }} 
          />
        ))}
        
        {showBrush && (
          <Brush 
            dataKey={xAxisDataKey} 
            height={30} 
            stroke="#8884d8" 
            fill="rgba(30, 30, 30, 0.4)"
          />
        )}
      </RechartsComposedChart>
    </ResponsiveContainer>
  );
};

export default ComposedChart;
