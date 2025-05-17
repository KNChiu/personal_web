import * as React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'outlined' | 'elevated' | 'flat' | 'hover';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  rounded?: 'none' | 'sm' | 'md' | 'lg' | 'full';
  as?: React.ElementType;
  onClick?: () => void;
}

/**
 * Reusable Card component with different styles and states
 */
const Card: React.FC<CardProps> = ({
  children,
  className = '',
  variant = 'default',
  padding = 'md',
  rounded = 'md',
  as: Component = 'div',
  onClick,
  ...props
}) => {
  // Base styles for all cards
  const baseStyles = 'overflow-hidden';
  
  // Styles for different variants
  const variantStyles = {
    default: 'bg-white shadow',
    outlined: 'bg-white border border-neutral-200',
    elevated: 'bg-white shadow-lg',
    flat: 'bg-neutral-50 border border-neutral-100',
    hover: 'bg-white shadow transition-all duration-300 hover:shadow-md hover:-translate-y-1',
  };

  // Padding styles
  const paddingStyles = {
    none: '',
    sm: 'p-3',
    md: 'p-5',
    lg: 'p-7',
  };

  // Border radius styles
  const roundedStyles = {
    none: 'rounded-none',
    sm: 'rounded-sm',
    md: 'rounded-md',
    lg: 'rounded-lg',
    full: 'rounded-xl',
  };

  // Combine all styles
  const cardClasses = `
    ${baseStyles} 
    ${variantStyles[variant]} 
    ${paddingStyles[padding]} 
    ${roundedStyles[rounded]} 
    ${className}
    ${onClick ? 'cursor-pointer' : ''}
  `;

  return (
    <Component className={cardClasses} onClick={onClick} {...props}>
      {children}
    </Component>
  );
};

/* Card Subcomponents */

interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = '' }) => {
  return (
    <div className={`mb-4 ${className}`}>
      {children}
    </div>
  );
};

interface CardBodyProps {
  children: React.ReactNode;
  className?: string;
}

const CardBody: React.FC<CardBodyProps> = ({ children, className = '' }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className = '' }) => {
  return (
    <div className={`mt-4 pt-3 border-t border-neutral-100 ${className}`}>
      {children}
    </div>
  );
};

/* Export Card and its subcomponents */
export { Card as default, CardHeader, CardBody, CardFooter };