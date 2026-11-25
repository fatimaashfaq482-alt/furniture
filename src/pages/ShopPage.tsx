import React, { useMemo, useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SlidersHorizontal, X, ChevronRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { ProductCard } from '../components/ProductCard';
import { PageMeta } from '../components/PageMeta';
import { formatPrice } from '../utils/format';

type SortKey = 'popular' | 'price-asc' | 'price-desc' | 'rating';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const initialFilter = searchParams.get('filter') || 'all';
  const initialQuery = searchParams.get('q') || '';

  const [selectedRoom, setSelectedRoom] = useState<string>('all');
  const [selectedMaterial, setSelectedMaterial] = useState<string>('all');
  const [maxPrice, setMaxPrice] = useState<number>(2200);
  const [sortBy, setSortBy] = useState<SortKey>('popular');
  const [specialFilter, setSpecialFilter] = useState<string>(initialFilter);
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    setSpecialFilter(searchParams.get('filter') || 'all');
    setSearchQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();

    return PRODUCTS.filter((p) => {
      if (specialFilter === 'bestsellers' && !p.isBestseller) return false;
      if (specialFilter === 'new' && !p.isNewArrival) return false;
      if (selectedRoom !== 'all' && p.collectionSlug !== selectedRoom) return false;
      if (selectedMaterial !== 'all' && p.materialGroup !== selectedMaterial) return false;
      if (p.price > maxPrice) return false;
      if (
        q &&
        !(
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.material.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q)
        )
      ) {
        return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.popularityScore - a.popularityScore;
    });
  }, [selectedRoom, selectedMaterial, maxPrice, sortBy, specialFilter, searchQuery]);

  const resetFilters = () => {
    setSelectedRoom('all');
    setSelectedMaterial('all');
    setMaxPrice(2200);
    setSpecialFilter('all');
    setSearchQuery('');
    setSearchParams({});
  };

  const materials = ['all', 'Wood', 'Upholstery', 'Stone', 'Teak'];

  const hasActiveFilters =
    selectedRoom !== 'all' ||
    selectedMaterial !== 'all' ||
    maxPrice < 2200 ||
    specialFilter !== 'all' ||
    searchQuery.trim() !== '';

  return (
    <>
      <PageMeta
        title="Shop All Furniture — Auren Living"
        description="Browse the complete Auren Living collection of luxury sofas, solid white oak dining tables, bedroom frames, home office desks, and outdoor teak seating."
      />

      {/* Page Header */}
      <section className="bg-[#F1EDE6] border-b border-[#E8E0D5] py-12 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#77736D] mb-4">
            <Link to="/" className="hover:text-[#242522]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-[#242522]">Shop</span>
          </nav>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-[600px]">
              <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2">
                Complete Collection
              </p>
              <h1 className="font-serif text-[36px] sm:text-[46px] leading-[1.08] font-normal text-[#242522]">
                {specialFilter === 'bestsellers'
                  ? 'Customer Favorites'
                  : specialFilter === 'new'
                  ? 'Fresh Perspectives'
                  : 'All Furniture'}
              </h1>
              <p className="text-sm sm:text-[15px] text-[#77736D] mt-3 leading-relaxed">
                Thoughtfully scaled pieces crafted from sustainably harvested white oak, American walnut, Belgian linen, and natural stone.
              </p>
            </div>

            <p className="text-xs tracking-[0.12em] uppercase text-[#77736D] tabular-nums">
              Showing {filteredProducts.length} of {PRODUCTS.length} pieces
            </p>
          </div>
        </div>
      </section>

      {/* Catalog Controls & Grid */}
      <section className="py-10 sm:py-14 bg-[#F8F6F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Strip + Sort Bar */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 mb-8 border-b border-[#E8E0D5]">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1 lg:pb-0">
              <button
                type="button"
                onClick={() => {
                  setSelectedRoom('all');
                  setSpecialFilter('all');
                }}
                className={`px-4 py-2 text-xs font-medium rounded-[6px] transition-colors whitespace-nowrap shrink-0 ${
                  selectedRoom === 'all' && specialFilter === 'all'
                    ? 'bg-[#20221F] text-[#F8F6F2]'
                    : 'bg-[#FFFFFF] border border-[#E8E0D5] text-[#30302D] hover:border-[#A49A8E]'
                }`}
              >
                All Rooms
              </button>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  type="button"
                  onClick={() => {
                    setSelectedRoom(cat.slug);
                    setSpecialFilter('all');
                  }}
                  className={`px-4 py-2 text-xs font-medium rounded-[6px] transition-colors whitespace-nowrap shrink-0 ${
                    selectedRoom === cat.slug
                      ? 'bg-[#20221F] text-[#F8F6F2]'
                      : 'bg-[#FFFFFF] border border-[#E8E0D5] text-[#30302D] hover:border-[#A49A8E]'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0">
              <button
                type="button"
                onClick={() => setMobileFiltersOpen((v) => !v)}
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFFFF] border border-[#DCD1C3] rounded-[6px] text-xs font-medium text-[#242522] hover:border-[#242522] lg:hidden"
              >
                <SlidersHorizontal className="w-3.5 h-3.5" aria-hidden="true" />
                <span>Filters</span>
              </button>

              <div className="flex items-center gap-2">
                <label htmlFor="shop-sort" className="text-xs text-[#77736D] whitespace-nowrap">
                  Sort by:
                </label>
                <select
                  id="shop-sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortKey)}
                  className="px-3 py-2 bg-[#FFFFFF] border border-[#DCD1C3] rounded-[6px] text-xs font-medium text-[#242522] focus:outline-none focus:border-[#242522]"
                >
                  <option value="popular">Popularity</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar Filters */}
            <aside
              className={`lg:col-span-3 space-y-7 ${
                mobileFiltersOpen ? 'block' : 'hidden lg:block'
              }`}
            >
              {/* Search inside shop */}
              <div>
                <label
                  htmlFor="catalog-search"
                  className="block text-[10px] tracking-[0.18em] uppercase text-[#77736D] font-medium mb-2.5"
                >
                  Search Catalog
                </label>
                <input
                  id="catalog-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Sofa, oak, linen..."
                  className="w-full px-3.5 py-2.5 bg-[#FFFFFF] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] placeholder:text-[#A49A8E] focus:outline-none focus:border-[#242522]"
                />
              </div>

              {/* Edit filter */}
              <div className="pt-5 border-t border-[#E8E0D5]">
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#77736D] font-medium mb-3">
                  Curated Edits
                </p>
                <div className="space-y-1.5">
                  {[
                    { key: 'all', label: 'All Pieces' },
                    { key: 'bestsellers', label: 'Customer Favorites' },
                    { key: 'new', label: 'New Arrivals' },
                  ].map((item) => (
                    <button
                      key={item.key}
                      type="button"
                      onClick={() => setSpecialFilter(item.key)}
                      className={`w-full text-left px-3 py-2 rounded-[6px] text-sm transition-colors ${
                        specialFilter === item.key
                          ? 'bg-[#E8E0D5] text-[#242522] font-medium'
                          : 'text-[#30302D] hover:bg-[#F1EDE6]'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Filter */}
              <div className="pt-5 border-t border-[#E8E0D5]">
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#77736D] font-medium mb-3">
                  Primary Material
                </p>
                <div className="flex flex-wrap gap-2">
                  {materials.map((mat) => (
                    <button
                      key={mat}
                      type="button"
                      onClick={() => setSelectedMaterial(mat)}
                      className={`px-3 py-1.5 rounded-[6px] text-xs transition-colors ${
                        selectedMaterial === mat
                          ? 'bg-[#20221F] text-[#F8F6F2]'
                          : 'bg-[#FFFFFF] border border-[#DCD1C3] text-[#30302D] hover:border-[#242522]'
                      }`}
                    >
                      {mat === 'all' ? 'All Materials' : mat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="pt-5 border-t border-[#E8E0D5]">
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="price-range"
                    className="text-[10px] tracking-[0.18em] uppercase text-[#77736D] font-medium"
                  >
                    Maximum Price
                  </label>
                  <span className="text-xs font-medium text-[#242522] tabular-nums">
                    {formatPrice(maxPrice)}
                  </span>
                </div>
                <input
                  id="price-range"
                  type="range"
                  min={400}
                  max={2200}
                  step={50}
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full accent-[#59604D]"
                />
                <div className="flex justify-between text-[11px] text-[#A49A8E] tabular-nums mt-1">
                  <span>$400</span>
                  <span>$2,200</span>
                </div>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-[#59604D] hover:text-[#242522] pt-2"
                >
                  <X className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Reset all filters</span>
                </button>
              )}
            </aside>

            {/* Product Grid */}
            <div className="lg:col-span-9">
              {filteredProducts.length === 0 ? (
                <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] p-12 text-center">
                  <h2 className="font-serif text-2xl text-[#242522] mb-2">
                    No matching furniture pieces
                  </h2>
                  <p className="text-sm text-[#77736D] mb-6 max-w-[36ch] mx-auto">
                    Adjust your price ceiling, material, or room filters to discover more pieces from the collection.
                  </p>
                  <button
                    type="button"
                    onClick={resetFilters}
                    className="px-6 py-3 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase font-medium rounded-[4px] transition-colors"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
