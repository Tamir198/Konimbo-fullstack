'use client';

import React from 'react';

interface TypographyProps {
  children: React.ReactNode;
  variant?: 'title' | 'subtitle' | 'body' | 'bodySmall' | 'caption';
  size?: 'small' | 'medium' | 'large';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?: 'primary' | 'secondary' | 'default';
  className?: string;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  variant = 'body',
  size = 'medium',
  weight = 'normal',
  color = 'default',
  className = '',
}) => {
  const variantClasses = {
    title: 'text-gray-100',
    subtitle: 'text-gray-100',
    body: 'text-gray-100',
    bodySmall: 'text-gray-400',
    caption: 'text-gray-400',
  };

  const sizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  const weightClasses = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
  };

  const colorClasses = {
    primary: 'text-blue-400',
    secondary: 'text-gray-400',
    default: '',
  };

  const classes = `${variantClasses[variant]} ${sizeClasses[size]} ${weightClasses[weight]} ${colorClasses[color]} ${className}`;

  return <div className={classes}>{children}</div>;
};

export default Typography;
