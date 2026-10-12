import React from 'react';

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export const WeddingArch: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Champagne Gold Gradient */}
        <linearGradient id="waGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FDF4D4" />
          <stop offset="30%" stopColor="#D4A853" />
          <stop offset="70%" stopColor="#AF802C" />
          <stop offset="100%" stopColor="#DFC06E" />
        </linearGradient>

        {/* Blush Pink Gradient */}
        <linearGradient id="waBlushGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFF2F0" />
          <stop offset="50%" stopColor="#F2D5D0" />
          <stop offset="100%" stopColor="#DC9E95" />
        </linearGradient>

        {/* Deep Rose Gradient */}
        <linearGradient id="waRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D98A7F" />
          <stop offset="100%" stopColor="#B3554A" />
        </linearGradient>

        {/* Sage Green Leaf Gradient */}
        <linearGradient id="waSageGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#C9DAB9" />
          <stop offset="100%" stopColor="#95A882" />
        </linearGradient>

        {/* Marigold Orange / Gold */}
        <linearGradient id="waMarigoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F5B853" />
          <stop offset="60%" stopColor="#D98236" />
          <stop offset="100%" stopColor="#B55B1B" />
        </linearGradient>

        {/* Terracotta Gradient */}
        <linearGradient id="waTerraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#DE8D6E" />
          <stop offset="100%" stopColor="#A85737" />
        </linearGradient>

        {/* Reusable Marigold Flower */}
        <g id="wa-marigold">
          <circle cx="0" cy="0" r="10" fill="url(#waMarigoldGrad)" />
          <circle cx="0" cy="0" r="7" fill="#F7CA68" />
          <circle cx="0" cy="0" r="4" fill="#D98236" />
          <circle cx="0" cy="0" r="1.5" fill="#FAF8F5" />
        </g>

        {/* Reusable Jasmine Bead */}
        <g id="wa-jasmine-bead">
          <circle cx="0" cy="0" r="4" fill="#FFFDF9" stroke="#E5DAC9" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="1.2" fill="#D4A853" />
        </g>

        {/* Reusable Full Rose Bloom */}
        <g id="wa-rose">
          <circle cx="0" cy="0" r="16" fill="url(#waBlushGrad)" />
          {/* Inner Petal Layers */}
          <path d="M-12 -6 C-10 -14 0 -15 8 -10 C14 -5 13 6 8 11 C2 15 -8 13 -12 6 Z" fill="url(#waRoseGrad)" opacity="0.6" />
          <path d="M-8 -3 C-7 -9 1 -10 6 -6 C9 -3 8 4 5 7 C1 10 -5 9 -8 4 Z" fill="url(#waBlushGrad)" />
          <path d="M-4 -1 C-3 -5 1 -6 4 -3 C6 -1 5 3 3 5 C0 7 -3 6 -4 2 Z" fill="#FFF8F0" />
          <circle cx="0" cy="0" r="2.5" fill="#D4A853" />
        </g>

        {/* Hanging Golden Bell / Ghungroo Tassel */}
        <g id="wa-bell-tassel">
          <line x1="0" y1="0" x2="0" y2="28" stroke="url(#waGoldGrad)" strokeWidth="1.2" />
          <circle cx="0" cy="28" r="2" fill="url(#waGoldGrad)" />
          {/* Bell Cup */}
          <path d="M-6 32 C-6 28 6 28 6 32 L8 42 C8 44 -8 44 -8 42 Z" fill="url(#waGoldGrad)" stroke="#A87B2E" strokeWidth="0.5" />
          <circle cx="0" cy="44" r="2" fill="#C4847A" />
        </g>

        {/* Sage Green Leaf Cluster */}
        <g id="wa-leaf-cluster">
          <path d="M0 0 C-12 -10 -15 -25 0 -35 C15 -25 12 -10 0 0 Z" fill="url(#waSageGrad)" stroke="#879B75" strokeWidth="0.5" />
          <path d="M0 0 C-25 -5 -32 -20 -28 -32 C-15 -30 -5 -15 0 0 Z" fill="url(#waSageGrad)" opacity="0.8" />
          <path d="M0 0 C25 -5 32 -20 28 -32 C15 -30 5 -15 0 0 Z" fill="url(#waSageGrad)" opacity="0.8" />
        </g>
      </defs>

      {/* ========================================================
          1. ARCHITECTURAL RAJASTHANI / MUGHAL TREFOIL ARCH FRAME
         ======================================================== */}
      <g id="architectural-arch" stroke="url(#waGoldGrad)">
        {/* Outermost Outline of the Arch */}
        <path
          d="M 90 600
             L 90 280
             C 90 200 130 140 210 110
             C 270 85 330 95 400 45
             C 470 95 530 85 590 110
             C 670 140 710 200 710 280
             L 710 600"
          fill="none"
          strokeWidth="2.5"
          opacity="0.85"
        />

        {/* Secondary Inner Trefoil Arch */}
        <path
          d="M 115 600
             L 115 290
             C 115 220 150 165 225 135
             C 280 112 335 122 400 75
             C 465 122 520 112 575 135
             C 650 165 685 220 685 290
             L 685 600"
          fill="none"
          strokeWidth="1.2"
          strokeDasharray="4 3"
          opacity="0.7"
        />

        {/* Decorative Scalloped Cusp Inner Border */}
        <path
          d="M 135 600
             L 135 300
             C 135 240 165 190 235 160
             C 260 150 285 148 310 155
             C 335 140 365 125 400 105
             C 435 125 465 140 490 155
             C 515 148 540 150 565 160
             C 635 190 665 240 665 300
             L 665 600"
          fill="none"
          stroke="#FAF8F5"
          strokeWidth="1"
          opacity="0.5"
        />

        {/* Arch Apex Finial / Kalash Motif at (400, 45) */}
        <g transform="translate(400, 45)">
          <path d="M0 0 L-8 -15 Q-15 -30 0 -42 Q15 -30 8 -15 Z" fill="url(#waGoldGrad)" stroke="#B68735" strokeWidth="0.8" />
          <circle cx="0" cy="-45" r="3" fill="#D4A853" />
          <circle cx="0" cy="-22" r="3.5" fill="#FAF8F5" />
          <path d="M-15 0 Q0 -6 15 0" stroke="url(#waGoldGrad)" strokeWidth="1.5" />
        </g>

        {/* Left & Right Pillar Base Moldings */}
        <rect x="75" y="560" width="45" height="40" rx="3" fill="url(#waGoldGrad)" opacity="0.4" stroke="url(#waGoldGrad)" strokeWidth="1" />
        <rect x="680" y="560" width="45" height="40" rx="3" fill="url(#waGoldGrad)" opacity="0.4" stroke="url(#waGoldGrad)" strokeWidth="1" />
      </g>

      {/* ========================================================
          2. JASMINE STRINGS (Hanging gracefully from the arch curves)
         ======================================================== */}
      <g id="jasmine-garland-hangers">
        {/* Left Side Cascading Strands */}
        {[...Array(9)].map((_, i) => (
          <use key={`j-left-1-${i}`} href="#wa-jasmine-bead" x="140" y={220 + i * 22} />
        ))}
        {[...Array(12)].map((_, i) => (
          <use key={`j-left-2-${i}`} href="#wa-jasmine-bead" x="165" y={200 + i * 20} />
        ))}
        {[...Array(8)].map((_, i) => (
          <use key={`j-left-3-${i}`} href="#wa-jasmine-bead" x="190" y={175 + i * 22} />
        ))}

        {/* Right Side Cascading Strands */}
        {[...Array(9)].map((_, i) => (
          <use key={`j-right-1-${i}`} href="#wa-jasmine-bead" x="660" y={220 + i * 22} />
        ))}
        {[...Array(12)].map((_, i) => (
          <use key={`j-right-2-${i}`} href="#wa-jasmine-bead" x="635" y={200 + i * 20} />
        ))}
        {[...Array(8)].map((_, i) => (
          <use key={`j-right-3-${i}`} href="#wa-jasmine-bead" x="610" y={175 + i * 22} />
        ))}

        {/* Center Canopy Jasmine Drops */}
        {[...Array(6)].map((_, i) => (
          <use key={`j-center-l-${i}`} href="#wa-jasmine-bead" x="350" y={130 + i * 18} />
        ))}
        {[...Array(7)].map((_, i) => (
          <use key={`j-center-m-${i}`} href="#wa-jasmine-bead" x="400" y={115 + i * 18} />
        ))}
        {[...Array(6)].map((_, i) => (
          <use key={`j-center-r-${i}`} href="#wa-jasmine-bead" x="450" y={130 + i * 18} />
        ))}

        {/* Tassels at the end of jasmine strands */}
        <use href="#wa-bell-tassel" x="140" y="420" />
        <use href="#wa-bell-tassel" x="165" y="440" />
        <use href="#wa-bell-tassel" x="190" y="350" />
        <use href="#wa-bell-tassel" x="660" y="420" />
        <use href="#wa-bell-tassel" x="635" y="440" />
        <use href="#wa-bell-tassel" x="610" y="350" />
        <use href="#wa-bell-tassel" x="400" y="240" />
      </g>

      {/* ========================================================
          3. MARIGOLD GARLAND STRINGS (Dense festive ropes)
         ======================================================== */}
      <g id="marigold-garlands">
        {/* Left Column Marigold Garland Rope */}
        {[...Array(18)].map((_, i) => (
          <use key={`mg-left-${i}`} href="#wa-marigold" x="105" y={160 + i * 24} />
        ))}

        {/* Right Column Marigold Garland Rope */}
        {[...Array(18)].map((_, i) => (
          <use key={`mg-right-${i}`} href="#wa-marigold" x="695" y={160 + i * 24} />
        ))}

        {/* Curved Marigold Arch Swags across the top */}
        <use href="#wa-marigold" x="220" y="110" />
        <use href="#wa-marigold" x="242" y="100" />
        <use href="#wa-marigold" x="265" y="93" />
        <use href="#wa-marigold" x="290" y="88" />
        <use href="#wa-marigold" x="315" y="80" />
        <use href="#wa-marigold" x="340" y="70" />
        <use href="#wa-marigold" x="368" y="58" />

        <use href="#wa-marigold" x="432" y="58" />
        <use href="#wa-marigold" x="460" y="70" />
        <use href="#wa-marigold" x="485" y="80" />
        <use href="#wa-marigold" x="510" y="88" />
        <use href="#wa-marigold" x="535" y="93" />
        <use href="#wa-marigold" x="558" y="100" />
        <use href="#wa-marigold" x="580" y="110" />
      </g>

      {/* ========================================================
          4. LUSH FLORAL BOUQUETS & ROSES AT ARCH JOINTS & CORNERS
         ======================================================== */}
      {/* --- Top Center Apex Floral Cluster --- */}
      <g id="apex-bouquet" transform="translate(400, 70)">
        <use href="#wa-leaf-cluster" transform="scale(1.2)" />
        <use href="#wa-leaf-cluster" transform="rotate(180) scale(1.1)" />
        <use href="#wa-rose" x="-25" y="0" transform="scale(1.1)" />
        <use href="#wa-rose" x="25" y="0" transform="scale(1.1)" />
        <use href="#wa-rose" x="0" y="-12" transform="scale(1.3)" />
        <circle cx="-38" cy="12" r="7" fill="url(#waMarigoldGrad)" />
        <circle cx="38" cy="12" r="7" fill="url(#waMarigoldGrad)" />
        <circle cx="0" cy="18" r="8" fill="#F2D5D0" stroke="#C4847A" strokeWidth="0.8" />
      </g>

      {/* --- Top Left Arch Shoulder Cluster --- */}
      <g id="left-shoulder-bouquet" transform="translate(190, 130)">
        <use href="#wa-leaf-cluster" transform="rotate(-40) scale(1.2)" />
        <use href="#wa-rose" x="-10" y="-8" transform="scale(1.2)" />
        <use href="#wa-rose" x="18" y="12" transform="scale(0.9)" />
        <use href="#wa-marigold" x="-28" y="16" />
        <use href="#wa-marigold" x="15" y="-22" />
      </g>

      {/* --- Top Right Arch Shoulder Cluster --- */}
      <g id="right-shoulder-bouquet" transform="translate(610, 130)">
        <use href="#wa-leaf-cluster" transform="rotate(40) scale(1.2)" />
        <use href="#wa-rose" x="10" y="-8" transform="scale(1.2)" />
        <use href="#wa-rose" x="-18" y="12" transform="scale(0.9)" />
        <use href="#wa-marigold" x="28" y="16" />
        <use href="#wa-marigold" x="-15" y="-22" />
      </g>

      {/* --- Mid Left Pillar Floral Tieback --- */}
      <g id="left-mid-cluster" transform="translate(100, 320)">
        <use href="#wa-leaf-cluster" transform="rotate(70)" />
        <use href="#wa-rose" x="6" y="0" transform="scale(1.1)" />
        <use href="#wa-rose" x="14" y="-20" transform="scale(0.8)" />
        <use href="#wa-marigold" x="-6" y="18" />
        <use href="#wa-marigold" x="22" y="16" />
      </g>

      {/* --- Mid Right Pillar Floral Tieback --- */}
      <g id="right-mid-cluster" transform="translate(700, 320)">
        <use href="#wa-leaf-cluster" transform="rotate(-70)" />
        <use href="#wa-rose" x="-6" y="0" transform="scale(1.1)" />
        <use href="#wa-rose" x="-14" y="-20" transform="scale(0.8)" />
        <use href="#wa-marigold" x="6" y="18" />
        <use href="#wa-marigold" x="-22" y="16" />
      </g>

      {/* --- Lower Left Pillar Base Floral Base --- */}
      <g id="left-base-cluster" transform="translate(95, 540)">
        <use href="#wa-leaf-cluster" transform="rotate(30)" />
        <use href="#wa-rose" x="8" y="-12" transform="scale(1.2)" />
        <use href="#wa-rose" x="22" y="12" transform="scale(0.9)" />
        <use href="#wa-marigold" x="-12" y="6" />
        <use href="#wa-marigold" x="12" y="-32" />
      </g>

      {/* --- Lower Right Pillar Base Floral Base --- */}
      <g id="right-base-cluster" transform="translate(705, 540)">
        <use href="#wa-leaf-cluster" transform="rotate(-30)" />
        <use href="#wa-rose" x="-8" y="-12" transform="scale(1.2)" />
        <use href="#wa-rose" x="-22" y="12" transform="scale(0.9)" />
        <use href="#wa-marigold" x="12" y="6" />
        <use href="#wa-marigold" x="-12" y="-32" />
      </g>

      {/* ========================================================
          5. FLOATING PETALS & CELEBRATION SPARKLES IN AIR
         ======================================================== */}
      <g id="floating-ambiance" opacity="0.75">
        {/* Soft blush petals drifting around pillars */}
        <path d="M170 300 C175 292 186 294 188 301 C189 307 180 313 172 310 Z" fill="#F2D5D0" stroke="#C4847A" strokeWidth="0.5" />
        <path d="M630 290 C635 282 646 284 648 291 C649 297 640 303 632 300 Z" fill="#F2D5D0" stroke="#C4847A" strokeWidth="0.5" />
        <path d="M210 420 C215 412 226 414 228 421 C229 427 220 433 212 430 Z" fill="#F2D5D0" stroke="#C4847A" strokeWidth="0.5" />
        <path d="M590 410 C595 402 606 404 608 411 C609 417 600 423 592 420 Z" fill="#F2D5D0" stroke="#C4847A" strokeWidth="0.5" />

        {/* Golden sparkles */}
        <circle cx="280" cy="180" r="1.8" fill="#D4A853" />
        <circle cx="520" cy="180" r="1.8" fill="#D4A853" />
        <circle cx="340" cy="220" r="1.5" fill="#D4A853" />
        <circle cx="460" cy="220" r="1.5" fill="#D4A853" />
        <circle cx="400" cy="260" r="2" fill="#D4A853" />

        <path d="M400 252 Q400 268 400 268 M392 260 Q408 260 408 260" stroke="#D4A853" strokeWidth="0.8" />
      </g>
    </svg>
  );
};

export default WeddingArch;
