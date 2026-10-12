import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, Heart } from 'lucide-react';
import { weddingConfig } from '../config/wedding';

// Subtle floral divider motif
const FloralDivider: React.FC = () => (
  <svg
    viewBox="0 0 160 30"
    className="w-36 h-7 mx-auto text-[#D4A853] fill-none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      d="M10 15 C40 5, 50 25, 75 15 C100 5, 110 25, 150 15"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      opacity="0.5"
    />
    <circle cx="80" cy="15" r="4" fill="currentColor" />
    <circle cx="68" cy="15" r="2" fill="currentColor" opacity="0.7" />
    <circle cx="92" cy="15" r="2" fill="currentColor" opacity="0.7" />
    <path
      d="M80 8 Q 83 12, 80 15 Q 77 12, 80 8 Z"
      fill="currentColor"
      opacity="0.8"
    />
    <path
      d="M80 22 Q 83 18, 80 15 Q 77 18, 80 22 Z"
      fill="currentColor"
      opacity="0.8"
    />
  </svg>
);

export const Footer: React.FC = () => {
  const { bride, groom } = weddingConfig;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      role="contentinfo"
      className="relative py-16 px-4 sm:px-6 bg-[#1A0B08] text-[#F3EBE6] border-t border-[#D4A853]/25 overflow-hidden"
    >
      {/* Delicate background pattern and ambient warm glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-40 bg-[#D4A853]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        {/* Scroll-to-top Button */}
        <motion.button
          type="button"
          onClick={scrollToTop}
          whileHover={{ y: -3, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Scroll back to top of the wedding invitation"
          className="mb-8 p-3.5 rounded-full bg-[#2C1510] border border-[#D4A853]/40 text-[#D4A853] hover:text-[#FFF8F0] hover:bg-[#D4A853]/20 shadow-md shadow-black/30 transition-all duration-200 cursor-pointer group"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />
        </motion.button>

        {/* Small Floral Decoration */}
        <div className="mb-4">
          <FloralDivider />
        </div>

        {/* Couple Signature in Script Font */}
        <div className="my-3">
          <p
            className="text-4xl sm:text-5xl text-[#FCEEE6] tracking-wide"
            style={{ fontFamily: "'Great Vibes', 'Brush Script MT', cursive" }}
          >
            With love, {bride.name} & {groom.name}
          </p>
        </div>

        <p className="font-serif italic text-sm text-[#D4A853]/90 mt-1 mb-6">
          #AnanyaAaravForever • 20 November 2026
        </p>

        {/* Decorative Divider */}
        <div className="h-px w-24 bg-gradient-to-r from-transparent via-[#D4A853]/40 to-transparent my-4" />

        {/* Made with Love & Year */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-[#BFA89E] tracking-wider uppercase font-light">
          <span className="inline-flex items-center gap-1.5">
            Made with <Heart className="w-3.5 h-3.5 fill-[#C4847A] text-[#C4847A] inline" /> for our celebration
          </span>
          <span className="hidden sm:inline text-[#D4A853]/50">•</span>
          <span>© 2026 All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
