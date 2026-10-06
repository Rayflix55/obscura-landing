// src/lib/data.ts
export interface Category {
  id: string;
  index: string;   // "01", "02", "03"
  label: string;   // "Bodies"
  title: string;   // "Mirrorless Cameras"
  ctaLabel: string;// "Browse bodies"
  href: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: "bodies",
    index: "01",
    label: "Bodies",
    title: "Mirrorless Cameras",
    ctaLabel: "Browse bodies",
    href: "/cameras",
    image: "/category-bodies.png",
  },
  {
    id: "optics",
    index: "02",
    label: "Optics",
    title: "Prime & Zoom Lenses",
    ctaLabel: "Browse lenses",
    href: "/lenses",
    image: "/category-optics.png",
  },
  {
    id: "field-kit",
    index: "03",
    label: "Field kit",
    title: "Bags, Light & Tripods",
    ctaLabel: "Browse accessories",
    href: "/accessories",
    image: "/category-field-kit.png",
  },
];
export type ProductBadge = "NEW" | "REFURBISHED" | "LIMITED";

export interface Product {
  id: string;
  name: string;
  specs: string;      // "45MP · f/1.4 · Full frame"
  price: number;
  image: string;
  badge?: ProductBadge;
}

export const featuredProducts: Product[] = [
  {
    id: "nova-x1",
    name: "Nova X1 Mirrorless",
    specs: "45MP · f/1.4 · Full frame",
    price: 2349,
    image: "/hero.png", // TODO: /products/nova-x1.png
    badge: "NEW",
  },
  {
    id: "meridian-50",
    name: "Meridian 50mm Prime",
    specs: "f/1.8 · Manual focus",
    price: 649,
    image: "/hero.png", // TODO: /products/meridian-50.png
    badge: "REFURBISHED",
  },
  {
    id: "halycon-tripod",
    name: "Halycon Carbon Tripod",
    specs: "1.2kg · 165cm max height",
    price: 258,
    image: "/hero.png", // TODO: /products/halycon-tripod.png
  },
  {
    id: "everline-bag",
    name: "Everline Field Bag",
    specs: "Canvas & full-grain leather",
    price: 169,
    image: "/hero.png", // TODO: /products/everline-bag.png
    badge: "LIMITED",
  },
];

// Currency helper — keeps formatting consistent across the app
export const formatPrice = (n: number) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);