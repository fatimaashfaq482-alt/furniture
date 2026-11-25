import { Product } from '../types';
import { IMAGES } from './images';

export const PRODUCTS: Product[] = [
  {
    id: 'haven-three-seater-sofa',
    slug: 'the-haven-three-seater-sofa',
    name: 'The Haven Three-Seater Sofa',
    price: 1899,
    category: 'Living Room',
    collectionSlug: 'living-room',
    badge: 'Bestseller',
    isBestseller: true,
    rating: 4.9,
    reviewCount: 142,
    shortDescription:
      'Generously proportioned three-seater sofa upholstered in Belgian linen over a recessed solid white oak plinth.',
    fullDescription:
      'The Haven Three-Seater Sofa balances crisp architectural tailoring with deeply inviting comfort. Upholstered in heavyweight, unbleached Belgian linen and supported by a kiln-dried solid white oak base, its feather-wrapped high-resilience cushions soften gradually while holding their clean silhouette for years.',
    images: [
      {
        src: IMAGES.productHavenSofa,
        alt: 'The Haven Three-Seater Sofa upholstered in warm cream Belgian linen',
        caption: 'Front Three-Quarter Studio View',
      },
      {
        src: IMAGES.heroLivingRoom,
        alt: 'The Haven sofa styled in a sunlit Scandinavian living room',
        caption: 'In Residence — Sunlit Living Room',
      },
      {
        src: IMAGES.craftMaterialsWood,
        alt: 'Close-up of unbleached Belgian linen and solid white oak timber materials',
        caption: 'Materials — Linen & White Oak',
      },
    ],
    colors: [
      { name: 'Warm Cream Linen', hex: '#EAE4DA' },
      { name: 'Oatmeal Bouclé', hex: '#D5CBBF' },
      { name: 'Warm Stone', hex: '#BEB6AA' },
    ],
    material: 'Belgian Linen & Solid White Oak',
    materialGroup: 'Upholstery',
    sizes: [
      { label: 'Three-Seater (88")', dimensions: '88" W × 37" D × 31" H', priceDelta: 0 },
      { label: 'Grand Sofa (98")', dimensions: '98" W × 38" D × 31" H', priceDelta: 350 },
    ],
    specifications: {
      dimensions: '88" W × 37" D × 31" H · Seat Height: 17"',
      weight: '168 lbs',
      materials: '100% Belgian Flax Linen, FSC-Certified Solid White Oak Plinth, Responsible Down & CertiPUR-US Core',
      origin: 'Crafted in Denmark & finished in Portland Atelier',
      care: 'Removable cushion covers; vacuum weekly with soft brush attachment. Spot clean with mild pH-neutral soap.',
      assembly: 'Arrives fully assembled; white-glove room placement included.',
    },
    faqs: [
      {
        question: 'Are the seat and back cushion covers removable?',
        answer:
          'Yes. Both seat and back cushions feature concealed brass-toned zippers so covers can be removed for gentle professional cleaning.',
      },
      {
        question: 'How does Belgian linen wear over time?',
        answer:
          'Our 480 gsm Belgian flax weave is pre-washed for softness and rated to 45,000 Martindale rubs for residential longevity.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 5–7 business days',
    popularityScore: 99,
  },
  {
    id: 'oakwood-dining-table',
    slug: 'the-oakwood-dining-table',
    name: 'The Oakwood Dining Table',
    price: 1249,
    category: 'Dining Room',
    collectionSlug: 'dining-room',
    badge: 'Bestseller',
    isBestseller: true,
    rating: 4.9,
    reviewCount: 98,
    shortDescription:
      'Handcrafted solid European white oak dining table with softly chamfered edges and turned cylindrical legs.',
    fullDescription:
      'Grounded by substantial cylindrical legs and a softly chamfered 1.5-inch solid oak top, The Oakwood Dining Table anchors the dining room with quiet permanence. Finished in a matte plant-based hardwax oil that celebrates the natural timber grain while guarding against spills.',
    images: [
      {
        src: IMAGES.productOakwoodTable,
        alt: 'The Oakwood Dining Table in solid natural white oak',
        caption: 'Studio Profile — 84" Dining Table',
      },
      {
        src: IMAGES.categoryDiningRoom,
        alt: 'The Oakwood Dining Table styled with dining chairs and ceramic pendant',
        caption: 'Styled in Natural Light',
      },
      {
        src: IMAGES.craftJoineryDetail,
        alt: 'Solid oak mortise-and-tenon joinery detail',
        caption: 'Joinery & Chamfered Edge Detail',
      },
    ],
    colors: [
      { name: 'Natural White Oak', hex: '#C7A680' },
      { name: 'Smoked Oak', hex: '#7A634C' },
      { name: 'Soaped Pale Oak', hex: '#D8C7AF' },
    ],
    material: 'Solid FSC White Oak',
    materialGroup: 'Wood',
    sizes: [
      { label: '72" (Seats 6)', dimensions: '72" L × 36" W × 30" H', priceDelta: 0 },
      { label: '84" (Seats 8)', dimensions: '84" L × 38" W × 30" H', priceDelta: 250 },
      { label: '96" (Seats 10)', dimensions: '96" L × 40" W × 30" H', priceDelta: 450 },
    ],
    specifications: {
      dimensions: '72" L × 36" W × 30" H · Clearance: 28.5"',
      weight: '142 lbs',
      materials: '100% Solid Kiln-Dried European White Oak, Matte Hardwax Oil Finish',
      origin: 'Crafted in Northern Europe',
      care: 'Wipe daily with a slightly damp microfiber cloth; nourish annually with Auren Natural Wood Balm.',
      assembly: 'Legs attach smoothly via precision steel-threaded brass inserts; hardware and tool included.',
    },
    faqs: [
      {
        question: 'Is the tabletop solid wood or veneer?',
        answer:
          'Every Oakwood Dining Table is crafted from full-length 1.5-inch solid white oak staves with zero particleboard or veneer.',
      },
      {
        question: 'Does the matte oil finish resist coffee and wine?',
        answer:
          'Yes. Our VOC-free hardwax oil seals the timber pores against everyday moisture when wiped within a reasonable time.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 5–7 business days',
    popularityScore: 96,
  },
  {
    id: 'milo-accent-chair',
    slug: 'the-milo-accent-chair',
    name: 'The Milo Accent Chair',
    price: 699,
    category: 'Accent Furniture',
    collectionSlug: 'living-room',
    badge: 'Bestseller',
    isBestseller: true,
    rating: 4.8,
    reviewCount: 116,
    shortDescription:
      'Sculptural solid American walnut frame paired with generous oatmeal wool bouclé cushions.',
    fullDescription:
      'Defined by its continuous hand-shaped walnut armrests and gently raked silhouette, The Milo Accent Chair invites hours of relaxed reading. The deep oatmeal bouclé cushions offer supportive bounce wrapped in tactile natural wool.',
    images: [
      {
        src: IMAGES.productMiloChair,
        alt: 'The Milo Accent Chair in solid American walnut and oatmeal bouclé',
        caption: 'Three-Quarter Studio Profile',
      },
      {
        src: IMAGES.craftTimelessForm,
        alt: 'Sculpted timber backrest and rounded leg curvature detail',
        caption: 'Sculpted Frame Geometry',
      },
      {
        src: IMAGES.categoryLivingRoom,
        alt: 'Accent chair in modern neutral living room setting',
        caption: 'Interior Pairing',
      },
    ],
    colors: [
      { name: 'Walnut & Oatmeal Bouclé', hex: '#D8CFC2' },
      { name: 'Walnut & Cream Linen', hex: '#ECE7DF' },
      { name: 'Oak & Dark Olive Wool', hex: '#59604D' },
    ],
    material: 'Oiled American Walnut & Wool Bouclé',
    materialGroup: 'Upholstery',
    sizes: [{ label: 'Standard Lounge', dimensions: '29.5" W × 32" D × 30.5" H', priceDelta: 0 }],
    specifications: {
      dimensions: '29.5" W × 32" D × 30.5" H · Seat Height: 16.5"',
      weight: '38 lbs',
      materials: 'Solid American Walnut Frame, 70% Virgin Wool / 30% Linen Bouclé',
      origin: 'Designed in Stockholm · Crafted in Europe',
      care: 'Brush bouclé lightly with a garment brush; dust walnut frame with dry soft cloth.',
      assembly: 'Arrives fully assembled.',
    },
    faqs: [
      {
        question: 'Is the frame solid walnut throughout?',
        answer:
          'Yes, every structural rail, leg, and sculpted armrest is milled from sustainably sourced solid American walnut.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 3–5 business days',
    popularityScore: 95,
  },
  {
    id: 'rowan-wooden-sideboard',
    slug: 'the-rowan-wooden-sideboard',
    name: 'The Rowan Wooden Sideboard',
    price: 1099,
    category: 'Storage',
    collectionSlug: 'dining-room',
    badge: 'Bestseller',
    isBestseller: true,
    rating: 4.9,
    reviewCount: 84,
    shortDescription:
      'Minimalist fluted solid white oak credenza featuring smooth sliding tambour-inspired doors and tapered legs.',
    fullDescription:
      'The Rowan Wooden Sideboard brings rhythm and calm to dining rooms, entryways, and living spaces. Vertical fluted white oak doors glide smoothly across precision tracks to reveal adjustable interior shelves and discreet cord pass-throughs.',
    images: [
      {
        src: IMAGES.productRowanSideboard,
        alt: 'The Rowan Wooden Sideboard in fluted solid white oak',
        caption: 'Front Studio View',
      },
      {
        src: IMAGES.categoryDiningRoom,
        alt: 'Rowan sideboard paired with dining room setting',
        caption: 'In Residence — Dining Room',
      },
      {
        src: IMAGES.craftJoineryDetail,
        alt: 'Close-up of solid oak craftsmanship',
        caption: 'Timber & Joinery Craft',
      },
    ],
    colors: [
      { name: 'Natural White Oak', hex: '#C7A680' },
      { name: 'Warm Walnut', hex: '#75563E' },
    ],
    material: 'Fluted Solid White Oak & Brushed Brass',
    materialGroup: 'Wood',
    sizes: [
      { label: '64" Credenza', dimensions: '64" W × 18" D × 30" H', priceDelta: 0 },
      { label: '76" Media Sideboard', dimensions: '76" W × 18" D × 30" H', priceDelta: 220 },
    ],
    specifications: {
      dimensions: '64" W × 18" D × 30" H · Interior Shelf Depth: 15"',
      weight: '124 lbs',
      materials: 'Solid White Oak Fluted Doors & Frame, Solid Brass Leg Ferrules, Soft-Close Hardware',
      origin: 'Crafted in Portugal',
      care: 'Dust with a dry lint-free cloth; avoid placing hot ceramic vessels directly on surface without felt pads.',
      assembly: 'Legs screw securely into pre-installed brass plates (10 minutes).',
    },
    faqs: [
      {
        question: 'Does the sideboard include cable management cutouts?',
        answer:
          'Yes, two discreet ventilated rear cutouts allow effortless media or turntable cable routing.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 5–7 business days',
    popularityScore: 93,
  },
  {
    id: 'soren-linen-platform-bed',
    slug: 'the-soren-linen-platform-bed',
    name: 'The Soren Linen Platform Bed',
    price: 1649,
    category: 'Bedroom',
    collectionSlug: 'bedroom',
    badge: 'New Arrival',
    isNewArrival: true,
    rating: 4.9,
    reviewCount: 61,
    shortDescription:
      'Low-slung architectural bed upholstered in warm sand Belgian linen with solid white oak tapered feet.',
    fullDescription:
      'Designed as the calm centerpiece of the modern bedroom, The Soren Linen Platform Bed features softly padded headboard proportions and breathable woven Belgian flax linen upholstery resting atop solid oak feet.',
    images: [
      {
        src: IMAGES.productSorenBed,
        alt: 'The Soren Linen Platform Bed in warm sand Belgian linen',
        caption: 'Queen Platform Bed — Studio View',
      },
      {
        src: IMAGES.categoryBedroom,
        alt: 'Bedroom sanctuary featuring upholstered linen platform bed',
        caption: 'In Residence — Morning Light',
      },
    ],
    colors: [
      { name: 'Warm Sand Linen', hex: '#D2C5B3' },
      { name: 'Ivory Oat', hex: '#ECE6DC' },
      { name: 'Charcoal Weave', hex: '#4B4B47' },
    ],
    material: 'Belgian Linen & Solid Oak Slats',
    materialGroup: 'Upholstery',
    sizes: [
      { label: 'Queen', dimensions: '66" W × 86" L × 40" H', priceDelta: 0 },
      { label: 'King', dimensions: '82" W × 86" L × 40" H', priceDelta: 280 },
    ],
    specifications: {
      dimensions: '66" W × 86" L × 40" H · Headboard Height: 40"',
      weight: '148 lbs',
      materials: 'Belgian Flax Linen, Kiln-Dried Hardwood Frame, Solid Beech & Oak Slats',
      origin: 'Crafted in Northern Europe',
      care: 'Vacuum gently with soft upholstery brush; spot clean linen with damp cloth.',
      assembly: 'Tool-free interlocking corner brackets; two-person assembly takes 25 minutes.',
    },
    faqs: [
      {
        question: 'Does The Soren Bed require a box spring?',
        answer:
          'No. It includes a solid timber slatted support system engineered for all foam, hybrid, and spring mattresses.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 5–7 business days',
    popularityScore: 91,
  },
  {
    id: 'klara-writing-desk',
    slug: 'the-klara-writing-desk',
    name: 'The Klara Writing Desk',
    price: 899,
    category: 'Home Office',
    collectionSlug: 'home-office',
    badge: 'New Arrival',
    isNewArrival: true,
    rating: 4.8,
    reviewCount: 54,
    shortDescription:
      'Minimalist solid oiled oak writing desk featuring two seamless flush-cut drawers and sculpted legs.',
    fullDescription:
      'Crafted to bring clarity to daily work, The Klara Writing Desk pairs generous workspace dimensions with softly radiused solid white oak legs and dual finger-pull drawers lined in natural wool felt.',
    images: [
      {
        src: IMAGES.productKlaraDesk,
        alt: 'The Klara Writing Desk in solid oiled white oak',
        caption: 'Front Studio Elevation',
      },
      {
        src: IMAGES.categoryHomeOffice,
        alt: 'Klara desk in serene sunlit home office',
        caption: 'Studio Workspace Setting',
      },
    ],
    colors: [
      { name: 'Natural Oiled Oak', hex: '#C7A680' },
      { name: 'Smoked Oak', hex: '#7A634C' },
    ],
    material: 'Solid White Oak & Wool Felt Lining',
    materialGroup: 'Wood',
    sizes: [
      { label: '55" Studio Desk', dimensions: '55" W × 26" D × 29.5" H', priceDelta: 0 },
      { label: '63" Executive Desk', dimensions: '63" W × 28" D × 29.5" H', priceDelta: 180 },
    ],
    specifications: {
      dimensions: '55" W × 26" D × 29.5" H · Knee Clearance: 25"',
      weight: '78 lbs',
      materials: 'Solid European White Oak, Soft-Close Concealed Runners, Wool Felt Drawer Base',
      origin: 'Crafted in Latvia',
      care: 'Wipe with dry or slightly damp cloth; avoid harsh ammonia cleaners.',
      assembly: 'Simple leg attachment (10 minutes); hardware included.',
    },
    faqs: [
      {
        question: 'Can the drawers hold a 16-inch laptop?',
        answer:
          'Yes, each wide flush drawer easily accommodates a 16-inch laptop, notebooks, and studio accessories.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 4–6 business days',
    popularityScore: 89,
  },
  {
    id: 'vela-travertine-coffee-table',
    slug: 'the-vela-travertine-coffee-table',
    name: 'The Vela Travertine Coffee Table',
    price: 799,
    category: 'Living Room',
    collectionSlug: 'living-room',
    badge: 'New Arrival',
    isNewArrival: true,
    rating: 4.9,
    reviewCount: 47,
    shortDescription:
      'Sculptural oval coffee table carved from honed beige Roman travertine stone on twin cylindrical plinths.',
    fullDescription:
      'Every Vela Coffee Table reveals one-of-a-kind natural mineral veining across an organically rounded bullnose travertine top. Honed to a soft matte touch and sealed against light everyday moisture.',
    images: [
      {
        src: IMAGES.productVelaTable,
        alt: 'The Vela Travertine Coffee Table in honed Roman travertine',
        caption: 'Honed Roman Travertine View',
      },
      {
        src: IMAGES.craftMaterialsWood,
        alt: 'Natural porous travertine stone surface detail',
        caption: 'Honed Stone Texture',
      },
    ],
    colors: [
      { name: 'Honed Warm Travertine', hex: '#D8CCBA' },
      { name: 'Ivory Limestone', hex: '#EAE3D6' },
    ],
    material: 'Honed Roman Travertine Stone',
    materialGroup: 'Stone',
    sizes: [
      { label: '52" Oval', dimensions: '52" L × 28" W × 14" H', priceDelta: 0 },
      { label: '60" Grand Oval', dimensions: '60" L × 32" W × 14" H', priceDelta: 200 },
    ],
    specifications: {
      dimensions: '52" L × 28" W × 14" H',
      weight: '136 lbs',
      materials: '100% Natural Honed Italian Travertine, Matte Penetrating Stone Sealer',
      origin: 'Quarried & finished in Tivoli, Italy',
      care: 'Wipe spills promptly; use pH-neutral stone cleaner only. Avoid acidic citrus cleaners.',
      assembly: 'Two-piece pedestal locking placement; white-glove delivery included.',
    },
    faqs: [
      {
        question: 'Is the travertine sealed before shipping?',
        answer:
          'Yes, we apply two coats of breathable matte penetrating sealer in our workshop prior to crating.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 5–7 business days',
    popularityScore: 90,
  },
  {
    id: 'alder-teak-outdoor-lounge',
    slug: 'the-alder-teak-lounge-chair',
    name: 'The Alder Teak Lounge Chair',
    price: 849,
    category: 'Outdoor Living',
    collectionSlug: 'outdoor-living',
    badge: 'New Arrival',
    isNewArrival: true,
    rating: 4.8,
    reviewCount: 39,
    shortDescription:
      'Grade-A golden teak outdoor armchair paired with quick-dry sand performance linen cushions.',
    fullDescription:
      'Built to weather gracefully across every season, The Alder Teak Lounge Chair unites slatted architectural teak joinery with deep, UV-resistant sand cushions engineered to shed rain and dry rapidly.',
    images: [
      {
        src: IMAGES.productAlderLounge,
        alt: 'The Alder Teak Lounge Chair on limestone terrace',
        caption: 'Outdoor Terrace View',
      },
      {
        src: IMAGES.categoryOutdoorLiving,
        alt: 'Alder outdoor teak collection on sunlit patio',
        caption: 'Terrace Collection Pairing',
      },
    ],
    colors: [
      { name: 'Golden Teak & Sand', hex: '#C6AC8F' },
      { name: 'Golden Teak & Olive', hex: '#59604D' },
    ],
    material: 'FSC Grade-A Teak & Performance Linen',
    materialGroup: 'Teak',
    sizes: [{ label: 'Deep Lounge', dimensions: '31" W × 33" D × 29" H', priceDelta: 0 }],
    specifications: {
      dimensions: '31" W × 33" D × 29" H · Seat Height: 16.5"',
      weight: '44 lbs',
      materials: 'FSC-Certified Solid Grade-A Teak, Solution-Dyed Acrylic Linen, Reticulated Quick-Dry Foam',
      origin: 'Sustainably harvested & crafted in Indonesia',
      care: 'Leave untreated to patina into a silvery gray, or oil seasonally to preserve golden honey tone.',
      assembly: 'Arrives fully assembled.',
    },
    faqs: [
      {
        question: 'Can the cushions remain outdoors all season?',
        answer:
          'Yes. Our solution-dyed fabrics resist UV fading and mildew, and reticulated foam cores drain water quickly.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 5–7 business days',
    popularityScore: 87,
  },
  {
    id: 'linnea-dining-chair',
    slug: 'the-linnea-dining-chair',
    name: 'The Linnea Dining Chair',
    price: 389,
    category: 'Dining Room',
    collectionSlug: 'dining-room',
    rating: 4.9,
    reviewCount: 73,
    shortDescription:
      'Curved steam-bent solid white oak backrest paired with an ergonomically tailored oat linen seat.',
    fullDescription:
      'Designed as the natural companion to The Oakwood Dining Table, The Linnea Dining Chair wraps the lower back in a single steam-bent oak crescent while offering lasting comfort across long dinners.',
    images: [
      {
        src: IMAGES.productLinneaChair,
        alt: 'The Linnea Dining Chair with steam-bent oak backrest',
        caption: 'Three-Quarter Studio View',
      },
      {
        src: IMAGES.categoryDiningRoom,
        alt: 'Linnea dining chairs around solid oak dining table',
        caption: 'Set of Six in Dining Room',
      },
    ],
    colors: [
      { name: 'White Oak & Oat Linen', hex: '#DFD7C8' },
      { name: 'Smoked Oak & Charcoal', hex: '#4B4B47' },
    ],
    material: 'Steam-Bent White Oak & Belgian Linen',
    materialGroup: 'Wood',
    sizes: [{ label: 'Single Chair', dimensions: '20.5" W × 21" D × 30.5" H', priceDelta: 0 }],
    specifications: {
      dimensions: '20.5" W × 21" D × 30.5" H · Seat Height: 18"',
      weight: '14 lbs',
      materials: 'Solid White Oak Frame, Belgian Linen Seat Pad',
      origin: 'Crafted in Denmark',
      care: 'Wipe wood frame with dry cloth; blot spills on seat cushion gently.',
      assembly: 'Arrives fully assembled.',
    },
    faqs: [
      {
        question: 'Do these chairs tuck beneath The Oakwood Dining Table?',
        answer:
          'Yes, at 18" seat height and no obstructive front arms, Linnea slides cleanly under standard 30" dining tables.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 3–5 business days',
    popularityScore: 88,
  },
  {
    id: 'nord-olive-armchair',
    slug: 'the-nord-olive-lounge-chair',
    name: 'The Nord Olive Lounge Chair',
    price: 789,
    category: 'Living Room',
    collectionSlug: 'living-room',
    rating: 4.9,
    reviewCount: 64,
    shortDescription:
      'Low-slung architectural lounge chair in dark olive wool bouclé with sculpted solid walnut arms.',
    fullDescription:
      'Inspired by mid-century Nordic studio seating, The Nord Olive Lounge Chair pairs rich dark olive wool bouclé with a hand-oiled walnut timber cradle for an effortless focal point in living rooms or quiet reading corners.',
    images: [
      {
        src: IMAGES.productNordArmchair,
        alt: 'The Nord Olive Lounge Chair in dark olive wool bouclé and walnut',
        caption: 'Studio Three-Quarter Angle',
      },
      {
        src: IMAGES.editorialOliveBanner,
        alt: 'Olive lounge chair styled beside oak console table',
        caption: 'Editorial Living Corner',
      },
    ],
    colors: [
      { name: 'Dark Olive Bouclé', hex: '#59604D' },
      { name: 'Warm Sand Bouclé', hex: '#CFC5B7' },
    ],
    material: 'Dark Olive Wool Bouclé & Solid Walnut',
    materialGroup: 'Upholstery',
    sizes: [{ label: 'Lounge Chair', dimensions: '30" W × 33" D × 29.5" H', priceDelta: 0 }],
    specifications: {
      dimensions: '30" W × 33" D × 29.5" H · Seat Height: 16"',
      weight: '41 lbs',
      materials: '100% New Zealand Wool Bouclé, Solid American Walnut Frame',
      origin: 'Crafted in Europe',
      care: 'Vacuum gently with soft brush attachment; avoid direct prolonged harsh sunlight.',
      assembly: 'Arrives fully assembled.',
    },
    faqs: [
      {
        question: 'Is the olive wool bouclé textured or smooth?',
        answer:
          'It features a fine, tactile looped wool texture that feels soft against the skin while resisting pilling.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 4–6 business days',
    popularityScore: 92,
  },
  {
    id: 'tove-console-table',
    slug: 'the-tove-arched-console-table',
    name: 'The Tove Arched Console Table',
    price: 749,
    category: 'Home Office',
    collectionSlug: 'home-office',
    rating: 4.8,
    reviewCount: 41,
    shortDescription:
      'Slim architectural entryway and studio console sculpted from smoked oak with graceful arched legs.',
    fullDescription:
      'With a slender 14-inch profile and steam-bent arched legs, The Tove Console Table brings sculptural poise to hallways, behind-sofa vignettes, and serene home offices without crowding floor space.',
    images: [
      {
        src: IMAGES.productToveConsole,
        alt: 'The Tove Arched Console Table in solid smoked oak',
        caption: 'Studio Profile — Smoked Oak',
      },
      {
        src: IMAGES.editorialOliveBanner,
        alt: 'Minimalist wooden console styled with ceramics and art',
        caption: 'Styled Wall Vignette',
      },
    ],
    colors: [
      { name: 'Smoked Oak', hex: '#7A634C' },
      { name: 'Natural White Oak', hex: '#C7A680' },
    ],
    material: 'Solid Smoked Oak',
    materialGroup: 'Wood',
    sizes: [
      { label: '54" Console', dimensions: '54" W × 14" D × 30" H', priceDelta: 0 },
      { label: '66" Gallery Console', dimensions: '66" W × 14" D × 30" H', priceDelta: 150 },
    ],
    specifications: {
      dimensions: '54" W × 14" D × 30" H',
      weight: '52 lbs',
      materials: '100% Solid Smoked European Oak, Matte Oil Finish',
      origin: 'Crafted in Denmark',
      care: 'Wipe with dry cloth; felt glides included on legs.',
      assembly: 'Simple 10-minute leg assembly.',
    },
    faqs: [
      {
        question: 'Does the console require wall anchoring?',
        answer:
          'Its arched base is freestanding and stable; an optional discreet anti-tip brass strap is included for households with small children.',
      },
    ],
    inStock: true,
    leadTime: 'In stock — ships within 4–6 business days',
    popularityScore: 85,
  },
];
