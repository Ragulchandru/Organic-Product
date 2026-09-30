import { SiteConfig } from '../types';

export const siteConfig: SiteConfig = {
  brand: {
    name: "Vaishu Organics",
    tagline: "Traditional Rice & Millets",
    logoSvg: "/assets/logo.svg",
    faviconUrl: "/favicon.ico",
  },
  contact: {
    phone: "9876543210",
    whatsappNumber: "9876543210",
    whatsappDisplay: "9876543210",
    email: "",
    address: "",
    city: "",
    state: "Tamil Nadu",
    pincode: "",
  },
  social: {
    instagram: "https://instagram.com/vaishu__organics",
    facebook: "",
  },
  theme: {
    primary: '#173F2A',        // Deep Forest Green
    secondary: '#3F6B3F',      // Botanical Green
    accent: '#C8A45D',         // Muted Natural Gold
    background: '#FAF7EF',     // Warm Ivory Canvas
    surface: '#EEF3E8',        // Soft Sage Container
    white: '#FFFFFF',          // Pure White Resting Surface
    text: '#242824',           // Deep Charcoal
    mutedText: '#6F756D',      // Muted Body Text
    border: '#E3E8DC',         // Hairline Sage Border
    whatsapp: '#25D366',       // WhatsApp Green
  },
  shipping: {
    announcementText: "🌱 FARM-FRESH HARVEST 2026 • DIRECT FARM DISPATCH ACROSS TAMIL NADU, BENGALURU & ALL INDIA",
    deliveryRadiusNote: "Direct parcel delivery available across Tamil Nadu, Bengaluru & All-India Hubs.",
    estimatedDeliveryTime: "2–5 Days",
    freeDeliveryThreshold: 0,
    standardDeliveryFee: 75,
    deliveryRates: [
      { weight: "5 kg", charge: 75 },
      { weight: "10 kg", charge: 100 },
      { weight: "26 kg", charge: 170 },
    ],
    deliveryNotes: [
      "Parcel / courier charges apply.",
      "Rural locations may require pickup from the nearest courier office.",
    ],
  },
};
