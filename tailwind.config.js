/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#173F2A',        // Deep Forest Green
          secondary: '#3F6B3F',      // Botanical Green
          accent: '#C8A45D',         // Muted Natural Gold
          bg: '#FAF7EF',             // Warm Ivory Canvas
          surface: '#EEF3E8',        // Soft Sage Container
          white: '#FFFFFF',          // Pure White Resting Card Surface
          text: '#242824',           // Deep Charcoal
          muted: '#6F756D',          // Muted Body Text
          border: '#E3E8DC',         // Hairline Sage Border
          earth: '#76543A',          // Earth Brown Accent
          whatsapp: '#25D366',       // WhatsApp Green CTA
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['Manrope', 'sans-serif'],
      },
      borderRadius: {
        'lg': '16px',
        'md': '12px',
        'sm': '8px',
      },
      boxShadow: {
        'resting': '0px 2px 8px -2px rgba(23, 63, 42, 0.04)',
        'hover': '0px 12px 24px -6px rgba(23, 63, 42, 0.08)',
        'drawer': '0px 24px 48px -12px rgba(23, 63, 42, 0.16)',
      },
      maxWidth: {
        'storefront': '1320px',
      }
    },
  },
  plugins: [],
}
