import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { PageMeta } from '../components/PageMeta';

export const WishlistPage: React.FC = () => {
  const { wishlist } = useStore();
  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <>
      <PageMeta
        title="Saved Wishlist — Auren Living"
        description="View your saved Auren Living furniture pieces and build your interior room plan."
      />

      <section className="bg-[#F1EDE6] border-b border-[#E8E0D5] py-12 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2">
              Personal Curation
            </p>
            <h1 className="font-serif text-[36px] sm:text-[46px] leading-[1.08] font-normal text-[#242522]">
              Saved Wishlist
            </h1>
          </div>
          <p className="text-xs tracking-[0.14em] uppercase text-[#77736D] tabular-nums">
            {savedProducts.length} {savedProducts.length === 1 ? 'piece' : 'pieces'} saved
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-[#F8F6F2] min-h-[50vh]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {savedProducts.length === 0 ? (
            <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-12 text-center max-w-lg mx-auto">
              <div className="w-12 h-12 rounded-full bg-[#F1EDE6] flex items-center justify-center mx-auto mb-4">
                <Heart className="w-5 h-5 text-[#77736D]" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-2xl text-[#242522] mb-2">
                No saved pieces yet
              </h2>
              <p className="text-sm text-[#77736D] mb-6 leading-relaxed">
                Tap the heart icon on any sofa, dining table, or lounge chair to bookmark pieces while designing your room.
              </p>
              <Link
                to="/shop"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase font-medium rounded-[4px] transition-colors"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {savedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};
