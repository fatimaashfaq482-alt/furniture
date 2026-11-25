import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../data/images';
import { SafeImage } from '../components/SafeImage';
import { CraftsmanshipSection } from '../components/home/CraftsmanshipSection';
import { PageMeta } from '../components/PageMeta';

export const OurStoryPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Our Story & Philosophy — Auren Living"
        description="Discover the craft, European solid oak provenance, and Scandinavian design philosophy behind Auren Living."
      />

      <section className="bg-[#F1EDE6] border-b border-[#E8E0D5] py-14 sm:py-20">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-3">
              Our Story
            </p>
            <h1 className="font-serif text-[38px] sm:text-[50px] leading-[1.08] font-normal text-[#242522] mb-5">
              Thoughtfully Designed. Beautifully Lived.
            </h1>
            <p className="text-[15px] text-[#30302D] leading-[1.75] mb-4">
              Auren Living began with a simple observation: modern homes deserve furniture crafted with architectural restraint and enduring warmth—without disposable shortcuts.
            </p>
            <p className="text-[15px] text-[#77736D] leading-[1.75]">
              Working alongside independent timber workshops in Denmark, Portugal, and the Pacific Northwest, we produce small-batch seating, tables, and storage pieces meant to age gracefully alongside your family.
            </p>
          </div>

          <div className="lg:col-span-7 aspect-[4/3] rounded-[10px] overflow-hidden bg-[#E8E0D5]">
            <SafeImage
              src={IMAGES.brandStoryStudio}
              alt="Auren Living atelier showroom with oak tables and rolled Belgian linen textiles"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section id="philosophy" className="py-16 sm:py-20 bg-[#F8F6F2] border-b border-[#E8E0D5]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] p-7">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#59604D] mb-2">01 · Provenance</p>
            <h2 className="font-serif text-2xl text-[#242522] mb-2.5">FSC-Certified Timber</h2>
            <p className="text-sm text-[#77736D] leading-relaxed">
              100% of our European white oak, American walnut, and Grade-A teak is sustainably harvested and kiln-dried for generational stability.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] p-7">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#59604D] mb-2">02 · Textiles</p>
            <h2 className="font-serif text-2xl text-[#242522] mb-2.5">Natural Belgian Flax &amp; Wool</h2>
            <p className="text-sm text-[#77736D] leading-relaxed">
              Every upholstery fabric is OEKO-TEX certified and free from synthetic PFAS flame retardants, prioritizing tactile breathability.
            </p>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] p-7">
            <p className="text-[11px] tracking-[0.16em] uppercase text-[#59604D] mb-2">03 · Longevity</p>
            <h2 className="font-serif text-2xl text-[#242522] mb-2.5">10-Year Guarantee</h2>
            <p className="text-sm text-[#77736D] leading-relaxed">
              We stand behind every frame, mortise joint, and cushion core with a comprehensive 10-year structural craftsmanship warranty.
            </p>
          </div>
        </div>
      </section>

      <div id="craftsmanship">
        <CraftsmanshipSection />
      </div>

      <section className="py-16 bg-[#F1EDE6] border-t border-[#E8E0D5] text-center">
        <div className="max-w-[600px] mx-auto px-4">
          <h2 className="font-serif text-3xl sm:text-4xl text-[#242522] mb-3">
            Explore the Collection
          </h2>
          <p className="text-sm text-[#77736D] mb-6">
            Discover sofas, dining tables, and serene bedroom silhouettes ready to anchor your home.
          </p>
          <Link
            to="/shop"
            className="inline-flex px-7 py-3.5 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.15em] uppercase font-medium rounded-[4px] transition-colors"
          >
            Shop All Furniture
          </Link>
        </div>
      </section>
    </>
  );
};
