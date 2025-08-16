import React from 'react';
import styles from './Typography.module.css';
import { Size } from '@/types/common';

interface TypographyProps extends React.HTMLAttributes<HTMLParagraphElement> {
  variant?: 'title' | 'subtitle' | 'body' | 'bodySmall' | 'caption' | 'label';
  size?: Size;
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  color?:
    | 'primary'
    | 'secondary'
    | 'disabled'
    | 'error'
    | 'success'
    | 'warning';
  children: React.ReactNode;
}

const Typography = ({
  variant = 'body',
  size = 'medium',
  weight = 'normal',
  color = 'primary',
  children,
  className = '',
  ...props
}: TypographyProps) => {
  const typographyClasses = `${styles.typography} ${styles[variant]} ${styles[size]} ${styles[weight]} ${styles[color]} ${className}`;

  return (
    <div className={typographyClasses} {...props}>
      {children}
    </div>
  );
};

export default Typography;
