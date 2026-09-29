import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className,
  children,
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-semibold rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100';

  const variantStyles = {
    primary:
      'bg-brand-primary text-brand-white hover:bg-brand-secondary shadow-resting hover:shadow-hover',
    secondary:
      'bg-brand-surface text-brand-primary hover:bg-brand-border',
    outline:
      'border-[1.5px] border-brand-primary text-brand-primary bg-transparent hover:bg-brand-surface',
    whatsapp:
      'bg-brand-whatsapp text-white hover:brightness-105 shadow-md font-bold',
    ghost:
      'bg-transparent text-brand-primary hover:bg-brand-surface',
  };

  const sizeStyles = {
    sm: 'h-9 px-3 text-xs',
    md: 'h-11 px-5 text-sm',
    lg: 'h-12 px-6 text-base',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        fullWidth ? 'w-full' : '',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
