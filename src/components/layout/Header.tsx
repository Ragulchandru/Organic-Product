import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MessageSquare } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { formatPrice } from '../../lib/utils';

interface HeaderProps {
  cartItemCount: number;
  cartSubtotal: number;
  onOpenCart: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectCategory?: (category: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  cartSubtotal,
  onOpenCart,
  activeTab,
  setActiveTab,
  onSelectCategory,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (tab: string, category?: string) => {
    setActiveTab(tab);
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#FAF7EF] border-b border-[#E8E2D2] shadow-sm">
      {/* Announcement Bar - Hidden on mobile for clean header layout */}
      <div className="hidden sm:flex bg-[#173F2A] text-[#FAF7EF] h-9 px-4 items-center justify-center overflow-hidden">
        <p className="text-[11px] font-medium tracking-wider uppercase truncate text-center">
          {siteConfig.shipping.announcementText} • WHATSAPP: {siteConfig.contact.whatsappDisplay}
        </p>
      </div>

      {/* Main Bar */}
      <div className="h-[72px] max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-6">
        
        {/* Left Mobile Menu Toggle & Brand Logo */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-[#242824] hover:text-[#173F2A] transition-colors rounded-md"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col text-left focus:outline-none"
          >
            <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#173F2A] leading-none">
              {siteConfig.brand.name}
            </span>
            <span className="font-sans text-[10px] text-[#6F756D] tracking-widest uppercase mt-0.5 font-semibold">
              {siteConfig.brand.tagline}
            </span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#242824]">
          <button
            onClick={() => handleNavClick('home')}
            className={`pb-1 transition-colors ${
              activeTab === 'home'
                ? 'text-[#173f2a] font-bold border-b-2 border-[#173f2a]'
                : 'text-[#555E54] hover:text-[#173f2a]'
            }`}
          >
            Home
          </button>
          <button
            onClick={() => handleNavClick('catalog', 'all')}
            className={`pb-1 transition-colors ${
              activeTab === 'catalog'
                ? 'text-[#173f2a] font-bold border-b-2 border-[#173f2a]'
                : 'text-[#555E54] hover:text-[#173f2a]'
            }`}
          >
            Shop All
          </button>
          <button
            onClick={() => handleNavClick('delivery')}
            className={`pb-1 transition-colors ${
              activeTab === 'delivery'
                ? 'text-[#173f2a] font-bold border-b-2 border-[#173f2a]'
                : 'text-[#555E54] hover:text-[#173f2a]'
            }`}
          >
            Delivery & Shipping
          </button>
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          <a
            href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Vaishu%20Organics%2C%20I%20would%20like%20to%20order%20traditional%20rice%20and%20oils.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#173F2A] hover:bg-[#23583C] text-white text-xs font-medium tracking-wide shadow-sm transition-all"
          >
            <MessageSquare className="w-4 h-4 fill-white shrink-0" />
            <span>WhatsApp Order</span>
          </a>

          <button
            onClick={onOpenCart}
            className="flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-full border border-[#D5CEBF] bg-[#FAF7EF] text-[#173F2A] text-xs font-medium hover:border-[#173F2A] transition-all shadow-sm"
          >
            <ShoppingBag className="w-4 h-4 text-[#173F2A] shrink-0" />
            <span className="font-semibold">
              Bag ({cartItemCount}) • {formatPrice(cartSubtotal)}
            </span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D2] bg-[#FAF7EF] px-5 py-4 space-y-3">
          <div className="flex flex-col space-y-2 text-sm font-semibold uppercase tracking-wider text-[#242824]">
            <button
              onClick={() => handleNavClick('home')}
              className="text-left py-2 border-b border-[#E8E2D2]/50 text-[#173F2A]"
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('catalog', 'all')}
              className="text-left py-2 border-b border-[#E8E2D2]/50 text-[#555E54]"
            >
              Shop All Catalog
            </button>
            <button
              onClick={() => handleNavClick('delivery')}
              className="text-left py-2 text-[#555E54]"
            >
              Delivery & Shipping Guidelines
            </button>
          </div>

          <div className="pt-2">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4 fill-white" />
              <span>WhatsApp Order ({siteConfig.contact.whatsappDisplay})</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
