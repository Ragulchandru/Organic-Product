import React from 'react';
import { DeliverySection } from '../components/common/DeliverySection';
import { siteConfig } from '../config/siteConfig';
import { MessageSquare, Phone, Mail, MapPin } from 'lucide-react';

export const DeliveryPage: React.FC = () => {
  return (
    <div className="py-8 md:py-12 max-w-storefront mx-auto px-4 sm:px-6 lg:px-8 space-y-10 animate-in fade-in duration-300">
      
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="font-sans text-xs font-semibold text-brand-secondary uppercase tracking-widest">
          Shipping Guidelines & Info
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-primary">
          Delivery Information
        </h1>
        <p className="font-sans text-sm text-brand-muted leading-relaxed">
          Clear, simple delivery guidelines for all direct farm harvest orders.
        </p>
      </div>

      <DeliverySection />

      {/* Contact & Inquiry Card */}
      <div className="bg-white p-6 sm:p-8 rounded-lg border border-brand-border shadow-resting max-w-3xl mx-auto space-y-6">
        <h2 className="font-serif text-xl font-bold text-brand-primary">
          Have Questions About Your Order Location?
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-sans">
          <div className="flex items-center space-x-3 p-3 bg-brand-surface rounded-md">
            <Phone className="w-4 h-4 text-brand-primary shrink-0" />
            <div>
              <span className="block font-semibold text-brand-text">Phone Support</span>
              <span className="text-brand-muted">{siteConfig.contact.phone}</span>
            </div>
          </div>

          <div className="flex items-center space-x-3 p-3 bg-brand-surface rounded-md">
            <Mail className="w-4 h-4 text-brand-primary shrink-0" />
            <div>
              <span className="block font-semibold text-brand-text">Email Address</span>
              <span className="text-brand-muted">{siteConfig.contact.email}</span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center space-x-2 w-full py-3 bg-brand-whatsapp text-white font-bold text-sm rounded-md hover:brightness-105 transition-all shadow-sm"
          >
            <MessageSquare className="w-4 h-4 fill-white" />
            <span>Chat Directly on WhatsApp for Custom Shipping Quotes</span>
          </a>
        </div>
      </div>

    </div>
  );
};
