import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Plus, Minus, Trash2, ShoppingBag, Truck, ArrowRight } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatPrice } from '../utils/format';
import { SafeImage } from './SafeImage';

const FREE_SHIPPING_THRESHOLD = 1500;

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    closeCart,
    cartSubtotal,
    updateQuantity,
    removeFromCart,
  } = useStore();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCartOpen) closeCart();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isCartOpen, closeCart]);

  if (!isCartOpen) return null;

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartSubtotal);
  const progress = Math.min(100, (cartSubtotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      <div
        className="fixed inset-0 bg-[#242522]/45 backdrop-blur-[2px] transition-opacity"
        onClick={closeCart}
        aria-hidden="true"
      />

      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Shopping Bag"
        className="relative w-full max-w-[440px] bg-[#F8F6F2] text-[#242522] h-full shadow-2xl flex flex-col z-50"
      >
        <div className="px-6 py-5 bg-[#FFFFFF] border-b border-[#E8E0D5] flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl text-[#242522]">Your Bag</h2>
            <p className="text-xs text-[#77736D] mt-0.5 tabular-nums">
              {cart.reduce((sum, i) => sum + i.quantity, 0)}{' '}
              {cart.reduce((sum, i) => sum + i.quantity, 0) === 1 ? 'piece' : 'pieces'} selected
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Close shopping bag"
            className="p-2 -mr-2 text-[#77736D] hover:text-[#242522] transition-colors rounded-md"
          >
            <X className="w-5 h-5 stroke-[1.6]" aria-hidden="true" />
          </button>
        </div>

        {/* Complimentary shipping threshold */}
        <div className="px-6 py-3.5 bg-[#F1EDE6] border-b border-[#E8E0D5]">
          <div className="flex items-center gap-2 text-xs text-[#30302D] mb-2">
            <Truck className="w-4 h-4 text-[#59604D] shrink-0 stroke-[1.6]" aria-hidden="true" />
            {remainingForFreeShipping === 0 ? (
              <span>Your order qualifies for complimentary white-glove shipping.</span>
            ) : (
              <span className="tabular-nums">
                Add <strong className="font-medium">{formatPrice(remainingForFreeShipping)}</strong> more for complimentary shipping.
              </span>
            )}
          </div>
          <div className="w-full h-1 bg-[#DCD1C3] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#59604D] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Items list */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center py-12">
              <div className="w-14 h-14 rounded-full bg-[#F1EDE6] flex items-center justify-center mb-4">
                <ShoppingBag className="w-6 h-6 text-[#77736D] stroke-[1.5]" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl text-[#242522] mb-2">
                Your bag is currently empty
              </h3>
              <p className="text-sm text-[#77736D] max-w-[28ch] mb-6 leading-relaxed">
                Explore handcrafted sofas, solid oak tables, and serene objects for your home.
              </p>
              <Link
                to="/shop"
                onClick={closeCart}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase font-medium rounded-[6px] transition-colors"
              >
                <span>Browse Collection</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.key}
                className="flex gap-4 bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] p-3.5"
              >
                <Link
                  to={`/product/${item.slug}`}
                  onClick={closeCart}
                  className="w-24 h-20 rounded-[6px] overflow-hidden bg-[#F1EDE6] shrink-0"
                >
                  <SafeImage
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </Link>

                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <Link
                        to={`/product/${item.slug}`}
                        onClick={closeCart}
                        className="text-sm font-medium text-[#242522] hover:text-[#59604D] leading-snug line-clamp-2"
                      >
                        {item.name}
                      </Link>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.key)}
                        aria-label={`Remove ${item.name}`}
                        className="text-[#A49A8E] hover:text-[#242522] transition-colors p-0.5 shrink-0"
                      >
                        <Trash2 className="w-4 h-4 stroke-[1.5]" aria-hidden="true" />
                      </button>
                    </div>
                    <p className="text-xs text-[#77736D] mt-1">
                      {item.color} · {item.size}
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="inline-flex items-center border border-[#DCD1C3] rounded-[6px] bg-[#F8F6F2]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity - 1)}
                        aria-label="Decrease quantity"
                        className="w-7 h-7 flex items-center justify-center text-[#30302D] hover:text-[#242522]"
                      >
                        <Minus className="w-3 h-3" aria-hidden="true" />
                      </button>
                      <span className="w-7 text-center text-xs font-medium tabular-nums">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.key, item.quantity + 1)}
                        aria-label="Increase quantity"
                        className="w-7 h-7 flex items-center justify-center text-[#30302D] hover:text-[#242522]"
                      >
                        <Plus className="w-3 h-3" aria-hidden="true" />
                      </button>
                    </div>

                    <span className="text-sm font-medium text-[#242522] tabular-nums">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer checkout CTA */}
        {cart.length > 0 && (
          <div className="p-6 bg-[#FFFFFF] border-t border-[#E8E0D5] space-y-4">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#77736D]">Subtotal</span>
              <span className="text-lg font-medium text-[#242522] tabular-nums">
                {formatPrice(cartSubtotal)}
              </span>
            </div>
            <p className="text-xs text-[#77736D]">
              Shipping &amp; taxes calculated at checkout.
            </p>
            <div className="space-y-2.5">
              <Link
                to="/checkout"
                onClick={closeCart}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase font-medium rounded-[6px] transition-colors"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
              <button
                type="button"
                onClick={closeCart}
                className="w-full py-2.5 text-xs tracking-[0.12em] uppercase font-medium text-[#30302D] hover:text-[#242522] transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        )}
      </aside>
    </div>
  );
};
