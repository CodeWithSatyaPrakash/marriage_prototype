import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import type { WeddingEvent } from '../config/wedding';

interface EventCardProps {
  event: WeddingEvent;
  index?: number;
}

// Custom inline SVG illustrations designed specifically for Indian wedding ceremonies
const HaldiIllustration: React.FC = () => (
  <svg
    viewBox="0 0 240 140"
    className="w-full h-36 mx-auto filter drop-shadow-sm select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Haldi ceremony illustration with turmeric bowl and marigold flowers"
    role="img"
  >
    <defs>
      <linearGradient id="haldiBowlGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F59E0B" />
        <stop offset="50%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#B45309" />
      </linearGradient>
      <linearGradient id="pasteGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FDE047" />
        <stop offset="100%" stopColor="#EAB308" />
      </linearGradient>
      <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FEF08A" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="marigoldGrad" cx="40%" cy="40%" r="60%">
        <stop offset="0%" stopColor="#FBBF24" />
        <stop offset="70%" stopColor="#F59E0B" />
        <stop offset="100%" stopColor="#D97706" />
      </radialGradient>
    </defs>

    {/* Background warm celebratory glow */}
    <circle cx="120" cy="70" r="60" fill="url(#sunGlow)" />

    {/* Hanging marigold toran / garland garland arcs */}
    <path
      d="M20 20 Q 70 45, 120 25 Q 170 45, 220 20"
      stroke="#B45309"
      strokeWidth="1.5"
      strokeDasharray="2 3"
      fill="none"
      opacity="0.6"
    />
    {[25, 45, 70, 95, 120, 145, 170, 195, 215].map((cx, i) => (
      <g key={`toran-${i}`}>
        <circle cx={cx} cy={22 + Math.sin(i * 0.8) * 8} r="5.5" fill="url(#marigoldGrad)" />
        <circle cx={cx} cy={22 + Math.sin(i * 0.8) * 8} r="2.5" fill="#DC2626" />
      </g>
    ))}

    {/* Turmeric Urli / Brass Bowl */}
    <ellipse cx="120" cy="100" rx="42" ry="16" fill="url(#haldiBowlGrad)" stroke="#78350F" strokeWidth="1" />
    <ellipse cx="120" cy="96" rx="38" ry="12" fill="#92400E" />
    <ellipse cx="120" cy="94" rx="36" ry="10" fill="url(#pasteGrad)" />

    {/* Haldi dollop texture */}
    <path
      d="M102 93 C 112 85, 128 85, 138 93 C 132 99, 108 99, 102 93 Z"
      fill="#FACC15"
      opacity="0.9"
    />
    <circle cx="118" cy="91" r="2.5" fill="#FEF08A" />

    {/* Marigolds around the bowl */}
    <g transform="translate(68, 92)">
      <circle cx="12" cy="12" r="11" fill="url(#marigoldGrad)" />
      <circle cx="12" cy="12" r="6" fill="#F97316" />
      <circle cx="12" cy="12" r="2.5" fill="#EF4444" />
      {/* Petals */}
      <circle cx="12" cy="1" r="3" fill="#FBBF24" />
      <circle cx="23" cy="12" r="3" fill="#FBBF24" />
      <circle cx="12" cy="23" r="3" fill="#FBBF24" />
      <circle cx="1" cy="12" r="3" fill="#FBBF24" />
    </g>

    <g transform="translate(148, 92)">
      <circle cx="12" cy="12" r="11" fill="url(#marigoldGrad)" />
      <circle cx="12" cy="12" r="6" fill="#F97316" />
      <circle cx="12" cy="12" r="2.5" fill="#EF4444" />
      {/* Petals */}
      <circle cx="12" cy="1" r="3" fill="#FBBF24" />
      <circle cx="23" cy="12" r="3" fill="#FBBF24" />
      <circle cx="12" cy="23" r="3" fill="#FBBF24" />
      <circle cx="1" cy="12" r="3" fill="#FBBF24" />
    </g>

    {/* Floating celebratory petals */}
    <circle cx="75" cy="55" r="2" fill="#F59E0B" opacity="0.8" />
    <circle cx="165" cy="50" r="2.5" fill="#EAB308" opacity="0.9" />
    <circle cx="50" cy="78" r="1.8" fill="#FBBF24" opacity="0.7" />
    <circle cx="190" cy="75" r="2.2" fill="#F59E0B" opacity="0.85" />
    <path
      d="M120 48 Q 123 42, 120 36 Q 117 42, 120 48 Z"
      fill="#FBBF24"
      opacity="0.9"
    />
  </svg>
);

