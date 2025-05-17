import React from 'react';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'gradient' | 'light' | 'section';
  align?: 'left' | 'center' | 'right';
}

/**
 * Reusable Heading component for h1-h6 elements with different styles
 */
const Heading: React.FC<HeadingProps> = ({
  level = 2,
  children,
  className = '',
  variant = 'default',
  align = 'left',
}) => {
  // Base styles for all headings
  const baseStyles = 'font-heading font-semibold leading-tight';
  
  // Styles for different heading levels
  const levelStyles = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  };

  // Styles for different variants
  const variantStyles = {
    default: 'text-neutral-dark',
    gradient: 'bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary',
    light: 'text-white',
    section: 'text-neutral-dark mb-6 border-b border-neutral-200 pb-2',
  };

  // Text alignment styles
  const alignStyles = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const classes = `${baseStyles} ${levelStyles[level]} ${variantStyles[variant]} ${alignStyles[align]} ${className}`;

  // Render the appropriate heading level
  switch (level) {
    case 1:
      return <h1 className={classes}>{children}</h1>;
    case 2:
      return <h2 className={classes}>{children}</h2>;
    case 3:
      return <h3 className={classes}>{children}</h3>;
    case 4:
      return <h4 className={classes}>{children}</h4>;
    case 5:
      return <h5 className={classes}>{children}</h5>;
    case 6:
      return <h6 className={classes}>{children}</h6>;
    default:
      return <h2 className={classes}>{children}</h2>;
  }
};

export default Heading;