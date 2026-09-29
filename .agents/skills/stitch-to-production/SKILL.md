---
name: stitch-to-production
description: Converting approved Google Stitch UI designs into production-ready React + TypeScript + Vite + Tailwind websites following strict visual fidelity, data-driven configuration, mobile-first design, and structured phase-based implementation.
---

# Stitch to Production Skill

This skill provides a systematic process and strict architectural guidelines for converting approved **Google Stitch UI designs** into high-quality, production-ready websites using **React**, **TypeScript**, **Vite**, and **Tailwind CSS**.

It is designed to be reusable across any local business, client website, or e-commerce storefront.

---

## Core Guidelines & Principles

1. **Stitch is the Visual Source of Truth**: Treat approved Stitch designs and reference screenshots as exact design standards.
2. **Do Not Redesign**: Do not redesign or alter the approved Stitch UI unless explicitly requested by the user.
3. **Preserve Visual Fidelity**: Faithfully preserve visual hierarchy, layout spacing, typography, colors, shadow effects, cards, buttons, navigation bars, imagery framing, and responsive patterns.
4. **Reusable Component Architecture**: Implement all UI elements as modular, reusable production components rather than inline or one-off page markup.
5. **Data-Driven Configuration**: Decouple layout and presentation from client content. Centralize branding, product catalogs, categories, contact details, shipping info, social links, content, and visual themes into data models.
6. **Zero Hard-Coded Brand Details**: Never hard-code client brand names, logos, contact info, or copy throughout UI components.
7. **Strict Grounding (No Factual Hallucinations)**: Never invent product prices, health claims, certifications, customer reviews/testimonials, physical addresses, delivery guarantees, or business claims. Use only facts provided by the user or present in verified reference files.
8. **Information Gaps**: If required facts or assets are missing, use clear structural placeholders or prompt the user for real data—do not invent specs.
9. **Mobile-First Standard**: Write CSS/Tailwind mobile-first (`base` -> `sm:` -> `md:` -> `lg:` -> `xl:`).
10. **Target Mobile Viewports**: Explicitly support and test for 375px, 390px, 412px, and 430px mobile screen widths.
11. **Prevent Layout Defects**: Guarantee zero horizontal overflow (no horizontal scrollbars on mobile), clipping, overlapping elements, broken grids, or unsafe notch/touch area overlaps.
12. **Unified Core System**: Desktop and mobile layouts must consume the exact same underlying component logic and central configuration.
13. **Clean Separation of Concerns**: Maintain clear directory separation:
    - `src/config/`
    - `src/data/`
    - `src/components/`
    - `src/pages/`
    - `src/layouts/`
    - `src/hooks/`
    - `src/lib/`
    - `src/styles/`
14. **WhatsApp Direct Commerce**: When applicable, treat WhatsApp ordering (cart formatting, direct chat pre-filled messaging, and quick purchase flows) as a primary commerce funnel.
15. **Clean Public Interfaces**: Do not expose developer setup controls, debug toggles, or rebranding panels to end-users on production builds.
16. **Iterative Visual QA**: Run visual QA reviews after completing each major feature or phase.
17. **Screenshot Comparison**: Compare rendered code directly against reference Stitch screenshots.
18. **Fix Discrepancies at Source**: Fix styling or layout bugs directly to match Stitch specs rather than altering or redesigning around the code.
19. **Production Quality Standards**: Maintain web accessibility (WCAG compliance, aria attributes), semantic HTML5 elements, full keyboard navigation, responsive breakpoints, and fast rendering performance.
20. **Inspect Before Re-inventing**: Check existing project files first to reuse pre-built components and utilities before creating new ones.

---

## 6-Phase Implementation Workflow

### PHASE 1 — Inspect
Before writing or modifying code:
- **Repository Audit**: Thoroughly inspect the existing repository structure, dependencies, configuration files, and components.
- **Visual Design Audit**: Review all Stitch design screenshots, mocks, exported assets, design tokens, and style specifications.
- **Pattern Identification**: Document all key pages, sections, reusable UI components (buttons, headers, footers, cards, modals), color palettes, font families, custom spacing, and responsive behaviors across desktop and mobile.

### PHASE 2 — Plan
- **Implementation Strategy**: Draft a structured plan identifying target files, new components, and state management needs.
- **Component Breakdown**: Define atomic components (e.g., `Button`, `Badge`, `Header`), composite components (`ProductCard`, `CartDrawer`), and page templates.
- **Data & Config Schema**: Define TypeScript interfaces for configuration (`siteConfig`) and dataset models (`products`, `categories`).
- **Asset Verification**: Identify available image/icon assets. Highlight missing required assets or missing text copy without making up unverified facts.

