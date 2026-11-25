import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Lock, Info, ArrowRight, ShieldCheck } from 'lucide-react';
import { useStore } from '../context/StoreContext';
import { formatPrice } from '../utils/format';
import { SafeImage } from '../components/SafeImage';
import { PageMeta } from '../components/PageMeta';
import { DemoOrder } from '../types';

export const CheckoutPage: React.FC = () => {
  const { cart, cartSubtotal, clearCart, recordOrder } = useStore();

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('United States');
  const [phone, setPhone] = useState('');
  const [shippingMethod, setShippingMethod] = useState<'standard' | 'whiteglove'>('whiteglove');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [formError, setFormError] = useState<string | null>(null);
  const [confirmedOrder, setConfirmedOrder] = useState<DemoOrder | null>(null);

  const qualifiesFree = cartSubtotal >= 1500;
  const shippingCost =
    cart.length === 0
      ? 0
      : qualifiesFree
      ? shippingMethod === 'whiteglove'
        ? 0
        : 0
      : shippingMethod === 'whiteglove'
      ? 145
      : 75;

  const total = cartSubtotal + shippingCost;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !email.trim() ||
      !email.includes('@') ||
      !firstName.trim() ||
      !lastName.trim() ||
      !address.trim() ||
      !city.trim() ||
      !postalCode.trim()
    ) {
      setFormError('Please complete all required contact and shipping fields.');
      return;
    }

    setFormError(null);
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const order: DemoOrder = {
      orderNumber: `AL-2026-${randomSuffix}`,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      email: email.trim(),
      customerName: `${firstName.trim()} ${lastName.trim()}`,
      address: address.trim(),
      city: city.trim(),
      postalCode: postalCode.trim(),
      country,
      shippingMethod:
        shippingMethod === 'whiteglove'
          ? 'White-Glove Room Placement'
          : 'Threshold Freight Delivery',
      shippingCost,
      subtotal: cartSubtotal,
      total,
      items: [...cart],
      status: 'Demo Order Recorded — Preparing Dispatch',
    };

    recordOrder(order);
    clearCart();
    setConfirmedOrder(order);
    window.scrollTo(0, 0);
  };

  if (confirmedOrder) {
    return (
      <>
        <PageMeta
          title={`Order ${confirmedOrder.orderNumber} Confirmed — Auren Living`}
          description="Your Auren Living demonstration order summary."
        />
        <section className="py-16 sm:py-24 bg-[#F8F6F2]">
          <div className="max-w-[760px] mx-auto px-4 sm:px-6">
            <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-8 sm:p-12">
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.16em] uppercase text-[#59604D] font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                <span>Demo Order Confirmation</span>
              </div>

              <h1 className="font-serif text-3xl sm:text-4xl text-[#242522] mb-2">
                Thank you, {confirmedOrder.customerName}.
              </h1>
              <p className="text-sm text-[#77736D] leading-relaxed mb-6">
                Order <strong className="text-[#242522] tabular-nums">{confirmedOrder.orderNumber}</strong> has been recorded in this demonstration storefront. No real payment was charged.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 rounded-[8px] bg-[#F1EDE6] border border-[#E8E0D5] text-xs mb-8">
                <div>
                  <p className="uppercase tracking-[0.14em] text-[#77736D] text-[10px] mb-1">
                    Shipping Destination
                  </p>
                  <p className="text-[#242522] font-medium">{confirmedOrder.customerName}</p>
                  <p className="text-[#30302D]">{confirmedOrder.address}</p>
                  <p className="text-[#30302D]">
                    {confirmedOrder.city}, {confirmedOrder.postalCode} · {confirmedOrder.country}
                  </p>
                </div>
                <div>
                  <p className="uppercase tracking-[0.14em] text-[#77736D] text-[10px] mb-1">
                    Delivery Method &amp; Status
                  </p>
                  <p className="text-[#242522] font-medium">{confirmedOrder.shippingMethod}</p>
                  <p className="text-[#59604D] mt-1">{confirmedOrder.status}</p>
                </div>
              </div>

              <div className="space-y-3 border-t border-[#E8E0D5] pt-6 mb-6">
                {confirmedOrder.items.map((item) => (
                  <div key={item.key} className="flex items-center justify-between gap-4 text-sm">
                    <div className="flex items-center gap-3">
                      <div className="w-14 h-12 rounded-[6px] overflow-hidden bg-[#F1EDE6] shrink-0">
                        <SafeImage src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <p className="font-medium text-[#242522]">{item.name}</p>
                        <p className="text-xs text-[#77736D]">
                          {item.color} · {item.size} × {item.quantity}
                        </p>
                      </div>
                    </div>
                    <span className="font-medium text-[#242522] tabular-nums">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="border-t border-[#E8E0D5] pt-4 space-y-2 text-sm mb-8">
                <div className="flex justify-between text-[#77736D]">
                  <span>Subtotal</span>
                  <span className="tabular-nums">{formatPrice(confirmedOrder.subtotal)}</span>
                </div>
                <div className="flex justify-between text-[#77736D]">
                  <span>Shipping</span>
                  <span className="tabular-nums">
                    {confirmedOrder.shippingCost === 0 ? 'Complimentary' : formatPrice(confirmedOrder.shippingCost)}
                  </span>
                </div>
                <div className="flex justify-between text-base font-medium text-[#242522] pt-2 border-t border-[#F1EDE6]">
                  <span>Total (Demo)</span>
                  <span className="tabular-nums">{formatPrice(confirmedOrder.total)}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  to="/shop"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase font-medium rounded-[4px]"
                >
                  <span>Continue Exploring</span>
                  <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                </Link>
                <Link
                  to="/order-tracking"
                  className="inline-flex items-center px-6 py-3 border border-[#242522] text-[#242522] hover:bg-[#F1EDE6] text-xs tracking-[0.14em] uppercase font-medium rounded-[4px]"
                >
                  Track Demo Order
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageMeta
        title="Checkout — Auren Living"
        description="Complete your Auren Living order in our demonstration checkout flow."
      />

      <section className="py-12 sm:py-16 bg-[#F8F6F2]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2">
              Order Placement
            </p>
            <h1 className="font-serif text-[34px] sm:text-[44px] leading-[1.1] font-normal text-[#242522]">
              Checkout
            </h1>
          </div>

          {/* Transparent Demo Notice */}
          <div className="mb-8 p-4 rounded-[8px] bg-[#F1EDE6] border border-[#DCD1C3] flex items-start gap-3 text-xs sm:text-sm text-[#30302D]">
            <Info className="w-4 h-4 text-[#59604D] shrink-0 mt-0.5" aria-hidden="true" />
            <p>
              <strong>Demonstration Checkout:</strong> This storefront is configured as a static Hostinger-ready showcase without a live payment gateway. No real payment will be charged when you place a demo order.
            </p>
          </div>

          {cart.length === 0 ? (
            <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-12 text-center">
              <h2 className="font-serif text-2xl text-[#242522] mb-2">Your bag is empty</h2>
              <p className="text-sm text-[#77736D] mb-6">
                Add furniture pieces to your shopping bag before checking out.
              </p>
              <Link
                to="/shop"
                className="inline-flex px-6 py-3 bg-[#20221F] text-[#F8F6F2] text-xs tracking-[0.14em] uppercase font-medium rounded-[4px]"
              >
                Shop Collection
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Left Form Columns */}
              <div className="lg:col-span-7 space-y-8">
                {/* Contact Information */}
                <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-6 sm:p-7 space-y-4">
                  <h2 className="font-serif text-2xl text-[#242522]">Contact Information</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="chk-email" className="block text-xs text-[#77736D] mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="chk-email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@example.com"
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="chk-phone" className="block text-xs text-[#77736D] mb-1.5">
                        Phone Number (for delivery scheduling)
                      </label>
                      <input
                        id="chk-phone"
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+1 (555) 234-5678"
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                  </div>
                </div>

                {/* Shipping Address */}
                <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-6 sm:p-7 space-y-4">
                  <h2 className="font-serif text-2xl text-[#242522]">Shipping Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="chk-first" className="block text-xs text-[#77736D] mb-1.5">
                        First Name *
                      </label>
                      <input
                        id="chk-first"
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                    <div>
                      <label htmlFor="chk-last" className="block text-xs text-[#77736D] mb-1.5">
                        Last Name *
                      </label>
                      <input
                        id="chk-last"
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="chk-address" className="block text-xs text-[#77736D] mb-1.5">
                        Street Address *
                      </label>
                      <input
                        id="chk-address"
                        type="text"
                        required
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        placeholder="742 Evergreen Terrace, Apt 4B"
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                    <div>
                      <label htmlFor="chk-city" className="block text-xs text-[#77736D] mb-1.5">
                        City *
                      </label>
                      <input
                        id="chk-city"
                        type="text"
                        required
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                    <div>
                      <label htmlFor="chk-postal" className="block text-xs text-[#77736D] mb-1.5">
                        Postal Code *
                      </label>
                      <input
                        id="chk-postal"
                        type="text"
                        required
                        value={postalCode}
                        onChange={(e) => setPostalCode(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="chk-country" className="block text-xs text-[#77736D] mb-1.5">
                        Country / Region
                      </label>
                      <select
                        id="chk-country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] focus:outline-none focus:border-[#242522]"
                      >
                        <option value="United States">United States</option>
                        <option value="Canada">Canada</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Germany">Germany</option>
                      </select>
                    </div>
                  </div>

                  {/* Delivery Options */}
                  <div className="pt-4 border-t border-[#E8E0D5] space-y-2.5">
                    <p className="text-xs uppercase tracking-[0.14em] text-[#77736D] font-medium">
                      Delivery Tier
                    </p>
                    <label className="flex items-center justify-between p-3.5 rounded-[6px] border border-[#DCD1C3] bg-[#F8F6F2] cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="delivery"
                          checked={shippingMethod === 'whiteglove'}
                          onChange={() => setShippingMethod('whiteglove')}
                          className="accent-[#20221F]"
                        />
                        <div>
                          <p className="text-sm font-medium text-[#242522]">
                            White-Glove In-Room Placement
                          </p>
                          <p className="text-xs text-[#77736D]">
                            Unpacked, assembled in your room, packaging removed.
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[#242522] tabular-nums">
                        {qualifiesFree ? 'Complimentary' : '$145'}
                      </span>
                    </label>

                    <label className="flex items-center justify-between p-3.5 rounded-[6px] border border-[#DCD1C3] bg-[#F8F6F2] cursor-pointer">
                      <div className="flex items-center gap-3">
                        <input
                          type="radio"
                          name="delivery"
                          checked={shippingMethod === 'standard'}
                          onChange={() => setShippingMethod('standard')}
                          className="accent-[#20221F]"
                        />
                        <div>
                          <p className="text-sm font-medium text-[#242522]">
                            Threshold Freight Delivery
                          </p>
                          <p className="text-xs text-[#77736D]">
                            Scheduled arrival to your front entryway.
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-medium text-[#242522] tabular-nums">
                        {qualifiesFree ? 'Complimentary' : '$75'}
                      </span>
                    </label>
                  </div>
                </div>

                {/* Payment Styling (Demo Interface) */}
                <div className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-6 sm:p-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <h2 className="font-serif text-2xl text-[#242522]">Payment Details (Demo)</h2>
                    <Lock className="w-4 h-4 text-[#59604D]" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-[#77736D]">
                    Payment fields below are styled for demonstration purposes and do not transmit card data.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="sm:col-span-2">
                      <label htmlFor="chk-card" className="block text-xs text-[#77736D] mb-1.5">
                        Card Number (Demo)
                      </label>
                      <input
                        id="chk-card"
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="4242 •••• •••• 4242"
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] tabular-nums focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                    <div>
                      <label htmlFor="chk-exp" className="block text-xs text-[#77736D] mb-1.5">
                        Expiry (MM/YY)
                      </label>
                      <input
                        id="chk-exp"
                        type="text"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                        placeholder="08/29"
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] tabular-nums focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                    <div>
                      <label htmlFor="chk-cvc" className="block text-xs text-[#77736D] mb-1.5">
                        Security Code
                      </label>
                      <input
                        id="chk-cvc"
                        type="text"
                        value={cardCvc}
                        onChange={(e) => setCardCvc(e.target.value)}
                        placeholder="123"
                        className="w-full px-3.5 py-2.5 bg-[#F8F6F2] border border-[#DCD1C3] rounded-[6px] text-sm text-[#242522] tabular-nums focus:outline-none focus:border-[#242522]"
                      />
                    </div>
                  </div>
                </div>

                {formError && (
                  <p role="alert" className="text-sm text-[#7D3C2E]">
                    {formError}
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.16em] uppercase font-medium rounded-[4px] transition-colors"
                >
                  Place Demo Order — {formatPrice(total)}
                </button>
              </div>

              {/* Right Order Summary */}
              <aside className="lg:col-span-5 bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-6 sm:p-7 lg:sticky lg:top-24">
                <h2 className="font-serif text-2xl text-[#242522] mb-5">Order Summary</h2>

                <div className="space-y-4 max-h-[380px] overflow-y-auto pr-1 mb-6">
                  {cart.map((item) => (
                    <div key={item.key} className="flex gap-3.5 items-center">
                      <div className="w-16 h-14 rounded-[6px] overflow-hidden bg-[#F1EDE6] shrink-0">
                        <SafeImage
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#242522] truncate">{item.name}</p>
                        <p className="text-xs text-[#77736D]">
                          {item.color} · Qty {item.quantity}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-[#242522] tabular-nums">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#E8E0D5] pt-4 space-y-2.5 text-sm">
                  <div className="flex justify-between text-[#77736D]">
                    <span>Subtotal</span>
                    <span className="tabular-nums text-[#242522]">{formatPrice(cartSubtotal)}</span>
                  </div>
                  <div className="flex justify-between text-[#77736D]">
                    <span>Shipping</span>
                    <span className="tabular-nums text-[#242522]">
                      {shippingCost === 0 ? 'Complimentary' : formatPrice(shippingCost)}
                    </span>
                  </div>
                  <div className="flex justify-between text-base font-medium text-[#242522] pt-3 border-t border-[#E8E0D5]">
                    <span>Total</span>
                    <span className="text-lg tabular-nums">{formatPrice(total)}</span>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F1EDE6] flex items-center gap-2 text-xs text-[#77736D]">
                  <ShieldCheck className="w-4 h-4 text-[#59604D] shrink-0" aria-hidden="true" />
                  <span>Protected by our 30-day return promise &amp; 10-year guarantee.</span>
                </div>
              </aside>
            </form>
          )}
        </div>
      </section>
    </>
  );
};