const WeddingIllustration: React.FC = () => (
  <svg
    viewBox="0 0 240 140"
    className="w-full h-36 mx-auto filter drop-shadow-sm select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Vedic wedding mandap with drapes, holy fire, and floral garlands"
    role="img"
  >
    <defs>
      <linearGradient id="mandapGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FDE68A" />
        <stop offset="50%" stopColor="#D4A853" />
        <stop offset="100%" stopColor="#92400E" />
      </linearGradient>
      <linearGradient id="drapeRed" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#991B1B" />
        <stop offset="60%" stopColor="#B91C1C" />
        <stop offset="100%" stopColor="#7F1D1D" />
      </linearGradient>
      <linearGradient id="havanFire" x1="0%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#DC2626" />
        <stop offset="50%" stopColor="#F97316" />
        <stop offset="100%" stopColor="#FEF08A" />
      </linearGradient>
      <radialGradient id="fireGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FBBF24" stopOpacity="0.4" />
        <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Mandap Base Stage */}
    <rect x="44" y="118" width="152" height="6" rx="2" fill="url(#mandapGold)" />
    <rect x="52" y="124" width="136" height="4" rx="1" fill="#78350F" opacity="0.6" />

    {/* Mandap Pillars */}
    <rect x="56" y="32" width="8" height="86" rx="1.5" fill="url(#mandapGold)" />
    <rect x="176" y="32" width="8" height="86" rx="1.5" fill="url(#mandapGold)" />
    <rect x="54" y="30" width="12" height="5" rx="1" fill="#B45309" />
    <rect x="174" y="30" width="12" height="5" rx="1" fill="#B45309" />
    <rect x="54" y="113" width="12" height="5" rx="1" fill="#B45309" />
    <rect x="174" y="113" width="12" height="5" rx="1" fill="#B45309" />

    {/* Mandap Top Canopy Arch */}
    <path
      d="M56 34 Q 120 16, 184 34"
      stroke="url(#mandapGold)"
      strokeWidth="4"
      fill="none"
    />
    <path
      d="M56 38 Q 120 22, 184 38"
      stroke="#B45309"
      strokeWidth="1.5"
      fill="none"
    />

    {/* Elegant Curving Drapes */}
    <path
      d="M58 35 Q 85 55, 60 110 Q 56 70, 58 35 Z"
      fill="url(#drapeRed)"
      opacity="0.9"
    />
    <path
      d="M182 35 Q 155 55, 180 110 Q 184 70, 182 35 Z"
      fill="url(#drapeRed)"
      opacity="0.9"
    />

    {/* Center Swag Drapes */}
    <path
      d="M66 35 Q 120 62, 174 35 Q 120 48, 66 35 Z"
      fill="url(#drapeRed)"
      opacity="0.85"
    />

    {/* Kalash on top apex */}
    <circle cx="120" cy="18" r="4.5" fill="url(#mandapGold)" />
    <path d="M120 10 L 122 14 L 118 14 Z" fill="#D4A853" />

    {/* Marigold Garland Hanging across arch */}
    {[75, 90, 105, 120, 135, 150, 165].map((cx, i) => (
      <circle
        key={`wedding-garland-${i}`}
        cx={cx}
        cy={34 + Math.sin((i / 6) * Math.PI) * 9}
        r="3.5"
        fill={i % 2 === 0 ? '#F59E0B' : '#DC2626'}
      />
    ))}

    {/* Havan Kund (Sacred Fire) in center */}
    <circle cx="120" cy="104" r="26" fill="url(#fireGlow)" />
    {/* Kund Stepped Basin */}
    <polygon points="106,118 134,118 130,110 110,110" fill="#78350F" />
    <polygon points="108,110 132,110 128,105 112,105" fill="#9A3412" />

    {/* Holy Flames */}
    <path
      d="M120 86 Q 127 96, 122 104 Q 118 96, 120 86 Z"
      fill="url(#havanFire)"
    />
    <path
      d="M116 90 Q 112 97, 117 103 Q 119 98, 116 90 Z"
      fill="#F97316"
      opacity="0.9"
    />
    <path
      d="M124 91 Q 128 97, 123 103 Q 121 98, 124 91 Z"
      fill="#FBBF24"
      opacity="0.9"
    />
  </svg>
);

