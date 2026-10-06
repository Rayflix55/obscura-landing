// src/components/sections/CategoryGrid.tsx
import { Eyebrow } from "../../components/ui";
import { CategoryCard } from "../../components/ui/CategoryCard";
import { categories } from "../../lib/data";

export function CategoryGrid() {
  return (
    <section className="py-12 lg:py-[53px]">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-0">
        {/* Header block — 32px gap on mobile, 53px on desktop */}
        <div className="flex flex-col gap-4 mb-8 lg:mb-[53px]">
          <Eyebrow>Shop by category</Eyebrow>
          <h2 className="font-display font-normal text-text
                         text-[28px] leading-[1.2] tracking-[-0.416px]
                         sm:text-[32px]
                         lg:text-[40px] lg:leading-[48px]">
            Three ways in.
          </h2>
        </div>

        {/* Grid — 1 col mobile, 2 col md, 3 col lg.
            24px gap on mobile, 28px from md up. */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
}