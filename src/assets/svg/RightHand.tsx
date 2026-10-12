import React from 'react';

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export const RightHand: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Groom's Skin Gradients - slightly warmer, robust tone */}
        <linearGradient id="rhSkinGrad" x1="100%" y1="60%" x2="0%" y2="40%">
          <stop offset="0%" stopColor="#D4A37C" />
          <stop offset="40%" stopColor="#DFB28C" />
          <stop offset="85%" stopColor="#E8C4A0" />
          <stop offset="100%" stopColor="#DCAE88" />
        </linearGradient>

        <linearGradient id="rhShadowGrad" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#B37750" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#8F5832" stopOpacity="0" />
        </linearGradient>

        {/* Sherwani Fabric: Warm Ivory / Raw Silk Texture */}
        <linearGradient id="rhSherwaniGrad" x1="0%" y1="0%" x2="100%" y2="80%">
          <stop offset="0%" stopColor="#FFFDF9" />
          <stop offset="40%" stopColor="#FAF5EC" />
          <stop offset="80%" stopColor="#F1E8D9" />
          <stop offset="100%" stopColor="#E2D4BF" />
        </linearGradient>

        {/* Champagne Gold Zari Embroidery */}
        <linearGradient id="rhZariGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBF0BD" />
          <stop offset="35%" stopColor="#D4A853" />
          <stop offset="70%" stopColor="#A87B2E" />
          <stop offset="100%" stopColor="#DFBA6E" />
        </linearGradient>

        {/* Muted Terracotta Accent */}
        <linearGradient id="rhTerraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D98A6A" />
          <stop offset="100%" stopColor="#B06547" />
        </linearGradient>

        {/* Soft shadow filter */}
        <filter id="rhGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3.5" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Arm Base and Musculature */}
      <g id="groom-forearm">
        {/* Soft atmospheric backlight */}
        <path
          d="M340 240 C300 230 260 215 230 205 C215 175 195 155 175 145 C190 185 215 260 250 300 C290 330 330 350 340 360 Z"
          fill="#FAF8F5"
          opacity="0.3"
          filter="url(#rhGlow)"
        />

        {/* Forearm skin extending under cuff */}
        <path
          d="M340 220 C290 215 250 205 210 195 C195 192 178 190 160 195 C158 215 168 238 180 255 C205 278 240 302 340 330 Z"
          fill="url(#rhSkinGrad)"
        />
        {/* Forearm shading */}
        <path
          d="M340 280 C290 280 245 275 205 258 C185 250 172 240 168 230 C182 250 220 285 340 330 Z"
          fill="url(#rhShadowGrad)"
        />
      </g>

      {/* Palm and Hand Base - Masculine, steady, cupping gently upward to hold */}
      <g id="groom-palm">
        <path
          d="M210 195 C185 192 155 185 130 178 C110 172 90 175 80 185 C85 195 95 210 105 220 C125 240 152 252 180 252 C195 252 202 220 210 195 Z"
          fill="url(#rhSkinGrad)"
        />
        {/* Masculine palm character lines / crease marks */}
        <path
          d="M175 200 C155 205 135 200 115 190"
          stroke="#B5815E"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.55"
        />
        <path
          d="M185 215 C165 222 145 220 128 212"
          stroke="#B5815E"
          strokeWidth="1.4"
          strokeLinecap="round"
          opacity="0.45"
        />
      </g>

      {/* Fingers - Strong, steady, extended toward the left */}
      <g id="groom-fingers">
        {/* Groom Pinky Finger */}
        <g id="groom-pinky">
          <path
            d="M110 220 C95 230 75 242 58 250 C50 254 42 252 43 246 C45 240 58 232 70 224 C84 215 98 210 105 210 Z"
            fill="url(#rhSkinGrad)"
          />
          {/* Pinky nail */}
          <path
            d="M48 248 C45 249 44 247 46 244 C49 243 52 245 48 248 Z"
            fill="#F4DFD3"
            stroke="#BD896F"
            strokeWidth="0.5"
          />
        </g>

        {/* Groom Ring Finger */}
        <g id="groom-ring">
          <path
            d="M98 208 C78 218 52 228 32 232 C24 233 22 227 26 222 C35 214 52 204 72 196 C85 191 96 195 98 208 Z"
            fill="url(#rhSkinGrad)"
          />
          {/* Ring finger nail */}
          <path
            d="M32 230 C27 231 26 227 30 224 C34 223 37 226 32 230 Z"
            fill="#F4DFD3"
            stroke="#BD896F"
            strokeWidth="0.5"
          />
          {/* Groom's Classic Gold Wedding Band */}
          <ellipse cx="62" cy="211" rx="4" ry="7" transform="rotate(25 62 211)" fill="url(#rhZariGrad)" />
          <ellipse cx="62" cy="211" rx="2.5" ry="5.5" transform="rotate(25 62 211)" fill="#A87B2E" opacity="0.4" />
        </g>

        {/* Groom Middle Finger */}
        <g id="groom-middle">
          <path
            d="M90 192 C65 195 35 198 12 198 C4 198 3 190 10 186 C25 178 52 174 78 174 C88 174 94 182 90 192 Z"
            fill="url(#rhSkinGrad)"
          />
          {/* Middle nail */}
          <path
            d="M15 196 C8 195 7 190 13 188 C18 187 20 192 15 196 Z"
            fill="#F4DFD3"
            stroke="#BD896F"
            strokeWidth="0.5"
          />
        </g>

        {/* Groom Index Finger */}
        <g id="groom-index">
          <path
            d="M102 176 C80 172 50 166 25 158 C18 156 18 149 26 147 C45 145 72 152 95 160 C108 165 110 172 102 176 Z"
            fill="url(#rhSkinGrad)"
          />
          {/* Index nail */}
          <path
            d="M28 156 C22 154 23 149 28 148 C33 148 34 153 28 156 Z"
            fill="#F4DFD3"
            stroke="#BD896F"
            strokeWidth="0.5"
          />
        </g>

        {/* Groom Thumb - Reaching gracefully */}
        <g id="groom-thumb">
          <path
            d="M178 188 C162 170 144 142 130 120 C124 110 116 112 118 120 C122 135 134 156 148 176 C158 188 168 194 178 188 Z"
            fill="url(#rhSkinGrad)"
          />
          {/* Thumb nail */}
          <path
            d="M122 122 C118 117 121 113 126 116 C130 120 127 125 122 122 Z"
            fill="#F4DFD3"
            stroke="#BD896F"
            strokeWidth="0.5"
          />
        </g>
      </g>

      {/* Royal Sherwani Cuff Detail at the Groom's Wrist */}
      <g id="sherwani-cuff">
        {/* Sherwani Sleeve Base */}
        <path
          d="M215 180 C235 188 260 215 280 250 C295 275 320 300 345 315 L345 180 C310 170 270 165 220 170 Z"
          fill="url(#rhSherwaniGrad)"
          stroke="#D4C4AA"
          strokeWidth="0.75"
        />

        {/* Sherwani Sleeve Shadow Creases */}
        <path
          d="M275 190 C290 225 305 260 325 295"
          stroke="#D8C7AF"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M250 185 C265 210 275 240 295 270"
          stroke="#D8C7AF"
          strokeWidth="1.2"
          strokeLinecap="round"
        />

        {/* Ornate Cuff Band: Champagne Gold Zari Border */}
        <g id="cuff-border">
          {/* Main Gold Border */}
          <path
            d="M210 176 C225 195 245 222 265 252 L250 262 C230 230 212 205 195 186 Z"
            fill="url(#rhZariGrad)"
            stroke="#B58632"
            strokeWidth="0.75"
          />

          {/* Intricate Geometric / Chevron Embroidery on Cuff */}
          <path
            d="M212 182 L206 186 L216 194 L210 198 L220 206 L214 210 L224 218 L218 222 L228 230 L222 234 L232 242"
            stroke="#FFF8F0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Terracotta Piping Ribbon */}
          <path
            d="M208 174 C224 193 243 220 263 250"
            stroke="url(#rhTerraGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Pure Gold Kada peeking from under cuff */}
          <path
            d="M192 188 C208 206 226 230 242 256"
            stroke="url(#rhZariGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
          {/* Kada Lion-head / Royal accent dot */}
          <circle cx="218" cy="222" r="2.2" fill="#FAF8F5" stroke="#D4A853" strokeWidth="1" />
        </g>

        {/* Royal Sherwani Button / Cufflink Detail */}
        <g id="cufflink">
          <circle cx="242" cy="226" r="4.5" fill="url(#rhZariGrad)" stroke="#8F5832" strokeWidth="0.75" />
          <circle cx="242" cy="226" r="2.5" fill="#FAF8F5" />
          <circle cx="242" cy="226" r="1.2" fill="#B06547" />

          {/* Second cuff button */}
          <circle cx="260" cy="248" r="4.5" fill="url(#rhZariGrad)" stroke="#8F5832" strokeWidth="0.75" />
          <circle cx="260" cy="248" r="2.5" fill="#FAF8F5" />
          <circle cx="260" cy="248" r="1.2" fill="#B06547" />
        </g>
      </g>

      {/* Floating Gold Dust and Sparkles */}
      <g id="sparkle-elements" fill="#D4A853" opacity="0.75">
        <circle cx="40" cy="130" r="1.5" />
        <path d="M40 126 Q40 134 40 134 M36 130 Q44 130 44 130" stroke="#D4A853" strokeWidth="0.8" />
        <circle cx="10" cy="220" r="1.2" />
        <circle cx="60" cy="110" r="1" />
        <circle cx="100" cy="255" r="1.4" />
      </g>

      {/* Subtle Marigold Petal Accents */}
      <g id="floating-petals" opacity="0.65">
        <path
          d="M60 270 C56 262 46 264 44 270 C43 275 50 280 57 277 C61 275 62 273 60 270 Z"
          fill="#F2D5D0"
          stroke="#E5BA95"
          strokeWidth="0.5"
        />
        <path
          d="M110 130 C106 124 98 126 96 131 C95 135 101 139 107 137 C110 135 111 133 110 130 Z"
          fill="#D4A853"
          stroke="#B58632"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
};

export default RightHand;
