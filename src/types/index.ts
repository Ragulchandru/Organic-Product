export interface BrandConfig {
  name: string;
  tagline: string;
  logoSvg?: string;
  faviconUrl?: string;
}

export interface ContactConfig {
  phone: string;
  whatsappNumber: string;
  whatsappDisplay: string;
  email: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
}

export interface SocialConfig {
  instagram: string;
  facebook?: string;
  twitter?: string;
}

export interface ThemeConfig {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  surface: string;
  white: string;
  text: string;
  mutedText: string;
  border: string;
  whatsapp: string;
}

export interface DeliveryRateItem {
  weight: string;
  charge: number;
}

export interface ShippingConfig {
  announcementText: string;
  deliveryRadiusNote: string;
  estimatedDeliveryTime: string;
  freeDeliveryThreshold?: number;
  standardDeliveryFee: number;
  deliveryRates?: DeliveryRateItem[];
  deliveryNotes?: string[];
}

export interface SiteConfig {
  brand: BrandConfig;
  contact: ContactConfig;
  social: SocialConfig;
  theme: ThemeConfig;
  shipping: ShippingConfig;
}

export interface ProductVariant {
  id: string;
  weight: string;          // e.g., "1 kg", "5 kg", "10 kg", "26 kg Gunny Bag"
  packaging: string;       // e.g., "Standard Pouch", "Traditional Gunny Bag", "Glass Bottle"
  price: number;           // Selling Price in INR
  mrp?: number;            // Strikethrough MRP (optional)
  inStock: boolean;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tamilName?: string;
  category: 'rice' | 'millets' | 'oils';
  badge?: string;          // Neutral processing tag e.g., "Wood-Pressed", "Traditional Strain"
  shortDescription: string;
  description: string;
  imageUrl: string;
  secondaryImageUrl?: string;
  variants: ProductVariant[];
  details?: {
    originRegion?: string;
    culinaryUses?: string[];
    cookingMethod?: string;
    storageInfo?: string;
  };
}

export interface Category {
  id: 'all' | 'rice' | 'millets' | 'oils';
  name: string;
  description: string;
}

export interface CartItem {
  product: Product;
  selectedVariant: ProductVariant;
  quantity: number;
}

export interface CustomerDetails {
  name: string;
  address: string;
  city: string;
  pincode: string;
  phone: string;
  notes?: string;
}
