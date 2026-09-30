import React from 'react';
import { ShoppingBag, MessageSquare, ShieldCheck, Truck, Sparkles } from 'lucide-react';
import { siteConfig } from '../../config/siteConfig';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section className="w-full bg-[#FAF7EF] py-4 sm:py-6 lg:py-12 px-3 sm:px-6 lg:px-8 border-b border-[#E8E2D2]">
      {/* 1. Mobile Hero Card (Exact Match to User Screenshot) */}
      <div className="lg:hidden max-w-md mx-auto">
        <div className="relative w-full rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-xl bg-[#002916] min-h-[440px] flex flex-col justify-end p-6 sm:p-8">
          {/* Background Image with Dark Vignette */}
          <img
            src="/assets/hero_pantry.jpg"
            alt="Food With Roots - Traditional Grains"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30" />

          {/* Card Content Overlay */}
          <div className="relative z-10 space-y-3">
            {/* Native Harvest Pill Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white text-[10px] font-bold tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" />
              <span>NATIVE HARVEST 2026</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl text-white font-medium tracking-tight leading-tight">
              Food With Roots.
            </h1>

            {/* Subtitle Description */}
            <p className="font-sans text-xs sm:text-sm text-white/90 leading-relaxed font-normal max-w-xs">
              Heritage unpolished rice, rainfed dryland millets, and cold-churned pantry elixirs from Tamil Nadu.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 rounded-full bg-[#FAF7EF] hover:bg-white text-[#173F2A] font-sans text-xs font-bold shadow-md transition-all active:scale-95"
              >
                Shop All Grains
              </button>

              <button
                onClick={onExploreClick}
                className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 hover:bg-white/20 text-white font-sans text-xs font-semibold transition-all active:scale-95"
              >
                Milling Philosophy
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Desktop Hero Layout */}
      <div className="hidden lg:grid max-w-[1320px] mx-auto grid-cols-12 gap-12 items-center">
        {/* Left Narrative */}
        <div className="col-span-6 flex flex-col items-start gap-4 text-left">
          {/* Badge */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#bbedb5]/40 text-[#255027] border border-[#bbedb5]">
            <ShieldCheck className="w-4 h-4 text-[#3c683d] shrink-0" />
            <span className="font-sans text-[11px] font-bold uppercase tracking-wider">
              Heritage Harvest • Estd. Tamil Nadu
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-5xl lg:text-6xl text-[#002916] font-medium tracking-tight leading-[1.15]">
            Traditional Goodness. <br />
            <span className="italic font-normal text-[#3c683d]">Naturally Yours.</span>
          </h1>

          {/* Body Text */}
          <p className="font-sans text-lg text-[#414943] max-w-xl leading-relaxed">
            Traditional rice varieties, unpolished millets, stone wood-pressed oils, and wholesome pantry staples cultivated with ancestral care for your everyday kitchen.
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={onExploreClick}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#173f2a] text-white font-sans text-sm font-semibold shadow-md hover:bg-[#3c683d] transition-all"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span>Shop Products</span>
            </button>

            <a
              href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=Hello%20Vaishu%20Organics%2C%20I%20would%20like%20to%20order%20traditional%20rice%20and%20oils.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-sans text-sm font-bold shadow-md hover:opacity-95 transition-all"
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
        <div className="col-span-6 relative">
          <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-xl bg-[#f1eee6]">
            <img
              src="/assets/hero_pantry.jpg"
              alt="Traditional South Indian Organic Grains & Wood-Pressed Oils"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#002916]/30 via-transparent to-transparent" />

            {/* Floating Tag */}
            <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2.5 rounded-xl bg-[#FAF7EF]/95 backdrop-blur-md text-[#1c1c17] shadow-lg border border-[#E8E2D2]">
              <Sparkles className="w-6 h-6 text-[#3c683d] shrink-0" />
              <div className="flex flex-col">
                <span className="font-sans text-[10px] uppercase tracking-wider font-bold text-[#3c683d]">Soil Integrity</span>
                <span className="font-sans text-sm font-bold text-[#002916]">Pure & Unadulterated • Direct from Soil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
