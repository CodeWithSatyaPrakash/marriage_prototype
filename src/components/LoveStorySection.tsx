import React, { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { weddingConfig, type Milestone } from '../config/wedding';
import { useReducedMotion } from '../hooks/useReducedMotion';
import { FloralDecoration } from './FloralDecoration';

// Milestone icons for the three stages
const MilestoneIcon: React.FC<{ index: number }> = ({ index }) => {
  switch (index) {
    case 0:
      // First hello - Spark / Twin stars
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      );
    case 1:
      // Moment we knew - Twin hearts / constellation
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
        </svg>
      );
    case 2:
    default:
      // Promise of forever - Sacred infinity / ring knot
      return (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918" />
        </svg>
      );
  }
};

export const LoveStorySection: React.FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px 0px' });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="love-story"
      ref={sectionRef}
      className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAF8F5] overflow-hidden"
    >
      {/* Decorative Background Accents */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#D4A853]/30 to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24">
          <span className="text-xs sm:text-sm tracking-[0.3em] uppercase font-sans text-[#C67B5C] font-semibold block mb-2">
            The Journey of Us
          </span>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#4A2B28] font-normal tracking-tight mb-3">
            Our Love Story
          </h2>

          <div className="my-2 flex justify-center">
            <FloralDecoration variant="divider" size={260} />
          </div>

          <p className="font-serif italic text-lg sm:text-xl text-[#785E59] mt-3">
            &ldquo;{weddingConfig.loveStoryIntro}&rdquo;
          </p>
        </div>

        {/* Milestone Timeline */}
        <div className="relative">
          {/* Central Vertical Timeline Spine */}
          <div
            className="absolute top-6 bottom-6 w-px bg-gradient-to-b from-[#E6C887] via-[#C4847A]/40 to-[#E6C887] left-6 md:left-1/2 md:-translate-x-1/2"
            aria-hidden="true"
          />

          <div className="space-y-12 md:space-y-20">
            {weddingConfig.milestones.map((milestone: Milestone, index: number) => {
              const isEven = index % 2 === 0;

              return (
                <MilestoneCard
                  key={milestone.id}
                  milestone={milestone}
                  index={index}
                  isEven={isEven}
                  isInView={isInView}
                  prefersReducedMotion={prefersReducedMotion}
                />
              );
            })}
          </div>
        </div>

        {/* Section Closing Floral Ornament */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <FloralDecoration variant="divider" size={200} />
        </div>
      </div>
    </section>
  );
};

interface MilestoneCardProps {
  milestone: Milestone;
  index: number;
  isEven: boolean;
  isInView: boolean;
  prefersReducedMotion: boolean;
}

const MilestoneCard: React.FC<MilestoneCardProps> = ({
  milestone,
  index,
  isEven,
  isInView,
  prefersReducedMotion,
}) => {
  // Staggered slide-in from appropriate side
  const cardAnimation: Variants = {
    hidden: {
      opacity: prefersReducedMotion ? 1 : 0,
      x: prefersReducedMotion ? 0 : isEven ? -40 : 40,
      y: prefersReducedMotion ? 0 : 20,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.8,
        delay: prefersReducedMotion ? 0 : index * 0.22,
        ease: 'easeOut',
      },
    },
  };

  const centerNodeAnimation: Variants = {
    hidden: {
      scale: prefersReducedMotion ? 1 : 0,
      opacity: prefersReducedMotion ? 1 : 0,
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        delay: prefersReducedMotion ? 0 : index * 0.22 + 0.1,
      },
    },
  };

  return (
    <div className="relative flex flex-col md:flex-row items-start md:items-center">
      {/* Central Node Badge on Timeline */}
      <motion.div
        variants={centerNodeAnimation}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center w-11 h-11 rounded-full bg-[#FFF8F0] border-2 border-[#D4A853] text-[#C67B5C] shadow-md"
        aria-hidden="true"
      >
        <MilestoneIcon index={index} />
      </motion.div>

      {/* Alternate Cards on Left and Right for Desktop */}
      <div
        className={`w-full md:w-1/2 pl-16 md:pl-0 ${
          isEven
            ? 'md:pr-12 md:text-right'
            : 'md:ml-auto md:pl-12 md:text-left'
        }`}
      >
        <motion.article
          variants={cardAnimation}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative group p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-xs border border-[#F0E4DC] hover:border-[#D4A853]/50 transition-all duration-300 shadow-xs hover:shadow-md"
        >
          {/* Card Corner Subtle Floral Accent */}
          <div
            className={`absolute top-2 pointer-events-none opacity-40 group-hover:opacity-75 transition-opacity ${
              isEven ? 'left-2' : 'right-2'
            }`}
            aria-hidden="true"
          >
            <FloralDecoration
              variant={isEven ? 'corner-tl' : 'corner-tr'}
              size={54}
            />
          </div>

          {/* Number & Date Header */}
          <div
            className={`flex items-center gap-3 mb-3 ${
              isEven ? 'md:justify-end' : 'justify-start'
            }`}
          >
            <span className="font-sans text-xs tracking-[0.2em] uppercase font-bold text-[#D4A853] bg-[#FAF8F5] px-2.5 py-1 rounded-full border border-[#D4A853]/30">
              0{index + 1}
            </span>
            <span className="text-xs sm:text-sm tracking-[0.15em] uppercase font-sans text-[#8C716B] font-semibold">
              {milestone.date}
            </span>
          </div>

          {/* Milestone Title */}
          <h3 className="font-serif text-xl sm:text-2xl text-[#4A2B28] font-semibold mb-2.5">
            {milestone.title}
          </h3>

          {/* Description */}
          <p className="font-serif text-[#5E4D48] text-base sm:text-lg leading-relaxed">
            {milestone.description}
          </p>

          {/* Bottom Card Decorative Accent */}
          <div
            className={`mt-4 pt-3 border-t border-[#F5ECE6] flex items-center gap-2 ${
              isEven ? 'md:justify-end' : 'justify-start'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4847A]" />
            <span className="w-8 h-px bg-[#D4A853]/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#C4847A]" />
          </div>
        </motion.article>
      </div>
    </div>
  );
};

export default LoveStorySection;
