import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Package, ShoppingBag } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatPrice } from '../utils/format';
import { PageMeta } from '../components/PageMeta';

export const AccountPage: React.FC = () => {
  const { orders, wishlist, cartCount, openCart } = useStore();

  return (
    <>
      <PageMeta
        title="Client Studio Account — Auren Living"
        description="Review your saved furniture pieces and demonstration order history at Auren Living."
      />

      <section className="bg-[#F1EDE6] border-b border-[#E8E0D5] py-12 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2">
            Client Space
          </p>
          <h1 className="font-serif text-[36px] sm:text-[46px] leading-[1.08] font-normal text-[#242522]">
            Your Auren Living Overview
          </h1>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8F6F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              to="/wishlist"
              className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] p-6 hover:border-[#A49A8E] transition-colors"
            >
              <Heart className="w-5 h-5 text-[#59604D] mb-3" aria-hidden="true" />
              <h2 className="font-serif text-2xl text-[#242522]">Saved Wishlist</h2>
              <p className="text-sm text-[#77736D] mt-1 tabular-nums">
                {wishlist.length} {wishlist.length === 1 ? 'piece' : 'pieces'} bookmarked
              </p>
            </Link>

            <button
              type="button"
              onClick={openCart}
              className="text-left bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] p-6 hover:border-[#A49A8E] transition-colors"
            >
              <ShoppingBag className="w-5 h-5 text-[#59604D] mb-3" aria-hidden="true" />
              <h2 className="font-serif text-2xl text-[#242522]">Active Shopping Bag</h2>
              <p className="text-sm text-[#77736D] mt-1 tabular-nums">
                {cartCount} {cartCount === 1 ? 'piece' : 'pieces'} ready for checkout
              </p>
            </button>

            <Link
              to="/contact"
              className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] p-6 hover:border-[#A49A8E] transition-colors"
            >
              <Package className="w-5 h-5 text-[#59604D] mb-3" aria-hidden="true" />
              <h2 className="font-serif text-2xl text-[#242522]">Design Concierge</h2>
              <p className="text-sm text-[#77736D] mt-1">
                Swatches, room planning &amp; delivery inquiries
              </p>
            </Link>
          </div>

          <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-6 sm:p-8">
            <h2 className="font-serif text-2xl text-[#242522] mb-4">
              Recent Demo Orders
            </h2>

            {orders.length === 0 ? (
              <div className="py-6 text-sm text-[#77736D]">
                No demonstration orders placed in this browser yet.{' '}
                <Link to="/shop" className="underline text-[#242522]">
                  Explore the catalog
                </Link>{' '}
                to place a sample order.
              </div>
            ) : (
              <div className="divide-y divide-[#E8E0D5]">
                {orders.map((order) => (
                  <div
                    key={order.orderNumber}
                    className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-sm"
                  >
                    <div>
                      <p className="font-medium text-[#242522] tabular-nums">
                        {order.orderNumber} · {order.date}
                      </p>
                      <p className="text-xs text-[#77736D] mt-0.5">
                        {order.items.length} {order.items.length === 1 ? 'item' : 'items'} · {order.status}
                      </p>
                    </div>
                    <span className="font-medium text-[#242522] tabular-nums">
                      {formatPrice(order.total)}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
