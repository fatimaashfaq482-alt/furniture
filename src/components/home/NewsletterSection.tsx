import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Reveal } from '../Reveal';

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cleaned = email.trim();
    const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleaned);
    if (!isValidEmail) {
      setError('Please enter a valid email address.');
      return;
    }
    setError(null);
    setSubmitted(true);
    setEmail('');
  };

  return (
    <section className="py-16 sm:py-20 bg-[#E8E0D5] border-t border-[#DCD1C3]">
      <div className="max-w-[680px] mx-auto px-4 sm:px-6 text-center">
        <Reveal>
          <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2.5">
            The Auren Journal &amp; Previews
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.12] font-normal text-[#242522] mb-3">
            Make Yourself at Home.
          </h2>
          <p className="text-sm sm:text-[15px] text-[#30302D] leading-relaxed mb-7 max-w-[46ch] mx-auto">
            Be the first to discover new collections, design inspiration, and exclusive offers.
          </p>

          {submitted ? (
            <div className="inline-flex items-center gap-2.5 px-6 py-4 rounded-[8px] bg-[#F8F6F2] border border-[#DCD1C3] text-sm text-[#242522]">
              <CheckCircle2 className="w-4 h-4 text-[#59604D] shrink-0" aria-hidden="true" />
              <span>Welcome to Auren Living. Look for our next seasonal dispatch soon.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="max-w-[480px] mx-auto">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter your email address"
                  aria-label="Email address"
                  className="flex-1 px-4 py-3.5 bg-[#FFFFFF] border border-[#DCD1C3] focus:border-[#242522] rounded-[4px] text-sm text-[#242522] placeholder:text-[#A49A8E] focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-7 py-3.5 bg-[#20221F] hover:bg-[#41453C] text-[#F8F6F2] text-xs tracking-[0.15em] uppercase font-medium rounded-[4px] transition-colors whitespace-nowrap shrink-0"
                >
                  Subscribe
                </button>
              </div>
              {error && (
                <p role="alert" className="text-xs text-[#7D3C2E] mt-2 text-left">
                  {error}
                </p>
              )}
              <p className="text-[11px] text-[#77736D] mt-3">
                By subscribing, you agree to receive editorial notes from Auren Living. Unsubscribe anytime.
              </p>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
};