const ReceptionIllustration: React.FC = () => (
  <svg
    viewBox="0 0 240 140"
    className="w-full h-36 mx-auto filter drop-shadow-sm select-none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Grand reception stage chandelier with champagne gold glows"
    role="img"
  >
    <defs>
      <linearGradient id="champagneGold" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FEF3C7" />
        <stop offset="40%" stopColor="#D4A853" />
        <stop offset="100%" stopColor="#92400E" />
      </linearGradient>
      <radialGradient id="chandelierGlow" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FEF3C7" stopOpacity="0.8" />
        <stop offset="50%" stopColor="#FDE68A" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#D4A853" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Stage Ambient Glow */}
    <ellipse cx="120" cy="65" rx="80" ry="50" fill="url(#chandelierGlow)" />

    {/* Stage Arch Background */}
    <path
      d="M40 125 C 40 40, 200 40, 200 125"
      stroke="#D4A853"
      strokeWidth="1.5"
      strokeDasharray="4 4"
      opacity="0.5"
      fill="none"
    />
    <path
      d="M48 125 C 48 50, 192 50, 192 125"
      stroke="#E5D0A1"
      strokeWidth="1"
      opacity="0.4"
      fill="none"
    />

    {/* Grand Chandelier Mount Chain */}
    <line x1="120" y1="10" x2="120" y2="35" stroke="url(#champagneGold)" strokeWidth="2" />
    <circle cx="120" cy="14" r="3" fill="#D4A853" />
    <circle cx="120" cy="24" r="3" fill="#D4A853" />

    {/* Tier 1 - Top Crown */}
    <path d="M108 36 Q 120 32, 132 36 L 128 40 L 112 40 Z" fill="url(#champagneGold)" />

    {/* Tier 2 - Main Ring */}
    <path
      d="M92 48 Q 120 42, 148 48 Q 120 54, 92 48 Z"
      fill="url(#champagneGold)"
    />

    {/* Candle lights / Lamps on Ring */}
    {[-24, -12, 0, 12, 24].map((offset, idx) => (
      <g key={`lamp-${idx}`} transform={`translate(${120 + offset}, 45)`}>
        <line x1="0" y1="0" x2="0" y2="-6" stroke="#D4A853" strokeWidth="1.5" />
        <ellipse cx="0" cy="-8" rx="2" ry="3.5" fill="#FEF08A" />
        <circle cx="0" cy="-8" r="1" fill="#FFFFFF" />
      </g>
    ))}

    {/* Tier 3 - Middle Ring & Crystal Drops */}
    <path
      d="M100 62 Q 120 58, 140 62 Q 120 66, 100 62 Z"
      fill="url(#champagneGold)"
    />

    {/* Crystal Strands Hanging down */}
    {[-22, -14, -7, 0, 7, 14, 22].map((xOff, idx) => {
      const dropLen = 14 - Math.abs(xOff) * 0.45;
      return (
        <g key={`drop-${idx}`} transform={`translate(${120 + xOff}, 64)`}>
          <line x1="0" y1="0" x2="0" y2={dropLen} stroke="#E5D0A1" strokeWidth="1" strokeDasharray="1.5 1.5" />
          <polygon
            points={`0,${dropLen + 4} -2,${dropLen} 0,${dropLen - 2} 2,${dropLen}`}
            fill="#FEF3C7"
            stroke="#D4A853"
            strokeWidth="0.5"
          />
        </g>
      );
    })}

    {/* Bottom Finial Crystal */}
    <circle cx="120" cy="84" r="3.5" fill="url(#champagneGold)" />
    <polygon points="120,94 117,87 123,87" fill="#FEF3C7" stroke="#D4A853" strokeWidth="0.5" />

    {/* Celebratory Star Sparkles */}
    {[
      { cx: 70, cy: 38, scale: 0.8 },
      { cx: 170, cy: 42, scale: 0.9 },
      { cx: 80, cy: 82, scale: 0.7 },
      { cx: 165, cy: 78, scale: 0.8 },
      { cx: 120, cy: 110, scale: 1 },
    ].map((sparkle, i) => (
      <path
        key={`sparkle-${i}`}
        d={`M${sparkle.cx} ${sparkle.cy - 5 * sparkle.scale} Q ${sparkle.cx} ${sparkle.cy} ${sparkle.cx + 5 * sparkle.scale} ${sparkle.cy} Q ${sparkle.cx} ${sparkle.cy} ${sparkle.cx} ${sparkle.cy + 5 * sparkle.scale} Q ${sparkle.cx} ${sparkle.cy} ${sparkle.cx - 5 * sparkle.scale} ${sparkle.cy} Q ${sparkle.cx} ${sparkle.cy} ${sparkle.cx} ${sparkle.cy - 5 * sparkle.scale} Z`}
        fill="#D4A853"
        opacity="0.85"
      />
    ))}
  </svg>
);

// Decorative floral corner filigree
const FloralCorner: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 40 40"
    className={`w-8 h-8 text-[#D4A853]/60 ${className}`}
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M0 0 L16 0 C16 8, 8 16, 0 16 Z" fill="currentColor" opacity="0.3" />
    <path
      d="M2 2 Q 18 4, 20 20 Q 4 18, 2 2 Z"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
    />
    <circle cx="6" cy="6" r="2" fill="currentColor" />
    <path
      d="M10 2 Q 14 10, 22 10"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    />
    <path
      d="M2 10 Q 10 14, 10 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="0.8"
    />
  </svg>
);

