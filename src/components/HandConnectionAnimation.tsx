import { useRef, useMemo } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from 'framer-motion';
import { useReducedMotion } from '../hooks/useReducedMotion';

/* ═══════════════════════════════════════════════════════════════════════════
 *  SVG HAND ILLUSTRATIONS
 *  ─ Bride's left hand (with mehndi) and Groom's right hand (with cuff)
 *  ─ Oriented so they naturally reach toward each other at center
 * ═══════════════════════════════════════════════════════════════════════════ */

function BrideHand({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="bh-skin" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#F2CEB0" />
          <stop offset="100%" stopColor="#E4B594" />
        </linearGradient>
        <linearGradient id="bh-mehndi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#B5543A" />
          <stop offset="100%" stopColor="#8B3A2A" />
        </linearGradient>
      </defs>

      {/* ── Forearm ── */}
      <path
        d="M60,400 Q55,360 58,330 L62,330 Q60,360 65,400 Z"
        fill="url(#bh-skin)"
        opacity="0"
      />
      <rect x="45" y="320" width="105" height="85" rx="22" fill="url(#bh-skin)" />

      {/* Bangles */}
      <ellipse cx="97" cy="340" rx="54" ry="13" fill="none" stroke="#D4A853" strokeWidth="4" />
      <ellipse cx="97" cy="332" rx="50" ry="11" fill="none" stroke="#C4847A" strokeWidth="2.5" />
      <ellipse cx="97" cy="348" rx="52" ry="12" fill="none" stroke="#E8B44D" strokeWidth="1.5" opacity="0.6" />
      {/* Bangle gems */}
      <circle cx="55" cy="340" r="3" fill="#C4847A" />
      <circle cx="139" cy="340" r="3" fill="#B5C5A3" />
      <circle cx="97" cy="328" r="2.5" fill="#D4A853" />

      {/* ── Palm ── */}
      <path
        d="M50,325 Q42,275 48,220 Q52,190 70,170 L128,170 Q146,190 150,220 Q156,275 148,325 Z"
        fill="url(#bh-skin)"
      />

      {/* ── Thumb ── */}
      <path
        d="M48,260 Q22,240 18,210 Q15,188 30,180 Q44,174 48,195 Q50,220 50,250 Z"
        fill="url(#bh-skin)"
      />

      {/* ── Index finger ── */}
      <path
        d="M68,175 Q63,128 62,88 Q61,62 74,52 Q87,45 90,65 Q92,88 89,128 Q87,158 84,175 Z"
        fill="url(#bh-skin)"
      />

      {/* ── Middle finger ── */}
      <path
        d="M88,168 Q86,118 85,72 Q84,42 98,32 Q112,25 114,48 Q115,72 113,118 Q111,152 108,168 Z"
        fill="url(#bh-skin)"
      />

      {/* ── Ring finger ── */}
      <path
        d="M112,172 Q112,126 112,84 Q112,56 124,48 Q136,42 138,62 Q140,84 137,126 Q135,156 132,172 Z"
        fill="url(#bh-skin)"
      />

      {/* ── Little finger ── */}
      <path
        d="M134,182 Q135,145 136,112 Q137,90 146,84 Q155,80 156,98 Q157,114 154,145 Q151,170 148,185 Z"
        fill="url(#bh-skin)"
      />

      {/* ── Ring on ring finger ── */}
      <ellipse cx="126" cy="120" rx="9" ry="5" fill="none" stroke="#D4A853" strokeWidth="3" />
      <circle cx="126" cy="116" r="2" fill="#D4A853" />

      {/* ── Mehndi: Central palm mandala ── */}
      <circle cx="100" cy="245" r="22" fill="none" stroke="url(#bh-mehndi)" strokeWidth="1.5" opacity="0.7" />
      <circle cx="100" cy="245" r="15" fill="none" stroke="#D4A853" strokeWidth="1" opacity="0.6" />
      <circle cx="100" cy="245" r="8" fill="none" stroke="#C4847A" strokeWidth="0.8" opacity="0.5" />
      <circle cx="100" cy="245" r="3" fill="#D4A853" opacity="0.45" />

      {/* Mehndi dots around mandala */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
        const r = 30;
        const x = 100 + r * Math.cos((a * Math.PI) / 180);
        const y = 245 + r * Math.sin((a * Math.PI) / 180);
        return <circle key={a} cx={x} cy={y} r="2.2" fill="#D4A853" opacity="0.55" />;
      })}

      {/* Mehndi: finger lines */}
      <path d="M77,90 Q78,110 77,135" fill="none" stroke="#C4847A" strokeWidth="1" opacity="0.4" />
      <path d="M100,58 Q101,80 100,110" fill="none" stroke="#C4847A" strokeWidth="1" opacity="0.4" />
      <path d="M125,65 Q126,85 125,115" fill="none" stroke="#C4847A" strokeWidth="1" opacity="0.4" />

      {/* Mehndi: wrist vines */}
      <path d="M60,305 Q80,295 100,300 Q120,305 140,295" fill="none" stroke="#C4847A" strokeWidth="1.5" opacity="0.45" />
      <path d="M65,315 Q85,308 100,312 Q115,316 135,308" fill="none" stroke="#D4A853" strokeWidth="1" opacity="0.35" />

      {/* Mehndi: tear drops on palm */}
      <path d="M70,215 Q73,205 76,215 Q73,220 70,215 Z" fill="#C4847A" opacity="0.35" />
      <path d="M124,215 Q127,205 130,215 Q127,220 124,215 Z" fill="#C4847A" opacity="0.35" />

      {/* Palm lines */}
      <path d="M56,275 Q80,260 130,270" fill="none" stroke="#D0A070" strokeWidth="1" opacity="0.3" />
      <path d="M60,295 Q85,282 138,290" fill="none" stroke="#D0A070" strokeWidth="0.8" opacity="0.25" />
    </svg>
  );
}

