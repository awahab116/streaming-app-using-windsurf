/**
 * Common chart configuration utilities
 */

/**
 * Standard tooltip style for all charts
 */
export const tooltipStyle = { 
  backgroundColor: 'rgba(30, 30, 30, 0.8)', 
  backdropFilter: 'blur(4px)', 
  borderRadius: '8px', 
  border: '1px solid rgba(255, 255, 255, 0.1)', 
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.5)' 
};

/**
 * Standard tooltip item style
 */
export const tooltipItemStyle = {
  color: '#fff'
};

/**
 * Generate gradient definition for chart areas
 */
export const getGradientDefinition = (id: string, color: string) => ({
  id,
  x1: "0",
  y1: "0",
  x2: "0",
  y2: "1",
  stops: [
    { offset: "5%", color, opacity: 0.8 },
    { offset: "95%", color, opacity: 0.1 }
  ]
});

/**
 * Standard axis style
 */
export const axisStyle = {
  stroke: '#888',
  axisLine: false,
  tickLine: false
};

/**
 * Standard grid style
 */
export const gridStyle = {
  strokeDasharray: '3 3',
  stroke: '#444',
  vertical: false
};
