import React, { ReactNode } from 'react';
import { useTabsContext } from './Tabs';

export interface TabsContentProps {
  children: ReactNode;
  value: string;
  className?: string;
}

const TabsContent: React.FC<TabsContentProps> = ({ children, value, className = '' }) => {
  const { activeTab } = useTabsContext();
  const isActive = activeTab === value;

  if (!isActive) return null;

  return (
    <div
      role="tabpanel"
      data-state={isActive ? 'active' : 'inactive'}
      className={className}
    >
      {children}
    </div>
  );
};

export default TabsContent;