function GroomHand({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 300 400"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gh-skin" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#DEB08A" />
          <stop offset="100%" stopColor="#CB9670" />
        </linearGradient>
        <linearGradient id="gh-cuff" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFF8F0" />
          <stop offset="100%" stopColor="#F0E4D4" />
        </linearGradient>
      </defs>

      {/* ── Sherwani cuff ── */}
      <rect x="130" y="330" width="115" height="75" rx="18" fill="url(#gh-cuff)" />
      <rect x="130" y="330" width="115" height="75" rx="18" fill="none" stroke="#D4A853" strokeWidth="2" />
      {/* Cuff embroidery */}
      <path d="M142,352 Q165,344 188,352 Q210,360 232,352" fill="none" stroke="#D4A853" strokeWidth="1.5" opacity="0.5" />
      <path d="M145,365 Q168,358 190,365 Q212,372 234,365" fill="none" stroke="#D4A853" strokeWidth="1" opacity="0.35" />
      <path d="M148,378 Q170,372 192,378" fill="none" stroke="#D4A853" strokeWidth="0.8" opacity="0.25" />
      {/* Cuff button */}
      <circle cx="188" cy="342" r="4.5" fill="#D4A853" opacity="0.4" />

      {/* ── Palm ── */}
      <path
        d="M140,330 Q130,275 135,215 Q138,185 158,168 L222,168 Q242,185 246,215 Q252,275 244,330 Z"
        fill="url(#gh-skin)"
      />

      {/* ── Thumb ── */}
      <path
        d="M246,262 Q272,242 276,210 Q278,190 264,182 Q250,175 245,195 Q242,218 244,252 Z"
        fill="url(#gh-skin)"
      />

      {/* ── Index finger ── */}
      <path
        d="M218,172 Q224,125 226,88 Q228,60 216,50 Q204,44 200,62 Q197,82 200,125 Q202,155 205,172 Z"
        fill="url(#gh-skin)"
      />

      {/* ── Middle finger ── */}
      <path
        d="M200,166 Q202,116 203,70 Q204,38 191,28 Q178,22 175,45 Q173,68 176,116 Q178,150 180,166 Z"
        fill="url(#gh-skin)"
      />

      {/* ── Ring finger ── */}
      <path
        d="M178,170 Q178,124 178,82 Q178,54 166,46 Q154,40 152,60 Q150,82 153,124 Q155,154 158,170 Z"
        fill="url(#gh-skin)"
      />

      {/* ── Little finger ── */}
      <path
        d="M156,180 Q155,145 154,112 Q153,90 144,84 Q135,80 134,97 Q133,112 136,145 Q139,168 142,184 Z"
        fill="url(#gh-skin)"
      />

      {/* ── Kada (bracelet) ── */}
      <ellipse cx="190" cy="336" rx="40" ry="9" fill="none" stroke="#D4A853" strokeWidth="3.5" />

      {/* Palm lines */}
      <path d="M244,272 Q215,255 158,268" fill="none" stroke="#B88858" strokeWidth="1.2" opacity="0.28" />
      <path d="M240,292 Q212,278 160,288" fill="none" stroke="#B88858" strokeWidth="0.9" opacity="0.22" />

      {/* Wedding band */}
      <ellipse cx="165" cy="118" rx="9" ry="5" fill="none" stroke="#D4A853" strokeWidth="3" />
    </svg>
  );
}

