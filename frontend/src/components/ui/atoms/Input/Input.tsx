'use client';

import React from 'react';

interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  required?: boolean;
  disabled?: boolean;
  error?: string;
  className?: string;
  name?: string;
  min?: string | number;
  step?: string | number;
  onBlur?: () => void;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = 'text',
  required = false,
  disabled = false,
  error,
  className = '',
  name,
  min,
  step,
  onBlur,
}) => {
  const inputClasses = `w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
    error ? 'border-red-500' : 'border-gray-600'
  } ${
    disabled ? 'bg-gray-800 cursor-not-allowed' : 'bg-gray-900'
  } ${className}`;

  return (
    <div className='w-full'>
      {label && (
        <label className='block text-sm font-medium text-gray-300 mb-2'>
          {label}
          {required && <span className='text-red-500 ml-1'>*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const value = type === 'number' ? +e.target.value : e.target.value;
          onChange?.(value);
        }}
        onBlur={onBlur}
        required={required}
        disabled={disabled}
        min={min}
        step={step}
        className={inputClasses}
      />
      {error && <p className='mt-1 text-sm text-red-600'>{error}</p>}
    </div>
  );
};

export default Input;
