import React from 'react';
import { Minus, Plus } from 'lucide-react';
import { cn } from '../../lib/utils';

interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
  size?: 'sm' | 'md';
  className?: string;
}

export const QuantityStepper: React.FC<QuantityStepperProps> = ({
  value,
  onChange,
  min = 1,
  max = 99,
  size = 'md',
  className,
}) => {
  const handleDecrement = () => {
    if (value > min) onChange(value - 1);
  };

  const handleIncrement = () => {
    if (value < max) onChange(value + 1);
  };

  return (
    <div
      className={cn(
        'inline-flex items-center rounded-md border border-brand-border bg-white',
        size === 'sm' ? 'h-8 px-1' : 'h-10 px-1.5',
        className
      )}
    >
      <button
        type="button"
        onClick={handleDecrement}
        disabled={value <= min}
        className="p-1 rounded-full text-brand-primary hover:bg-brand-surface disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      </button>

      <span
        className={cn(
          'price-num font-semibold text-brand-text text-center font-sans',
          size === 'sm' ? 'w-6 text-xs' : 'w-8 text-sm'
        )}
      >
        {value}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={value >= max}
        className="p-1 rounded-full text-brand-primary hover:bg-brand-surface disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className={size === 'sm' ? 'w-3.5 h-3.5' : 'w-4 h-4'} />
      </button>
    </div>
  );
};
