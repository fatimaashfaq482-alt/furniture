import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Product } from '../../types';
import { ProductCard } from '../ProductCard';
import { Reveal } from '../Reveal';

interface ProductShowcaseSectionProps {
  eyebrow: string;
  heading: string;
  description?: string;
  linkLabel: string;
  linkTo: string;
  products: Product[];
  surface?: 'ivory' | 'cream';
}

export const ProductShowcaseSection: React.FC<ProductShowcaseSectionProps> = ({
  eyebrow,
  heading,
  description,
  linkLabel,
  linkTo,
  products,
  surface = 'ivory',
}) => {
  return (
    <section
      className={`py-16 sm:py-20 lg:py-24 ${
        surface === 'cream' ? 'bg-[#F1EDE6]/60' : 'bg-[#F8F6F2]'
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 sm:mb-12">
            <div className="max-w-[540px]">
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#77736D] font-medium mb-2.5">
                {eyebrow}
              </p>
              <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.12] font-normal text-[#242522]">
                {heading}
              </h2>
              {description && (
                <p className="text-sm sm:text-[15px] text-[#77736D] mt-2.5 leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            <Link
              to={linkTo}
              className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-[#242522] hover:text-[#59604D] transition-colors whitespace-nowrap shrink-0 self-start md:self-auto"
            >
              <span>{linkLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {products.map((product, index) => (
            <Reveal key={product.id} delayMs={index * 60}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