export const EventCard: React.FC<EventCardProps> = ({ event, index = 0 }) => {
  const renderIllustration = () => {
    switch (event.id) {
      case 'haldi':
        return <HaldiIllustration />;
      case 'wedding':
        return <WeddingIllustration />;
      case 'reception':
        return <ReceptionIllustration />;
      default:
        return <WeddingIllustration />;
    }
  };

  const getThemeAccents = () => {
    switch (event.id) {
      case 'haldi':
        return {
          badge: 'bg-amber-100/80 text-amber-900 border-amber-200',
          gradient: 'from-[#FFFDF7] via-[#FFFBF0] to-[#FFF7E8]',
          dividerColor: 'border-amber-200',
          accentColor: '#D97706',
        };
      case 'wedding':
        return {
          badge: 'bg-rose-100/80 text-rose-900 border-rose-200',
          gradient: 'from-[#FFFDFD] via-[#FFF8F7] to-[#FFF0EE]',
          dividerColor: 'border-rose-200',
          accentColor: '#B91C1C',
        };
      case 'reception':
        return {
          badge: 'bg-amber-100/70 text-amber-950 border-amber-200',
          gradient: 'from-[#FCFAF7] via-[#FAF6EE] to-[#F5EFE0]',
          dividerColor: 'border-amber-200',
          accentColor: '#B45309',
        };
      default:
        return {
          badge: 'bg-stone-100 text-stone-800 border-stone-200',
          gradient: 'from-white via-[#FCFBF9] to-[#F7F4EE]',
          dividerColor: 'border-stone-200',
          accentColor: '#D4A853',
        };
    }
  };

  const accents = getThemeAccents();

  return (
    <motion.article
      initial={{ opacity: 0, y: 36, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.65,
        delay: index * 0.18,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        y: -7,
        transition: { duration: 0.28, ease: 'easeOut' },
      }}
      className={`relative group rounded-3xl p-6 sm:p-7 bg-gradient-to-b ${accents.gradient} 
        border border-[#EBDCD3]/90 shadow-[0_10px_30px_-10px_rgba(180,140,120,0.18)]
        hover:shadow-[0_20px_40px_-12px_rgba(180,140,120,0.3)]
        transition-all duration-300 flex flex-col justify-between overflow-hidden`}
    >
      {/* Decorative floral corner accents */}
      <div className="absolute top-2 left-2 pointer-events-none">
        <FloralCorner />
      </div>
      <div className="absolute top-2 right-2 pointer-events-none rotate-90">
        <FloralCorner />
      </div>
      <div className="absolute bottom-2 left-2 pointer-events-none -rotate-90">
        <FloralCorner />
      </div>
      <div className="absolute bottom-2 right-2 pointer-events-none rotate-180">
        <FloralCorner />
      </div>

      {/* Subtle ornate inner border frame */}
      <div className="absolute inset-3 rounded-2xl border border-[#D4A853]/25 pointer-events-none" />

      {/* Card Content */}
      <div className="relative z-10">
        {/* Top Illustration Area */}
        <div className="mb-4 pt-1 flex items-center justify-center">
          {renderIllustration()}
        </div>

        {/* Ceremony Badge */}
        <div className="flex justify-center mb-3">
          <span
            className={`inline-block px-3.5 py-1 text-xs uppercase tracking-[0.2em] font-medium rounded-full border ${accents.badge}`}
          >
            Ceremony {index + 1}
          </span>
        </div>

        {/* Event Name */}
        <h3 className="font-serif text-2xl sm:text-3xl text-center text-[#2C1810] font-medium tracking-tight mb-3">
          {event.name}
        </h3>

        {/* Decorative Divider with Central Floral Diamond */}
        <div className="flex items-center justify-center gap-3 my-4">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#D4A853]/70" />
          <svg
            className="w-4 h-4 text-[#D4A853]"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z" />
          </svg>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#D4A853]/70" />
        </div>

        {/* Date and Time */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-sm text-[#5C4033] mb-4">
          <div className="flex items-center gap-1.5 font-medium">
            <Calendar className="w-4 h-4 text-[#D4A853]" />
            <span>{event.date}</span>
          </div>
          <span className="hidden sm:inline text-[#D4A853]/60">•</span>
          <div className="flex items-center gap-1.5 font-medium">
            <Clock className="w-4 h-4 text-[#D4A853]" />
            <span>{event.time}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-center text-[#6B574F] text-sm leading-relaxed px-2 pb-2">
          {event.description}
        </p>
      </div>

      {/* Bottom Ornamental Accent Line */}
      <div className="relative z-10 mt-5 pt-3 border-t border-[#EBDCD3]/80 flex items-center justify-center">
        <span className="text-[11px] tracking-widest uppercase text-[#A38275] font-light">
          Warmly Awaiting Your Presence
        </span>
      </div>
    </motion.article>
  );
};

export default EventCard;
