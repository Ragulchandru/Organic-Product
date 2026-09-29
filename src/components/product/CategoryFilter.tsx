import React from 'react';
import { categories } from '../../data/categories';
import { cn } from '../../lib/utils';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (id: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  onSelectCategory,
}) => {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div className="flex items-center space-x-2 sm:space-x-3 min-w-max">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                'px-4 py-2 rounded-md text-xs sm:text-sm font-semibold font-sans transition-all duration-150',
                isActive
                  ? 'bg-brand-primary text-white shadow-sm'
                  : 'bg-white text-brand-muted hover:text-brand-primary border border-brand-border hover:bg-brand-surface'
              )}
            >
              {cat.name}
            </button>
          );
        })}
      </div>
    </div>
  );
};
