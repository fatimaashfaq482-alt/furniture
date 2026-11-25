import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatPrice } from '../utils/format';
import { PageMeta } from '../components/PageMeta';

export type CareTopic =
  | 'contact'
  | 'shipping-returns'
  | 'faq'
  | 'care-guide'
  | 'order-tracking'
  | 'privacy'
  | 'terms';

interface CustomerCarePageProps {
  topic: CareTopic;
}

const TOPIC_META: Record<CareTopic, { title: string; eyebrow: string; subtitle: string }> = {
  contact: {
    title: 'Contact & Design Concierge',
    eyebrow: 'Personal Support',
    subtitle: 'Speak with our studio team regarding finishes, custom room layouts, or delivery scheduling.',
  },
  'shipping-returns': {
    title: 'Shipping & 30-Day Returns',
    eyebrow: 'Delivery & Care',
    subtitle: 'Complimentary white-glove delivery on qualifying orders over $1,500 and transparent 30-day returns.',
  },
  faq: {
    title: 'Frequently Asked Questions',
    eyebrow: 'Help Center',
    subtitle: 'Answers regarding solid wood care, upholstery samples, lead times, and home trials.',
  },
  'care-guide': {
    title: 'Materials & Furniture Care Guide',
    eyebrow: 'Longevity',
    subtitle: 'How to preserve solid European oak, Belgian flax linen, honed travertine, and Grade-A teak.',
  },
  'order-tracking': {
    title: 'Order Tracking',
    eyebrow: 'Dispatch Status',
    subtitle: 'Enter your demonstration order number (e.g., AL-2026-XXXX) to view delivery progress.',
  },
  privacy: {
    title: 'Privacy Policy',
    eyebrow: 'Legal & Trust',
    subtitle: 'How Auren Living respects and protects your personal information.',
  },
  terms: {
    title: 'Terms & Conditions',
    eyebrow: 'Legal & Trust',
    subtitle: 'Terms governing purchases, warranties, and use of the Auren Living storefront.',
  },
};

