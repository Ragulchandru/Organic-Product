import React, { useState } from 'react';
import { ShoppingBag, MessageSquare, Check } from 'lucide-react';
import { Product, ProductVariant } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { formatPrice } from '../../lib/utils';
import { siteConfig } from '../../config/siteConfig';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
  onProductClick: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onProductClick,
}) => {
  // Default to first variant
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(
    product.variants[0] || { id: 'v1', weight: '1 kg', packaging: 'Pouch', price: 100, inStock: true }
  );

  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product, selectedVariant, 1);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  const handleWhatsAppQuickOrder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const message = `Hello ${siteConfig.brand.name},\n\nI want to quickly order:\nProduct: *${product.name}*\nPack: ${selectedVariant.weight} (${selectedVariant.packaging})\nPrice: ₹${selectedVariant.price}\n\nPlease confirm availability and shipping details.`;
    const targetUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(targetUrl, '_blank');
  };

  return (
    <div
      onClick={() => onProductClick(product)}
      className="group bg-white rounded-lg border border-brand-border overflow-hidden shadow-resting hover:shadow-hover transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      {/* Product Image Box */}
      <div className="relative aspect-square w-full bg-brand-surface overflow-hidden p-4 flex items-center justify-center">
        {/* Processing Badge */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge variant="accent">{product.badge}</Badge>
          </div>
        )}

        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 rounded-md"
          loading="lazy"
        />
      </div>

      {/* Product Body Content */}
      <div className="p-3 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
        
        <div className="space-y-1">
          {product.tamilName && (
            <span className="block font-sans text-[11px] text-brand-muted font-medium line-clamp-1">
              {product.tamilName}
            </span>
          )}
          <h3 className="font-serif text-sm sm:text-base md:text-lg font-bold text-brand-primary group-hover:text-brand-secondary transition-colors line-clamp-1">
            {product.name}
          </h3>
          <p className="font-sans text-[11px] sm:text-xs text-brand-muted line-clamp-2 leading-relaxed">
            {product.shortDescription}
          </p>
        </div>

        {/* Pack-Size Segmented Selector */}
        {product.variants.length > 1 && (
          <div className="space-y-1">
            <span className="block font-sans text-[10px] font-semibold uppercase text-brand-muted tracking-wider">
              Pack Size:
            </span>
            <div className="grid grid-cols-2 gap-1" onClick={(e) => e.stopPropagation()}>
              {product.variants.map((v) => {
                const isSelected = selectedVariant.id === v.id;
                return (
                  <button
                    key={v.id}
                    onClick={() => setSelectedVariant(v)}
                    className={`px-1.5 py-1 rounded text-[11px] font-semibold text-center font-sans transition-all truncate ${
                      isSelected
                        ? 'bg-brand-primary text-white shadow-sm'
                        : 'bg-brand-surface text-brand-text hover:bg-brand-border'
                    }`}
                  >
                    {v.weight}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Pricing & CTA Actions */}
        <div className="pt-2 border-t border-brand-border space-y-2">
          
          {/* Price Readout */}
          <div className="flex items-baseline justify-between">
            <div>
              <span className="price-num font-sans text-base sm:text-lg md:text-xl font-bold text-brand-primary">
                {formatPrice(selectedVariant.price)}
              </span>
              {selectedVariant.mrp && selectedVariant.mrp > selectedVariant.price && (
                <span className="price-num font-sans text-[10px] sm:text-xs text-brand-muted line-through ml-1.5">
                  {formatPrice(selectedVariant.mrp)}
                </span>
              )}
            </div>
            <span className="font-sans text-[10px] sm:text-xs text-brand-muted font-medium truncate">
              {selectedVariant.packaging}
            </span>
          </div>

          {/* Action Buttons: Add to Bag + WhatsApp Quick Order */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5" onClick={(e) => e.stopPropagation()}>
            <Button
              variant="primary"
              size="sm"
              onClick={handleAdd}
              className="w-full text-xs h-9 px-2"
            >
              {addedAnimation ? (
                <>
                  <Check className="w-3.5 h-3.5 mr-1 text-brand-accent shrink-0" />
                  <span>Added</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 mr-1 shrink-0" />
                  <span className="truncate">Add to Bag</span>
                </>
              )}
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleWhatsAppQuickOrder}
              className="w-full text-xs h-9 px-2 hover:border-brand-whatsapp hover:text-brand-whatsapp"
            >
              <MessageSquare className="w-3.5 h-3.5 mr-1 text-brand-whatsapp shrink-0" />
              <span className="truncate">WhatsApp</span>
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
};
