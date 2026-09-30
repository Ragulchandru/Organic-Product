import React, { useState, useEffect } from 'react';
import { CategoryFilter } from '../components/product/CategoryFilter';
import { ProductGrid } from '../components/product/ProductGrid';
import { products } from '../data/products';
import { Product, ProductVariant } from '../types';
import { filterProductsByQuery } from '../lib/utils';
import { Search } from 'lucide-react';

interface CatalogPageProps {
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
  onProductClick: (product: Product) => void;
  initialCategory?: string;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  onAddToCart,
  onProductClick,
  initialCategory = 'all',
  searchQuery = '',
  onSearchChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredProducts = filterProductsByQuery(products, selectedCategory, searchQuery);

  return (
    <div className="py-8 md:py-12 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 animate-in fade-in duration-300">
      
      {/* Header Title Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-2 sm:space-y-3">
        <span className="font-sans text-xs font-bold text-[#3c683d] uppercase tracking-widest">
          Complete Harvest Collection
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#002916]">
          Shop All Heritage Rice, Millets & Oils
        </h1>
        <p className="font-sans text-sm text-[#414943] leading-relaxed">
          Select from our traditional grain strains, unpolished indigenous millets, and cold wooden pressed oils.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-col items-center border-b border-[#E8E2D2] pb-4 space-y-2">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {searchQuery && (
          <div className="text-xs text-[#555E54] flex items-center gap-2 pt-1">
            <span>
              Showing results for "<strong>{searchQuery}</strong>" ({filteredProducts.length} items found)
            </span>
            <button
              onClick={() => onSearchChange && onSearchChange('')}
              className="text-[#B56147] hover:underline font-semibold"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>

      {/* Products Grid or Empty Results State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#E8E2D2] p-8 space-y-4 max-w-md mx-auto">
          <Search className="w-10 h-10 text-[#B56147] mx-auto opacity-50" />
          <h3 className="font-serif text-lg font-bold text-[#173F2A]">No products found</h3>
          <p className="text-xs text-[#6F756D]">
            No items match "{searchQuery}". Try searching for terms like "rice", "millet", "oil", or "ghee".
          </p>
          <button
            onClick={() => {
              if (onSearchChange) onSearchChange('');
              setSelectedCategory('all');
            }}
            className="px-4 py-2 bg-[#173F2A] text-white text-xs font-semibold rounded-lg hover:bg-[#23583C] transition-colors"
          >
            Show All Products
          </button>
        </div>
      ) : (
        <ProductGrid
          products={filteredProducts}
          onAddToCart={onAddToCart}
          onProductClick={onProductClick}
        />
      )}

    </div>
  );
};
