import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  size?: number;
  strokeWidth?: number;
};

const wrapper = ({ size = 16, strokeWidth = 1.07, ...rest }: IconProps) => ({
  viewBox: "0 0 24 24",
  width: size,
  height: size,
  fill: "none",
  stroke: "currentColor",
  strokeWidth,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...rest,
});

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...wrapper(props)}>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg {...wrapper(props)}>
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}

export function PinterestIcon(props: IconProps) {
  return (
    <svg {...wrapper(props)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8.5 9.5c0-2 1.5-3.5 3.5-3.5s3.5 1.5 3.5 3.5c0 3-2 4.5-3.5 4.5-.5 0-1-.2-1.2-.6" />
      <path d="M10.5 11.5 8.5 20" />
    </svg>
  );
}

export function XIcon(props: IconProps) {
  return (
    <svg {...wrapper(props)}>
      <path d="M4 4l11.733 16h4.267l-11.733-16z" />
      <path d="M4 20l6.768-6.768m2.46-2.46l6.772-6.772" />
    </svg>
  );
}