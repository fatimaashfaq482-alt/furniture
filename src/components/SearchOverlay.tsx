import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { CATEGORIES } from '../data/categories';
import { formatPrice } from '../utils/format';
import { SafeImage } from './SafeImage';

export const SearchOverlay: React.FC = () => {
  const { isSearchOpen, closeSearch } = useStore();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isSearchOpen) closeSearch();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isSearchOpen, closeSearch]);

  if (!isSearchOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const matches = trimmed
    ? PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(trimmed) ||
          p.category.toLowerCase().includes(trimmed) ||
          p.material.toLowerCase().includes(trimmed) ||
          p.shortDescription.toLowerCase().includes(trimmed)
      )
    : PRODUCTS.slice(0, 4);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trimmed) return;
    closeSearch();
    navigate(`/shop?q=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="fixed inset-0 bg-[#242522]/45 backdrop-blur-[2px]"
        onClick={closeSearch}
        aria-hidden="true"
      />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search Furniture"
        className="relative bg-[#F8F6F2] border-b border-[#DCD1C3] shadow-2xl z-50"
      >
        <div className="max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
          <form onSubmit={handleSubmit} className="relative flex items-center gap-3 pb-4 border-b border-[#DCD1C3]">
            <Search className="w-5 h-5 text-[#77736D] shrink-0 stroke-[1.6]" aria-hidden="true" />
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search sofas, solid oak tables, linen beds, travertine..."
              className="w-full bg-transparent text-base sm:text-lg text-[#242522] placeholder:text-[#A49A8E] focus:outline-none"
            />
            <button
              type="button"
              onClick={closeSearch}
              aria-label="Close search"
              className="p-2 text-[#77736D] hover:text-[#242522]"
            >
              <X className="w-5 h-5 stroke-[1.6]" aria-hidden="true" />
            </button>
          </form>

          <div className="mt-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#77736D]">
                {trimmed ? `Results (${matches.length})` : 'Popular Pieces'}
              </p>
              {trimmed && matches.length > 0 && (
                <Link
                  to={`/shop?q=${encodeURIComponent(query.trim())}`}
                  onClick={closeSearch}
                  className="inline-flex items-center gap-1 text-xs font-medium text-[#242522] hover:text-[#59604D]"
                >
                  <span>View all in Shop</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              )}
            </div>

            {matches.length === 0 ? (
              <div className="py-8 text-center">
                <p className="text-sm text-[#77736D] mb-4">
                  No pieces matched “{query}”. Explore our room collections below.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {CATEGORIES.map((c) => (
                    <Link
                      key={c.slug}
                      to={`/collections/${c.slug}`}
                      onClick={closeSearch}
                      className="px-4 py-2 text-xs bg-[#FFFFFF] border border-[#DCD1C3] rounded-[6px] text-[#242522] hover:border-[#242522]"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {matches.slice(0, 4).map((product) => (
                  <Link
                    key={product.id}
                    to={`/product/${product.slug}`}
                    onClick={closeSearch}
                    className="group flex sm:flex-col gap-3 sm:gap-2 bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] p-2.5 hover:border-[#A49A8E] transition-colors"
                  >
                    <div className="w-20 sm:w-full aspect-[4/3] rounded-[6px] overflow-hidden bg-[#F1EDE6] shrink-0">
                      <SafeImage
                        src={product.images[0].src}
                        alt={product.images[0].alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="text-[10px] tracking-[0.14em] uppercase text-[#77736D]">
                        {product.category}
                      </p>
                      <p className="text-sm font-medium text-[#242522] group-hover:text-[#59604D] line-clamp-1">
                        {product.name}
                      </p>
                      <p className="text-xs text-[#30302D] tabular-nums mt-0.5">
                        {formatPrice(product.price)}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
