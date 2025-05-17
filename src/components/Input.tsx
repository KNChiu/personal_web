import React from 'react';

interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: 'outline' | 'filled' | 'underline';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  containerClassName?: string;
}

/**
 * Reusable Input component with different styles and states
 */
const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  variant = 'outline',
  size = 'md',
  fullWidth = false,
  leftIcon,
  rightIcon,
  containerClassName = '',
  className = '',
  ...props
}) => {
  const baseStyles = 'bg-white focus:outline-none transition-colors duration-200 placeholder-neutral-400';
  
  const variantStyles = {
    outline: 'border rounded-md focus:ring-2 focus:ring-primary-300',
    filled: 'border-none bg-neutral-light rounded-md focus:ring-2 focus:ring-primary-300',
    underline: 'border-b border-neutral-300 rounded-none px-0 focus:border-primary',
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-5 py-3 text-lg',
  };

  const stateStyles = error
    ? 'border-accent focus:border-accent focus:ring-accent-300 text-accent'
    : 'border-neutral-300 focus:border-primary';

  const widthStyles = fullWidth ? 'w-full' : '';

  const inputClasses = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${sizeStyles[size]} 
    ${stateStyles} 
    ${widthStyles} 
    ${leftIcon ? 'pl-10' : ''} 
    ${rightIcon ? 'pr-10' : ''} 
    ${className}
  `;

  const labelSizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  return (
    <div className={`mb-4 ${fullWidth ? 'w-full' : ''} ${containerClassName}`}>
      {label && (
        <label className={`block font-medium text-neutral-dark mb-1 ${labelSizeStyles[size]}`}>
          {label}
        </label>
      )}
      
      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral">
            {leftIcon}
          </div>
        )}
        
        <input className={inputClasses} {...props} />
        
        {rightIcon && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral">
            {rightIcon}
          </div>
        )}
      </div>
      
      {error && (
        <p className="mt-1 text-accent text-sm">{error}</p>
      )}
      
      {helperText && !error && (
        <p className="mt-1 text-neutral text-sm">{helperText}</p>
      )}
    </div>
  );
};

export default Input;
