import React, { useState } from 'react';
import { Hero } from '../components/common/Hero';
import { TrustBar } from '../components/common/TrustBar';
import { ShopByCategory } from '../components/product/ShopByCategory';
import { CategoryFilter } from '../components/product/CategoryFilter';
import { ProductGrid } from '../components/product/ProductGrid';
import { DeliverySection } from '../components/common/DeliverySection';
import { products } from '../data/products';
import { Product, ProductVariant } from '../types';
import { filterProductsByQuery } from '../lib/utils';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/Button';

interface HomePageProps {
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
  onProductClick: (product: Product) => void;
  onNavigateCatalog: (category?: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onAddToCart,
  onProductClick,
  onNavigateCatalog,
  searchQuery = '',
  onSearchChange,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const filteredProducts = filterProductsByQuery(products, selectedCategory, searchQuery);

  const handleCategorySelectFromHome = (cat: string) => {
    setSelectedCategory(cat);
    const catalogElement = document.getElementById('featured-catalog');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-0 animate-in fade-in duration-300">
      
      {/* 1. Hero Section */}
      <Hero onExploreClick={() => onNavigateCatalog('all')} />

      {/* 2. Compact Trust Strip */}
      <TrustBar />

      {/* 3. Shop by Category Grid */}
      <ShopByCategory onSelectCategory={handleCategorySelectFromHome} />

      {/* 4. Featured Pantry Collection Catalog Section */}
      <section className="py-12 md:py-16 max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="featured-catalog">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-sans text-xs font-bold text-[#3c683d] uppercase tracking-widest block">
              Farm to Kitchen
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-[#002916] mt-1">
              From Our Traditional Pantry
            </h2>
          </div>

          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        <ProductGrid
          products={filteredProducts}
          onAddToCart={onAddToCart}
          onProductClick={onProductClick}
        />

        <div className="text-center pt-8">
          <Button variant="outline" size="lg" onClick={() => onNavigateCatalog('all')}>
            <span>View Complete Harvest Catalog</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </section>

      {/* 5. Direct Delivery Guidelines */}
      <DeliverySection />

    </div>
  );
};
