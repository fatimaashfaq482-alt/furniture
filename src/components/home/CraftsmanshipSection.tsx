import React from 'react';
import { IMAGES } from '../../data/images';
import { SafeImage } from '../SafeImage';
import { Reveal } from '../Reveal';

const PILLARS = [
  {
    title: 'Thoughtful Materials',
    description:
      'FSC-certified European white oak, unbleached Belgian flax linen, and quarried Italian travertine chosen for natural longevity.',
    image: IMAGES.craftMaterialsWood,
    alt: 'Raw white oak planks, unbleached Belgian linen swatches, and honed travertine stone samples',
  },
  {
    title: 'Exceptional Craftsmanship',
    description:
      'Precision mortise-and-tenon joinery and hand-rubbed plant-based oils celebrate open wood grain and structural strength.',
    image: IMAGES.craftJoineryDetail,
    alt: 'Close-up of solid white oak mortise-and-tenon furniture joinery in workshop',
  },
  {
    title: 'Designed to Last',
    description:
      'Quiet architectural silhouettes immune to passing trends—made to soften gracefully and endure through decades of living.',
    image: IMAGES.craftTimelessForm,
    alt: 'Sculpted curved oak chair backrest casting soft natural window shadows',
  },
];

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#F8F6F2]">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-[540px] mb-10 sm:mb-12">
            <p className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase text-[#77736D] font-medium mb-2.5">
              Craft &amp; Provenance
            </p>
            <h2 className="font-serif text-[30px] sm:text-[38px] lg:text-[42px] leading-[1.12] font-normal text-[#242522]">
              Honest Integrity in Every Detail
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {PILLARS.map((pillar, index) => (
            <Reveal key={pillar.title} delayMs={index * 70}>
              <article className="group">
                <div className="aspect-[4/3] rounded-[8px] overflow-hidden bg-[#F1EDE6] mb-4">
                  <SafeImage
                    src={pillar.image}
                    alt={pillar.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-2xl font-normal text-[#242522] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#77736D] leading-relaxed">
                  {pillar.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
