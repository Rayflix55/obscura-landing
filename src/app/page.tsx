// src/app/page.tsx
"use client";

import { useMemo, useState } from "react";
import { Navbar } from "./components/sections/Navbar";
import { Hero } from "./components/sections/Hero";
import { CategoryGrid } from "./components/sections/CategoryGrid";
import { FeaturedGear } from "./components/sections/FeaturedGear";
import { AboutSection } from "./components/sections/AboutSection";
import { TradeInBanner } from "./components/sections/TradeInBanner";
import { Footer } from "./components/sections/Footer";

export default function Home() {
  const [quantities, setQuantities] = useState<Record<string, number>>({});
  const [isSignedIn] = useState(false);

  const cartCount = useMemo(
    () => Object.values(quantities).reduce((sum, n) => sum + n, 0),
    [quantities]
  );

  const handleAdd = (id: string) =>
    setQuantities((q) => ({ ...q, [id]: 1 }));

  const handleIncrement = (id: string) =>
    setQuantities((q) => ({ ...q, [id]: (q[id] ?? 0) + 1 }));

  const handleDecrement = (id: string) =>
    setQuantities((q) => {
      const next = (q[id] ?? 0) - 1;
      if (next <= 0) {
        const { [id]: _, ...rest } = q;
        return rest;
      }
      return { ...q, [id]: next };
    });

  return (
    <>
      <Navbar cartCount={cartCount} isSignedIn={isSignedIn} />
      <main>
        <Hero />
        <CategoryGrid />
        <FeaturedGear
          quantities={quantities}
          onAdd={handleAdd}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
        <AboutSection />
        <TradeInBanner />
      </main>
      <Footer />
    </>
  );
}