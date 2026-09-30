import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function filterProductsByQuery(items: any[], selectedCategory: string, query: string): any[] {
  const trimmedQuery = query.toLowerCase().trim();

  return items.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    if (!matchesCategory) return false;

    if (!trimmedQuery) return true;

    // Split search query into individual terms
    const terms = trimmedQuery.split(/\s+/).filter(Boolean);

    return terms.every((term) => {
      // Word boundary regex so terms like "oil" match "Oil" or "Oils" but NOT "parboiled"
      const wordBoundaryRegex = new RegExp(`\\b${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}`, 'i');

      const nameMatch = wordBoundaryRegex.test(product.name || '');
      const tamilMatch = product.tamilName ? wordBoundaryRegex.test(product.tamilName) : false;
      const catMatch = wordBoundaryRegex.test(product.category || '');
      const badgeMatch = product.badge ? wordBoundaryRegex.test(product.badge) : false;
      const shortDescMatch = product.shortDescription ? wordBoundaryRegex.test(product.shortDescription) : false;
      const fullDescMatch = product.description ? wordBoundaryRegex.test(product.description) : false;

      return nameMatch || tamilMatch || catMatch || badgeMatch || shortDescMatch || fullDescMatch;
    });
  });
}
