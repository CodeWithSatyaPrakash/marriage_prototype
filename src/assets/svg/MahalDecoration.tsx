import React from 'react';

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export interface MahalDecorationProps extends SvgProps {
  variant?: 'corner' | 'jharokha' | 'paisley' | 'diya';
}

/**
 * 1. Corner Ornament Variant:
 * Traditional royal palace (Mahal) filigree corner piece with scalloped Mughal arches,
 * paisley flourish, and dangling pearls/ghungroo bell. ViewBox: 160x160.
 */
export const MahalCorner: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="mcGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF1D0" />
          <stop offset="35%" stopColor="#D4A853" />
          <stop offset="75%" stopColor="#AD7F2D" />
          <stop offset="100%" stopColor="#DFC06E" />
        </linearGradient>

        <linearGradient id="mcRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F2D5D0" />
          <stop offset="100%" stopColor="#C4847A" />
        </linearGradient>

        <linearGradient id="mcSageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBDABA" />
          <stop offset="100%" stopColor="#98AB84" />
        </linearGradient>
      </defs>

      {/* Outer Border Lines hugging top and left edges */}
      <path
        d="M 5 155 L 5 5 L 155 5"
        stroke="url(#mcGoldGrad)"
        strokeWidth="2"
      />
      <path
        d="M 12 145 L 12 12 L 145 12"
        stroke="url(#mcGoldGrad)"
        strokeWidth="0.8"
        strokeDasharray="3 3"
        opacity="0.8"
      />

      {/* Corner Filigree Node at Top-Left (12, 12) */}
      <circle cx="12" cy="12" r="4" fill="url(#mcGoldGrad)" />
      <circle cx="12" cy="12" r="2" fill="#FFF8F0" />

      {/* Main Scalloped Arch Arcing across corner */}
      <path
        d="M 140 18
           C 120 18 100 24 85 38
           C 70 52 52 70 38 85
           C 24 100 18 120 18 140"
        stroke="url(#mcGoldGrad)"
        strokeWidth="1.8"
      />

      {/* Inner Scallop Custps */}
      <path
        d="M 120 18
           C 105 18 90 28 78 40
           C 66 52 52 66 40 78
           C 28 90 18 105 18 120"
        stroke="#FAF8F5"
        strokeWidth="1"
        opacity="0.75"
      />

      {/* Central Paisley / Kalka Medallion in Corner (at x: 55, y: 55) */}
      <g transform="translate(55, 55) rotate(45)">
        {/* Paisley Body */}
        <path
          d="M 0 20
             C -15 20 -22 8 -22 -6
             C -22 -20 -10 -32 0 -42
             C 4 -30 18 -22 18 -6
             C 18 10 10 20 0 20 Z"
          fill="url(#mcRoseGrad)"
          stroke="url(#mcGoldGrad)"
          strokeWidth="1.2"
        />

        {/* Paisley Inner Filigree Flower */}
        <circle cx="0" cy="-6" r="6" fill="#FAF8F5" stroke="#D4A853" strokeWidth="0.8" />
        <circle cx="0" cy="-6" r="3" fill="url(#mcGoldGrad)" />

        {/* Paisley Curved Curl at Tip */}
        <path
          d="M 0 -42 C 6 -48 14 -46 14 -38 C 14 -32 8 -30 4 -32"
          fill="none"
          stroke="url(#mcGoldGrad)"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Sage leaf flanks */}
        <path
          d="M -18 -6 C -28 -10 -30 -22 -22 -26 C -18 -20 -16 -12 -18 -6 Z"
          fill="url(#mcSageGrad)"
          stroke="#8A9D78"
          strokeWidth="0.5"
        />
        <path
          d="M 18 -6 C 28 -10 30 -22 22 -26 C 18 -20 16 -12 18 -6 Z"
          fill="url(#mcSageGrad)"
          stroke="#8A9D78"
          strokeWidth="0.5"
        />
      </g>

      {/* Hanging Jhumka Bell / Pearls along the Scallop */}
      <g transform="translate(95, 32)">
        <line x1="0" y1="0" x2="0" y2="12" stroke="url(#mcGoldGrad)" strokeWidth="0.8" />
        <path d="M -4 12 C -4 9 4 9 4 12 L 5 18 C 5 20 -5 20 -5 18 Z" fill="url(#mcGoldGrad)" />
        <circle cx="0" cy="21" r="1.5" fill="#FAF8F5" />
      </g>

      <g transform="translate(32, 95)">
        <line x1="0" y1="0" x2="12" y2="0" stroke="url(#mcGoldGrad)" strokeWidth="0.8" />
        <path d="M 12 -4 C 9 -4 9 4 12 4 L 18 5 C 20 5 20 -5 18 -5 Z" fill="url(#mcGoldGrad)" />
        <circle cx="21" cy="0" r="1.5" fill="#FAF8F5" />
      </g>

      {/* Beaded Pearls along Border Ends */}
      <circle cx="155" cy="5" r="2.5" fill="url(#mcGoldGrad)" />
      <circle cx="5" cy="155" r="2.5" fill="url(#mcGoldGrad)" />
      <circle cx="140" cy="18" r="2" fill="#D4A853" />
      <circle cx="18" cy="140" r="2" fill="#D4A853" />
    </svg>
  );
};