export const CustomerCarePage: React.FC<CustomerCarePageProps> = ({ topic }) => {
  const { orders } = useStore();
  const meta = TOPIC_META[topic];

  const [contactSent, setContactSent] = useState(false);
  const [orderLookup, setOrderLookup] = useState('');
  const [lookupResult, setLookupResult] = useState<string | null>(null);

  const handleOrderSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = orderLookup.trim().toUpperCase();
    const found = orders.find((o) => o.orderNumber.toUpperCase() === cleaned);
    if (found) {
      setLookupResult(
        `Order ${found.orderNumber} (${formatPrice(found.total)}) — ${found.status} for ${found.city}.`
      );
    } else {
      setLookupResult(
        'No matching order found in this browser session. Place a demo order at Checkout to track it here.'
      );
    }
  };

  return (
    <>
      <PageMeta
        title={`${meta.title} — Auren Living`}
        description={meta.subtitle}
      />

      <section className="bg-[#F1EDE6] border-b border-[#E8E0D5] py-12 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2">
            {meta.eyebrow}
          </p>
          <h1 className="font-serif text-[34px] sm:text-[46px] leading-[1.08] font-normal text-[#242522] mb-3">
            {meta.title}
          </h1>
          <p className="text-sm sm:text-[15px] text-[#77736D] max-w-[56ch] leading-relaxed">
            {meta.subtitle}
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8F6F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-3 space-y-1.5">
            {(
              [
                ['contact', 'Contact Us', '/contact'],
                ['shipping-returns', 'Shipping & Returns', '/shipping-returns'],
                ['care-guide', 'Materials & Care Guide', '/care-guide'],
                ['faq', 'FAQs', '/faq'],
                ['order-tracking', 'Order Tracking', '/order-tracking'],
                ['privacy', 'Privacy Policy', '/privacy'],
                ['terms', 'Terms & Conditions', '/terms'],
              ] as [CareTopic, string, string][]
            ).map(([key, label, path]) => (
              <Link
                key={key}
                to={path}
                className={`block px-4 py-2.5 rounded-[6px] text-sm transition-colors ${
                  topic === key
                    ? 'bg-[#20221F] text-[#F8F6F2] font-medium'
                    : 'text-[#30302D] hover:bg-[#F1EDE6]'
                }`}
              >
                {label}
              </Link>
            ))}
          </aside>

          {/* Main Content */}
          <div className="lg:col-span-9 bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-6 sm:p-10 space-y-6 text-sm text-[#30302D] leading-relaxed">
            {topic === 'contact' && (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-6 border-b border-[#E8E0D5]">
                  <div className="p-4 rounded-[8px] bg-[#F8F6F2]">
                    <Phone className="w-4 h-4 text-[#59604D] mb-2" aria-hidden="true" />
                    <p className="font-medium text-[#242522]">Telephone</p>
                    <p className="text-xs text-[#77736D] tabular-nums mt-0.5">+1 (800) 555-0142</p>
                  </div>
                  <div className="p-4 rounded-[8px] bg-[#F8F6F2]">
                    <Mail className="w-4 h-4 text-[#59604D] mb-2" aria-hidden="true" />
                    <p className="font-medium text-[#242522]">Studio Email</p>
                    <p className="text-xs text-[#77736D] mt-0.5">concierge@aurenliving.example</p>
                  </div>
                  <div className="p-4 rounded-[8px] bg-[#F8F6F2]">
                    <MapPin className="w-4 h-4 text-[#59604D] mb-2" aria-hidden="true" />
                    <p className="font-medium text-[#242522]">Showroom</p>
                    <p className="text-xs text-[#77736D] mt-0.5">418 NW 11th Ave, Portland, OR</p>
                  </div>
                </div>

                {contactSent ? (
                  <div className="p-6 rounded-[8px] bg-[#F1EDE6] flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#59604D] shrink-0" aria-hidden="true" />
                    <p>
                      Thank you for reaching out. Our studio concierge team typically replies within one business day.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setContactSent(true);
                    }}
                    className="space-y-4 max-w-xl"
                  >
                    <h2 className="font-serif text-2xl text-[#242522]">Send a Studio Inquiry</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        required
                        placeholder="Full name"
                        className="px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] focus:outline-none focus:border-[#242522]"
                      />
                      <input
                        type="email"
                        required
                        placeholder="Email address"
                        className="px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                    <textarea
                      rows={4}
                      required
                      placeholder="Ask about finish swatches, room dimensions, or delivery windows..."
                      className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] focus:outline-none focus:border-[#242522]"
                    />
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase font-medium rounded-[4px]"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </>
            )}

            {topic === 'shipping-returns' && (
              <div className="space-y-5">
                <h2 className="font-serif text-2xl text-[#242522]">Complimentary Shipping Over $1,500</h2>
                <p>
                  Orders totaling $1,500 or more qualify automatically for complimentary white-glove in-room delivery. Our delivery specialists carry pieces into your room of choice, complete assembly, and remove all packaging.
                </p>
                <h3 className="font-serif text-xl text-[#242522] pt-2">30-Day Home Trial &amp; Returns</h3>
                <p>
                  Live with your new piece for up to 30 days. If the scale, finish, or comfort isn’t right for your space, contact our concierge for a coordinated pickup and full refund on items in original condition.
                </p>
              </div>
            )}

            {topic === 'care-guide' && (
              <div className="space-y-6">
                <div>
                  <h2 className="font-serif text-2xl text-[#242522] mb-1.5">Solid White Oak &amp; Walnut</h2>
                  <p>
                    Dust regularly with a soft, dry cloth. Wipe spills immediately with a lightly dampened cloth following the grain. Once every 12 months, nourish dry surfaces with plant-based hardwax oil balm.
                  </p>
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-[#242522] mb-1.5">Belgian Flax Linen &amp; Wool Bouclé</h2>
                  <p>
                    Vacuum softly with an upholstery brush attachment every two weeks. Fluff down-wrapped cushions periodically to maintain even loft, and blot spills gently without rubbing.
                  </p>
                </div>
                <div>
                  <h2 className="font-serif text-2xl text-[#242522] mb-1.5">Honed Roman Travertine</h2>
                  <p>
                    Use felt coasters beneath hot or acidic drinks. Clean strictly with warm water and pH-neutral stone soap; reseal annually to guard porous mineral veining.
                  </p>
                </div>
              </div>
            )}

            {topic === 'faq' && (
              <div className="space-y-6">
                {[
                  {
                    q: 'Do you ship solid wood tables and sofas assembled?',
                    a: 'Sofas and accent chairs arrive fully assembled. Dining tables, beds, and consoles include simple brass-insert leg attachment or white-glove assembly.',
                  },
                  {
                    q: 'Can I request timber or linen fabric swatches?',
                    a: 'Yes. Contact our concierge team with up to four finishes and we will post complimentary swatch cards.',
                  },
                  {
                    q: 'What is covered under the 10-year guarantee?',
                    a: 'All structural joinery, kiln-dried hardwood frames, steel hardware, and high-resilience cushion cores are covered for 10 years of residential use.',
                  },
                ].map((item) => (
                  <div key={item.q} className="pb-4 border-b border-[#F1EDE6] last:border-b-0">
                    <h2 className="font-serif text-xl text-[#242522] mb-1.5">{item.q}</h2>
                    <p className="text-[#77736D]">{item.a}</p>
                  </div>
                ))}
              </div>
            )}

            {topic === 'order-tracking' && (
              <div className="space-y-5 max-w-lg">
                <form onSubmit={handleOrderSearch} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="text"
                    value={orderLookup}
                    onChange={(e) => setOrderLookup(e.target.value)}
                    placeholder="Order number (e.g. AL-2026-4812)"
                    className="flex-1 px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm tabular-nums focus:outline-none focus:border-[#242522]"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2.5 bg-[#20221F] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase font-medium rounded-[4px]"
                  >
                    Check Status
                  </button>
                </form>

                {lookupResult && (
                  <div className="p-4 rounded-[8px] bg-[#F1EDE6] border border-[#DCD1C3] text-sm">
                    {lookupResult}
                  </div>
                )}

                {orders.length > 0 && (
                  <div className="pt-4 border-t border-[#E8E0D5]">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#77736D] mb-2">
                      Recent Session Orders
                    </p>
                    <ul className="space-y-1.5 text-xs tabular-nums">
                      {orders.map((o) => (
                        <li key={o.orderNumber}>
                          <button
                            type="button"
                            onClick={() => setOrderLookup(o.orderNumber)}
                            className="underline text-[#242522]"
                          >
                            {o.orderNumber}
                          </button>{' '}
                          — {formatPrice(o.total)}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}

            {topic === 'privacy' && (
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-[#242522]">Client Privacy Commitment</h2>
                <p>
                  Auren Living stores your shopping bag, wishlist, and demonstration order preferences locally within your browser storage. We do not sell personal details or share client records with third-party data brokers.
                </p>
              </div>
            )}

            {topic === 'terms' && (
              <div className="space-y-4">
                <h2 className="font-serif text-2xl text-[#242522]">Terms of Service</h2>
                <p>
                  All natural timber, travertine stone, and flax linen variations reflect authentic organic materials and make each finished piece unique. Pricing and availability displayed in this demonstration storefront are illustrative.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};
