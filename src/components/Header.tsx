import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Search,
  User,
  Heart,
  ShoppingBag,
  Menu,
  X,
  ChevronDown,
  ArrowRight,
} from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { CATEGORIES } from '../data/categories';
import { SafeImage } from './SafeImage';
import { AnnouncementBar } from './AnnouncementBar';

export const Header: React.FC = () => {
  const { cartCount, wishlist, openCart, openSearch } = useStore();
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMegaMenuOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setMegaMenuOpen(false);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const navLinks = [
    { label: 'Shop', to: '/shop' },
    { label: 'Collections', to: '/collections', hasMenu: true },
    { label: 'Living Room', to: '/collections/living-room' },
    { label: 'Dining', to: '/collections/dining-room' },
    { label: 'Bedroom', to: '/collections/bedroom' },
    { label: 'Our Story', to: '/our-story' },
    { label: 'Journal', to: '/journal' },
  ];

  return (
    <>
      <AnnouncementBar />
      <header
        onMouseLeave={() => setMegaMenuOpen(false)}
        className={`sticky top-0 z-40 transition-all duration-300 border-b ${
          isScrolled
            ? 'bg-[#FFFFFF]/95 backdrop-blur-md border-[#E8E0D5] shadow-[0_6px_24px_-12px_rgba(36,37,34,0.12)]'
            : 'bg-[#FFFFFF] border-[#E8E0D5]'
        }`}
      >
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-16 lg:h-[72px] flex items-center justify-between gap-4">
          {/* Mobile menu button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation menu"
              className="p-2 -ml-2 text-[#242522] hover:text-[#59604D] transition-colors focus-visible:outline-2 focus-visible:outline-[#242522] rounded-md"
            >
              <Menu className="w-5 h-5 stroke-[1.6]" aria-hidden="true" />
            </button>
          </div>

          {/* Left: Brand Wordmark */}
          <Link
            to="/"
            className="flex items-center gap-2.5 text-[#242522] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-[#242522] rounded-sm"
          >
            <svg
              className="w-5 h-5 text-[#242522] shrink-0"
              viewBox="0 0 32 32"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M7 26V14C7 9.02944 11.0294 5 16 5C20.9706 5 25 9.02944 25 14V26"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M10.5 19.5H21.5"
                stroke="#A77F5D"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
              <path
                d="M10.5 26V19.5M21.5 26V19.5"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            </svg>
            <span className="font-serif text-[21px] sm:text-[23px] tracking-[0.14em] font-medium uppercase">
              Auren Living
            </span>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6 xl:gap-7"
          >
            {navLinks.map((item) => {
              const isActive =
                item.to === '/shop'
                  ? location.pathname === '/shop'
                  : location.pathname === item.to;

              if (item.hasMenu) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setMegaMenuOpen(true)}
                  >
                    <Link
                      to={item.to}
                      data-active={isActive}
                      onFocus={() => setMegaMenuOpen(true)}
                      className="nav-underline inline-flex items-center gap-1 text-[13px] font-medium text-[#30302D] hover:text-[#242522] tracking-[0.02em] whitespace-nowrap shrink-0 py-1"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#77736D] transition-transform duration-200 ${
                          megaMenuOpen ? 'rotate-180' : ''
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                );
              }

              return (
                <Link
                  key={item.label}
                  to={item.to}
                  data-active={isActive}
                  onMouseEnter={() => setMegaMenuOpen(false)}
                  className="nav-underline text-[13px] font-medium text-[#30302D] hover:text-[#242522] tracking-[0.02em] whitespace-nowrap shrink-0 py-1"
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right: Action Icons */}
          <div className="flex items-center gap-1 sm:gap-2 shrink-0">
            <button
              type="button"
              onClick={openSearch}
              aria-label="Search furniture"
              className="p-2 text-[#242522] hover:text-[#59604D] transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-[#242522]"
            >
              <Search className="w-[19px] h-[19px] stroke-[1.6]" aria-hidden="true" />
            </button>

            <Link
              to="/account"
              aria-label="Account and orders"
              className="hidden sm:inline-flex p-2 text-[#242522] hover:text-[#59604D] transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-[#242522]"
            >
              <User className="w-[19px] h-[19px] stroke-[1.6]" aria-hidden="true" />
            </Link>

            <Link
              to="/wishlist"
              aria-label={`Wishlist (${wishlist.length} saved)`}
              className="relative p-2 text-[#242522] hover:text-[#59604D] transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-[#242522]"
            >
              <Heart className="w-[19px] h-[19px] stroke-[1.6]" aria-hidden="true" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-0.5 min-w-[16px] h-4 px-1 rounded-full bg-[#59604D] text-[#F8F6F2] text-[10px] font-medium tabular-nums flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={openCart}
              aria-label={`Shopping bag (${cartCount} items)`}
              className="relative p-2 -mr-1 sm:mr-0 text-[#242522] hover:text-[#59604D] transition-colors rounded-md focus-visible:outline-2 focus-visible:outline-[#242522]"
            >
              <ShoppingBag className="w-[19px] h-[19px] stroke-[1.6]" aria-hidden="true" />
              <span
                className={`absolute top-1 right-0.5 min-w-[16px] h-4 px-1 rounded-full text-[10px] font-medium tabular-nums flex items-center justify-center transition-colors ${
                  cartCount > 0
                    ? 'bg-[#20221F] text-[#F8F6F2]'
                    : 'bg-[#E8E0D5] text-[#242522]'
                }`}
              >
                {cartCount}
              </span>
            </button>
          </div>
        </div>

        {/* Desktop Mega Menu Dropdown */}
        {megaMenuOpen && (
          <div className="hidden lg:block absolute left-0 right-0 top-full bg-[#FFFFFF] border-b border-[#DCD1C3] shadow-[0_18px_40px_-16px_rgba(36,37,34,0.14)] z-50">
            <div className="max-w-[1320px] mx-auto px-8 py-8 grid grid-cols-12 gap-8">
              <div className="col-span-3 flex flex-col justify-between border-r border-[#E8E0D5] pr-6">
                <div>
                  <p className="text-[10px] tracking-[0.18em] uppercase text-[#77736D] mb-3">
                    Curated Rooms
                  </p>
                  <h3 className="font-serif text-2xl text-[#242522] mb-2">
                    Collections by Space
                  </h3>
                  <p className="text-sm text-[#77736D] leading-relaxed">
                    Explore architectural silhouettes proportioned for calm, modern living.
                  </p>
                </div>
                <Link
                  to="/collections"
                  className="inline-flex items-center gap-2 text-xs tracking-[0.14em] uppercase font-medium text-[#242522] hover:text-[#59604D] mt-6"
                >
                  <span>View All Collections</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
              </div>

              <div className="col-span-9 grid grid-cols-5 gap-4">
                {CATEGORIES.map((category) => (
                  <Link
                    key={category.slug}
                    to={`/collections/${category.slug}`}
                    className="group block"
                  >
                    <div className="aspect-[4/3] rounded-lg overflow-hidden bg-[#F1EDE6] mb-2.5">
                      <SafeImage
                        src={category.image}
                        alt={category.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="text-sm font-medium text-[#242522] group-hover:text-[#59604D] transition-colors">
                      {category.name}
                    </p>
                    <p className="text-xs text-[#77736D] tabular-nums">
                      {category.itemCount} pieces
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-[#242522]/40 backdrop-blur-[2px]"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />
          <aside
            aria-label="Mobile Navigation"
            className="fixed top-0 left-0 bottom-0 w-[min(86vw,360px)] bg-[#F8F6F2] text-[#242522] shadow-2xl flex flex-col z-50"
          >
            <div className="flex items-center justify-between px-5 h-16 border-b border-[#E8E0D5] bg-[#FFFFFF]">
              <span className="font-serif text-lg tracking-[0.14em] uppercase font-medium">
                Auren Living
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close navigation menu"
                className="p-2 -mr-2 text-[#242522]"
              >
                <X className="w-5 h-5 stroke-[1.6]" aria-hidden="true" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-6">
              <div className="space-y-1">
                {navLinks.map((item) => (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="flex items-center justify-between py-3 text-base font-medium text-[#242522] border-b border-[#E8E0D5]"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-[#77736D]" aria-hidden="true" />
                  </Link>
                ))}
              </div>

              <div>
                <p className="text-[10px] tracking-[0.18em] uppercase text-[#77736D] mb-3">
                  Shop by Room
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {CATEGORIES.map((cat) => (
                    <Link
                      key={cat.slug}
                      to={`/collections/${cat.slug}`}
                      className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-lg p-2.5 text-xs font-medium text-[#242522] hover:border-[#A49A8E]"
                    >
                      {cat.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="pt-2 space-y-2 border-t border-[#E8E0D5]">
                <Link
                  to="/account"
                  className="block py-2 text-sm text-[#30302D] hover:text-[#242522]"
                >
                  Account &amp; Orders
                </Link>
                <Link
                  to="/wishlist"
                  className="block py-2 text-sm text-[#30302D] hover:text-[#242522]"
                >
                  Saved Wishlist ({wishlist.length})
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 text-sm text-[#30302D] hover:text-[#242522]"
                >
                  Concierge Support · +1 (800) 555-0142
                </Link>
              </div>
            </div>
          </aside>
        </div>
      )}
    </>
  );
};
