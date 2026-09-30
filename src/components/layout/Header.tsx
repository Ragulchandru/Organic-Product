import React, { useState } from 'react';
import { ShoppingBag, Menu, X, MessageSquare, Search } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';
import { formatPrice } from '../../lib/utils';

interface HeaderProps {
  cartItemCount: number;
  cartSubtotal: number;
  onOpenCart: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onSelectCategory?: (category: string) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  cartItemCount,
  cartSubtotal,
  onOpenCart,
  activeTab,
  setActiveTab,
  onSelectCategory,
  searchQuery = '',
  onSearchChange,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleNavClick = (tab: string, category?: string) => {
    setActiveTab(tab);
    if (category && onSelectCategory) {
      onSelectCategory(category);
    }
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchToggle = () => {
    setIsSearchOpen(!isSearchOpen);
    if (!isSearchOpen && activeTab !== 'catalog') {
      setActiveTab('catalog');
    }
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#FAF7EF] border-b border-[#E8E2D2] shadow-sm">
      {/* Announcement Bar - Desktop only */}
      <div className="hidden lg:flex bg-[#173F2A] text-[#FAF7EF] h-9 px-4 items-center justify-center overflow-hidden">
        <p className="text-[11px] font-medium tracking-wider uppercase truncate text-center">
          {siteConfig.shipping.announcementText} • WHATSAPP: {siteConfig.contact.whatsappDisplay}
        </p>
      </div>

      {/* Main Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Desktop Layout */}
        <div className="hidden lg:flex h-[72px] items-center justify-between gap-6">
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col text-left focus:outline-none"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-[#173F2A] leading-none">
              {siteConfig.brand.name}
            </span>
            <span className="font-sans text-[10px] text-[#B56147] tracking-[0.2em] uppercase mt-1 font-bold">
              {siteConfig.brand.tagline}
            </span>
          </button>

          <nav className="flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#242824]">
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

          {/* Desktop Search Bar */}
          <div className="relative flex-1 max-w-xs mx-2">
            <Search className="w-3.5 h-3.5 text-[#6F756D] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
              placeholder="Search rices, millets, oils..."
              className="w-full pl-8 pr-7 py-1.5 bg-white rounded-full border border-[#D5CEBF] text-xs text-[#242824] placeholder-[#6F756D] focus:outline-none focus:border-[#173F2A] transition-all"
            />
            {searchQuery && (
              <button
                onClick={() => onSearchChange && onSearchChange('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#6F756D] hover:text-[#173F2A]"
                aria-label="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Vaishu%20Organics%2C%20I%20would%20like%20to%20order%20traditional%20rice%20and%20oils.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#173F2A] hover:bg-[#23583C] text-white text-xs font-medium tracking-wide shadow-sm transition-all"
            >
              <MessageSquare className="w-4 h-4 fill-white shrink-0" />
              <span>WhatsApp Order</span>
            </a>

            <button
              onClick={onOpenCart}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-[#D5CEBF] bg-[#FAF7EF] text-[#173F2A] text-xs font-medium hover:border-[#173F2A] transition-all shadow-sm"
            >
              <ShoppingBag className="w-4 h-4 text-[#173F2A] shrink-0" />
              <span className="font-semibold">
                Bag ({cartItemCount}) • {formatPrice(cartSubtotal)}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Header (Matches Screenshot 4 EXACTLY) */}
        <div className="lg:hidden h-[72px] flex items-center justify-between relative py-2">
          {/* Left: Menu Hamburger Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 -ml-2 text-[#173F2A] hover:text-[#23583C] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Center: Brand Name & Tagline */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex flex-col items-center justify-center text-center focus:outline-none px-2"
          >
            <span className="font-serif text-2xl font-bold tracking-tight text-[#173F2A] leading-tight">
              {siteConfig.brand.name}
            </span>
            <span className="font-sans text-[9px] text-[#B56147] tracking-[0.2em] uppercase mt-0.5 font-bold">
              HERITAGE HARVEST JOURNAL
            </span>
          </button>

          {/* Right: Search Icon & Shopping Bag with Terracotta Badge Counter */}
          <div className="flex items-center gap-3">
            <button
              onClick={handleSearchToggle}
              className="p-1.5 text-[#173F2A] hover:text-[#23583C] transition-colors focus:outline-none"
              aria-label="Search catalog"
            >
              <Search className="w-5 h-5" />
            </button>

            <button
              onClick={onOpenCart}
              className="relative p-1.5 text-[#173F2A] hover:text-[#23583C] transition-colors focus:outline-none"
              aria-label="Open cart"
            >
              <ShoppingBag className="w-6 h-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-[#B56147] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-sm">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Overlay Bar */}
        {isSearchOpen && (
          <div className="py-2.5 pb-3 border-t border-[#E8E2D2] animate-in slide-in-from-top-2 duration-200">
            <div className="relative">
              <Search className="w-4 h-4 text-[#6F756D] absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                placeholder="Search traditional rices, millets, cold-pressed oils..."
                className="w-full pl-9 pr-9 py-2 bg-white rounded-full border border-[#D5CEBF] text-xs text-[#242824] placeholder-[#6F756D] focus:outline-none focus:border-[#173F2A]"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange && onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#6F756D] hover:text-[#173F2A]"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[#E8E2D2] bg-[#FAF7EF] px-5 py-4 space-y-3 shadow-lg">
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
