import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PageMeta } from '../components/PageMeta';
import { SafeImage } from '../components/SafeImage';
import { Reveal } from '../components/Reveal';

export const CollectionsPage: React.FC = () => {
  return (
    <>
      <PageMeta
        title="Collections by Room — Auren Living"
        description="Explore Auren Living furniture collections curated for the Living Room, Dining Room, Bedroom, Home Office, and Outdoor Living."
      />

      <section className="bg-[#F1EDE6] border-b border-[#E8E0D5] py-12 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#77736D] mb-4">
            <Link to="/" className="hover:text-[#242522]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-[#242522]">Collections</span>
          </nav>

          <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2">
            Spaces &amp; Silhouettes
          </p>
          <h1 className="font-serif text-[36px] sm:text-[48px] leading-[1.08] font-normal text-[#242522] max-w-[18ch]">
            Curated Collections for Every Room
          </h1>
          <p className="text-sm sm:text-[15px] text-[#77736D] mt-3 max-w-[54ch] leading-relaxed">
            Each room collection shares a cohesive material vocabulary—warm European oak, oiled walnut, Belgian flax linen, and honed stone—so pieces flow naturally across your home.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F8F6F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 sm:space-y-16">
          {CATEGORIES.map((category, idx) => (
            <Reveal key={category.slug}>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] overflow-hidden p-4 sm:p-6 lg:p-8">
                <div
                  className={`lg:col-span-7 aspect-[4/3] rounded-[8px] overflow-hidden bg-[#F1EDE6] ${
                    idx % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  <Link to={`/collections/${category.slug}`} className="block w-full h-full group">
                    <SafeImage
                      src={category.image}
                      alt={category.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </Link>
                </div>

                <div className={`lg:col-span-5 ${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2">
                    {category.eyebrow} · {category.itemCount} Pieces
                  </p>
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#242522] mb-3">
                    {category.name}
                  </h2>
                  <p className="text-[15px] text-[#30302D] leading-relaxed mb-3">
                    {category.description}
                  </p>
                  <p className="text-sm text-[#77736D] leading-relaxed mb-7">
                    {category.editorialNote}
                  </p>
                  <Link
                    to={`/collections/${category.slug}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase font-medium rounded-[4px] transition-colors"
                  >
                    <span>Explore {category.name}</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
};
