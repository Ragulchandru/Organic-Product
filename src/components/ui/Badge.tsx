import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'neutral';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className,
}) => {
  const variantStyles = {
    primary: 'bg-brand-primary text-white',
    secondary: 'bg-brand-secondary text-white',
    accent: 'bg-brand-accent/20 text-brand-primary border border-brand-accent/40',
    neutral: 'bg-brand-surface text-brand-primary border border-brand-border',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-sm text-[11px] font-semibold tracking-wider uppercase font-sans',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
