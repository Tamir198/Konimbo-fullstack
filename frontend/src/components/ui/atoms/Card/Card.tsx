import React from 'react';
import styles from './Card.module.css';
import { Size } from '@/types/common';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: Size;
  shadow?: Size;
}

const Card = ({
  children,
  padding = 'medium',
  shadow = 'medium',
  className = '',
  ...props
}: CardProps) => {
  const cardClasses = `${styles.card} ${styles[padding]} ${styles[shadow]} ${className}`;

  return (
    <div className={cardClasses} {...props}>
      {children}
    </div>
  );
};

export default Card;
