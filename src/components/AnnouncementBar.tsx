import React from 'react';
import { Truck, Phone } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#242522] text-[#F8F6F2] border-b border-[#30302D]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-9 flex items-center justify-center md:justify-between text-[11px] sm:text-xs tracking-[0.04em]">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Truck className="w-3.5 h-3.5 text-[#DCD1C3] shrink-0 stroke-[1.6]" aria-hidden="true" />
          <span>Complimentary Shipping on Orders Over $1,500</span>
        </div>

        <div className="hidden md:block text-[#DCD1C3] tracking-[0.06em] whitespace-nowrap">
          Thoughtful Design. Lasting Quality.
        </div>

        <a
          href="tel:+18005550142"
          className="hidden md:flex items-center gap-1.5 text-[#F8F6F2] hover:text-[#DCD1C3] transition-colors whitespace-nowrap"
        >
          <Phone className="w-3.5 h-3.5 text-[#DCD1C3] shrink-0 stroke-[1.6]" aria-hidden="true" />
          <span className="tabular-nums">Need Assistance? +1 (800) 555-0142</span>
        </a>
      </div>
    </div>
  );
};
