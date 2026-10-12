import React from 'react';
import { motion, type Variants } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { FloatingPetals } from './FloatingPetals';
import { FloralDecoration } from './FloralDecoration';

export interface HeroSectionProps {
  onScrollClick?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollClick }) => {
  const prefersReducedMotion = useReducedMotion();

  const handleScrollDown = () => {
    if (onScrollClick) {
      onScrollClick();
    } else {
      const nextSection = document.getElementById('love-story');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' });
      }
    }
  };

  // Entrance animation variants
  const containerVariants: Variants = {
    hidden: { opacity: prefersReducedMotion ? 1 : 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.18,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      },
    },
  };

  const itemFadeUp: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      y: prefersReducedMotion ? 0 : 25,
      scale: prefersReducedMotion ? 1 : 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.9,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const archVariants: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      scale: prefersReducedMotion ? 1 : 0.94,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 1.2,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <header className="relative min-h-screen w-full flex flex-col items-center justify-between overflow-hidden bg-gradient-to-b from-[#FFF8F0] via-[#FAF8F5] to-[#F8F3EC] px-4 py-8 select-none">
      {/* Floating flower petals */}
      <FloatingPetals />

      {/* Ornate corner decorations */}
      <div className="absolute top-2 left-2 z-10 pointer-events-none opacity-85">
        <FloralDecoration variant="corner-tl" size={130} />
      </div>
      <div className="absolute top-2 right-2 z-10 pointer-events-none opacity-85">
        <FloralDecoration variant="corner-tr" size={130} />
      </div>
      <div className="absolute bottom-2 left-2 z-10 pointer-events-none opacity-85">
        <FloralDecoration variant="corner-bl" size={130} />
      </div>
      <div className="absolute bottom-2 right-2 z-10 pointer-events-none opacity-85">
        <FloralDecoration variant="corner-br" size={130} />
      </div>

      {/* Background Subtle Mandala / Floral Aura */}
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-[0.06] -z-0"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 800 800"
          className="w-[90vw] max-w-[850px] aspect-square text-[#C67B5C]"
          fill="currentColor"
        >
          <circle cx="400" cy="400" r="380" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 6" />
          <circle cx="400" cy="400" r="320" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="400" cy="400" r="240" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 4" />
          <path
            d="M 400 80 Q 420 200 400 400 Q 380 200 400 80 Z"
            fill="currentColor"
          />
          <path
            d="M 400 720 Q 420 600 400 400 Q 380 600 400 720 Z"
            fill="currentColor"
          />
          <path
            d="M 80 400 Q 200 420 400 400 Q 200 380 80 400 Z"
            fill="currentColor"
          />
          <path
            d="M 720 400 Q 600 420 400 400 Q 600 380 720 400 Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Top spacing element */}
      <div className="h-4 md:h-8" />

      {/* Main Center Content inside Floral Arch */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Decorative Royal Mandap Floral Arch */}
        <motion.div
          variants={archVariants}
          className="w-full max-w-2xl mb-2 sm:mb-4 pointer-events-none"
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 680 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto drop-shadow-sm"
          >
            <defs>
              <linearGradient id="heroGoldArch" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#D4A853" stopOpacity="0.1" />
                <stop offset="25%" stopColor="#D4A853" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#F5DFAB" stopOpacity="1" />
                <stop offset="75%" stopColor="#D4A853" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#D4A853" stopOpacity="0.1" />
              </linearGradient>
              <linearGradient id="roseGarland" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#F2D5D0" />
                <stop offset="50%" stopColor="#C4847A" />
                <stop offset="100%" stopColor="#9E5950" />
              </linearGradient>
            </defs>

            {/* Scalloped Arch Crest */}
            <path
              d="M 80 160 C 140 70, 240 25, 340 25 C 440 25, 540 70, 600 160"
              stroke="url(#heroGoldArch)"
              strokeWidth="2.2"
              strokeLinecap="round"
              fill="none"
            />
            {/* Inner beaded arch */}
            <path
              d="M 110 160 C 160 85, 250 45, 340 45 C 430 45, 520 85, 570 160"
              stroke="#D4A853"
              strokeWidth="1.2"
              strokeDasharray="4 4"
              fill="none"
              opacity="0.7"
            />

            {/* Hanging Floral Garlands & Bell Torans */}
            <g opacity="0.85">
              {/* Center Lotus Crest */}
              <circle cx="340" cy="25" r="5" fill="#D4A853" />
              <path
                d="M 340 10 C 332 20, 335 28, 340 33 C 345 28, 348 20, 340 10 Z"
                fill="url(#roseGarland)"
              />
              <path
                d="M 340 14 C 324 22, 330 31, 340 33 C 350 31, 356 22, 340 14 Z"
                fill="#D4A853"
                opacity="0.8"
              />

              {/* Hanging lotus pendants */}
              <line x1="260" y1="52" x2="260" y2="78" stroke="#D4A853" strokeWidth="0.8" />
              <circle cx="260" cy="80" r="3.5" fill="url(#roseGarland)" />

              <line x1="340" y1="35" x2="340" y2="68" stroke="#D4A853" strokeWidth="0.8" />
              <circle cx="340" cy="70" r="4.5" fill="url(#roseGarland)" />

              <line x1="420" y1="52" x2="420" y2="78" stroke="#D4A853" strokeWidth="0.8" />
              <circle cx="420" cy="80" r="3.5" fill="url(#roseGarland)" />

              <line x1="190" y1="85" x2="190" y2="105" stroke="#D4A853" strokeWidth="0.8" />
              <circle cx="190" cy="107" r="3" fill="#D4A853" />

              <line x1="490" y1="85" x2="490" y2="105" stroke="#D4A853" strokeWidth="0.8" />
              <circle cx="490" cy="107" r="3" fill="#D4A853" />
            </g>
          </svg>
        </motion.div>

        {/* Invitation Line */}
        <motion.p
          variants={itemFadeUp}
          className="text-xs sm:text-sm tracking-[0.28em] sm:tracking-[0.35em] uppercase font-sans text-[#785E59] font-medium mb-3 sm:mb-4"
        >
          Together with their families
        </motion.p>

        {/* Couple Names */}
        <motion.div
          variants={itemFadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-4 md:gap-6 my-2 sm:my-3"
        >
          <h1 className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#4A2B28] font-normal tracking-wide drop-shadow-xs">
            {weddingConfig.bride.name}
          </h1>

          {/* Ornamental Ampersand */}
          <div className="flex items-center justify-center my-1 sm:my-0">
            <span
              className="font-serif italic text-3xl sm:text-4xl md:text-5xl text-[#C67B5C] px-2 relative after:content-[''] after:block after:w-8 after:h-px after:bg-[#D4A853]/40 after:mx-auto after:mt-1 hidden sm:inline"
              aria-label="and"
            >
              &amp;
            </span>
            <span
              className="font-serif italic text-3xl text-[#C67B5C] px-2 sm:hidden"
              aria-label="and"
            >
              &amp;
            </span>
          </div>

          <h1 className="font-script text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#4A2B28] font-normal tracking-wide drop-shadow-xs">
            {weddingConfig.groom.name}
          </h1>
        </motion.div>

        {/* Decorative Divider */}
        <motion.div
          variants={itemFadeUp}
          className="my-3 sm:my-4 w-full flex justify-center"
        >
          <FloralDecoration variant="divider" size={380} />
        </motion.div>

        {/* Wedding Date */}
        <motion.div
          variants={itemFadeUp}
          className="inline-flex items-center gap-3 px-6 py-1.5 rounded-full border border-[#D4A853]/40 bg-[#FFF8F0]/70 backdrop-blur-xs shadow-xs mb-3"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C67B5C]" />
          <time
            dateTime="2026-11-20"
            className="text-sm sm:text-base md:text-lg font-serif tracking-[0.2em] uppercase text-[#4A2B28] font-semibold"
          >
            {weddingConfig.venue.weddingDate}
          </time>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C67B5C]" />
        </motion.div>

        {/* Main Tagline */}
        <motion.p
          variants={itemFadeUp}
          className="text-base sm:text-lg md:text-xl font-serif italic text-[#634E49] max-w-md mx-auto leading-relaxed"
        >
          &ldquo;{weddingConfig.mainTagline}&rdquo;
        </motion.p>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center mt-6 mb-2 cursor-pointer group"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleScrollDown();
          }
        }}
        aria-label="Scroll down to our love story"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: prefersReducedMotion ? 0 : 1.2, duration: 0.8 }}
      >
        <span className="text-[11px] sm:text-xs tracking-[0.25em] uppercase font-sans text-[#8C716B] group-hover:text-[#4A2B28] transition-colors mb-1.5 font-medium">
          Scroll to explore
        </span>

        {/* Animated Chevron */}
        <motion.div
          animate={
            prefersReducedMotion
              ? {}
              : {
                  y: [0, 6, 0],
                }
          }
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="text-[#C67B5C] group-hover:text-[#9E5950] transition-colors p-1"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default HeroSection;
