import { JournalArticle } from '../types';
import { IMAGES } from './images';

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    slug: 'architecture-of-calm-living-spaces',
    title: 'The Architecture of Calm: Designing Spaces That Breathe',
    category: 'Design Philosophy',
    date: 'November 2026',
    readTime: '4 min read',
    excerpt:
      'Why restraint, natural daylight, and tactile proportions create rooms that feel deeply restorative year after year.',
    image: IMAGES.heroLivingRoom,
    imageAlt: 'Sunlit minimalist Scandinavian living room with cream sofa and solid oak coffee table',
    paragraphs: [
      'A calm room rarely begins with decoration. Instead, it emerges from how architectural proportions, natural daylight, and honest materials interact with empty space. When a sofa sits slightly away from the wall or a low travertine table allows sightlines to remain open, the room exhales.',
      'At Auren Living, we design every collection around warm, low-contrast neutrals—unbleached Belgian linen, honed Roman travertine, and matte-oiled white oak—so that light travels gently across surfaces from morning to dusk rather than bouncing harshly off synthetic lacquer.',
      'Choose fewer pieces with greater integrity: one generous sofa scaled accurately to the room, a sculptural lounge chair placed where afternoon light gathers, and a solid wood table whose patina records decades of quiet living.',
    ],
    featuredProductIds: ['haven-three-seater-sofa', 'vela-travertine-coffee-table'],
  },
  {
    slug: 'living-with-solid-european-oak',
    title: 'Living With Solid White Oak: Grain, Oil & Natural Patina',
    category: 'Materials & Craft',
    date: 'October 2026',
    readTime: '5 min read',
    excerpt:
      'Inside our Nordic timber workshops—how kiln drying, chamfered edges, and plant-based oils protect solid wood without hiding its grain.',
    image: IMAGES.craftJoineryDetail,
    imageAlt: 'Precision solid oak mortise-and-tenon furniture joinery in workshop',
    paragraphs: [
      'Unlike thick polyurethane coatings that seal wood beneath a plastic layer, natural plant-based hardwax oil sinks into the cellular fibers of European white oak. You feel the open grain beneath your fingertips while gaining reliable everyday protection.',
      'Traditional mortise-and-tenon and wedged joinery allow solid timber to expand and contract gracefully with seasonal humidity shifts. Rather than fighting the wood, good joinery respects its lifelong movement.',
      'Over years of shared dinners and morning coffees, solid oak deepens subtly in warmth—becoming unmistakably yours.',
    ],
    featuredProductIds: ['oakwood-dining-table', 'rowan-wooden-sideboard', 'linnea-dining-chair'],
  },
  {
    slug: 'creating-a-serene-home-atelier',
    title: 'From Studio to Sanctuary: Tactile Calm in the Home Office',
    category: 'Interior Guide',
    date: 'September 2026',
    readTime: '3 min read',
    excerpt:
      'How warm timber surfaces, wool felt storage, and mindful sightlines turn daily work into an unhurried ritual.',
    image: IMAGES.categoryHomeOffice,
    imageAlt: 'Calm contemporary home office with solid oak desk and shelving',
    paragraphs: [
      'Our workspaces no longer belong behind closed doors—they live beside our living rooms and sunlit windows. Designing a home office that feels harmonious with the rest of the home requires swapping cold laminates for tactile natural timber.',
      'Position your desk perpendicular to natural light to reduce glare while framing a view of greenery or textured limewash walls. Keep surfaces uncluttered with flush-mounted drawers for laptops and notebooks when the day concludes.',
    ],
    featuredProductIds: ['klara-writing-desk', 'tove-console-table', 'milo-accent-chair'],
  },
];
