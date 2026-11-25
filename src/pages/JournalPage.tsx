import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { JOURNAL_ARTICLES } from '../data/journal';
import { PRODUCTS } from '../data/products';
import { SafeImage } from '../components/SafeImage';
import { ProductCard } from '../components/ProductCard';
import { PageMeta } from '../components/PageMeta';

export const JournalPage: React.FC = () => {
  const [activeSlug, setActiveSlug] = useState<string>(JOURNAL_ARTICLES[0].slug);
  const activeArticle =
    JOURNAL_ARTICLES.find((a) => a.slug === activeSlug) ?? JOURNAL_ARTICLES[0];

  const featuredProducts = PRODUCTS.filter((p) =>
    activeArticle.featuredProductIds.includes(p.id)
  );

  return (
    <>
      <PageMeta
        title="The Auren Journal — Interior Perspectives & Material Notes"
        description="Essays on calm architectural interiors, solid white oak care, and thoughtful spatial proportions from the Auren Living studio."
      />

      <section className="bg-[#F1EDE6] border-b border-[#E8E0D5] py-12 sm:py-16">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#59604D] font-medium mb-2">
            Editorial Dispatch
          </p>
          <h1 className="font-serif text-[36px] sm:text-[48px] leading-[1.08] font-normal text-[#242522]">
            The Auren Journal
          </h1>
          <p className="text-sm sm:text-[15px] text-[#77736D] mt-3 max-w-[52ch] leading-relaxed">
            Notes on quiet architecture, natural material patina, and creating homes built for unhurried living.
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-[#F8F6F2]">
        <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Article Selector Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {JOURNAL_ARTICLES.map((article) => {
              const selected = article.slug === activeArticle.slug;
              return (
                <button
                  key={article.slug}
                  type="button"
                  onClick={() => setActiveSlug(article.slug)}
                  className={`text-left group bg-[#FFFFFF] border rounded-[8px] overflow-hidden transition-all ${
                    selected
                      ? 'border-[#242522] shadow-sm'
                      : 'border-[#E8E0D5] hover:border-[#A49A8E]'
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#F1EDE6]">
                    <SafeImage
                      src={article.image}
                      alt={article.imageAlt}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-[11px] text-[#77736D] mb-1.5">
                      {article.category} · {article.date} · {article.readTime}
                    </p>
                    <h2 className="font-serif text-xl text-[#242522] leading-snug mb-2">
                      {article.title}
                    </h2>
                    <p className="text-xs text-[#77736D] leading-relaxed line-clamp-2">
                      {article.excerpt}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Essay */}
          <article className="bg-[#FFFFFF] border border-[#E8E0D5] rounded-[10px] p-6 sm:p-10 lg:p-14">
            <div className="max-w-[780px] mx-auto">
              <p className="text-[11px] tracking-[0.16em] uppercase text-[#59604D] mb-2">
                {activeArticle.category} · {activeArticle.date} · {activeArticle.readTime}
              </p>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.12] text-[#242522] mb-6">
                {activeArticle.title}
              </h2>

              <div className="aspect-[16/9] rounded-[8px] overflow-hidden bg-[#F1EDE6] mb-8">
                <SafeImage
                  src={activeArticle.image}
                  alt={activeArticle.imageAlt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="space-y-5 text-[15px] sm:text-base text-[#30302D] leading-[1.8]">
                {activeArticle.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>

            {featuredProducts.length > 0 && (
              <div className="mt-14 pt-10 border-t border-[#E8E0D5]">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-2xl text-[#242522]">
                    Featured in This Essay
                  </h3>
                  <Link
                    to="/shop"
                    className="text-xs tracking-[0.14em] uppercase font-medium text-[#242522] hover:text-[#59604D]"
                  >
                    View Catalog →
                  </Link>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {featuredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            )}
          </article>
        </div>
      </section>
    </>
  );
};
