import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CATEGORIES } from '../../data/categories';
import { SafeImage } from '../SafeImage';
import { Reveal } from '../Reveal';

export const CategorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F2]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-[540px]">
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#77736D] font-medium mb-2.5">
                Explore Our Collections
              </p>
              <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.12] font-normal text-[#242522]">
                Find Furniture for Every Room
              </h2>
              <p className="text-sm sm:text-[15px] text-[#77736D] mt-2.5 leading-relaxed">
                Beautifully considered pieces for the spaces where life happens.
              </p>
            </div>

            <Link
              to="/collections"
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-[#242522] hover:text-[#59604D] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>View All Categories</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {CATEGORIES.map((category, index) => (
            <Reveal key={category.slug} delayMs={index * 55}>
              <Link
                to={`/collections/${category.slug}`}
                className="group relative block aspect-[4/5] sm:aspect-[4/5] rounded-[10px] overflow-hidden bg-[#E8E0D5] transition-transform duration-300 hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-[#242522]"
              >
                <SafeImage
                  src={category.image}
                  alt={category.imageAlt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-[#242522]/80 via-[#242522]/20 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 text-[#F8F6F2]">
                  <h3 className="font-serif text-xl sm:text-[22px] font-normal leading-tight text-[#F8F6F2]">
                    {category.name}
                  </h3>
                  <p className="text-[11px] tracking-[0.1em] uppercase text-[#DCD1C3] mt-1 tabular-nums">
                    {category.itemCount} pieces
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
