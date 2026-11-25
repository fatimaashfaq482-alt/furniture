import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, Instagram, Facebook } from 'lucide-react';

interface FooterGroup {
  title: string;
  links: { label: string; to: string }[];
}

const FOOTER_GROUPS: FooterGroup[] = [
  {
    title: 'Explore',
    links: [
      { label: 'Shop All', to: '/shop' },
      { label: 'Living Room', to: '/collections/living-room' },
      { label: 'Dining Room', to: '/collections/dining-room' },
      { label: 'Bedroom', to: '/collections/bedroom' },
      { label: 'New Arrivals', to: '/shop?filter=new' },
      { label: 'Bestsellers', to: '/shop?filter=bestsellers' },
    ],
  },
  {
    title: 'Customer Care',
    links: [
      { label: 'Contact Us', to: '/contact' },
      { label: 'Shipping Information', to: '/shipping-returns' },
      { label: 'Returns & Exchanges', to: '/shipping-returns' },
      { label: 'FAQs', to: '/faq' },
      { label: 'Care Guide', to: '/care-guide' },
      { label: 'Order Tracking', to: '/order-tracking' },
    ],
  },
  {
    title: 'About',
    links: [
      { label: 'Our Story', to: '/our-story' },
      { label: 'Our Philosophy', to: '/our-story#philosophy' },
      { label: 'Craftsmanship', to: '/our-story#craftsmanship' },
      { label: 'Journal', to: '/journal' },
      { label: 'Privacy Policy', to: '/privacy' },
      { label: 'Terms & Conditions', to: '/terms' },
    ],
  },
];

export const Footer: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleFooterSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !email.includes('@')) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <footer className="bg-[#242522] text-[#F8F6F2] border-t border-[#30302D]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#30302D]">
          {/* Column 1: Brand */}
          <div className="lg:col-span-4 space-y-5 pr-0 lg:pr-8">
            <Link to="/" className="inline-block">
              <span className="font-serif text-2xl tracking-[0.14em] uppercase text-[#F8F6F2]">
                Auren Living
              </span>
            </Link>
            <p className="text-sm text-[#DCD1C3] leading-relaxed max-w-[34ch]">
              Thoughtfully designed furniture for the spaces that matter most. Crafted from solid European timber, Belgian linen, and honest stone.
            </p>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Auren Living on Instagram"
                className="w-9 h-9 rounded-full border border-[#41453C] flex items-center justify-center text-[#DCD1C3] hover:text-[#F8F6F2] hover:border-[#A49A8E] transition-colors"
              >
                <Instagram className="w-4 h-4 stroke-[1.6]" aria-hidden="true" />
              </a>
              <a
                href="https://pinterest.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Auren Living on Pinterest"
                className="w-9 h-9 rounded-full border border-[#41453C] flex items-center justify-center text-[#DCD1C3] hover:text-[#F8F6F2] hover:border-[#A49A8E] transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 20l4-9" />
                  <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75-1.554 3.75-4a5 5 0 1 0-9.7 1.7" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Auren Living on Facebook"
                className="w-9 h-9 rounded-full border border-[#41453C] flex items-center justify-center text-[#DCD1C3] hover:text-[#F8F6F2] hover:border-[#A49A8E] transition-colors"
              >
                <Facebook className="w-4 h-4 stroke-[1.6]" aria-hidden="true" />
              </a>
            </div>

            {/* Compact newsletter signup */}
            <div className="pt-3">
              <p className="text-[10px] tracking-[0.18em] uppercase text-[#A49A8E] mb-2.5">
                Studio Dispatch
              </p>
              {subscribed ? (
                <p className="text-xs text-[#DCD1C3]">
                  Thank you for joining the Auren Living journal.
                </p>
              ) : (
                <form onSubmit={handleFooterSubscribe} className="flex max-w-xs border-b border-[#41453C] pb-1.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email address"
                    aria-label="Email address for studio dispatch"
                    className="w-full bg-transparent text-xs text-[#F8F6F2] placeholder:text-[#A49A8E] focus:outline-none"
                  />
                  <button
                    type="submit"
                    className="text-[11px] tracking-[0.14em] uppercase text-[#DCD1C3] hover:text-[#F8F6F2] whitespace-nowrap shrink-0 pl-3"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Columns 2-4: Desktop links & Mobile accordions */}
          <div className="lg:col-span-8 grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-8">
            {FOOTER_GROUPS.map((group, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={group.title}
                  className="border-t border-[#30302D] lg:border-t-0 py-4 lg:py-0"
                >
                  {/* Mobile Accordion Button */}
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between lg:hidden text-left"
                  >
                    <span className="text-[11px] tracking-[0.18em] uppercase text-[#F8F6F2] font-medium">
                      {group.title}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#A49A8E] transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Desktop Heading */}
                  <h3 className="hidden lg:block font-sans text-[11px] tracking-[0.18em] uppercase text-[#A49A8E] font-medium mb-4">
                    {group.title}
                  </h3>

                  <ul
                    className={`space-y-2.5 mt-3 lg:mt-0 ${
                      isOpen ? 'block' : 'hidden lg:block'
                    }`}
                  >
                    {group.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          to={link.to}
                          className="text-sm text-[#DCD1C3] hover:text-[#F8F6F2] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#A49A8E]">
          <p>Copyright © 2026 Auren Living. All rights reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link to="/privacy" className="hover:text-[#F8F6F2] transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-[#F8F6F2] transition-colors">
              Terms of Service
            </Link>
            <Link to="/shipping-returns" className="hover:text-[#F8F6F2] transition-colors">
              Shipping &amp; Returns
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
