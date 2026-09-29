import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setActiveTab }) => {
  return (
    <footer className="bg-brand-primary text-brand-surface pt-16 pb-12 border-t border-brand-border">
      <div className="max-w-storefront mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-white block">
                {siteConfig.brand.name}
              </span>
              <span className="font-sans text-xs text-brand-accent tracking-widest uppercase block mt-1">
                {siteConfig.brand.tagline}
              </span>
            </div>
            <p className="text-sm text-brand-surface/80 leading-relaxed font-sans">
              Traditional rice varieties, indigenous millets, and unrefined wood-pressed oils.
            </p>
            {siteConfig.social.instagram && (
              <div className="flex space-x-3 pt-2">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-brand-secondary rounded-full hover:bg-brand-accent hover:text-brand-primary text-white transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            )}
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm text-brand-surface/80">
              <li>
                <button
                  onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Harvest Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('catalog'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Shop Grains & Oils
                </button>
              </li>
              <li>
                <button
                  onClick={() => { setActiveTab('delivery'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className="hover:text-brand-accent transition-colors"
                >
                  Shipping & Delivery Info
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-semibold text-white">Contact & Support</h4>
            <ul className="space-y-2.5 text-sm text-brand-surface/80">
              {siteConfig.contact.phone && (
                <li className="flex items-center space-x-2.5">
                  <Phone className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>{siteConfig.contact.phone}</span>
                </li>
              )}
              {siteConfig.contact.email && (
                <li className="flex items-center space-x-2.5">
                  <Mail className="w-4 h-4 text-brand-accent shrink-0" />
                  <span>{siteConfig.contact.email}</span>
                </li>
              )}
              {siteConfig.contact.address && (
                <li className="flex items-start space-x-2.5">
                  <MapPin className="w-4 h-4 text-brand-accent shrink-0 mt-0.5" />
                  <span>{siteConfig.contact.address}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Col 4: WhatsApp Ordering Callout */}
          <div className="space-y-4 bg-brand-secondary/40 p-5 rounded-lg border border-brand-secondary/60">
            <h4 className="font-serif text-lg font-semibold text-white flex items-center space-x-2">
              <MessageSquare className="w-5 h-5 text-brand-whatsapp fill-brand-whatsapp" />
              <span>WhatsApp Orders</span>
            </h4>
            <p className="text-xs text-brand-surface/80 leading-relaxed">
              Order directly via chat. Send your item selections to {siteConfig.contact.whatsappDisplay}.
            </p>
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 w-full py-2.5 bg-brand-whatsapp text-white font-bold text-sm rounded-md hover:brightness-110 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>Start WhatsApp Order</span>
            </a>
          </div>

        </div>

        <div className="mt-12 pt-6 border-t border-brand-secondary/60 text-center text-xs text-brand-surface/60 font-sans flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.</p>
          <p className="text-[11px]">Heritage Agronomy Visual System</p>
        </div>
      </div>
    </footer>
  );
};