/**
 * 2. Jharokha Variant:
 * Royal Rajasthani palace oriel window / arched balcony motif.
 * ViewBox: 160x220.
 */
export const MahalJharokha: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 160 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="mjGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF1D0" />
          <stop offset="35%" stopColor="#D4A853" />
          <stop offset="75%" stopColor="#AD7F2D" />
          <stop offset="100%" stopColor="#DFC06E" />
        </linearGradient>

        <linearGradient id="mjBgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="50%" stopColor="#F9ECE8" />
          <stop offset="100%" stopColor="#FAF8F5" />
        </linearGradient>

        <linearGradient id="mjTerraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DE8D6E" />
          <stop offset="100%" stopColor="#C67B5C" />
        </linearGradient>
      </defs>

      {/* Finial / Kalash Dome Peak */}
      <g transform="translate(80, 16)">
        <path d="M 0 -12 L -4 -2 Q 0 4 0 8 Q 0 4 4 -2 Z" fill="url(#mjGoldGrad)" />
        <circle cx="0" cy="-12" r="2.5" fill="url(#mjGoldGrad)" />
      </g>

      {/* Main Mughal Trefoil Arch Canopy */}
      {/* Arch Interior Glow / Window Opening */}
      <path
        d="M 30 165
           L 30 90
           C 30 65 48 50 64 45
           C 72 40 80 24 80 24
           C 80 24 88 40 96 45
           C 112 50 130 65 130 90
           L 130 165 Z"
        fill="url(#mjBgGrad)"
        stroke="url(#mjGoldGrad)"
        strokeWidth="1.8"
      />

      {/* Scalloped Cusp Inner Archway */}
      <path
        d="M 40 165
           L 40 95
           C 40 78 50 65 65 60
           C 72 55 80 40 80 40
           C 80 40 88 55 95 60
           C 110 65 120 78 120 95
           L 120 165"
        stroke="#D4A853"
        strokeWidth="1"
        strokeDasharray="3 2"
      />

      {/* Decorative Jali / Lattice in Jharokha window */}
      <g opacity="0.35" stroke="#C4847A" strokeWidth="0.8">
        <line x1="45" y1="80" x2="115" y2="80" />
        <line x1="42" y1="100" x2="118" y2="100" />
        <line x1="40" y1="120" x2="120" y2="120" />
        <line x1="40" y1="140" x2="120" y2="140" />

        <line x1="60" y1="65" x2="60" y2="165" />
        <line x1="80" y1="45" x2="80" y2="165" />
        <line x1="100" y1="65" x2="100" y2="165" />
      </g>

      {/* Central Lotus Motif Inside Arch */}
      <g transform="translate(80, 110)">
        <circle cx="0" cy="0" r="12" fill="#FAF8F5" stroke="#D4A853" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="4" fill="url(#mjGoldGrad)" />
        <path d="M 0 -8 C -4 -4 -4 4 0 8 C 4 4 4 -4 0 -8 Z" fill="#F2D5D0" opacity="0.8" />
        <path d="M -8 0 C -4 -4 4 -4 8 0 C 4 4 -4 4 -8 0 Z" fill="#F2D5D0" opacity="0.8" />
      </g>

      {/* Balcony Railing (Katla / Balustrade) at Bottom */}
      <g id="balcony">
        {/* Balcony Top Cornice */}
        <rect x="22" y="165" width="116" height="6" rx="2" fill="url(#mjGoldGrad)" />
        {/* Balcony Pillars / Balusters */}
        {[...Array(9)].map((_, i) => (
          <rect
            key={`baluster-${i}`}
            x={30 + i * 12}
            y="171"
            width="4"
            height="18"
            rx="1"
            fill="url(#mjTerraGrad)"
          />
        ))}
        {/* Balcony Bottom Base */}
        <rect x="20" y="189" width="120" height="7" rx="2" fill="url(#mjGoldGrad)" />

        {/* Decorative Balcony Corbel Brackets below base */}
        <path d="M 28 196 L 36 212 L 44 196 Z" fill="url(#mjGoldGrad)" />
        <path d="M 72 196 L 80 212 L 88 196 Z" fill="url(#mjGoldGrad)" />
        <path d="M 116 196 L 124 212 L 132 196 Z" fill="url(#mjGoldGrad)" />
      </g>
    </svg>
  );
};

