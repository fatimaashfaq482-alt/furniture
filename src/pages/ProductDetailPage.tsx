import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {
  ChevronRight,
  ChevronDown,
  Heart,
  Minus,
  Plus,
  Star,
  Truck,
  RotateCcw,
  ShieldCheck,
  ZoomIn,
  X,
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { useStore } from '../context/StoreContext';
import { formatPrice } from '../utils/format';
import { SafeImage } from '../components/SafeImage';
import { ProductCard } from '../components/ProductCard';
import { PageMeta } from '../components/PageMeta';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, toggleWishlist, isWishlisted } = useStore();

  const product = PRODUCTS.find((p) => p.slug === slug);

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [selectedColorIdx, setSelectedColorIdx] = useState(0);
  const [selectedSizeIdx, setSelectedSizeIdx] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [openAccordion, setOpenAccordion] = useState<string | null>('specs');
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    setActiveImageIdx(0);
    setSelectedColorIdx(0);
    setSelectedSizeIdx(0);
    setQuantity(1);
    setOpenAccordion('specs');
    setZoomOpen(false);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return (
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <h1 className="font-serif text-4xl text-[#242522] mb-3">Piece Not Found</h1>
        <p className="text-sm text-[#77736D] mb-6">
          This piece may have moved. Browse our current furniture collection.
        </p>
        <Link
          to="/shop"
          className="inline-flex px-6 py-3 bg-[#20221F] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase rounded-[4px]"
        >
          Return to Shop
        </Link>
      </div>
    );
  }

  const activeImage = product.images[activeImageIdx] ?? product.images[0];
  const selectedColor = product.colors[selectedColorIdx] ?? product.colors[0];
  const selectedSize = product.sizes[selectedSizeIdx] ?? product.sizes[0];
  const computedPrice = product.price + (selectedSize?.priceDelta ?? 0);
  const saved = isWishlisted(product.id);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.collectionSlug === product.collectionSlug || p.isBestseller)
  ).slice(0, 4);

  const handleAdd = () => {
    addToCart(product, {
      color: selectedColor?.name,
      size: selectedSize?.label,
      quantity,
      price: computedPrice,
    });
  };

  const handleBuyNow = () => {
    addToCart(product, {
      color: selectedColor?.name,
      size: selectedSize?.label,
      quantity,
      price: computedPrice,
    });
    navigate('/checkout');
  };

  return (
    <>
      <PageMeta
        title={`${product.name} — Auren Living`}
        description={product.shortDescription}
      />

      <section className="bg-[#F8F6F2] pt-6 sm:pt-8 pb-16 sm:pb-24">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-[#77736D] mb-6 sm:mb-8">
            <Link to="/" className="hover:text-[#242522]">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <Link to="/shop" className="hover:text-[#242522]">
              Shop
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <Link to={`/collections/${product.collectionSlug}`} className="hover:text-[#242522]">
              {product.category}
            </Link>
            <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
            <span className="text-[#242522]">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
            {/* Left Side: Gallery */}
            <div className="lg:col-span-7 lg:sticky lg:top-24 space-y-4">
              <div className="relative aspect-[4/3] rounded-[10px] overflow-hidden bg-[#F1EDE6] border border-[#E8E0D5] group">
                <SafeImage
                  src={activeImage.src}
                  alt={activeImage.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
                <button
                  type="button"
                  onClick={() => setZoomOpen(true)}
                  aria-label="Zoom product photograph"
                  className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3 py-2 rounded-[6px] bg-[#FFFFFF]/90 hover:bg-[#FFFFFF] text-[#242522] text-xs font-medium shadow-sm transition-colors"
                >
                  <ZoomIn className="w-3.5 h-3.5" aria-hidden="true" />
                  <span>Zoom</span>
                </button>
              </div>

              {product.images.length > 1 && (
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={img.caption}
                      type="button"
                      onClick={() => setActiveImageIdx(idx)}
                      aria-label={`View ${img.caption}`}
                      className={`aspect-[4/3] rounded-[8px] overflow-hidden border transition-all ${
                        idx === activeImageIdx
                          ? 'border-[#242522] ring-1 ring-[#242522]'
                          : 'border-[#E8E0D5] opacity-75 hover:opacity-100'
                      }`}
                    >
                      <SafeImage
                        src={img.src}
                        alt={img.alt}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
              <p className="text-xs text-[#77736D]">{activeImage.caption}</p>
            </div>

            {/* Right Side: Contiguous Purchase Module */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[11px] tracking-[0.18em] uppercase text-[#59604D] font-medium mb-2">
                  <span>{product.category}</span>
                  {product.badge && (
                    <>
                      <span aria-hidden="true">·</span>
                      <span>{product.badge}</span>
                    </>
                  )}
                </div>

                <h1 className="font-serif text-[34px] sm:text-[42px] leading-[1.1] font-normal text-[#242522] mb-3">
                  {product.name}
                </h1>

                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E8E0D5]">
                  <span className="text-2xl font-medium text-[#242522] tabular-nums">
                    {formatPrice(computedPrice)}
                  </span>

                  <div className="flex items-center gap-1.5 text-sm text-[#30302D] tabular-nums">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-3.5 h-3.5 ${
                            i < Math.round(product.rating)
                              ? 'fill-[#A77F5D] text-[#A77F5D]'
                              : 'text-[#DCD1C3]'
                          }`}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <span className="font-medium">{product.rating.toFixed(1)}</span>
                    <span className="text-[#77736D]">({product.reviewCount} reviews)</span>
                  </div>
                </div>
              </div>

              <p className="text-[15px] text-[#30302D] leading-[1.7]">
                {product.fullDescription}
              </p>

              {/* Material summary */}
              <div className="bg-[#F1EDE6] border border-[#E8E0D5] rounded-[8px] px-4 py-3 text-xs text-[#30302D] flex items-center justify-between gap-4">
                <span className="text-[#77736D] uppercase tracking-[0.14em] text-[10px]">
                  Crafted From
                </span>
                <span className="font-medium text-right">{product.material}</span>
              </div>

              {/* Color Swatches */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="uppercase tracking-[0.14em] text-[#77736D] font-medium text-[10px]">
                    Finish / Upholstery
                  </span>
                  <span className="text-[#242522] font-medium">{selectedColor?.name}</span>
                </div>
                <div className="flex flex-wrap items-center gap-2.5">
                  {product.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      type="button"
                      onClick={() => setSelectedColorIdx(idx)}
                      aria-label={`Select ${color.name}`}
                      title={color.name}
                      className={`w-9 h-9 rounded-full border transition-all flex items-center justify-center ${
                        idx === selectedColorIdx
                          ? 'border-[#242522] ring-2 ring-[#242522] ring-offset-2 ring-offset-[#F8F6F2]'
                          : 'border-[#DCD1C3] hover:border-[#77736D]'
                      }`}
                      style={{ backgroundColor: color.hex }}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2.5">
                  <span className="uppercase tracking-[0.14em] text-[#77736D] font-medium text-[10px]">
                    Dimensions &amp; Scale
                  </span>
                  <span className="text-[#77736D] tabular-nums">{selectedSize?.dimensions}</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.sizes.map((size, idx) => (
                    <button
                      key={size.label}
                      type="button"
                      onClick={() => setSelectedSizeIdx(idx)}
                      className={`px-4 py-2.5 rounded-[6px] text-left border transition-colors ${
                        idx === selectedSizeIdx
                          ? 'bg-[#20221F] text-[#F8F6F2] border-[#20221F]'
                          : 'bg-[#FFFFFF] text-[#242522] border-[#DCD1C3] hover:border-[#242522]'
                      }`}
                    >
                      <p className="text-xs font-medium">{size.label}</p>
                      <p
                        className={`text-[11px] tabular-nums mt-0.5 ${
                          idx === selectedSizeIdx ? 'text-[#DCD1C3]' : 'text-[#77736D]'
                        }`}
                      >
                        {size.priceDelta ? `+${formatPrice(size.priceDelta)}` : 'Standard price'}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity & Purchase Actions */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3">
                  <div className="inline-flex items-center border border-[#DCD1C3] bg-[#FFFFFF] rounded-[4px] h-12">
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      aria-label="Decrease quantity"
                      className="w-10 h-full flex items-center justify-center text-[#30302D] hover:text-[#242522]"
                    >
                      <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                    <span className="w-9 text-center text-sm font-medium tabular-nums">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity((q) => q + 1)}
                      aria-label="Increase quantity"
                      className="w-10 h-full flex items-center justify-center text-[#30302D] hover:text-[#242522]"
                    >
                      <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={handleAdd}
                    className="flex-1 h-12 px-6 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.15em] uppercase font-medium rounded-[4px] transition-colors"
                  >
                    Add to Bag — {formatPrice(computedPrice * quantity)}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={saved ? 'Remove from wishlist' : 'Save to wishlist'}
                    className={`w-12 h-12 rounded-[4px] border flex items-center justify-center transition-colors shrink-0 ${
                      saved
                        ? 'bg-[#242522] border-[#242522] text-[#F8F6F2]'
                        : 'bg-[#FFFFFF] border-[#DCD1C3] text-[#242522] hover:border-[#242522]'
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${saved ? 'fill-current' : ''}`} aria-hidden="true" />
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="w-full h-12 px-6 bg-transparent hover:bg-[#F1EDE6] text-[#242522] border border-[#242522] text-xs tracking-[0.15em] uppercase font-medium rounded-[4px] transition-colors"
                >
                  Buy Now
                </button>
              </div>

              {/* Delivery & Returns Assurance */}
              <div className="pt-2 space-y-2.5 text-xs text-[#30302D] border-t border-[#E8E0D5]">
                <div className="flex items-center gap-2.5 pt-2">
                  <Truck className="w-4 h-4 text-[#59604D] shrink-0" aria-hidden="true" />
                  <span>{product.leadTime}. Complimentary over $1,500.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <RotateCcw className="w-4 h-4 text-[#59604D] shrink-0" aria-hidden="true" />
                  <span>30-day home trial with hassle-free returns.</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#59604D] shrink-0" aria-hidden="true" />
                  <span>10-year structural craftsmanship guarantee.</span>
                </div>
              </div>

              {/* Expandable Details & FAQs */}
              <div className="border-t border-[#DCD1C3] divide-y divide-[#DCD1C3]">
                {[
                  {
                    id: 'specs',
                    title: 'Dimensions & Specifications',
                    content: (
                      <dl className="grid grid-cols-1 gap-2.5 text-xs">
                        <div>
                          <dt className="text-[#77736D]">Dimensions</dt>
                          <dd className="text-[#242522] font-medium tabular-nums mt-0.5">
                            {product.specifications.dimensions}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[#77736D]">Weight</dt>
                          <dd className="text-[#242522] font-medium tabular-nums mt-0.5">
                            {product.specifications.weight}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[#77736D]">Materials</dt>
                          <dd className="text-[#242522] mt-0.5">
                            {product.specifications.materials}
                          </dd>
                        </div>
                        <div>
                          <dt className="text-[#77736D]">Origin</dt>
                          <dd className="text-[#242522] mt-0.5">
                            {product.specifications.origin}
                          </dd>
                        </div>
                      </dl>
                    ),
                  },
                  {
                    id: 'care',
                    title: 'Delivery, Assembly & Care',
                    content: (
                      <div className="space-y-2.5 text-xs text-[#30302D] leading-relaxed">
                        <p>
                          <strong className="font-medium text-[#242522]">Assembly: </strong>
                          {product.specifications.assembly}
                        </p>
                        <p>
                          <strong className="font-medium text-[#242522]">Care Guide: </strong>
                          {product.specifications.care}
                        </p>
                      </div>
                    ),
                  },
                  {
                    id: 'faqs',
                    title: 'Frequently Asked Questions',
                    content: (
                      <div className="space-y-3 text-xs">
                        {product.faqs.map((faq) => (
                          <div key={faq.question}>
                            <p className="font-medium text-[#242522] mb-1">{faq.question}</p>
                            <p className="text-[#77736D] leading-relaxed">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    ),
                  },
                ].map((section) => {
                  const isOpen = openAccordion === section.id;
                  return (
                    <div key={section.id} className="py-3.5">
                      <button
                        type="button"
                        onClick={() => setOpenAccordion(isOpen ? null : section.id)}
                        aria-expanded={isOpen}
                        className="w-full flex items-center justify-between text-left text-sm font-medium text-[#242522]"
                      >
                        <span>{section.title}</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#77736D] transition-transform duration-200 ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                      {isOpen && <div className="pt-3">{section.content}</div>}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20 pt-14 border-t border-[#E8E0D5]">
            <div className="flex items-end justify-between gap-4 mb-8">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-[#77736D] mb-2">
                  Complementary Pieces
                </p>
                <h2 className="font-serif text-3xl sm:text-4xl text-[#242522]">
                  Pair With Your Space
                </h2>
              </div>
              <Link
                to="/shop"
                className="text-xs tracking-[0.14em] uppercase font-medium text-[#242522] hover:text-[#59604D]"
              >
                View All →
              </Link>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Zoom Modal */}
      {zoomOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Zoomed product image"
          className="fixed inset-0 z-50 bg-[#242522]/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-8"
          onClick={() => setZoomOpen(false)}
        >
          <button
            type="button"
            onClick={() => setZoomOpen(false)}
            aria-label="Close zoom preview"
            className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#F8F6F2] text-[#242522] flex items-center justify-center"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
          <div
            className="max-w-4xl w-full max-h-[85vh] rounded-[10px] overflow-hidden bg-[#F8F6F2]"
            onClick={(e) => e.stopPropagation()}
          >
            <SafeImage
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full h-full object-contain max-h-[85vh]"
            />
          </div>
        </div>
      )}
    </>
  );
};
