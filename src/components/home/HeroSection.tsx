import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { IMAGES } from '../../data/images';
import { SafeImage } from '../SafeImage';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#F1EDE6]">
      <div className="relative min-h-[520px] lg:h-[560px] w-full flex items-center">
        {/* Background Interior Photography */}
        <SafeImage
          src={IMAGES.heroLivingRoom}
          alt="Sunlit luxury Scandinavian living room featuring cream modular sofa, oak coffee table, and natural ceramics"
          className="absolute inset-0 w-full h-full object-cover object-right sm:object-center"
        />

        {/* Subtle editorial scrim on left side for crisp 4.5:1+ contrast without hiding right-side furniture */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#F8F6F2]/95 via-[#F8F6F2]/75 to-[#F8F6F2]/10 sm:via-[#F8F6F2]/55 sm:to-transparent"
        />

        {/* Left-aligned Editorial Content */}
        <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
          <div className="max-w-[560px]">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-4"
            >
              Timeless Craftsmanship. Modern Living.
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-[38px] sm:text-[54px] lg:text-[66px] leading-[1.06] font-normal text-[#242522] tracking-[-0.01em] mb-5"
            >
              Make Room for Beautiful Living.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-[15px] sm:text-[16px] leading-[1.65] text-[#30302D] max-w-[44ch] mb-8"
            >
              Discover thoughtfully crafted furniture that brings comfort, character, and timeless elegance to every corner of your home.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-3.5"
            >
              <Link
                to="/shop"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.15em] uppercase font-medium rounded-[4px] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#242522]"
              >
                Shop Furniture
              </Link>
              <Link
                to="/collections"
                className="inline-flex items-center justify-center px-7 py-3.5 bg-[#F8F6F2]/75 hover:bg-[#FFFFFF] text-[#242522] border border-[#242522]/45 hover:border-[#242522] text-xs tracking-[0.15em] uppercase font-medium rounded-[4px] transition-colors duration-200 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#242522]"
              >
                Explore Collections
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
