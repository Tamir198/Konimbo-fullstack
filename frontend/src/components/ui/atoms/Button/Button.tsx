'use client';

import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  type = 'button',
  disabled = false,
  className = '',
}) => {
  const baseClasses =
    'inline-flex items-center justify-center border-none rounded-md font-medium transition-all cursor-pointer font-inherit text-decoration-none focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50 disabled:pointer-events-none';

  const variantClasses = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]',
    secondary:
      'bg-[var(--color-secondary)] text-[var(--color-text-primary)] hover:bg-[var(--color-secondary-hover)]',
    outline:
      'bg-transparent text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-text-primary)]',
    ghost:
      'bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-background-secondary)] hover:text-[var(--color-text-primary)]',
  };

  const sizeClasses = {
    small: 'h-8 px-4 text-sm',
    medium: 'h-10 px-6 text-base',
    large: 'h-12 px-8 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
