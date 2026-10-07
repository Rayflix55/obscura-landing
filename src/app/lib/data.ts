// src/app/lib/data.ts

/* ────────────────────────────  TYPES  ──────────────────────────── */

export type ProductBadge = "NEW" | "REFURBISHED" | "LIMITED" | "BESTSELLER";

export interface Product {
  id: string;
  name: string;
  specs: string;      // "45MP · f/1.4 · Full frame"
  price: number;
  image: string;
  badge?: ProductBadge;
}

export interface Category {
  id: string;
  index: string;      // "01", "02", "03"
  label: string;      // "Bodies"
  title: string;      // "Mirrorless Cameras"
  ctaLabel: string;   // "Browse bodies"
  href: string;
  image: string;
}

/* ───────────────────────────  CATEGORIES  ──────────────────────── */

export const categories: Category[] = [
  {
    id: "bodies",
    index: "01",
    label: "Bodies",
    title: "Mirrorless Cameras",
    ctaLabel: "Browse bodies",
    href: "/cameras",
    image: "/category-bodies.jpeg",
  },
  {
    id: "optics",
    index: "02",
    label: "Optics",
    title: "Prime & Zoom Lenses",
    ctaLabel: "Browse lenses",
    href: "/lenses",
    image: "/category-optics.jpeg",
  },
  {
    id: "field-kit",
    index: "03",
    label: "Field kit",
    title: "Bags, Light & Tripods",
    ctaLabel: "Browse accessories",
    href: "/accessories",
    image: "/category-field-kit.jpeg",
  },
];

/* ─────────────────────────  FEATURED GEAR  ─────────────────────── */

export const featuredProducts: Product[] = [
  {
    id: "nova-x1",
    name: "Nova X1 Mirrorless",
    specs: "45MP · f/1.4 · Full frame",
    price: 2349,
    image: "/products/nova-x1.jpeg",
    badge: "NEW",
  },
  {
    id: "meridian-50",
    name: "Meridian 50mm Prime",
    specs: "f/1.8 · Manual focus",
    price: 649,
    image: "/products/meridian-50.jpeg",
    badge: "BESTSELLER",
  },
  {
    id: "halycon-tripod",
    name: "Halycon Carbon Tripod",
    specs: "1.2kg · 165cm max height",
    price: 258,
    image: "/products/halycon-tripod.jpeg",
  },
  {
    id: "everline-bag",
    name: "Everline Field Bag",
    specs: "Canvas & full-grain leather",
    price: 169,
    image: "/products/everline-bag.jpeg",
    badge: "LIMITED",
  },
];

/* ─────────────────────────  ABOUT / SEO  ───────────────────────── */

export const aboutImage = "/about-workshop.jpeg";

/* ────────────────────────────  UTILS  ──────────────────────────── */

export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);