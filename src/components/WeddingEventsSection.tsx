import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';
import { EventCard } from './EventCard';

// Subtle Indian floral motif background decoration
const FloralMotif: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 100"
    className={`select-none pointer-events-none fill-current ${className}`}
    aria-hidden="true"
  >
    <path
      d="M50 0 C55 25, 75 45, 100 50 C75 55, 55 75, 50 100 C45 75, 25 55, 0 50 C25 45, 45 25, 50 0 Z"
      opacity="0.12"
    />
    <circle cx="50" cy="50" r="16" opacity="0.08" />
    <circle cx="50" cy="50" r="8" opacity="0.15" />
  </svg>
);

export const WeddingEventsSection: React.FC = () => {
  const { events } = weddingConfig;

  return (
    <section
      id="events"
      aria-label="Wedding Events and Celebrations"
      className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FFF9F5] to-[#FAF5EE]"
    >
      {/* Decorative background ambient glows and floral motifs */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#F8E7DF]/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 translate-x-1/2 w-96 h-96 bg-[#FBEBD4]/40 rounded-full blur-3xl pointer-events-none" />

      {/* Floating floral corner flourishes */}
      <FloralMotif className="absolute -top-10 -left-10 w-44 h-44 text-[#D4A853]" />
      <FloralMotif className="absolute -bottom-10 -right-10 w-44 h-44 text-[#D4A853]" />
      <FloralMotif className="absolute top-1/2 -right-12 w-32 h-32 text-[#C4847A]" />
      <FloralMotif className="absolute top-1/3 -left-12 w-32 h-32 text-[#C4847A]" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-16 sm:mb-20"
        >
          {/* Auspicious top accent */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-px w-10 bg-[#D4A853]/60" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#A66F3E] font-medium font-sans">
              Mangalam Bhagavan Vishnuh
            </span>
            <span className="h-px w-10 bg-[#D4A853]/60" />
          </div>

          {/* Main Title */}
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#2B1810] font-normal tracking-tight mb-4">
            Celebrations
          </h2>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent" />
            <svg
              className="w-5 h-5 text-[#D4A853]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2 C13 7, 17 11, 22 12 C17 13, 13 17, 12 22 C11 17, 7 13, 2 12 C7 11, 11 7, 12 2 Z" />
            </svg>
            <div className="h-px w-16 sm:w-24 bg-gradient-to-l from-transparent via-[#D4A853] to-transparent" />
          </div>

          {/* Subtitle */}
          <p className="text-[#6E584E] text-base sm:text-lg font-light leading-relaxed px-4">
            Join us through three memorable days of joy, traditions, sacred vows, and cherished moments.
          </p>
        </motion.div>

        {/* 3-Column Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 lg:gap-8 items-stretch">
          {events.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>

        {/* Bottom Ornamental Note */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-[#FAF2EB]/70 border border-[#E8D4C8] shadow-sm text-xs sm:text-sm text-[#7D5A4C]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
            <span>Dress code: Indian Traditional / Festive Festive Elegance</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4A853]" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingEventsSection;
