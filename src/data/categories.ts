import { CategoryInfo } from '../types';
import { IMAGES } from './images';

export const CATEGORIES: CategoryInfo[] = [
  {
    slug: 'living-room',
    name: 'Living Room',
    eyebrow: 'GATHER & UNWIND',
    description:
      'Architectural sofas, sculpted lounge chairs, and solid timber tables proportioned for effortless conversation and daily rest.',
    editorialNote:
      'Designed around generous seat depths, breathable natural weaves, and quiet timber silhouettes that anchor the home.',
    itemCount: 18,
    image: IMAGES.categoryLivingRoom,
    imageAlt: 'Minimalist Scandinavian living room with cream bouclé sofa and solid oak coffee table',
  },
  {
    slug: 'dining-room',
    name: 'Dining Room',
    eyebrow: 'SHARED MOMENTS',
    description:
      'Hand-finished solid white oak dining tables, steam-bent chairs, and fluted sideboards made for unhurried meals.',
    editorialNote:
      'Every dining surface is sealed with plant-based matte oils to honor the open grain while resisting daily life.',
    itemCount: 14,
    image: IMAGES.categoryDiningRoom,
    imageAlt: 'Minimalist luxury dining room with solid oak dining table and upholstered chairs',
  },
  {
    slug: 'bedroom',
    name: 'Bedroom',
    eyebrow: 'SANCTUARY & REST',
    description:
      'Low-profile upholstered platform beds, solid oak storage pieces, and calm tactile silhouettes for restorative sleep.',
    editorialNote:
      'Crafted with OEKO-TEX certified Belgian linens and sustainably harvested European oak for a serene retreat.',
    itemCount: 12,
    image: IMAGES.categoryBedroom,
    imageAlt: 'Serene minimalist bedroom with oatmeal linen platform bed and warm morning sunlight',
  },
  {
    slug: 'home-office',
    name: 'Home Office',
    eyebrow: 'CLARITY & FOCUS',
    description:
      'Refined solid oak desks, sculpted seating, and uncluttered console tables engineered for thoughtful, focused work.',
    editorialNote:
      'Concealed cable routing and seamless flush drawers preserve visual stillness throughout the workday.',
    itemCount: 9,
    image: IMAGES.categoryHomeOffice,
    imageAlt: 'Calm contemporary home office with solid oiled oak writing desk and architectural shelving',
  },
  {
    slug: 'outdoor-living',
    name: 'Outdoor Living',
    eyebrow: 'OPEN AIR RETREAT',
    description:
      'Weather-tested Grade-A teak lounge seating and natural stone accents sculpted to transition seamlessly outdoors.',
    editorialNote:
      'Constructed with mortise-and-tenon marine-grade teak and quick-dry performance linen cushions.',
    itemCount: 8,
    image: IMAGES.categoryOutdoorLiving,
    imageAlt: 'Luxury outdoor terrace with teak lounge sofa and armchairs on limestone patio',
  },
];