/**
 * 3. Royal Paisley (Kalka) Variant:
 * Sacred auspicious Indian mango / paisley motif with floral filling.
 * ViewBox: 120x160.
 */
export const MahalPaisley: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 120 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="mpGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF1D0" />
          <stop offset="35%" stopColor="#D4A853" />
          <stop offset="75%" stopColor="#AD7F2D" />
          <stop offset="100%" stopColor="#DFC06E" />
        </linearGradient>

        <linearGradient id="mpRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2F0" />
          <stop offset="50%" stopColor="#F2D5D0" />
          <stop offset="100%" stopColor="#C4847A" />
        </linearGradient>

        <linearGradient id="mpSageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#CBDABA" />
          <stop offset="100%" stopColor="#98AB84" />
        </linearGradient>
      </defs>

      {/* Main Paisley Outer Silhouette */}
      <path
        d="M 60 148
           C 25 148 10 125 10 95
           C 10 65 30 45 52 28
           C 65 18 72 8 68 3
           C 64 -2 52 2 48 8
           C 44 14 42 22 42 22
           C 42 22 25 38 18 55
           C 4 85 18 135 55 152
           C 85 165 112 142 110 108
           C 108 78 88 58 72 45
           C 82 58 92 80 88 105
           C 84 130 75 148 60 148 Z"
        fill="url(#mpRoseGrad)"
        stroke="url(#mpGoldGrad)"
        strokeWidth="1.5"
      />

      {/* Inner Paisley Body */}
      <path
        d="M 58 136
           C 34 136 22 118 22 95
           C 22 72 38 55 54 40
           C 62 32 68 25 64 22
           C 60 18 52 22 50 26
           C 50 26 62 48 62 70
           C 62 95 80 115 80 125
           C 80 135 70 136 58 136 Z"
        fill="#FAF8F5"
        stroke="#D4A853"
        strokeWidth="1"
      />

      {/* Paisley Center Floral Mandala / Lotus */}
      <g transform="translate(50, 95)">
        <circle cx="0" cy="0" r="14" fill="url(#mpRoseGrad)" stroke="url(#mpGoldGrad)" strokeWidth="0.8" />
        <circle cx="0" cy="0" r="7" fill="#FAF8F5" />
        <circle cx="0" cy="0" r="3" fill="url(#mpGoldGrad)" />

        {/* Lotus petals around center */}
        {[...Array(6)].map((_, i) => (
          <ellipse
            key={`petal-${i}`}
            cx="0"
            cy="-10"
            rx="2.5"
            ry="4"
            transform={`rotate(${i * 60})`}
            fill="#C4847A"
          />
        ))}
      </g>

      {/* Surrounding Seed Beads / Akshata along Outer Contour */}
      {[...Array(12)].map((_, i) => {
        const y = 60 + i * 7;
        const x = 16 + Math.sin(i * 0.5) * 5;
        return (
          <circle key={`seed-${i}`} cx={x} cy={y} r="1.5" fill="url(#mpGoldGrad)" />
        );
      })}

      {/* Sage green bottom leaf accent */}
      <path
        d="M 60 148 C 68 156 82 158 88 152 C 84 144 72 144 60 148 Z"
        fill="url(#mpSageGrad)"
        stroke="#8A9D78"
        strokeWidth="0.5"
      />
    </svg>
  );
};

