import React, { ReactNode } from 'react';

export interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Card;
