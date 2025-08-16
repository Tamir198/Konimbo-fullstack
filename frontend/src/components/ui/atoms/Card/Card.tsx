'use client';

import React from 'react';

interface CardProps {
  children: React.ReactNode;
  padding?: 'small' | 'medium' | 'large';
  shadow?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
}

const Card: React.FC<CardProps> = ({
  children,
  padding = 'medium',
  shadow = 'medium',
  className = '',
}) => {
  const paddingClasses = {
    small: 'p-3',
    medium: 'p-4',
    large: 'p-6',
  };

  const shadowClasses = {
    none: '',
    small: 'shadow-sm',
    medium: 'shadow-md',
    large: 'shadow-lg',
  };

  const classes = `bg-gray-900 rounded-lg border border-gray-700 ${paddingClasses[padding]} ${shadowClasses[shadow]} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Card;
