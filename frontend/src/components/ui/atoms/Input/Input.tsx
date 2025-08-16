import React from 'react';
import styles from './Input.module.css';
import { Size } from '@/types/common';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputSize?: Size;
}

const Input = ({
  label,
  error,
  inputSize = 'medium',
  className = '',
  ...props
}: InputProps) => {
  const inputClasses = `${styles.input} ${styles[inputSize]} ${
    error ? styles.error : ''
  } ${className}`;

  return (
    <div className={styles.inputWrapper}>
      {label && <label className={styles.label}>{label}</label>}
      <input className={inputClasses} {...props} />
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default Input;
