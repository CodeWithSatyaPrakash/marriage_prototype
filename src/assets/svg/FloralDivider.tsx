import React from 'react';

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export const FloralDivider: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 400 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Champagne Gold Gradient */}
        <linearGradient id="fdGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9EBB6" />
          <stop offset="35%" stopColor="#D4A853" />
          <stop offset="70%" stopColor="#AD7F2D" />
          <stop offset="100%" stopColor="#E3BF70" />
        </linearGradient>

        {/* Blush Pink Gradient */}
        <linearGradient id="fdBlushGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2EF" />
          <stop offset="50%" stopColor="#F2D5D0" />
          <stop offset="100%" stopColor="#DCA097" />
        </linearGradient>

        {/* Deep Rose Gradient */}
        <linearGradient id="fdRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D98A7F" />
          <stop offset="100%" stopColor="#B3554A" />
        </linearGradient>

        {/* Sage Green Gradient */}
        <linearGradient id="fdSageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBDABA" />
          <stop offset="100%" stopColor="#98AB84" />
        </linearGradient>
      </defs>

      {/* ========================================================
          CENTRAL FLORAL MOTIF (Centered at x=200, y=30)
         ======================================================== */}
      <g id="center-flower">
        {/* Backdrop Glow */}
        <circle cx="200" cy="30" r="16" fill="#FFF8F0" opacity="0.6" />

        {/* Center Lotus Bloom */}
        {/* Top/Center Petal */}
        <path
          d="M 200 12 C 195 20 195 24 200 28 C 205 24 205 20 200 12 Z"
          fill="url(#fdRoseGrad)"
        />
        {/* Flanking Petals */}
        <path
          d="M 200 28 C 193 23 186 21 185 26 C 185 30 193 31 200 30 Z"
          fill="url(#fdBlushGrad)"
          stroke="#D4A853"
          strokeWidth="0.5"
        />
        <path
          d="M 200 28 C 207 23 214 21 215 26 C 215 30 207 31 200 30 Z"
          fill="url(#fdBlushGrad)"
          stroke="#D4A853"
          strokeWidth="0.5"
        />
        {/* Lower Petals */}
        <path
          d="M 200 30 C 192 32 188 38 193 42 C 197 44 200 36 200 30 Z"
          fill="url(#fdBlushGrad)"
        />
        <path
          d="M 200 30 C 208 32 212 38 207 42 C 203 44 200 36 200 30 Z"
          fill="url(#fdBlushGrad)"
        />

        {/* Lotus Core Jewel */}
        <circle cx="200" cy="30" r="4" fill="url(#fdGoldGrad)" />
        <circle cx="200" cy="30" r="2" fill="#FAF8F5" />

        {/* Calyx & Base Droplet */}
        <circle cx="200" cy="46" r="2.2" fill="url(#fdGoldGrad)" />
        <line x1="200" y1="36" x2="200" y2="44" stroke="url(#fdGoldGrad)" strokeWidth="1" />
      </g>

      {/* ========================================================
          LEFT SYMMETRIC FLOURISH & VINES
         ======================================================== */}
      <g id="left-wing">
        {/* Main Swirling S-Curve Vine */}
        <path
          d="M 185 30
             C 170 30 155 24 140 24
             C 120 24 105 36 85 36
             C 65 36 50 28 35 30
             C 28 31 24 35 20 35"
          fill="none"
          stroke="url(#fdGoldGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Secondary Delicate Supporting Vine */}
        <path
          d="M 175 32
             C 160 36 145 36 130 33
             C 115 30 100 24 85 24
             C 70 24 58 32 45 32"
          fill="none"
          stroke="url(#fdGoldGrad)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.8"
        />

        {/* Left Scroll Spiral Flourish */}
        <path
          d="M 35 30
             C 25 28 20 20 28 15
             C 34 11 40 16 36 21
             C 33 24 29 23 28 21"
          fill="none"
          stroke="url(#fdGoldGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Sage Green Leaves along the Left Vine */}
        <path
          d="M 152 24 C 146 16 138 18 135 24 C 142 27 148 26 152 24 Z"
          fill="url(#fdSageGrad)"
          stroke="#869974"
          strokeWidth="0.5"
        />
        <path
          d="M 112 33 C 106 41 98 39 95 33 C 102 30 108 31 112 33 Z"
          fill="url(#fdSageGrad)"
          stroke="#869974"
          strokeWidth="0.5"
        />
        <path
          d="M 72 32 C 66 24 58 26 55 32 C 62 35 68 34 72 32 Z"
          fill="url(#fdSageGrad)"
          stroke="#869974"
          strokeWidth="0.5"
        />

        {/* Tiny Rose Buds / Pearls along Left Vine */}
        <circle cx="160" cy="22" r="2.5" fill="url(#fdRoseGrad)" />
        <circle cx="125" cy="37" r="2.2" fill="url(#fdBlushGrad)" stroke="#D4A853" strokeWidth="0.6" />
        <circle cx="85" cy="22" r="2.5" fill="url(#fdRoseGrad)" />
        <circle cx="48" cy="34" r="2" fill="url(#fdGoldGrad)" />

        {/* Tip Finial Droplet */}
        <circle cx="20" cy="35" r="2.2" fill="url(#fdGoldGrad)" />
        <circle cx="12" cy="35" r="1.5" fill="url(#fdGoldGrad)" opacity="0.7" />
        <circle cx="6" cy="35" r="1" fill="url(#fdGoldGrad)" opacity="0.5" />
      </g>

      {/* ========================================================
          RIGHT SYMMETRIC FLOURISH & VINES (Mirrored)
         ======================================================== */}
      <g id="right-wing">
        {/* Main Swirling S-Curve Vine */}
        <path
          d="M 215 30
             C 230 30 245 24 260 24
             C 280 24 295 36 315 36
             C 335 36 350 28 365 30
             C 372 31 376 35 380 35"
          fill="none"
          stroke="url(#fdGoldGrad)"
          strokeWidth="1.5"
          strokeLinecap="round"
        />

        {/* Secondary Delicate Supporting Vine */}
        <path
          d="M 225 32
             C 240 36 255 36 270 33
             C 285 30 300 24 315 24
             C 330 24 342 32 355 32"
          fill="none"
          stroke="url(#fdGoldGrad)"
          strokeWidth="0.8"
          strokeLinecap="round"
          strokeDasharray="2 3"
          opacity="0.8"
        />

        {/* Right Scroll Spiral Flourish */}
        <path
          d="M 365 30
             C 375 28 380 20 372 15
             C 366 11 360 16 364 21
             C 367 24 371 23 372 21"
          fill="none"
          stroke="url(#fdGoldGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Sage Green Leaves along the Right Vine */}
        <path
          d="M 248 24 C 254 16 262 18 265 24 C 258 27 252 26 248 24 Z"
          fill="url(#fdSageGrad)"
          stroke="#869974"
          strokeWidth="0.5"
        />
        <path
          d="M 288 33 C 294 41 302 39 305 33 C 298 30 292 31 288 33 Z"
          fill="url(#fdSageGrad)"
          stroke="#869974"
          strokeWidth="0.5"
        />
        <path
          d="M 328 32 C 334 24 342 26 345 32 C 338 35 332 34 328 32 Z"
          fill="url(#fdSageGrad)"
          stroke="#869974"
          strokeWidth="0.5"
        />

        {/* Tiny Rose Buds / Pearls along Right Vine */}
        <circle cx="240" cy="22" r="2.5" fill="url(#fdRoseGrad)" />
        <circle cx="275" cy="37" r="2.2" fill="url(#fdBlushGrad)" stroke="#D4A853" strokeWidth="0.6" />
        <circle cx="315" cy="22" r="2.5" fill="url(#fdRoseGrad)" />
        <circle cx="352" cy="34" r="2" fill="url(#fdGoldGrad)" />

        {/* Tip Finial Droplet */}
        <circle cx="380" cy="35" r="2.2" fill="url(#fdGoldGrad)" />
        <circle cx="388" cy="35" r="1.5" fill="url(#fdGoldGrad)" opacity="0.7" />
        <circle cx="394" cy="35" r="1" fill="url(#fdGoldGrad)" opacity="0.5" />
      </g>
    </svg>
  );
};

export default FloralDivider;
