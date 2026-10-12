import React from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '../config/wedding';

// Intricate decorative corner motif
const CornerFiligree: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg
    viewBox="0 0 60 60"
    className={`w-12 h-12 text-[#D4A853] ${className}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M5 5 H 35 M5 5 V 35"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M12 12 H 28 M12 12 V 28"
      stroke="currentColor"
      strokeWidth="0.8"
      strokeLinecap="round"
      opacity="0.6"
    />
    <circle cx="5" cy="5" r="3" fill="currentColor" />
    <circle cx="20" cy="5" r="1.5" fill="currentColor" />
    <circle cx="5" cy="20" r="1.5" fill="currentColor" />
    <path
      d="M16 16 Q 30 20, 24 34 Q 20 30, 16 16 Z"
      fill="currentColor"
      opacity="0.25"
    />
  </svg>
);

// Auspicious Ganesha / Om / Sacred Indian Mandala Crest
const AuspiciousCrest: React.FC = () => (
  <svg
    viewBox="0 0 80 80"
    className="w-16 h-16 mx-auto text-[#D4A853]"
    fill="currentColor"
    aria-hidden="true"
  >
    <circle cx="40" cy="40" r="36" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
    <circle cx="40" cy="40" r="30" fill="none" stroke="currentColor" strokeWidth="0.75" opacity="0.4" />
    <path
      d="M40 14 C42 26, 54 38, 66 40 C54 42, 42 54, 40 66 C38 54, 26 42, 14 40 C26 38, 38 26, 40 14 Z"
      opacity="0.7"
    />
    <circle cx="40" cy="40" r="6" fill="#D4A853" />
    <circle cx="40" cy="40" r="3" fill="#FFF8F0" />
  </svg>
);

export const InvitationSection: React.FC = () => {
  const { bride, groom, invitationPrelude, familyInvitation, invitationMessage } = weddingConfig;

  return (
    <section
      id="invitation"
      aria-label="Wedding Formal Invitation"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#FFF8F0] overflow-hidden"
    >
      {/* Delicate background damask pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#92400E 1px, transparent 1px), radial-gradient(#92400E 1px, #FFF8F0 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
      />

      {/* Ambient warm radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FDEBD8]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl sm:rounded-[36px] p-8 sm:p-14 md:p-20 bg-white/70 backdrop-blur-sm border border-[#E8D4C8] shadow-[0_20px_50px_-15px_rgba(180,140,120,0.18)]"
        >
          {/* Floral Corner Ornaments */}
          <div className="absolute top-4 left-4 pointer-events-none">
            <CornerFiligree />
          </div>
          <div className="absolute top-4 right-4 pointer-events-none rotate-90">
            <CornerFiligree />
          </div>
          <div className="absolute bottom-4 left-4 pointer-events-none -rotate-90">
            <CornerFiligree />
          </div>
          <div className="absolute bottom-4 right-4 pointer-events-none rotate-180">
            <CornerFiligree />
          </div>

          {/* Double Inset Fine Line Frame */}
          <div className="absolute inset-4 sm:inset-6 rounded-2xl sm:rounded-[28px] border border-[#D4A853]/35 pointer-events-none" />
          <div className="absolute inset-6 sm:inset-8 rounded-xl sm:rounded-[24px] border border-[#D4A853]/20 pointer-events-none" />

          {/* Top Auspicious Symbol */}
          <div className="mb-6">
            <AuspiciousCrest />
          </div>

          {/* Invitation Prelude */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-center font-serif italic text-2xl sm:text-3xl text-[#9A3412] tracking-wide mb-3"
          >
            {invitationPrelude}
          </motion.p>

          {/* Ornamental Divider */}
          <div className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-20 sm:w-28 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent" />
            <svg
              className="w-5 h-5 text-[#D4A853]"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 2 L14.5 9.5 L22 12 L14.5 14.5 L12 22 L9.5 14.5 L2 12 L9.5 9.5 Z" />
            </svg>
            <div className="h-px w-20 sm:w-28 bg-gradient-to-l from-transparent via-[#D4A853] to-transparent" />
          </div>

          {/* Couple Names */}
          <div className="text-center my-8">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#2B1810] font-normal tracking-tight leading-none">
              {bride.name}
            </h1>
            <div className="my-2 flex items-center justify-center gap-4">
              <span className="h-px w-10 bg-[#D4A853]/40" />
              <span className="font-serif italic text-3xl sm:text-4xl text-[#C4847A] font-light">&</span>
              <span className="h-px w-10 bg-[#D4A853]/40" />
            </div>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#2B1810] font-normal tracking-tight leading-none">
              {groom.name}
            </h1>
          </div>

          {/* Invitation Text Body */}
          <div className="max-w-xl mx-auto text-center space-y-4 my-8 sm:my-10">
            <p className="text-sm sm:text-base uppercase tracking-[0.22em] text-[#8C6D62] font-medium font-sans">
              Request the honour of your presence
            </p>

            <p className="text-base sm:text-lg md:text-xl text-[#4A3B32] font-light leading-relaxed">
              {familyInvitation}
            </p>

            <p className="text-sm sm:text-base text-[#6B574F] font-light leading-relaxed pt-2">
              {invitationMessage}
            </p>
          </div>

          {/* Auspicious Shloka / Blessing line */}
          <div className="mt-10 pt-8 border-t border-[#E8D4C8]/80 text-center">
            <p className="font-serif italic text-base sm:text-lg text-[#854D0E]">
              ॥ ॐ श्री गणेशाय नमः ॥
            </p>
            <p className="text-xs uppercase tracking-[0.25em] text-[#9CA3AF] mt-1.5 font-light">
              May our union be blessed with love, harmony, and joy
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InvitationSection;
