import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { Product } from '../types';
import { useStore } from '../context/StoreContext';
import { formatPrice } from '../utils/format';
import { SafeImage } from './SafeImage';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, toggleWishlist, isWishlisted } = useStore();
  const [hovered, setHovered] = useState(false);
  const saved = isWishlisted(product.id);

  const primaryImage = product.images[0];
  const secondaryImage = product.images[1] ?? primaryImage;

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group bg-[#FFFFFF] border border-[#E8E0D5] rounded-[8px] overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-14px_rgba(36,37,34,0.16)]"
    >
      <div className="relative aspect-[4/3] bg-[#F1EDE6] overflow-hidden">
        <Link
          to={`/product/${product.slug}`}
          className="block w-full h-full focus-visible:outline-2 focus-visible:outline-[#242522]"
          aria-label={`View ${product.name}`}
        >
          <SafeImage
            src={primaryImage.src}
            alt={primaryImage.alt}
            loading="lazy"
            className={`w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              hovered && secondaryImage.src !== primaryImage.src
                ? 'opacity-0 scale-105'
                : 'opacity-100 group-hover:scale-105'
            }`}
          />
          {secondaryImage.src !== primaryImage.src && (
            <SafeImage
              src={secondaryImage.src}
              alt={secondaryImage.alt}
              loading="lazy"
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                hovered ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
            />
          )}
        </Link>

        {/* Wishlist button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          aria-label={saved ? `Remove ${product.name} from wishlist` : `Save ${product.name} to wishlist`}
          className={`absolute top-2.5 right-2.5 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#242522] ${
            saved
              ? 'bg-[#242522] text-[#F8F6F2]'
              : 'bg-[#FFFFFF]/90 text-[#242522] hover:bg-[#FFFFFF]'
          }`}
        >
          <Heart
            className={`w-4 h-4 stroke-[1.6] transition-transform duration-200 ${
              saved ? 'fill-current scale-105' : 'group-hover:scale-105'
            }`}
            aria-hidden="true"
          />
        </button>

        {/* Quick add button */}
        <button
          type="button"
          onClick={() => addToCart(product)}
          aria-label={`Quick add ${product.name} to bag`}
          className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 px-3 py-2 rounded-[6px] bg-[#20221F]/92 hover:bg-[#41453C] text-[#F8F6F2] text-[11px] tracking-[0.08em] uppercase font-medium transition-all duration-200 opacity-95 sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 focus-visible:opacity-100 focus-visible:outline-2 focus-visible:outline-[#F8F6F2] whitespace-nowrap"
        >
          <ShoppingBag className="w-3.5 h-3.5 stroke-[1.6]" aria-hidden="true" />
          <span className="hidden sm:inline">Quick Add</span>
        </button>
      </div>

      <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between gap-2.5">
        <div>
          <div className="flex items-center justify-between gap-2 text-[10px] tracking-[0.14em] uppercase text-[#77736D] mb-1">
            <span className="truncate">{product.category}</span>
            {product.badge && (
              <span className="text-[#59604D] font-medium shrink-0">
                {product.badge}
              </span>
            )}
          </div>

          <Link
            to={`/product/${product.slug}`}
            className="block text-[15px] sm:text-[16px] font-medium text-[#242522] hover:text-[#59604D] transition-colors leading-snug"
          >
            {product.name}
          </Link>
        </div>

        <div className="flex items-center justify-between gap-2 pt-1 border-t border-[#F1EDE6]">
          <span className="text-[15px] font-medium text-[#242522] tabular-nums">
            {formatPrice(product.price)}
          </span>

          <div className="flex items-center gap-1 text-xs text-[#77736D] tabular-nums">
            <Star
              className="w-3.5 h-3.5 fill-[#A77F5D] text-[#A77F5D] shrink-0"
              aria-hidden="true"
            />
            <span className="text-[#30302D] font-medium">{product.rating.toFixed(1)}</span>
            <span className="text-[#A49A8E]">({product.reviewCount})</span>
          </div>
        </div>
      </div>
    </article>
  );
};
