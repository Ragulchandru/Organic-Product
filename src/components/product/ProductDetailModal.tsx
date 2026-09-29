import React, { useState } from 'react';
import { X, ShoppingBag, MessageSquare, Check, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';
import { Product, ProductVariant } from '../../types';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { QuantityStepper } from '../ui/QuantityStepper';
import { formatPrice } from '../../lib/utils';
import { siteConfig } from '../../config/siteConfig';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, variant: ProductVariant, quantity: number) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [selectedVariant, setSelectedVariant] = useState<ProductVariant>(product.variants[0]);
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(product.imageUrl);
  const [added, setAdded] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<'uses' | 'cooking' | 'storage' | null>('uses');

  const handleAdd = () => {
    onAddToCart(product, selectedVariant, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const handleWhatsAppOrder = () => {
    const total = selectedVariant.price * quantity;
    const message = `Hello ${siteConfig.brand.name},\n\nI want to order:\nProduct: *${product.name}*\nVariant: ${selectedVariant.weight} (${selectedVariant.packaging})\nQuantity: ${quantity}\nTotal Price: ₹${total}\n\nPlease confirm availability and dispatch details.`;
    const link = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };

  const toggleAccordion = (key: 'uses' | 'cooking' | 'storage') => {
    setOpenAccordion(openAccordion === key ? null : key);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-brand-primary/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-lg border border-brand-border max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-drawer">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-brand-surface text-brand-primary hover:bg-brand-border rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 sm:p-8">
          
          {/* Gallery Column */}
          <div className="space-y-4">
            <div className="aspect-square w-full bg-brand-surface rounded-lg overflow-hidden border border-brand-border p-4 flex items-center justify-center">
              <img
                src={activeImage}
                alt={product.name}
                className="w-full h-full object-contain rounded-md"
              />
            </div>

            {/* Thumbnail switcher */}
            {product.secondaryImageUrl && (
              <div className="flex space-x-3">
                <button
                  onClick={() => setActiveImage(product.imageUrl)}
                  className={`w-16 h-16 rounded-md border p-1 bg-brand-surface ${
                    activeImage === product.imageUrl ? 'border-2 border-brand-primary' : 'border-brand-border'
                  }`}
                >
                  <img src={product.imageUrl} alt="Thumbnail 1" className="w-full h-full object-contain" />
                </button>
                <button
                  onClick={() => setActiveImage(product.secondaryImageUrl!)}
                  className={`w-16 h-16 rounded-md border p-1 bg-brand-surface ${
                    activeImage === product.secondaryImageUrl ? 'border-2 border-brand-primary' : 'border-brand-border'
                  }`}
                >
                  <img src={product.secondaryImageUrl} alt="Thumbnail 2" className="w-full h-full object-contain" />
                </button>
              </div>
            )}

            <div className="bg-brand-surface p-3 rounded-md border border-brand-border text-xs text-brand-muted flex items-center space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-secondary shrink-0" />
              <span>Direct Farm Harvest • Carefully Cleaned & Packed</span>
            </div>
          </div>

          {/* Details Column */}
          <div className="space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              
              <div>
                {product.badge && <Badge variant="accent" className="mb-2">{product.badge}</Badge>}
                {product.tamilName && (
                  <span className="block font-sans text-xs text-brand-muted font-semibold">
                    {product.tamilName}
                  </span>
                )}
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary leading-tight">
                  {product.name}
                </h2>
              </div>

              {/* Price Readout */}
              <div className="flex items-baseline space-x-3 py-2 border-y border-brand-border">
                <span className="price-num font-sans text-2xl font-bold text-brand-primary">
                  {formatPrice(selectedVariant.price * quantity)}
                </span>
                {selectedVariant.mrp && (
                  <span className="price-num font-sans text-sm text-brand-muted line-through">
                    {formatPrice(selectedVariant.mrp * quantity)}
                  </span>
                )}
                <span className="font-sans text-xs text-brand-muted">
                  ({selectedVariant.weight} - {selectedVariant.packaging})
                </span>
              </div>

              <p className="font-sans text-sm text-brand-muted leading-relaxed">
                {product.description}
              </p>

              {/* Pack Size Selector */}
              <div className="space-y-2">
                <label className="block font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider">
                  Choose Packaging & Pack Size:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {product.variants.map((v) => {
                    const isSelected = selectedVariant.id === v.id;
                    return (
                      <button
                        key={v.id}
                        onClick={() => setSelectedVariant(v)}
                        className={`p-3 rounded-md border text-left font-sans transition-all ${
                          isSelected
                            ? 'bg-brand-primary text-white border-brand-primary shadow-sm'
                            : 'bg-white text-brand-text border-brand-border hover:bg-brand-surface'
                        }`}
                      >
                        <div className="text-xs font-bold">{v.weight}</div>
                        <div className={`text-[11px] ${isSelected ? 'text-brand-surface/80' : 'text-brand-muted'}`}>
                          {v.packaging} • {formatPrice(v.price)}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Stepper */}
              <div className="flex items-center space-x-4">
                <span className="font-sans text-xs font-semibold text-brand-primary uppercase tracking-wider">
                  Quantity:
                </span>
                <QuantityStepper value={quantity} onChange={setQuantity} />
              </div>

              {/* Accordion Information */}
              {product.details && (
                <div className="border-t border-brand-border pt-4 space-y-2 text-xs">
                  {product.details.culinaryUses && (
                    <div className="border border-brand-border rounded-md overflow-hidden bg-brand-surface">
                      <button
                        onClick={() => toggleAccordion('uses')}
                        className="w-full p-3 text-left font-semibold text-brand-primary flex items-center justify-between"
                      >
                        <span>Traditional Culinary Uses</span>
                        {openAccordion === 'uses' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      {openAccordion === 'uses' && (
                        <div className="p-3 pt-0 text-brand-muted space-y-1 bg-white">
                          <ul className="list-disc list-inside space-y-0.5">
                            {product.details.culinaryUses.map((use, idx) => (
                              <li key={idx}>{use}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {product.details.cookingMethod && (
                    <div className="border border-brand-border rounded-md overflow-hidden bg-brand-surface">
                      <button
                        onClick={() => toggleAccordion('cooking')}
                        className="w-full p-3 text-left font-semibold text-brand-primary flex items-center justify-between"
                      >
                        <span>Preparation & Cooking Method</span>
                        {openAccordion === 'cooking' ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                      {openAccordion === 'cooking' && (
                        <div className="p-3 pt-0 text-brand-muted bg-white">
                          {product.details.cookingMethod}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}

            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-brand-border grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button variant="primary" onClick={handleAdd} className="w-full h-12">
                {added ? (
                  <>
                    <Check className="w-4 h-4 mr-2 text-brand-accent" />
                    <span>Added to Bag</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    <span>Add to Order Bag</span>
                  </>
                )}
              </Button>

              <Button variant="whatsapp" onClick={handleWhatsAppOrder} className="w-full h-12">
                <MessageSquare className="w-4 h-4 mr-2 fill-white" />
                <span>Order via WhatsApp</span>
              </Button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
