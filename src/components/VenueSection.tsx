import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, Calendar, Clock, Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

// Sacred Indian Mandala vector background
const SacredMandala: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 400 400"
    className={`select-none pointer-events-none fill-none ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <defs>
      <radialGradient id="mandalaGoldGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#D4A853" stopOpacity="0.35" />
        <stop offset="70%" stopColor="#D4A853" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#D4A853" stopOpacity="0" />
      </radialGradient>
    </defs>

    {/* Concentric rings */}
    <circle cx="200" cy="200" r="190" stroke="#D4A853" strokeWidth="1" strokeDasharray="3 6" opacity="0.35" />
    <circle cx="200" cy="200" r="160" stroke="#D4A853" strokeWidth="1.2" opacity="0.4" />
    <circle cx="200" cy="200" r="130" stroke="#D4A853" strokeWidth="0.8" strokeDasharray="4 4" opacity="0.3" />
    <circle cx="200" cy="200" r="95" stroke="#D4A853" strokeWidth="1" opacity="0.5" />
    <circle cx="200" cy="200" r="60" stroke="#D4A853" strokeWidth="1.5" opacity="0.4" />
    <circle cx="200" cy="200" r="25" fill="url(#mandalaGoldGrad)" stroke="#D4A853" strokeWidth="1" />

    {/* 16-Petal Starburst Mandala Pattern */}
    {Array.from({ length: 16 }).map((_, i) => {
      const angle = (i * 360) / 16;
      return (
        <g key={`petal-${i}`} transform={`rotate(${angle} 200 200)`}>
          {/* Outer Petals */}
          <path
            d="M200 40 C212 90, 218 130, 200 160 C182 130, 188 90, 200 40 Z"
            fill="#D4A853"
            opacity="0.1"
            stroke="#D4A853"
            strokeWidth="0.8"
          />
          {/* Inner Petal Highlights */}
          <circle cx="200" cy="95" r="3.5" fill="#D4A853" opacity="0.45" />
          <line x1="200" y1="130" x2="200" y2="160" stroke="#D4A853" strokeWidth="1" opacity="0.5" />
        </g>
      );
    })}

    {/* Central 8-pointed star */}
    {Array.from({ length: 8 }).map((_, i) => {
      const angle = (i * 360) / 8 + 22.5;
      return (
        <g key={`star-${i}`} transform={`rotate(${angle} 200 200)`}>
          <path
            d="M200 140 L206 170 L200 200 L194 170 Z"
            fill="#D4A853"
            opacity="0.2"
          />
        </g>
      );
    })}
  </svg>
);

// Animated Sparkles
const GoldenSparkles: React.FC = () => {
  const sparkles = [
    { top: '15%', left: '12%', size: 14, delay: 0 },
    { top: '22%', right: '14%', size: 18, delay: 0.6 },
    { top: '48%', left: '8%', size: 12, delay: 1.2 },
    { top: '65%', right: '10%', size: 16, delay: 0.3 },
    { top: '80%', left: '18%', size: 20, delay: 0.9 },
    { top: '85%', right: '22%', size: 14, delay: 1.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {sparkles.map((sp, idx) => (
        <motion.div
          key={`sparkle-${idx}`}
          style={{
            position: 'absolute',
            top: sp.top,
            left: sp.left,
            right: sp.right,
          }}
          animate={{
            scale: [0.6, 1.25, 0.6],
            opacity: [0.2, 0.95, 0.2],
            rotate: [0, 45, 90],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: sp.delay,
            ease: 'easeInOut',
          }}
        >
          <svg
            width={sp.size}
            height={sp.size}
            viewBox="0 0 24 24"
            fill="#FBBF24"
            className="filter drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]"
          >
            <path d="M12 0 L14.5 9.5 L24 12 L14.5 14.5 L12 24 L9.5 14.5 L0 12 L9.5 9.5 Z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
};

export const VenueSection: React.FC = () => {
  const { venue, venueClosing, closingMessage, bride, groom } = weddingConfig;

  return (
    <section
      id="venue"
      aria-label="Wedding Venue and Climax"
      className="relative pt-28 pb-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#25130E] via-[#351B14] to-[#1C0D0A] text-[#FAF5EE] overflow-hidden"
    >
      {/* Decorative Rotating/Pulsing Mandala in Background */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[850px] h-[650px] sm:h-[850px] pointer-events-none opacity-25"
      >
        <SacredMandala className="w-full h-full" />
      </motion.div>

      {/* Golden Warm Spotlights */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-[#D4A853]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#C67B5C]/20 rounded-full blur-[100px] pointer-events-none" />

      {/* Golden Sparkle Effects */}
      <GoldenSparkles />



      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Subtitle tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4A853]/40 bg-[#D4A853]/10 backdrop-blur-sm text-xs sm:text-sm text-[#FDE68A] uppercase tracking-[0.25em] mb-6"
        >
          <MapPin className="w-3.5 h-3.5 text-[#FBBF24]" />
          <span>The Destination of Our Forever</span>
        </motion.div>

        {/* Venue Title - Emotional Climax */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.15 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#FFF8F0] mb-4 drop-shadow-md"
        >
          {venue.name}
        </motion.h2>

        {/* City and State */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="text-xl sm:text-2xl text-[#E5D0A1] font-light tracking-wide mb-8"
        >
          {venue.city}, {venue.state}
        </motion.p>

        {/* Ornamental Divider */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="h-px w-20 sm:w-32 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent" />
          <span className="text-[#D4A853] text-lg">✦</span>
          <div className="h-px w-20 sm:w-32 bg-gradient-to-l from-transparent via-[#D4A853] to-transparent" />
        </div>

        {/* Date, Time & Address Glass Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="max-w-xl mx-auto rounded-3xl p-6 sm:p-8 bg-[#200E08]/75 border border-[#D4A853]/30 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.4)] mb-10"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left border-b border-[#D4A853]/20 pb-6 mb-6">
            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#D4A853]/15 text-[#FDE68A] mt-0.5">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#D4A853]">Auspicious Date</p>
                <p className="text-base sm:text-lg font-medium text-[#FFF8F0] mt-0.5">{venue.weddingDate}</p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="p-2.5 rounded-xl bg-[#D4A853]/15 text-[#FDE68A] mt-0.5">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-[#D4A853]">Muhurat Time</p>
                <p className="text-base sm:text-lg font-medium text-[#FFF8F0] mt-0.5">{venue.weddingTime}</p>
              </div>
            </div>
          </div>

          <p className="text-sm sm:text-base text-[#D4C3B8] leading-relaxed mb-6 text-center">
            {venue.fullAddress}
          </p>

          {/* Get Directions Button */}
          <div className="flex justify-center">
            <a
              href={venue.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-gradient-to-r from-[#D4A853] via-[#E5B962] to-[#C9983E] text-[#241209] font-medium text-sm sm:text-base tracking-wide shadow-lg shadow-[#D4A853]/25 hover:shadow-xl hover:shadow-[#D4A853]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              <Navigation className="w-4 h-4 fill-current" />
              <span>Get Directions</span>
            </a>
          </div>
        </motion.div>

        {/* Emotional Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-2xl mx-auto space-y-3"
        >
          <p className="font-serif italic text-xl sm:text-2xl text-[#F9E8D9] font-light leading-relaxed">
            "{venueClosing}"
          </p>
          <div className="pt-2 flex items-center justify-center gap-2 text-sm text-[#D4A853]">
            <Heart className="w-4 h-4 fill-current text-[#D4A853]" />
            <span className="tracking-widest uppercase text-xs text-[#E5D0A1]">
              {closingMessage} {bride.name} & {groom.name}
            </span>
            <Heart className="w-4 h-4 fill-current text-[#D4A853]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VenueSection;
