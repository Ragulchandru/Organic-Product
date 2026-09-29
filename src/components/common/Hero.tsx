import React from 'react';
import { ShoppingBag, MessageSquare, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="w-full bg-[#FAF7EF] py-8 lg:py-12 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D2]">
      <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        
        {/* Left Narrative */}
        <div className="lg:col-span-6 flex flex-col items-start gap-4 text-left">
          
          {/* Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#bbedb5]/40 text-[#255027] border border-[#bbedb5]">
            <ShieldCheck className="w-4 h-4 text-[#3c683d] shrink-0" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider">
              Heritage Harvest • Estd. Tamil Nadu
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#002916] font-medium tracking-tight leading-[1.15]">
            Traditional Goodness. <br className="hidden sm:inline" />
            <span className="italic font-normal text-[#3c683d]">Naturally Yours.</span>
          </h1>

          {/* Body Text */}
          <p className="font-sans text-base sm:text-lg text-[#414943] max-w-xl leading-relaxed">
            Traditional rice varieties, unpolished millets, stone wood-pressed oils, and wholesome pantry staples cultivated with ancestral care for your everyday kitchen.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2 w-full sm:w-auto">
            <button
              onClick={onExploreClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#173f2a] text-white font-sans text-sm font-semibold shadow-md hover:bg-[#3c683d] transition-all"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>Shop Products</span>
            </button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Vaishu%20Organics%2C%20I%20would%20like%20to%20order%20traditional%20rice%20and%20oils.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-sans text-sm font-bold shadow-md hover:opacity-95 transition-all"
            >
              <MessageSquare className="w-5 h-5 fill-white shrink-0" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Parcel Delivery Note */}
          <div className="flex items-center gap-2 pt-2 text-[#414943] font-sans text-xs">
            <Truck className="w-4 h-4 text-[#3c683d] shrink-0" />
            <span>Direct Parcel Delivery across Tamil Nadu, Bengaluru & All-India Hubs</span>
          </div>

        </div>

        {/* Right Photo */}
        <div className="lg:col-span-6 relative">
          <div className="relative w-full aspect-[4/3] sm:aspect-[16/11] rounded-2xl overflow-hidden shadow-xl bg-[#f1eee6]">
            <img
              src="/assets/hero_pantry.jpg"
              alt="Traditional South Indian Organic Grains & Wood-Pressed Oils"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002916]/30 via-transparent to-transparent"></div>

            {/* Floating Tag */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-auto flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#FAF7EF]/95 backdrop-blur-md text-[#1c1c17] shadow-lg border border-[#E8E2D2]">
              <Sparkles className="w-6 h-6 text-[#3c683d] shrink-0" />
              <div className="flex flex-col">
                <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#3c683d]">Soil Integrity</span>
                <span className="font-sans text-xs sm:text-sm font-bold text-[#002916]">Pure & Unadulterated • Direct from Soil</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
