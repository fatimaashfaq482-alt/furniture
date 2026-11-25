export type CollectionSlug =
  | 'living-room'
  | 'dining-room'
  | 'bedroom'
  | 'home-office'
  | 'outdoor-living';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface ProductSize {
  label: string;
  dimensions: string;
  priceDelta?: number;
}

export interface ProductSpecification {
  dimensions: string;
  weight: string;
  materials: string;
  origin: string;
  care: string;
  assembly: string;
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: string;
  collectionSlug: CollectionSlug;
  badge?: 'Bestseller' | 'New Arrival';
  isBestseller?: boolean;
  isNewArrival?: boolean;
  rating: number;
  reviewCount: number;
  shortDescription: string;
  fullDescription: string;
  images: {
    src: string;
    alt: string;
    caption: string;
  }[];
  colors: ProductColor[];
  material: string;
  materialGroup: 'Wood' | 'Upholstery' | 'Stone' | 'Teak';
  sizes: ProductSize[];
  specifications: ProductSpecification;
  faqs: ProductFaq[];
  inStock: boolean;
  leadTime: string;
  popularityScore: number;
}

export interface CategoryInfo {
  slug: CollectionSlug;
  name: string;
  eyebrow: string;
  description: string;
  editorialNote: string;
  itemCount: number;
  image: string;
  imageAlt: string;
}

export interface JournalArticle {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  paragraphs: string[];
  featuredProductIds: string[];
}

export interface CartItem {
  key: string;
  productId: string;
  name: string;
  slug: string;
  image: string;
  price: number;
  color: string;
  size: string;
  quantity: number;
}

export interface DemoOrder {
  orderNumber: string;
  date: string;
  email: string;
  customerName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  shippingMethod: string;
  shippingCost: number;
  subtotal: number;
  total: number;
  items: CartItem[];
  status: string;
}
