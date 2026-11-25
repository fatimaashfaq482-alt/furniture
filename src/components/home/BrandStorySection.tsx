import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../../data/images';
import { SafeImage } from '../SafeImage';
import { Reveal } from '../Reveal';

export const BrandStorySection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F1EDE6]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <div className="lg:col-span-7 aspect-[4/3] rounded-[10px] overflow-hidden bg-[#E8E0D5]">
              <SafeImage
                src={IMAGES.brandStoryStudio}
                alt="Sunlit Auren Living furniture studio with solid oak tables, chairs, and Belgian linen bolts"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-5 lg:pl-2">
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-3">
                Our Philosophy
              </p>
              <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[44px] leading-[1.1] font-normal text-[#242522] mb-5">
                Furniture That Tells a Story.
              </h2>
              <p className="text-[15px] text-[#30302D] leading-[1.7] mb-7 max-w-[44ch]">
                At Auren Living, we believe the best spaces are built around thoughtful details, honest materials, and pieces made to be enjoyed for years to come.
              </p>
              <Link
                to="/our-story"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-transparent hover:bg-[#242522] text-[#242522] hover:text-[#F8F6F2] border border-[#242522] text-xs tracking-[0.15em] uppercase font-medium rounded-[4px] transition-colors whitespace-nowrap"
              >
                Discover Our Story
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
