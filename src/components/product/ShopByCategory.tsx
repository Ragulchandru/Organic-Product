import React from 'react';
import { Utensils, Sprout, Leaf, Droplet, Sun, Package, Gift, Layers } from 'lucide-react';

interface ShopByCategoryProps {
  onSelectCategory: (category: string) => void;
}

export const ShopByCategory: React.FC<ShopByCategoryProps> = ({ onSelectCategory }) => {
  const categoriesList = [
    { id: 'rice', title: 'Traditional Rice', desc: 'Thooyamalli, Mapillai Samba, Sivan Samba', icon: Utensils },
    { id: 'rice', title: 'Black Rice', desc: 'Karuppu Kavuni, Kavuni Kurunai', icon: Sprout },
    { id: 'millets', title: 'Native Millets', desc: 'Varagu, Samai, Thinai, Kuthiraivali, Kambu', icon: Leaf },
    { id: 'rice', title: 'Artisanal Aval', desc: 'Mapillai Samba, Poongar, Kavuni Flakes', icon: Layers },
    { id: 'oils', title: 'Oils & Ghee', desc: 'Wood-Pressed Sesame, Groundnut, Naatu Pasu Nei', icon: Droplet },
    { id: 'millets', title: 'Raw Honey', desc: 'Kombu Then, Malai Then, Natural Forest Honey', icon: Sun },
    { id: 'millets', title: 'Pulses & Essentials', desc: 'Pachai Payaru, Thuvaram Paruppu, Karuppatti', icon: Package },
    { id: 'all', title: 'Curated Combos', desc: 'Free Delivery Packs, 12-in-1, Millets Bundles', icon: Gift },
  ];

  return (
    <section className="w-full py-12 px-4 sm:px-6 lg:px-8 bg-[#FAF7EF] border-b border-[#E8E2D2]">
      <div className="max-w-[1320px] mx-auto flex flex-col gap-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <span className="font-sans text-xs text-[#3c683d] uppercase tracking-widest font-bold block">
              Indigenous Pantry
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#002916] font-medium mt-1">
              Shop by Category
            </h2>
          </div>
          <p className="font-sans text-sm text-[#414943] max-w-md leading-relaxed">
            Discover traditional foods selected for your everyday kitchen, naturally grown and minimally milled.
          </p>
        </div>

        {/* 8-Card Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categoriesList.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <button
                key={idx}
                onClick={() => onSelectCategory(cat.id)}
                className="group p-4 rounded-2xl bg-[#f6f3eb] hover:bg-[#f1eee6] border border-[#E8E2D2]/80 transition-all flex flex-col gap-3 text-left shadow-sm hover:shadow-md"
              >
                <div className="w-12 h-12 rounded-xl bg-white text-[#002916] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform border border-[#E8E2D2]">
                  <Icon className="w-6 h-6 text-[#173F2A]" />
                </div>
                <div>
                  <h3 className="font-sans text-sm sm:text-base font-bold text-[#1c1c17]">
                    {cat.title}
                  </h3>
                  <p className="font-sans text-xs text-[#414943] line-clamp-1 mt-0.5">
                    {cat.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

      </div>
    </section>
  );
};