/**
 * 4. Palace Diya (Deepak Lamp) Variant:
 * Auspicious brass oil lamp with radiant flame, symbolizing divine light and blessings.
 * ViewBox: 120x120.
 */
export const MahalDiya: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        <linearGradient id="mdGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FAF1D0" />
          <stop offset="35%" stopColor="#D4A853" />
          <stop offset="75%" stopColor="#AD7F2D" />
          <stop offset="100%" stopColor="#DFC06E" />
        </linearGradient>

        <linearGradient id="mdFlameGrad" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stopColor="#C67B5C" />
          <stop offset="30%" stopColor="#E89234" />
          <stop offset="70%" stopColor="#F5D061" />
          <stop offset="100%" stopColor="#FFFDF9" />
        </linearGradient>

        <filter id="mdGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Sacred Halo Glow */}
      <circle cx="60" cy="38" r="24" fill="#FCE9BD" opacity="0.4" filter="url(#mdGlow)" />

      {/* Luminous Diya Flame */}
      {/* Outer Flame */}
      <path
        d="M 60 16
           C 52 28 48 38 48 46
           C 48 55 54 60 60 60
           C 66 60 72 55 72 46
           C 72 38 68 28 60 16 Z"
        fill="url(#mdFlameGrad)"
      />
      {/* Inner White-Hot Flame Core */}
      <path
        d="M 60 28
           C 56 36 54 42 54 48
           C 54 54 57 56 60 56
           C 63 56 66 54 66 48
           C 66 42 64 36 60 28 Z"
        fill="#FFFFFF"
        opacity="0.9"
      />

      {/* Diya Lamp Base (Brass/Earthen Bowl) */}
      {/* Diya Rim / Oil Reservoir */}
      <ellipse cx="60" cy="62" rx="38" ry="10" fill="url(#mdGoldGrad)" stroke="#A57929" strokeWidth="0.8" />
      <ellipse cx="60" cy="61" rx="34" ry="7" fill="#C67B5C" opacity="0.65" />

      {/* Diya Cup / Belly */}
      <path
        d="M 22 62
           C 22 78 38 90 60 90
           C 82 90 98 78 98 62
           C 90 68 76 72 60 72
           C 44 72 30 68 22 62 Z"
        fill="url(#mdGoldGrad)"
        stroke="#A57929"
        strokeWidth="1"
      />

      {/* Diya Engravings / Petal Pattern on Belly */}
      <path
        d="M 40 70 Q 50 82 60 72 Q 70 82 80 70"
        stroke="#FFF8F0"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />

      {/* Pedestal Stand */}
      <path
        d="M 52 90 L 46 102 L 74 102 L 68 90 Z"
        fill="url(#mdGoldGrad)"
        stroke="#A57929"
        strokeWidth="0.8"
      />
      <rect x="40" y="102" width="40" height="6" rx="2" fill="url(#mdGoldGrad)" />

      {/* Sparkles around flame */}
      <circle cx="42" cy="24" r="1.5" fill="#D4A853" />
      <circle cx="78" cy="24" r="1.5" fill="#D4A853" />
      <circle cx="60" cy="8" r="2" fill="#D4A853" />
    </svg>
  );
};

/**
 * Main MahalDecoration Component:
 * Allows rendering any of the traditional Indian motifs via `variant` prop.
 * Defaults to 'corner'.
 */
export const MahalDecoration: React.FC<MahalDecorationProps> = ({
  variant = 'corner',
  className,
  style,
}) => {
  switch (variant) {
    case 'jharokha':
      return <MahalJharokha className={className} style={style} />;
    case 'paisley':
      return <MahalPaisley className={className} style={style} />;
    case 'diya':
      return <MahalDiya className={className} style={style} />;
    case 'corner':
    default:
      return <MahalCorner className={className} style={style} />;
  }
};

export default MahalDecoration;
