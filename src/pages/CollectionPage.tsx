import React, { useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { SafeImage } from '../components/SafeImage';
import { PageMeta } from '../components/PageMeta';

export const CollectionPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState<'popular' | 'price-asc' | 'price-desc'>('popular');

  const category = CATEGORIES.find((c) => c.slug === slug);

  const products = useMemo(() => {
    const matching = PRODUCTS.filter((p) => p.collectionSlug === slug);
    return [...matching].sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      return b.popularityScore - a.popularityScore;
    });
  }, [slug, sortBy]);

  if (!category) {
    return (
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="font-serif text-4xl text-[#242522] mb-3">Collection Not Found</h1>
        <p className="text-sm text-[#77736D] mb-6">
          Explore our complete furniture catalog to find pieces for your space.
        </p>
        <Link
          to="/shop"
          className="inline-flex px-6 py-3 bg-[#20221F] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase rounded-[4px]"
        >
          View All Furniture
        </Link>
      </div>
    );
  }

  return (
    <>
      <PageMeta
        title={`${category.name} Furniture — Auren Living`}
        description={category.description}
      />

      {/* Room Collection Hero */}
      <section className="bg-[#F1EDE6] border-b border-[#E8E0D5]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#77736D] mb-6">
            <Link to="/" className="hover:text-[#242522]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <Link to="/collections" className="hover:text-[#242522]">
              Collections
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-[#242522]">{category.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5">
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2.5">
                {category.eyebrow}
              </p>
              <h1 className="font-serif text-[36px] sm:text-[48px] leading-[1.08] font-normal text-[#242522] mb-4">
                {category.name}
              </h1>
              <p className="text-[15px] text-[#30302D] leading-relaxed mb-3">
                {category.description}
              </p>
              <p className="text-sm text-[#77736D] leading-relaxed">
                {category.editorialNote}
              </p>
            </div>

            <div className="lg:col-span-7 aspect-[16/10] rounded-[10px] overflow-hidden bg-[#E8E0D5]">
              <SafeImage
                src={category.image}
                alt={category.imageAlt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Collection Products */}
      <section className="py-12 sm:py-16 bg-[#F8F6F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8E0D5]">
            <p className="text-xs tracking-[0.14em] uppercase text-[#77736D] tabular-nums">
              {products.length} curated {products.length === 1 ? 'piece' : 'pieces'} in {category.name}
            </p>

            <div className="flex items-center gap-2">
              <label htmlFor="collection-sort" className="text-xs text-[#77736D]">
                Sort by:
              </label>
              <select
                id="collection-sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'popular' | 'price-asc' | 'price-desc')}
                className="px-3 py-2 bg-[#FFFFFF] border border-[#DCD1C3] rounded-[6px] text-xs font-medium text-[#242522] focus:outline-none focus:border-[#242522]"
              >
                <option value="popular">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-7">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Explore Other Rooms */}
          <div className="mt-16 pt-12 border-t border-[#E8E0D5]">
            <h2 className="font-serif text-2xl sm:text-3xl text-[#242522] mb-6">
              Explore Other Spaces
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {CATEGORIES.filter((c) => c.slug !== category.slug).map((other) => (
                <Link
                  key={other.slug}
                  to={`/collections/${other.slug}`}
                  className="group bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] overflow-hidden hover:border-[#A49A8E] transition-colors"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#F1EDE6]">
                    <SafeImage
                      src={other.image}
                      alt={other.imageAlt}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3.5">
                    <p className="font-serif text-lg text-[#242522]">{other.name}</p>
                    <p className="text-xs text-[#77736D] tabular-nums">{other.itemCount} pieces</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
