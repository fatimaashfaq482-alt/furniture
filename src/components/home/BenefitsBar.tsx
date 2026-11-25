import React from 'react';
import { Truck, RotateCcw, ShieldCheck, Headphones } from 'lucide-react';

const BENEFITS = [
  {
    icon: Truck,
    title: 'Complimentary Shipping',
    description: 'On qualifying orders.',
  },
  {
    icon: RotateCcw,
    title: 'Easy Returns',
    description: 'Hassle-free 30-day returns.',
  },
  {
    icon: ShieldCheck,
    title: 'Secure Checkout',
    description: 'Protected payments every time.',
  },
  {
    icon: Headphones,
    title: 'Personal Support',
    description: 'Here whenever you need us.',
  },
];

export const BenefitsBar: React.FC = () => {
  return (
    <section aria-label="Service Benefits" className="bg-[#F1EDE6] border-y border-[#E8E0D5]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-7">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-6 gap-x-4 lg:gap-0 lg:divide-x lg:divide-[#DCD1C3]">
          {BENEFITS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="flex items-start sm:items-center gap-3.5 lg:px-8 first:lg:pl-0 last:lg:pr-0"
              >
                <div className="w-9 h-9 rounded-full bg-[#F8F6F2] border border-[#DCD1C3] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#59604D] stroke-[1.6]" aria-hidden="true" />
                </div>
                <div>
                  <h2 className="font-sans text-[13px] sm:text-sm font-medium text-[#242522] leading-snug">
                    {item.title}
                  </h2>
                  <p className="text-xs text-[#77736D] mt-0.5 leading-snug">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
