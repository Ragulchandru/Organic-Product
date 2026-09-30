import React from 'react';
import { Sprout, ShieldCheck, Droplet, Truck } from 'lucide-react';

export const TrustBar: React.FC = () => {
  const trustPoints = [
    {
      icon: Sprout,
      title: 'Traditional Foods',
      desc: 'Ancient Heritage Grains',
      color: 'text-[#002916]',
    },
    {
      icon: ShieldCheck,
      title: 'Carefully Selected',
      desc: 'Unpolished & Chemical-Free',
      color: 'text-[#3c683d]',
    },
    {
      icon: Droplet,
      title: 'Wood-Pressed Oils',
      desc: 'Cold Churned & Pure',
      color: 'text-[#C8A45D]',
    },
    {
      icon: Truck,
      title: 'India-Wide Delivery',
      desc: 'Door Delivery in TN & BLR',
      color: 'text-[#173f2a]',
    },
  ];

  return (
    <section className="hidden lg:block w-full bg-[#f6f3eb] py-6 px-4 sm:px-6 lg:px-8 border-b border-[#E8E2D2]">
      <div className="max-w-[1320px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {trustPoints.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-4 rounded-xl bg-[#f1eee6] flex items-center gap-3 border border-[#E8E2D2]/60 shadow-sm"
            >
              <div className={`w-10 h-10 rounded-lg bg-white ${item.color} flex items-center justify-center shrink-0 border border-[#E8E2D2]`}>
                <Icon className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-sans text-xs sm:text-sm font-bold text-[#1c1c17] leading-tight">
                  {item.title}
                </span>
                <span className="font-sans text-[11px] text-[#414943] leading-snug mt-0.5">
                  {item.desc}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
