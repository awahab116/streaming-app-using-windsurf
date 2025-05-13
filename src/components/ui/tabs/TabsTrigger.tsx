import React, { ReactNode } from 'react';
import { useTabsContext } from './Tabs';

export interface TabsTriggerProps {
  children: ReactNode;
  value: string;
  className?: string;
}

const TabsTrigger: React.FC<TabsTriggerProps> = ({ children, value, className = '' }) => {
  const { activeTab, setActiveTab } = useTabsContext();
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      data-state={isActive ? 'active' : 'inactive'}
      className={`${className}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export default TabsTrigger;