### PHASE 3 — Architecture & Directory Layout
Structure the project cleanly within `src/`:

```
src/
├── components/     # Reusable UI components (ui/, common/, product/, layout/)
├── config/         # Site config, brand metadata, navigation links, theme options
├── data/           # Data-driven catalogs (products, categories, FAQs, reviews)
├── hooks/          # Custom React hooks (useCart, useMediaQuery, useWhatsApp)
├── layouts/        # Root and page layout wrappers (MainLayout, StorefrontLayout)
├── lib/            # Utilities, formatters, analytics helpers, WhatsApp builders
├── pages/          # Top-level page views (Home, Category, ProductDetail, Checkout)
├── styles/         # Global styles, Tailwind directives, font imports
└── types/          # TypeScript interface definitions
```

#### Centralized Brand Configuration Example (`src/config/siteConfig.ts`):
```typescript
export interface SiteConfig {
  brand: {
    name: string;
    tagline: string;
    logoUrl: string;
    faviconUrl: string;
  };
  contact: {
    phone: string;
    whatsappNumber: string;
    email: string;
    address: string;
  };
  social: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
  theme: {
    primaryColor: string;
    accentColor: string;
    borderRadius: string;
  };
  shipping: {
    deliveryRadius: string;
    estimatedTime: string;
    freeShippingThreshold?: number;
  };
}

export const siteConfig: SiteConfig = {
  brand: {
    name: "Client Business Name",
    tagline: "Quality Products Delivered Fresh",
    logoUrl: "/assets/logo.svg",
    faviconUrl: "/favicon.ico",
  },
  contact: {
    phone: "+1234567890",
    whatsappNumber: "1234567890",
    email: "contact@example.com",
    address: "123 Main Street, City, Country",
  },
  social: {
    instagram: "https://instagram.com/example",
    facebook: "https://facebook.com/example",
  },
  theme: {
    primaryColor: "#16a34a",
    accentColor: "#f59e0b",
    borderRadius: "0.5rem",
  },
  shipping: {
    deliveryRadius: "Local Area",
    estimatedTime: "24-48 Hours",
  },
};
```

### PHASE 4 — Implement
- **Design System First**: Set up Tailwind configuration, CSS custom properties, and base UI primitives (`Button`, `Card`, `Container`, `Input`, `Dialog`).
- **Data & Props Integration**: Pass `siteConfig` and data array models to components via props or hooks. Avoid hard-coding string literals in templates.
- **Mobile-First Layouts**: Build responsive page sections starting with mobile widths (375px+), scaling gracefully to desktop (`md:`, `lg:` breakpoints).
- **Faithful Styling**: Match Stitch margins, padding, typography weights, line heights, border radii, shadows, and hover transitions.
- **WhatsApp Integration**: Construct dynamic WhatsApp ordering links using formatted messages containing selected items, quantities, totals, and delivery addresses.

### PHASE 5 — Validate & Visual QA Checklist
Before completing a task, perform systematic validation across these checks:
- [ ] **Visual Fidelity**: Does the rendered page visually match Stitch reference screenshots?
- [ ] **Mobile Layout**: Verified clean display at 375px, 390px, 412px, and 430px viewport widths?
- [ ] **Desktop Layout**: Verified smooth expansion and grid adjustments on large displays (1280px+)?
- [ ] **Typography & Spacing**: Correct font weights, sizes, line heights, and element padding/margins?
- [ ] **Navigation & Links**: Are header/footer nav links, drawers, and mobile menus working?
- [ ] **Product Cards & Lists**: Do cards render accurately with proper prices, images, and add-to-cart actions?
- [ ] **Buttons & Interactive Elements**: Proper hover, focus, active, and disabled visual states?
- [ ] **Form Handling**: Are input fields readable, keyboard accessible, and validating inputs properly?
- [ ] **WhatsApp Ordering Flow**: Do WhatsApp order buttons construct accurate pre-filled message URIs?
- [ ] **Horizontal Overflow**: Is `overflow-x: hidden` enforced at body/root with zero unwanted horizontal scrolling?
- [ ] **Console & Build**: Clean build with zero TypeScript compiler errors or runtime browser console warnings?
- [ ] **Accessibility**: Proper ARIA roles, semantic HTML tags (`<header>`, `<main>`, `<nav>`, `<footer>`), and contrast ratios?

### PHASE 6 — Rebrand Test
Verify total decoupling of UI components from client data:
1. Temporarily edit `src/config/siteConfig.ts` and `src/data/` with fictional test metadata (e.g., changing brand name, colors, products, contact info).
2. Confirm that the entire application rebrands seamlessly without requiring modifications to any core UI component file (`src/components/*`).
3. Restore original configuration once verified.

---
