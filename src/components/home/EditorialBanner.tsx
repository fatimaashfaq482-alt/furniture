import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../data/images';
import { SafeImage } from '../SafeImage';
import { Reveal } from '../Reveal';

export const EditorialBanner: React.FC = () => {
  return (
    <section className="py-8 sm:py-10 bg-[#F8F6F2]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="bg-[#F1EDE6] border border-[#E8E0D5] rounded-[10px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-5 p-8 sm:p-10 lg:p-12 flex flex-col justify-center">
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-3">
                Designed to Inspire
              </p>
              <h2 className="font-serif text-[28px] sm:text-[36px] lg:text-[40px] leading-[1.12] font-normal text-[#242522] mb-4">
                Modern Furniture. Made for Real Life.
              </h2>
              <p className="text-sm sm:text-[15px] text-[#77736D] leading-relaxed mb-7 max-w-[38ch]">
                Discover timeless pieces that balance everyday comfort, thoughtful functionality, and exceptional craftsmanship.
              </p>
              <div>
                <Link
                  to="/shop"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.15em] uppercase font-medium rounded-[4px] transition-colors whitespace-nowrap"
                >
                  Explore the Collection
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 min-h-[260px] lg:h-[360px] bg-[#E8E0D5]">
              <SafeImage
                src={IMAGES.editorialOliveBanner}
                alt="Designer living corner with dark olive wool lounge chair, natural oak console table, and ceramic objects"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
