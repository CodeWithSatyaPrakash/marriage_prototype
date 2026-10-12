import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

interface PetalConfig {
  id: number;
  startX: number; // percentage (0 - 100)
  size: number; // in pixels
  duration: number; // in seconds
  delay: number; // in seconds
  drift: number; // horizontal sway distance in px
  rotationStart: number;
  rotationEnd: number;
  opacity: number;
  colorType: 'blush' | 'rose' | 'cream' | 'gold';
}

export interface FloatingPetalsProps {
  count?: number;
  className?: string;
}

export const FloatingPetals: React.FC<FloatingPetalsProps> = ({
  count = 14,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();

  // Generate deterministic-looking random petals once
  const petals = useMemo<PetalConfig[]>(() => {
    const items: PetalConfig[] = [];
    const colorTypes: ('blush' | 'rose' | 'cream' | 'gold')[] = [
      'blush',
      'rose',
      'cream',
      'gold',
      'blush',
      'rose',
    ];

    for (let i = 0; i < count; i++) {
      // Pseudo-random distribution for consistent aesthetic
      const seed = (i * 9301 + 49297) % 233280;
      const rnd1 = seed / 233280;
      const rnd2 = ((seed * 9301 + 49297) % 233280) / 233280;
      const rnd3 = ((seed * 12345 + 6789) % 233280) / 233280;

      items.push({
        id: i,
        startX: (i / count) * 92 + (rnd1 * 6), // spread evenly across horizontal width
        size: Math.round(14 + rnd2 * 14), // 14px to 28px
        duration: Math.round(11 + rnd3 * 9), // 11s to 20s
        delay: (i * 0.9) % 8, // staggered start delays
        drift: Math.round((rnd1 - 0.5) * 80), // -40px to +40px sway
        rotationStart: Math.round(rnd2 * 60 - 30),
        rotationEnd: Math.round(rnd3 * 360 + 180),
        opacity: 0.35 + rnd1 * 0.4,
        colorType: colorTypes[i % colorTypes.length],
      });
    }
    return items;
  }, [count]);

  if (prefersReducedMotion) {
    return null;
  }

  const getPetalFills = (type: PetalConfig['colorType']) => {
    switch (type) {
      case 'rose':
        return {
          fill: '#C4847A',
          stroke: '#B76E64',
          highlight: '#D99B92',
        };
      case 'blush':
        return {
          fill: '#F2D5D0',
          stroke: '#E5BFB8',
          highlight: '#FCECE9',
        };
      case 'gold':
        return {
          fill: '#E6C887',
          stroke: '#D4A853',
          highlight: '#F4DEAA',
        };
      case 'cream':
      default:
        return {
          fill: '#FFF8F0',
          stroke: '#F2D5D0',
          highlight: '#FFFFFF',
        };
    }
  };

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-20 overflow-hidden ${className}`}
      aria-hidden="true"
    >
      {petals.map((petal) => {
        const colors = getPetalFills(petal.colorType);

        return (
          <motion.div
            key={petal.id}
            className="absolute top-0 will-change-transform"
            style={{
              left: `${petal.startX}%`,
              width: petal.size,
              height: petal.size * 1.35,
            }}
            initial={{
              y: '-10vh',
              x: 0,
              rotate: petal.rotationStart,
              opacity: 0,
            }}
            animate={{
              y: ['0vh', '110vh'],
              x: [0, petal.drift, -petal.drift * 0.6, petal.drift * 0.8, 0],
              rotate: [petal.rotationStart, petal.rotationEnd],
              opacity: [0, petal.opacity, petal.opacity * 0.9, petal.opacity, 0],
            }}
            transition={{
              duration: petal.duration,
              delay: petal.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <svg
              viewBox="0 0 32 42"
              className="w-full h-full drop-shadow-xs"
              style={{ filter: 'drop-shadow(0px 2px 4px rgba(198, 123, 92, 0.15))' }}
            >
              <defs>
                <linearGradient
                  id={`petalGrad-${petal.id}`}
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor={colors.highlight} stopOpacity="0.9" />
                  <stop offset="60%" stopColor={colors.fill} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={colors.stroke} stopOpacity="0.7" />
                </linearGradient>
              </defs>
              {/* Graceful curved rose petal path */}
              <path
                d="M 16 2 C 24 6, 31 16, 29 28 C 27 38, 18 41, 16 41 C 14 41, 5 38, 3 28 C 1 16, 8 6, 16 2 Z"
                fill={`url(#petalGrad-${petal.id})`}
                stroke={colors.stroke}
                strokeWidth="0.5"
              />
              {/* Petal delicate center vein */}
              <path
                d="M 16 8 Q 17 22 16 36"
                stroke={colors.stroke}
                strokeWidth="0.6"
                strokeOpacity="0.5"
                fill="none"
              />
            </svg>
          </motion.div>
        );
      })}
    </div>
  );
};

export default FloatingPetals;
