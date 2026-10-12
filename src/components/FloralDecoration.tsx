import React from 'react';

export type FloralVariant =
  | 'corner-tl'
  | 'corner-tr'
  | 'corner-bl'
  | 'corner-br'
  | 'divider'
  | 'frame';

export interface FloralDecorationProps {
  variant: FloralVariant;
  size?: number | string;
  className?: string;
  primaryColor?: string;
  accentColor?: string;
}

export const FloralDecoration: React.FC<FloralDecorationProps> = ({
  variant,
  size,
  className = '',
  primaryColor = '#D4A853', // champagne gold
  accentColor = '#C4847A',  // deep rose
}) => {
  // Corner Vine & Lotus motif component
  const renderCorner = (flipX: boolean, flipY: boolean) => {
    const dimension = size || 120;
    const transform = `${flipX ? 'scale(-1, 1)' : ''} ${flipY ? 'scale(1, -1)' : ''}`.trim();
    const transformOrigin = `${flipX ? '100%' : '0%'} ${flipY ? '100%' : '0%'}`;

    return (
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-opacity duration-300 ${className}`}
        style={{
          transform: transform || undefined,
          transformOrigin: transform ? transformOrigin : undefined,
        }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="goldShine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EAD29A" />
            <stop offset="50%" stopColor={primaryColor} />
            <stop offset="100%" stopColor="#B38938" />
          </linearGradient>
          <linearGradient id="roseAccent" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E2A69E" />
            <stop offset="100%" stopColor={accentColor} />
          </linearGradient>
        </defs>

        {/* Outer Corner Filigree Swirls */}
        <path
          d="M 6 6 Q 40 10 75 25 Q 115 42 145 80"
          stroke="url(#goldShine)"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 6 6 Q 10 40 25 75 Q 42 115 80 145"
          stroke="url(#goldShine)"
          strokeWidth="1.75"
          strokeLinecap="round"
          fill="none"
        />

        {/* Inner delicate spiral */}
        <path
          d="M 12 12 Q 50 20 85 55 Q 110 80 120 115"
          stroke={primaryColor}
          strokeWidth="1"
          strokeDasharray="2 3"
          fill="none"
          opacity="0.8"
        />

        {/* Corner Lotus / Floral Crest at Top-Left origin */}
        <g transform="translate(18, 18)">
          {/* Central Lotus Petal */}
          <path
            d="M 0 0 C 10 -15, 25 -10, 20 10 C 15 25, 0 20, 0 0 Z"
            fill="url(#roseAccent)"
            opacity="0.75"
          />
          <path
            d="M 0 0 C -15 10, -10 25, 10 20 C 25 15, 20 0, 0 0 Z"
            fill="url(#roseAccent)"
            opacity="0.75"
          />
          {/* Main Diagonal Blossom */}
          <path
            d="M 0 0 C 12 2, 24 14, 24 24 C 14 24, 2 12, 0 0 Z"
            fill="url(#goldShine)"
          />
          {/* Tiny floral seed dot */}
          <circle cx="8" cy="8" r="2.5" fill="#FFF8F0" />
        </g>

        {/* Leaves & Buds along top curve */}
        <path
          d="M 60 20 C 65 10 78 12 75 22 C 72 30 62 26 60 20 Z"
          fill="url(#goldShine)"
          opacity="0.9"
        />
        <path
          d="M 98 34 C 105 28 116 34 112 43 C 108 50 99 43 98 34 Z"
          fill="url(#roseAccent)"
          opacity="0.8"
        />
        <circle cx="132" cy="62" r="3" fill="url(#goldShine)" />
        <circle cx="145" cy="80" r="2" fill="url(#roseAccent)" />

        {/* Leaves & Buds along left curve */}
        <path
          d="M 20 60 C 10 65 12 78 22 75 C 30 72 26 62 20 60 Z"
          fill="url(#goldShine)"
          opacity="0.9"
        />
        <path
          d="M 34 98 C 28 105 34 116 43 112 C 50 108 43 99 34 98 Z"
          fill="url(#roseAccent)"
          opacity="0.8"
        />
        <circle cx="62" cy="132" r="3" fill="url(#goldShine)" />
        <circle cx="80" cy="145" r="2" fill="url(#roseAccent)" />

        {/* Micro ornamental dots */}
        <circle cx="28" cy="10" r="1.5" fill={primaryColor} />
        <circle cx="44" cy="14" r="1.5" fill={primaryColor} />
        <circle cx="10" cy="28" r="1.5" fill={primaryColor} />
        <circle cx="14" cy="44" r="1.5" fill={primaryColor} />
      </svg>
    );
  };

  // Divider: Symmetrical Centerpiece with Lotus & Filigree Vines
  const renderDivider = () => {
    const width = size || '100%';
    return (
      <svg
        viewBox="0 0 600 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full max-w-xl mx-auto h-auto ${className}`}
        style={{ width: typeof size === 'number' ? `${size}px` : width }}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="dividerGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={primaryColor} stopOpacity="0" />
            <stop offset="25%" stopColor={primaryColor} stopOpacity="0.8" />
            <stop offset="50%" stopColor="#F5DFAB" stopOpacity="1" />
            <stop offset="75%" stopColor={primaryColor} stopOpacity="0.8" />
            <stop offset="100%" stopColor={primaryColor} stopOpacity="0" />
          </linearGradient>
          <radialGradient id="lotusCenterGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FCECE9" />
            <stop offset="60%" stopColor={accentColor} />
            <stop offset="100%" stopColor="#A8574D" />
          </radialGradient>
        </defs>

        {/* Left tapering line with decorative flourish */}
        <path
          d="M 20 24 Q 100 24 190 24 M 205 24 Q 240 24 265 24"
          stroke="url(#dividerGold)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        {/* Left vine loops */}
        <path
          d="M 220 24 C 235 15, 250 16, 258 24 C 250 32, 235 33, 220 24 Z"
          stroke={primaryColor}
          strokeWidth="0.8"
          fill="none"
          opacity="0.8"
        />
        <circle cx="198" cy="24" r="2.5" fill={primaryColor} />
        <circle cx="150" cy="24" r="1.5" fill={accentColor} />

        {/* Right tapering line with decorative flourish */}
        <path
          d="M 580 24 Q 500 24 410 24 M 395 24 Q 360 24 335 24"
          stroke="url(#dividerGold)"
          strokeWidth="1.25"
          strokeLinecap="round"
        />
        {/* Right vine loops */}
        <path
          d="M 380 24 C 365 15, 350 16, 342 24 C 350 32, 365 33, 380 24 Z"
          stroke={primaryColor}
          strokeWidth="0.8"
          fill="none"
          opacity="0.8"
        />
        <circle cx="402" cy="24" r="2.5" fill={primaryColor} />
        <circle cx="450" cy="24" r="1.5" fill={accentColor} />

        {/* Center Lotus Flower Crest */}
        <g transform="translate(300, 24)">
          {/* Outer petals */}
          <path
            d="M 0 10 C -22 6, -26 -14, -15 -18 C -5 -20, 0 -8, 0 10 Z"
            fill="url(#lotusCenterGrad)"
            opacity="0.85"
          />
          <path
            d="M 0 10 C 22 6, 26 -14, 15 -18 C 5 -20, 0 -8, 0 10 Z"
            fill="url(#lotusCenterGrad)"
            opacity="0.85"
          />
          {/* Middle petals */}
          <path
            d="M 0 12 C -14 0, -16 -16, 0 -22 C 16 -16, 14 0, 0 12 Z"
            fill="url(#dividerGold)"
          />
          {/* Center heart bud */}
          <path
            d="M 0 8 C -6 2, -6 -10, 0 -14 C 6 -10, 6 2, 0 8 Z"
            fill="#FFF8F0"
          />
          {/* Little crown dots */}
          <circle cx="0" cy="-25" r="1.8" fill={primaryColor} />
          <circle cx="-10" cy="-20" r="1.4" fill={accentColor} />
          <circle cx="10" cy="-20" r="1.4" fill={accentColor} />
        </g>
      </svg>
    );
  };

  // Frame: Ornate royal wedding rectangular border with floral corners
  const renderFrame = () => {
    return (
      <svg
        viewBox="0 0 500 700"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-full h-full ${className}`}
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="frameBorderGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#DFBF75" />
            <stop offset="50%" stopColor={primaryColor} />
            <stop offset="100%" stopColor="#B68B35" />
          </linearGradient>
        </defs>

        {/* Outer thin border */}
        <rect
          x="14"
          y="14"
          width="472"
          height="672"
          rx="12"
          stroke="url(#frameBorderGold)"
          strokeWidth="1.2"
          opacity="0.6"
        />

        {/* Inner double border */}
        <rect
          x="24"
          y="24"
          width="452"
          height="652"
          rx="8"
          stroke="url(#frameBorderGold)"
          strokeWidth="0.8"
          strokeDasharray="4 3"
          opacity="0.75"
        />

        {/* Four Corner Accents */}
        {/* Top Left */}
        <path
          d="M 24 60 C 24 35, 35 24, 60 24"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="36" cy="36" r="3" fill={accentColor} />

        {/* Top Right */}
        <path
          d="M 476 60 C 476 35, 465 24, 440 24"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="464" cy="36" r="3" fill={accentColor} />

        {/* Bottom Left */}
        <path
          d="M 24 640 C 24 665, 35 676, 60 676"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="36" cy="664" r="3" fill={accentColor} />

        {/* Bottom Right */}
        <path
          d="M 476 640 C 476 665, 465 676, 440 676"
          stroke={primaryColor}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="464" cy="664" r="3" fill={accentColor} />
      </svg>
    );
  };

  switch (variant) {
    case 'corner-tl':
      return renderCorner(false, false);
    case 'corner-tr':
      return renderCorner(true, false);
    case 'corner-bl':
      return renderCorner(false, true);
    case 'corner-br':
      return renderCorner(true, true);
    case 'divider':
      return renderDivider();
    case 'frame':
      return renderFrame();
    default:
      return null;
  }
};

export default FloralDecoration;
