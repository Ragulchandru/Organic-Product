import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, MessageSquare, ArrowRight } from 'lucide-react';
import { CartItem, CustomerDetails } from '../../types';
import { Button } from '../ui/Button';
import { QuantityStepper } from '../ui/QuantityStepper';
import { formatPrice } from '../../lib/utils';
import { siteConfig } from '../../config/siteConfig';
import { getWhatsAppLink } from '../../lib/whatsapp';

interface OrderBagDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  onUpdateQuantity: (productId: string, variantId: string, delta: number) => void;
  onRemoveItem: (productId: string, variantId: string) => void;
  subtotal: number;
}

export const OrderBagDrawer: React.FC<OrderBagDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  subtotal,
}) => {
  if (!isOpen) return null;

  const [customer, setCustomer] = useState<CustomerDetails>({
    name: '',
    phone: '',
    address: '',
    city: '',
    pincode: '',
    notes: '',
  });

  const [showAddressForm, setShowAddressForm] = useState(false);

  const handleWhatsAppCheckout = () => {
    const link = getWhatsAppLink(cart, subtotal, customer);
    window.open(link, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-brand-primary/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="absolute inset-0" onClick={onClose} />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-brand-border shadow-drawer flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-4 sm:p-6 border-b border-brand-border bg-brand-surface flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-brand-primary" />
              <h2 className="font-serif text-lg font-bold text-brand-primary">Your Order Bag</h2>
              <span className="font-sans text-xs bg-brand-primary text-white px-2 py-0.5 rounded-full font-bold">
                {cart.reduce((acc, item) => acc + item.quantity, 0)}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-brand-muted hover:text-brand-primary hover:bg-brand-border transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body Items List */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-12 space-y-3">
                <ShoppingBag className="w-12 h-12 text-brand-muted/40 mx-auto" />
                <p className="font-serif text-base text-brand-primary">Your order bag is currently empty.</p>
                <p className="font-sans text-xs text-brand-muted max-w-xs mx-auto">
                  Browse our traditional grains and cold-pressed oils to add items.
                </p>
                <Button variant="outline" size="sm" onClick={onClose} className="mt-2">
                  Start Shopping
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                {cart.map((item) => (
                  <div
                    key={`${item.product.id}-${item.selectedVariant.id}`}
                    className="flex space-x-3 p-3 bg-brand-surface/40 rounded-lg border border-brand-border"
                  >
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-16 h-16 object-contain rounded-md bg-white border border-brand-border shrink-0 p-1"
                    />

                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between">
                        <h4 className="font-serif text-xs font-bold text-brand-primary line-clamp-1">
                          {item.product.name}
                        </h4>
                        <button
                          onClick={() => onRemoveItem(item.product.id, item.selectedVariant.id)}
                          className="text-brand-muted hover:text-red-600 p-0.5"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-[11px] text-brand-muted">
                        Pack: <span className="font-semibold text-brand-text">{item.selectedVariant.weight}</span> ({item.selectedVariant.packaging})
                      </div>

                      <div className="flex items-center justify-between pt-1">
                        <QuantityStepper
                          value={item.quantity}
                          onChange={(newQty) =>
                            onUpdateQuantity(
                              item.product.id,
                              item.selectedVariant.id,
                              newQty - item.quantity
                            )
                          }
                          size="sm"
                        />
                        <span className="price-num font-sans text-xs font-bold text-brand-primary">
                          {formatPrice(item.selectedVariant.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Optional Customer Delivery Details Toggle */}
                <div className="pt-2">
                  <button
                    onClick={() => setShowAddressForm(!showAddressForm)}
                    className="text-xs font-semibold text-brand-primary hover:underline flex items-center justify-between w-full p-2 bg-brand-surface rounded-md border border-brand-border"
                  >
                    <span>{showAddressForm ? 'Hide Delivery Details Form' : '+ Add Delivery Address (Optional)'}</span>
                    <span>{showAddressForm ? '▲' : '▼'}</span>
                  </button>

                  {showAddressForm && (
                    <div className="mt-3 space-y-2.5 p-3 bg-white rounded-md border border-brand-border text-xs">
                      <div>
                        <label className="block text-[11px] font-semibold text-brand-muted mb-1">Your Full Name</label>
                        <input
                          type="text"
                          value={customer.name}
                          onChange={(e) => setCustomer({ ...customer, name: e.target.value })}
                          placeholder="e.g. Anand Kumar"
                          className="w-full px-2.5 py-1.5 rounded border border-brand-border focus:outline-none focus:border-brand-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-brand-muted mb-1">Mobile Phone</label>
                        <input
                          type="tel"
                          value={customer.phone}
                          onChange={(e) => setCustomer({ ...customer, phone: e.target.value })}
                          placeholder="e.g. 9876543210"
                          className="w-full px-2.5 py-1.5 rounded border border-brand-border focus:outline-none focus:border-brand-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] font-semibold text-brand-muted mb-1">Delivery Address & City</label>
                        <textarea
                          rows={2}
                          value={customer.address}
                          onChange={(e) => setCustomer({ ...customer, address: e.target.value })}
                          placeholder="House No, Street, Landmark, City"
                          className="w-full px-2.5 py-1.5 rounded border border-brand-border focus:outline-none focus:border-brand-primary"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Drawer Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-4 sm:p-6 border-t border-brand-border bg-brand-surface space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-brand-muted">
                  <span>Order Items Subtotal</span>
                  <span className="price-num font-semibold text-brand-text">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-brand-muted">
                  <span>Estimated Local Shipping</span>
                  <span className="font-semibold text-brand-secondary">Calculated on WhatsApp</span>
                </div>
                <div className="flex justify-between text-sm font-bold text-brand-primary pt-2 border-t border-brand-border">
                  <span>Total Payable</span>
                  <span className="price-num">{formatPrice(subtotal)}</span>
                </div>
              </div>

              {/* Primary Direct WhatsApp Order CTA */}
              <Button
                variant="whatsapp"
                size="lg"
                fullWidth
                onClick={handleWhatsAppCheckout}
                className="py-3 text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4 mr-2 fill-white" />
                <span>Order via WhatsApp ({siteConfig.contact.whatsappDisplay})</span>
              </Button>

              <p className="text-[10px] text-center text-brand-muted leading-tight">
                Clicking will open WhatsApp with your pre-filled cart details for instant confirmation with {siteConfig.brand.name}.
              </p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
