import React from 'react';
import { Product, ProductVariant } from '../../types';
import { ProductCard } from './ProductCard';

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
  onProductClick: (product: Product) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onAddToCart,
  onProductClick,
}) => {
  if (products.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-lg border border-brand-border p-8">
        <p className="font-serif text-lg text-brand-primary">No products found in this category.</p>
        <p className="font-sans text-sm text-brand-muted mt-1">Please select another category tab above.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
          onProductClick={onProductClick}
        />
      ))}
    </div>
  );
};
