import React from 'react';

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export const FloralMandala: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Metallic Champagne Gold Gradient */}
        <linearGradient id="fmGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF1D0" />
          <stop offset="35%" stopColor="#D4A853" />
          <stop offset="70%" stopColor="#B68735" />
          <stop offset="100%" stopColor="#E2BE72" />
        </linearGradient>

        {/* Blush Pink Gradient for Lotus Petals */}
        <linearGradient id="fmBlushGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF2F0" />
          <stop offset="50%" stopColor="#F2D5D0" />
          <stop offset="100%" stopColor="#E3B3AC" />
        </linearGradient>

        {/* Deep Rose Gradient */}
        <linearGradient id="fmRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DE9B92" />
          <stop offset="100%" stopColor="#B36157" />
        </linearGradient>

        {/* Sage Green Gradient */}
        <linearGradient id="fmSageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D0DEC1" />
          <stop offset="100%" stopColor="#9EAF8C" />
        </linearGradient>

        {/* Single Lotus Petal Template */}
        <path
          id="fm-lotus-petal"
          d="M0 0 C-12 -25 -16 -50 0 -75 C16 -50 12 -25 0 0 Z"
        />

        {/* Outer Filigree Petal */}
        <g id="fm-outer-petal">
          <path
            d="M0 0 C-22 -40 -26 -90 0 -130 C26 -90 22 -40 0 0 Z"
            fill="url(#fmBlushGrad)"
            stroke="#D4A853"
            strokeWidth="0.8"
            opacity="0.85"
          />
          {/* Inner spine / veining */}
          <path d="M0 0 L0 -125" stroke="#D4A853" strokeWidth="0.7" opacity="0.6" />
          <path d="M0 -50 C-10 -70 -12 -90 0 -115 C12 -90 10 -70 0 -50 Z" fill="none" stroke="#C4847A" strokeWidth="0.75" />
          <circle cx="0" cy="-125" r="2.5" fill="url(#fmGoldGrad)" />
        </g>

        {/* Sage Leaf Accent */}
        <g id="fm-sage-leaf">
          <path
            d="M0 -120 C-15 -140 -8 -165 0 -178 C8 -165 15 -140 0 -120 Z"
            fill="url(#fmSageGrad)"
            stroke="#8C9E7B"
            strokeWidth="0.6"
            opacity="0.85"
          />
          <path d="M0 -125 L0 -172" stroke="#8C9E7B" strokeWidth="0.5" />
          <circle cx="0" cy="-178" r="2" fill="#D4A853" />
        </g>

        {/* Marigold Crest Element */}
        <g id="fm-marigold-crest">
          <path
            d="M-8 -150 C-12 -162 0 -170 0 -170 C0 -170 12 -162 8 -150 C5 -144 -5 -144 -8 -150 Z"
            fill="#D4A853"
            opacity="0.9"
          />
          <circle cx="0" cy="-160" r="2" fill="#FAF8F5" />
        </g>
      </defs>

      <g transform="translate(200, 200)">
        {/* Layer 0: Outermost Delicate Radiant Halo */}
        <circle cx="0" cy="0" r="192" stroke="#D4A853" strokeWidth="0.75" strokeDasharray="3 4" opacity="0.4" />
        <circle cx="0" cy="0" r="185" stroke="#FAF8F5" strokeWidth="1" opacity="0.3" />

        {/* Layer 1: Outermost Ring of 16 Scalloped Beaded Medallions */}
        <circle cx="0" cy="0" r="178" stroke="url(#fmGoldGrad)" strokeWidth="1.2" opacity="0.7" />
        <circle cx="0" cy="0" r="172" stroke="#B5C5A3" strokeWidth="0.8" opacity="0.5" />

        {/* 16 Sage Green Leaves pointing outward */}
        {[...Array(16)].map((_, i) => (
          <use
            key={`sage-${i}`}
            href="#fm-sage-leaf"
            transform={`rotate(${i * 22.5})`}
          />
        ))}

        {/* 16 Outer Filigree Lotus Petals */}
        {[...Array(16)].map((_, i) => (
          <use
            key={`outer-${i}`}
            href="#fm-outer-petal"
            transform={`rotate(${i * 22.5 + 11.25})`}
          />
        ))}

        {/* Layer 2: Ring with Small Pearls/Beads */}
        <circle cx="0" cy="0" r="118" stroke="url(#fmGoldGrad)" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="113" stroke="#FAF8F5" strokeWidth="1" strokeDasharray="2 3" opacity="0.8" />

        {/* 24 Tiny Gold Beads on Ring 118 */}
        {[...Array(24)].map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180;
          const x = 118 * Math.cos(angle);
          const y = 118 * Math.sin(angle);
          return (
            <circle
              key={`bead-118-${i}`}
              cx={x}
              cy={y}
              r="2"
              fill="url(#fmGoldGrad)"
            />
          );
        })}

        {/* Layer 3: Middle Petal Bloom (12-Fold Symmetry in Blush & Terracotta) */}
        {[...Array(12)].map((_, i) => (
          <g key={`mid-bloom-${i}`} transform={`rotate(${i * 30})`}>
            {/* Soft pink backing petal */}
            <path
              d="M0 0 C-18 -25 -22 -65 0 -95 C22 -65 18 -25 0 0 Z"
              fill="url(#fmBlushGrad)"
              stroke="#D4A853"
              strokeWidth="0.8"
              opacity="0.95"
            />
            {/* Deep rose inner accent */}
            <path
              d="M0 -20 C-10 -40 -12 -65 0 -85 C12 -65 10 -40 0 -20 Z"
              fill="url(#fmRoseGrad)"
              opacity="0.65"
            />
            {/* Golden jewel at tip */}
            <circle cx="0" cy="-90" r="2.2" fill="url(#fmGoldGrad)" />
          </g>
        ))}

        {/* Layer 4: Intricate Geometric Jali Ring */}
        <circle cx="0" cy="0" r="62" stroke="url(#fmGoldGrad)" strokeWidth="1.8" />
        <circle cx="0" cy="0" r="56" stroke="#C4847A" strokeWidth="1" strokeDasharray="3 3" />
        <circle cx="0" cy="0" r="50" stroke="url(#fmGoldGrad)" strokeWidth="1.2" />

        {/* Radial Rays between 50 and 62 */}
        {[...Array(24)].map((_, i) => (
          <line
            key={`ray-${i}`}
            x1="0"
            y1="-50"
            x2="0"
            y2="-62"
            transform={`rotate(${i * 15})`}
            stroke="#D4A853"
            strokeWidth="0.75"
          />
        ))}

        {/* Layer 5: Inner Lotus Center (8-Fold Symmetry) */}
        {[...Array(8)].map((_, i) => (
          <g key={`inner-lotus-${i}`} transform={`rotate(${i * 45})`}>
            {/* Lotus Petal */}
            <path
              d="M0 0 C-10 -15 -14 -35 0 -48 C14 -35 10 -15 0 0 Z"
              fill="#FFF8F0"
              stroke="#D4A853"
              strokeWidth="1"
            />
            <path
              d="M0 -5 C-6 -18 -8 -30 0 -42 C8 -30 6 -18 0 -5 Z"
              fill="url(#fmBlushGrad)"
              opacity="0.8"
            />
            <circle cx="0" cy="-45" r="1.6" fill="#D4A853" />
          </g>
        ))}

        {/* 8 Secondary Inner Petals Interleaved */}
        {[...Array(8)].map((_, i) => (
          <g key={`inner-interleaved-${i}`} transform={`rotate(${i * 45 + 22.5})`}>
            <path
              d="M0 0 C-6 -10 -9 -25 0 -36 C9 -25 6 -10 0 0 Z"
              fill="url(#fmRoseGrad)"
              stroke="#FAF8F5"
              strokeWidth="0.6"
              opacity="0.85"
            />
          </g>
        ))}

        {/* Layer 6: Center Golden Bindu / Marigold Stamen Core */}
        <circle cx="0" cy="0" r="16" fill="url(#fmGoldGrad)" stroke="#B68735" strokeWidth="1" />
        <circle cx="0" cy="0" r="12" fill="#FAF8F5" />
        <circle cx="0" cy="0" r="8" fill="url(#fmRoseGrad)" />
        <circle cx="0" cy="0" r="4" fill="url(#fmGoldGrad)" />

        {/* Tiny golden stamen dots around Bindu */}
        {[...Array(12)].map((_, i) => {
          const angle = (i * 30 * Math.PI) / 180;
          const x = 14 * Math.cos(angle);
          const y = 14 * Math.sin(angle);
          return (
            <circle
              key={`stamen-${i}`}
              cx={x}
              cy={y}
              r="1.2"
              fill="#FAF8F5"
            />
          );
        })}
      </g>
    </svg>
  );
};

export default FloralMandala;
