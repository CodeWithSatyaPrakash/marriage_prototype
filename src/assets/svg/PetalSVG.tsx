import React from 'react';

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export const PetalSVG: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 30 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Watercolor Rose Petal Gradient */}
        <linearGradient id="petalGradient" x1="15%" y1="0%" x2="85%" y2="100%">
          <stop offset="0%" stopColor="#FFF2F0" />
          <stop offset="35%" stopColor="#F2D5D0" />
          <stop offset="70%" stopColor="#DE9B92" />
          <stop offset="100%" stopColor="#C4847A" />
        </linearGradient>

        {/* Soft shadow for depth */}
        <linearGradient id="petalShade" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#A8574B" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#FAF8F5" stopOpacity="0.3" />
        </linearGradient>
      </defs>

      {/* Main Rose Petal Contour - Graceful organic curve */}
      <path
        d="M 15 2
           C 22 2 28 8 28 17
           C 28 26 21 34 15 38
           C 9 34 2 26 2 17
           C 2 8 8 2 15 2 Z"
        fill="url(#petalGradient)"
        stroke="#E2B1A8"
        strokeWidth="0.6"
      />

      {/* Curved Edge Fold (curling petal lip) */}
      <path
        d="M 10 3
           C 14 1 18 1 21 4
           C 24 7 26 12 25 18
           C 24 14 21 7 15 5
           C 12 4 11 3 10 3 Z"
        fill="#FFFFFF"
        opacity="0.45"
      />

      {/* Depth shading on petal base */}
      <path
        d="M 8 22
           C 12 26 18 26 22 22
           C 20 29 16 34 15 37
           C 14 34 10 29 8 22 Z"
        fill="url(#petalShade)"
      />

      {/* Subtle delicate central veining */}
      <path
        d="M 15 10
           C 15.5 18 14.8 26 15 34"
        stroke="#B3685F"
        strokeWidth="0.5"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M 15 16 C 18 14 21 16 23 18"
        stroke="#B3685F"
        strokeWidth="0.4"
        strokeLinecap="round"
        opacity="0.25"
      />
      <path
        d="M 15 22 C 11 20 8 23 6 25"
        stroke="#B3685F"
        strokeWidth="0.4"
        strokeLinecap="round"
        opacity="0.25"
      />
    </svg>
  );
};

export default PetalSVG;
