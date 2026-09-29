import React, { useState, useEffect } from 'react';
import { CategoryFilter } from '../components/product/CategoryFilter';
import { ProductGrid } from '../components/product/ProductGrid';
import { products } from '../data/products';
import { Product, ProductVariant } from '../types';

interface CatalogPageProps {
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
  onProductClick: (product: Product) => void;
  initialCategory?: string;
}

export const CatalogPage: React.FC<CatalogPageProps> = ({
  onAddToCart,
  onProductClick,
  initialCategory = 'all',
}) => {
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="py-8 md:py-12 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 animate-in fade-in duration-300">
      
      {/* Header Title Banner */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
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
      <div className="flex justify-center border-b border-[#E8E2D2] pb-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Products Grid */}
      <ProductGrid
        products={filteredProducts}
        onAddToCart={onAddToCart}
        onProductClick={onProductClick}
      />

    </div>
  );
};