function HandsHolding({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 380"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="hh-bride" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#F2CEB0" />
          <stop offset="100%" stopColor="#E4B594" />
        </linearGradient>
        <linearGradient id="hh-groom" x1="0.2" y1="0" x2="0.8" y2="1">
          <stop offset="0%" stopColor="#DEB08A" />
          <stop offset="100%" stopColor="#CB9670" />
        </linearGradient>
      </defs>

      {/* ═══ Bride's hand (left side, fingers reaching right) ═══ */}
      <g>
        {/* Wrist + bangle */}
        <rect x="10" y="240" width="85" height="60" rx="20" fill="url(#hh-bride)" />
        <ellipse cx="52" cy="248" rx="44" ry="10" fill="none" stroke="#D4A853" strokeWidth="3.5" />
        <ellipse cx="52" cy="240" rx="40" ry="9" fill="none" stroke="#C4847A" strokeWidth="2" />

        {/* Palm */}
        <path d="M15,240 Q8,195 15,148 Q20,118 40,100 L100,105 Q115,120 118,148 Q124,195 115,240 Z" fill="url(#hh-bride)" />

        {/* Fingers curving to the right to interlock */}
        <path d="M100,108 Q125,92 148,86 Q165,82 167,96 Q168,110 148,113 Q128,115 105,114 Z" fill="url(#hh-bride)" />
        <path d="M108,100 Q135,80 160,70 Q178,64 180,80 Q181,95 160,97 Q140,99 112,100 Z" fill="url(#hh-bride)" />
        <path d="M104,116 Q130,106 155,104 Q170,102 172,116 Q173,128 155,127 Q135,126 108,122 Z" fill="url(#hh-bride)" />
        <path d="M96,126 Q115,120 135,120 Q150,120 152,132 Q153,143 135,142 Q115,140 100,134 Z" fill="url(#hh-bride)" />

        {/* Thumb */}
        <path d="M28,148 Q12,132 15,112 Q18,98 32,100 Q42,105 38,125 Q36,140 34,152 Z" fill="url(#hh-bride)" />

        {/* Mehndi on palm */}
        <circle cx="65" cy="178" r="16" fill="none" stroke="#D4A853" strokeWidth="1.5" opacity="0.6" />
        <circle cx="65" cy="178" r="9" fill="none" stroke="#C4847A" strokeWidth="1" opacity="0.5" />
        <circle cx="65" cy="178" r="3.5" fill="#D4A853" opacity="0.4" />
        <path d="M30,218 Q50,208 65,212 Q80,218 98,208" fill="none" stroke="#C4847A" strokeWidth="1.2" opacity="0.4" />

        {/* Mehndi dots */}
        {[0, 60, 120, 180, 240, 300].map((a) => {
          const x = 65 + 22 * Math.cos((a * Math.PI) / 180);
          const y = 178 + 22 * Math.sin((a * Math.PI) / 180);
          return <circle key={`bd${a}`} cx={x} cy={y} r="2" fill="#D4A853" opacity="0.45" />;
        })}
      </g>

      {/* ═══ Groom's hand (right side, fingers reaching left) ═══ */}
      <g>
        {/* Sherwani cuff */}
        <rect x="380" y="230" width="100" height="65" rx="16" fill="#FFF8F0" stroke="#D4A853" strokeWidth="1.5" />
        <path d="M390,252 Q418,244 445,252" fill="none" stroke="#D4A853" strokeWidth="1" opacity="0.45" />
        <path d="M392,264 Q420,258 448,264" fill="none" stroke="#D4A853" strokeWidth="0.8" opacity="0.3" />

        {/* Palm */}
        <path d="M365,240 Q355,192 360,142 Q364,112 382,95 L440,100 Q455,114 460,142 Q466,192 458,240 Z" fill="url(#hh-groom)" />

        {/* Fingers curving left to interlock */}
        <path d="M382,100 Q356,85 332,80 Q316,76 314,90 Q312,104 332,107 Q352,109 378,108 Z" fill="url(#hh-groom)" />
        <path d="M375,93 Q348,74 322,64 Q305,58 302,74 Q300,89 322,92 Q342,94 370,94 Z" fill="url(#hh-groom)" />
        <path d="M380,112 Q354,102 328,100 Q312,98 310,112 Q309,124 328,123 Q348,122 376,118 Z" fill="url(#hh-groom)" />
        <path d="M386,122 Q366,117 346,117 Q330,117 328,129 Q327,140 346,139 Q366,137 382,131 Z" fill="url(#hh-groom)" />

        {/* Thumb */}
        <path d="M450,142 Q465,126 462,108 Q458,94 445,96 Q435,100 440,120 Q442,135 444,148 Z" fill="url(#hh-groom)" />

        {/* Kada */}
        <ellipse cx="420" cy="238" rx="32" ry="8" fill="none" stroke="#D4A853" strokeWidth="3" />
      </g>

      {/* ═══ Floral accents at the point of connection ═══ */}
      <g opacity="0.55">
        {/* Small petals */}
        <path d="M238,78 Q244,68 250,78 Q244,88 238,78 Z" fill="#F2D5D0" />
        <path d="M255,92 Q260,84 265,92 Q260,100 255,92 Z" fill="#B5C5A3" />
        <path d="M225,100 Q230,92 235,100 Q230,108 225,100 Z" fill="#F2D5D0" />
        <path d="M270,72 Q275,64 280,72 Q275,80 270,72 Z" fill="#D4A853" opacity="0.6" />
        {/* Dots */}
        <circle cx="248" cy="105" r="2.5" fill="#D4A853" opacity="0.5" />
        <circle cx="262" cy="78" r="2" fill="#C4847A" opacity="0.4" />
        <circle cx="232" cy="88" r="1.8" fill="#B5C5A3" opacity="0.5" />
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 *  FLOATING PETALS around the hands
 * ═══════════════════════════════════════════════════════════════════════════ */

function ScrollPetals({ progress }: { progress: MotionValue<number> }) {
  const petals = useMemo(
    () =>
      Array.from({ length: 16 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: 10 + Math.random() * 80,
        size: 4 + Math.random() * 10,
        delay: Math.random() * 4,
        color: ['#F2D5D0', '#D4A853', '#B5C5A3', '#C4847A', '#E8D4C8'][i % 5],
      })),
    [],
  );

  const petalOpacity = useTransform(progress, [0.25, 0.4, 0.85, 0.95], [0, 0.6, 0.6, 0]);

  return (
    <motion.div
      className="absolute inset-0 pointer-events-none overflow-hidden"
      style={{ opacity: petalOpacity }}
    >
      {petals.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
          animate={{
            y: [0, -15, 5, -10],
            x: [0, 8, -5, 3],
            opacity: [0.3, 0.7, 0.5, 0.3],
            scale: [0.8, 1.1, 0.9, 0.8],
          }}
          transition={{
            duration: 5 + p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 *  MANDALA BACKDROP — appears as hands approach
 * ═══════════════════════════════════════════════════════════════════════════ */

function MandalaBackdrop({
  scaleVal,
  opacityVal,
}: {
  scaleVal: MotionValue<number>;
  opacityVal: MotionValue<number>;
}) {
  return (
    <motion.div
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
      style={{ scale: scaleVal, opacity: opacityVal }}
    >
      <svg
        viewBox="0 0 400 400"
        className="w-[min(80vw,600px)] h-[min(80vw,600px)]"
        aria-hidden="true"
      >
        <circle cx="200" cy="200" r="190" fill="none" stroke="#D4A853" strokeWidth="0.8" opacity="0.3" />
        <circle cx="200" cy="200" r="160" fill="none" stroke="#F2D5D0" strokeWidth="0.6" opacity="0.35" />
        <circle cx="200" cy="200" r="130" fill="none" stroke="#D4A853" strokeWidth="0.5" opacity="0.25" />
        {Array.from({ length: 12 }, (_, i) => {
          const a = (i * 30 * Math.PI) / 180;
          return (
            <line
              key={i}
              x1={200 + 100 * Math.cos(a)}
              y1={200 + 100 * Math.sin(a)}
              x2={200 + 160 * Math.cos(a)}
              y2={200 + 160 * Math.sin(a)}
              stroke="#D4A853"
              strokeWidth="0.4"
              opacity="0.25"
            />
          );
        })}
        {Array.from({ length: 8 }, (_, i) => {
          const a = (i * 45 * Math.PI) / 180;
          const cx = 200 + 55 * Math.cos(a);
          const cy = 200 + 55 * Math.sin(a);
          return (
            <ellipse
              key={`l${i}`}
              cx={cx}
              cy={cy}
              rx="22"
              ry="9"
              fill="#F2D5D0"
              opacity="0.15"
              transform={`rotate(${i * 45}, ${cx}, ${cy})`}
            />
          );
        })}
        <circle cx="200" cy="200" r="28" fill="none" stroke="#D4A853" strokeWidth="1.2" opacity="0.35" />
        <circle cx="200" cy="200" r="12" fill="#D4A853" opacity="0.08" />
      </svg>
    </motion.div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 *  GOLDEN GLOW — radial glow at the connection point
 * ═══════════════════════════════════════════════════════════════════════════ */

function GoldenGlow({ opacityVal }: { opacityVal: MotionValue<number> }) {
  return (
    <motion.div
      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-64 md:h-64 rounded-full pointer-events-none"
      style={{
        opacity: opacityVal,
        background:
          'radial-gradient(circle, rgba(212,168,83,0.35) 0%, rgba(212,168,83,0.1) 40%, transparent 70%)',
      }}
    />
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 *  SCROLL-AWARE NARRATIVE TEXT — fades in at different scroll stages
 * ═══════════════════════════════════════════════════════════════════════════ */

function NarrativeText({
  text,
  opacityVal,
  yVal,
  className = '',
}: {
  text: string;
  opacityVal: MotionValue<number>;
  yVal: MotionValue<number>;
  className?: string;
}) {
  return (
    <motion.p
      className={`absolute left-0 right-0 text-center pointer-events-none px-6 ${className}`}
      style={{ opacity: opacityVal, y: yVal }}
    >
      {text}
    </motion.p>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════
 *  MAIN COMPONENT — HandConnectionAnimation
 *
 *  Architecture:
 *  • A tall scrollable container (150–200vh) wraps a sticky viewport.
 *  • Framer Motion's `useScroll` tracks the container's scroll progress.
 *  • The two hands translate from opposite edges toward the center.
 *  • At ~60% scroll, the separate hands cross-fade into a single
 *    "hands-holding" SVG for anatomical accuracy.
 *  • Narrative text, mandala, glow, and petals layer in progressively.
 * ═══════════════════════════════════════════════════════════════════════════ */

export default function HandConnectionAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  // ── Scroll tracking ─────────────────────────────────────────────────
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 25,
    mass: 0.4,
  });

  // ── HAND POSITIONS (percentage-based for responsiveness) ────────────
  // 0 → hands at edges;  0.6 → hands meet at center
  const leftHandX = useTransform(smooth, [0.05, 0.55], [0, 42]);  // % from left
  const rightHandX = useTransform(smooth, [0.05, 0.55], [0, 42]); // % from right

  // Opacity: fade in early
  const handFadeIn = useTransform(smooth, [0.0, 0.12], [0, 1]);

  // Scale: gentle growth
  const handScale = useTransform(smooth, [0.05, 0.55], [0.88, 1]);

  // Rotation: subtle tilt that straightens
  const leftRotate = useTransform(smooth, [0.05, 0.55], [-6, 0]);
  const rightRotate = useTransform(smooth, [0.05, 0.55], [6, 0]);

  // ── CROSSFADE: separate → together ─────────────────────────────────
  const separateOpacity = useTransform(smooth, [0.48, 0.6], [1, 0]);
  const togetherOpacity = useTransform(smooth, [0.5, 0.62], [0, 1]);
  const togetherScale = useTransform(smooth, [0.5, 0.65], [0.92, 1]);

  // ── DECORATIVE LAYERS ──────────────────────────────────────────────
  const bgWarmth = useTransform(smooth, [0.2, 0.6], [0, 1]);
  const mandalaScale = useTransform(smooth, [0.35, 0.65], [0.4, 1]);
  const mandalaOpacity = useTransform(smooth, [0.35, 0.65], [0, 0.25]);
  const glowOpacity = useTransform(smooth, [0.5, 0.62, 0.8], [0, 0.7, 0.35]);

  // ── NARRATIVE TEXT ─────────────────────────────────────────────────
  const text1Opacity = useTransform(smooth, [0.12, 0.22, 0.38, 0.48], [0, 1, 1, 0]);
  const text1Y = useTransform(smooth, [0.12, 0.22], [20, 0]);

  const text2Opacity = useTransform(smooth, [0.62, 0.72, 0.88, 0.95], [0, 1, 1, 0]);
  const text2Y = useTransform(smooth, [0.62, 0.72], [20, 0]);

  // ── Reduced motion: skip animation, show final state ──────────────
  if (reducedMotion) {
    return (
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-[#FAF8F5] to-[#FFF8F0]">
        <div className="flex flex-col items-center justify-center text-center px-4">
          <div className="w-64 h-48 sm:w-80 sm:h-60 md:w-[26rem] md:h-72 mb-6">
            <HandsHolding className="w-full h-full drop-shadow-lg" />
          </div>
          <p className="font-serif text-xl md:text-2xl text-[#C67B5C] italic max-w-lg">
            "Two paths. Two hearts. One forever."
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={containerRef}
      className="relative"
      style={{ height: '180vh' }}
      aria-label="Two illustrated hands gradually approach each other as you scroll"
    >
      {/* ── Sticky viewport ── */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Background warmth */}
        <motion.div
          className="absolute inset-0"
          style={{
            opacity: bgWarmth,
            background:
              'linear-gradient(to bottom, #FFF8F0, #FEF0E4, #FFF8F0)',
          }}
        />

        {/* Mandala backdrop */}
        <MandalaBackdrop scaleVal={mandalaScale} opacityVal={mandalaOpacity} />

        {/* Floating petals */}
        <ScrollPetals progress={smooth} />

        {/* Golden glow */}
        <GoldenGlow opacityVal={glowOpacity} />

        {/* ══════ SEPARATE HANDS ══════ */}
        <motion.div
          className="absolute inset-0 flex items-center pointer-events-none"
          style={{ opacity: separateOpacity }}
        >
          {/* Left hand (bride) — positioned from the left edge */}
          <motion.div
            className="absolute h-[35vh] sm:h-[40vh] md:h-[50vh] aspect-[3/4]"
            style={{
              left: useTransform(leftHandX, (v) => `${v}%`),
              opacity: handFadeIn,
              scale: handScale,
              rotate: leftRotate,
              top: '50%',
              translateY: '-50%',
            }}
          >
            <BrideHand className="w-full h-full drop-shadow-md" />
          </motion.div>

          {/* Right hand (groom) — positioned from the right edge */}
          <motion.div
            className="absolute h-[35vh] sm:h-[40vh] md:h-[50vh] aspect-[3/4]"
            style={{
              right: useTransform(rightHandX, (v) => `${v}%`),
              opacity: handFadeIn,
              scale: handScale,
              rotate: rightRotate,
              top: '50%',
              translateY: '-50%',
              scaleX: -1,
            }}
          >
            <GroomHand className="w-full h-full drop-shadow-md" />
          </motion.div>
        </motion.div>

        {/* ══════ HANDS TOGETHER (final) ══════ */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ opacity: togetherOpacity, scale: togetherScale }}
        >
          <div className="h-[35vh] sm:h-[40vh] md:h-[50vh] aspect-[5/4]">
            <HandsHolding className="w-full h-full drop-shadow-xl" />
          </div>
        </motion.div>

        {/* ══════ NARRATIVE TEXT ══════ */}
        <NarrativeText
          text="And so, our story unfolds…"
          opacityVal={text1Opacity}
          yVal={text1Y}
          className="bottom-[12%] font-serif italic text-lg sm:text-xl md:text-2xl text-[#8B6B5E]"
        />

        <NarrativeText
          text="“Two paths. Two hearts. One forever.”"
          opacityVal={text2Opacity}
          yVal={text2Y}
          className="bottom-[12%] font-serif italic text-xl sm:text-2xl md:text-3xl text-[#C67B5C]"
        />
      </div>
    </section>
  );
}
