import React from 'react';
import { Truck, ShieldCheck, MapPin, Package } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

export const DeliverySection: React.FC = () => {
  return (
    <section className="py-12 md:py-16 bg-white border-y border-brand-border">
      <div className="max-w-storefront mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Title */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="font-sans text-xs font-semibold text-brand-secondary uppercase tracking-widest">
            Fulfillments & Shipping
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-primary">
            Direct Delivery Information
          </h2>
          <p className="font-sans text-sm text-brand-muted">
            Delivery usually takes approximately 2–5 days depending on destination location.
          </p>
        </div>

        {/* Delivery Rates Table / Grid */}
        {siteConfig.shipping.deliveryRates && (
          <div className="max-w-2xl mx-auto bg-brand-surface rounded-lg border border-brand-border p-5 sm:p-6 space-y-4">
            <h3 className="font-serif text-base font-bold text-brand-primary flex items-center space-x-2">
              <Package className="w-5 h-5 text-brand-secondary" />
              <span>Standard Delivery Charges</span>
            </h3>
            
            <div className="grid grid-cols-3 gap-3 text-center">
              {siteConfig.shipping.deliveryRates.map((rate, idx) => (
                <div key={idx} className="bg-white p-3 rounded-md border border-brand-border">
                  <span className="block font-sans text-xs text-brand-muted font-medium">{rate.weight} Pack</span>
                  <span className="price-num block font-sans text-base font-bold text-brand-primary mt-1">₹{rate.charge}</span>
                </div>
              ))}
            </div>

            {siteConfig.shipping.deliveryNotes && (
              <ul className="list-disc list-inside space-y-1 text-xs text-brand-muted pt-2 border-t border-brand-border">
                {siteConfig.shipping.deliveryNotes.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 bg-brand-surface rounded-lg border border-brand-border space-y-3">
            <div className="p-3 bg-white text-brand-primary rounded-md w-fit border border-brand-border shadow-sm">
              <Truck className="w-5 h-5 text-brand-secondary" />
            </div>
            <h3 className="font-serif text-base font-bold text-brand-primary">Estimated Delivery</h3>
            <p className="font-sans text-xs text-brand-muted leading-relaxed">
              Approximately 2–5 days depending on your pincode and regional courier routing.
            </p>
          </div>

          <div className="p-6 bg-brand-surface rounded-lg border border-brand-border space-y-3">
            <div className="p-3 bg-white text-brand-primary rounded-md w-fit border border-brand-border shadow-sm">
              <ShieldCheck className="w-5 h-5 text-brand-accent" />
            </div>
            <h3 className="font-serif text-base font-bold text-brand-primary">Courier & Parcel Dispatch</h3>
            <p className="font-sans text-xs text-brand-muted leading-relaxed">
              Parcel charges apply according to package weight. Rural addresses may require pickup from the nearest office.
            </p>
          </div>

          <div className="p-6 bg-brand-surface rounded-lg border border-brand-border space-y-3">
            <div className="p-3 bg-white text-brand-primary rounded-md w-fit border border-brand-border shadow-sm">
              <MapPin className="w-5 h-5 text-brand-primary" />
            </div>
            <h3 className="font-serif text-base font-bold text-brand-primary">WhatsApp Order Confirmation</h3>
            <p className="font-sans text-xs text-brand-muted leading-relaxed">
              Contact us on WhatsApp at {siteConfig.contact.whatsappDisplay} to confirm courier availability for your location.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
