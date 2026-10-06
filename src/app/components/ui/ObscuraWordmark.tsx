export function ObscuraWordmark({ className }: { className?: string }) {
  return (
  <svg
  viewBox="-100 -30 1565 368"
  preserveAspectRatio="xMidYMid meet"
  className={className}
  aria-hidden
>
      <defs>
        <filter
          id="obscura-emboss"
          x="-10%"
          y="-10%"
          width="120%"
          height="120%"
          colorInterpolationFilters="sRGB"
        >
          {/* Inner shadow 1 — white highlight: x=2, y=3, blur=3, #FFFFFE @ 30% */}
          <feOffset dx="2" dy="3" in="SourceAlpha" result="o1" />
          <feGaussianBlur stdDeviation="1.5" in="o1" result="b1" />
          <feComposite operator="out" in="SourceAlpha" in2="b1" result="i1" />
          <feFlood floodColor="#FFFFFE" floodOpacity="0.30" result="c1" />
          <feComposite operator="in" in="c1" in2="i1" result="s1" />

          {/* Inner shadow 2 — black: x=3, y=-2, blur=5, #000000 @ 25% */}
          <feOffset dx="3" dy="-2" in="SourceAlpha" result="o2" />
          <feGaussianBlur stdDeviation="2.5" in="o2" result="b2" />
          <feComposite operator="out" in="SourceAlpha" in2="b2" result="i2" />
          <feFlood floodColor="#000000" floodOpacity="0.25" result="c2" />
          <feComposite operator="in" in="c2" in2="i2" result="s2" />

          {/* Fill (SourceGraphic) + both inner shadows composited on top */}
          <feMerge>
            <feMergeNode in="SourceGraphic" />
            <feMergeNode in="s1" />
            <feMergeNode in="s2" />
          </feMerge>
        </filter>
      </defs>

      <text
        className="font-display"
        x="682.5"
        y="154"
        textAnchor="middle"
        dominantBaseline="central"
        fontWeight={600}
        fontSize={300}
        letterSpacing={0.48}
        fill="#0B0B0C"
        filter="url(#obscura-emboss)"
      >
        OBSCURA
      </text>
    </svg>
  );
}