import React from 'react';
import { PRODUCTS } from '../data/products';
import { PageMeta } from '../components/PageMeta';
import { HeroSection } from '../components/home/HeroSection';
import { BenefitsBar } from '../components/home/BenefitsBar';
import { CategorySection } from '../components/home/CategorySection';
import { ProductShowcaseSection } from '../components/home/ProductShowcaseSection';
import { EditorialBanner } from '../components/home/EditorialBanner';
import { BrandStorySection } from '../components/home/BrandStorySection';
import { CraftsmanshipSection } from '../components/home/CraftsmanshipSection';
import { NewsletterSection } from '../components/home/NewsletterSection';

export const HomePage: React.FC = () => {
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller).slice(0, 4);
  const newArrivals = PRODUCTS.filter((p) => p.isNewArrival).slice(0, 4);

  return (
    <>
      <PageMeta
        title="Auren Living — Luxury Minimalist Furniture & Modern Interiors"
        description="Discover thoughtfully crafted Scandinavian and contemporary furniture at Auren Living. Timeless sofas, solid oak dining tables, bedroom pieces, and outdoor living."
      />

      <HeroSection />
      <BenefitsBar />
      <CategorySection />

      <ProductShowcaseSection
        eyebrow="Curated for Your Home"
        heading="Customer Favorites"
        linkLabel="View All Products"
        linkTo="/shop?filter=bestsellers"
        products={bestsellers}
        surface="ivory"
      />

      <EditorialBanner />

      <ProductShowcaseSection
        eyebrow="New Arrivals"
        heading="Fresh Perspectives"
        description="Explore the latest additions to our thoughtfully curated collection."
        linkLabel="View New Arrivals"
        linkTo="/shop?filter=new"
        products={newArrivals}
        surface="ivory"
      />

      <BrandStorySection />
      <CraftsmanshipSection />
      <NewsletterSection />
    </>
  );
};
