import React from 'react';

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export const HandsTogether: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 500 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Bride's Warm Delicate Skin Gradient */}
        <linearGradient id="htBrideSkin" x1="0%" y1="50%" x2="100%" y2="50%">
          <stop offset="0%" stopColor="#DFB28C" />
          <stop offset="50%" stopColor="#E8C4A0" />
          <stop offset="100%" stopColor="#F5D8C0" />
        </linearGradient>

        {/* Groom's Robust Skin Gradient */}
        <linearGradient id="htGroomSkin" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#D4A37C" />
          <stop offset="50%" stopColor="#DFB28C" />
          <stop offset="100%" stopColor="#E5BA95" />
        </linearGradient>

        {/* Gold Gradients */}
        <linearGradient id="htGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F9E8B2" />
          <stop offset="35%" stopColor="#D4A853" />
          <stop offset="70%" stopColor="#AA7A28" />
          <stop offset="100%" stopColor="#E5C16C" />
        </linearGradient>

        {/* Chooda Ruby Red */}
        <linearGradient id="htRubyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B33948" />
          <stop offset="50%" stopColor="#D65A68" />
          <stop offset="100%" stopColor="#962835" />
        </linearGradient>

        {/* Sherwani Cream / Raw Silk */}
        <linearGradient id="htSherwaniGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFFDF9" />
          <stop offset="50%" stopColor="#FAF5EC" />
          <stop offset="100%" stopColor="#EBE1D0" />
        </linearGradient>

        {/* Mehndi Stroke Color */}
        <linearGradient id="htHennaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9E3B33" />
          <stop offset="100%" stopColor="#B24A40" />
        </linearGradient>

        {/* Aura / Halo Glow Filter */}
        <filter id="htAura" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="8" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Sacred Halo / Soft Luminous Aura Behind Clasping Hands */}
      <circle
        cx="250"
        cy="210"
        r="110"
        fill="#FAF8F5"
        opacity="0.45"
        filter="url(#htAura)"
      />
      <circle
        cx="250"
        cy="210"
        r="95"
        stroke="#D4A853"
        strokeWidth="1"
        strokeDasharray="4 6"
        opacity="0.35"
      />

      {/* ========================================================
          BRIDE'S ARM & WRIST (Coming from Left)
         ======================================================== */}
      <g id="bride-arm">
        {/* Soft shadow */}
        <path
          d="M0 240 C50 230 100 215 140 205 C150 225 155 240 145 265 C110 280 60 300 0 315 Z"
          fill="#B57F5E"
          opacity="0.18"
        />

        {/* Forearm Body */}
        <path
          d="M0 220 C60 212 110 200 150 190 C165 200 170 218 165 235 C145 255 100 275 0 295 Z"
          fill="url(#htBrideSkin)"
        />

        {/* Bridal Bangles / Chooda Stack */}
        <g id="bride-bangles">
          {/* Broad Gold Kada 1 */}
          <path
            d="M95 195 C108 208 120 226 130 248"
            stroke="url(#htGoldGrad)"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <circle cx="102" cy="204" r="1.6" fill="#FFF8F0" />
          <circle cx="111" cy="216" r="1.6" fill="#FFF8F0" />
          <circle cx="120" cy="229" r="1.6" fill="#FFF8F0" />

          {/* Red Glass Chooda */}
          <path
            d="M87 197 C100 210 112 228 122 250"
            stroke="url(#htRubyGrad)"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Rose Pink Velvet Bangle */}
          <path
            d="M81 199 C94 212 106 230 116 252"
            stroke="#C4847A"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Gold Textured Bangle */}
          <path
            d="M75 201 C88 214 100 232 110 254"
            stroke="url(#htGoldGrad)"
            strokeWidth="2.5"
            strokeDasharray="2 1.5"
            strokeLinecap="round"
          />

          {/* Ivory Chooda Bangle */}
          <path
            d="M69 203 C82 216 94 234 104 256"
            stroke="#FAF8F5"
            strokeWidth="3.5"
            strokeLinecap="round"
          />

          {/* Outer Gold Kada */}
          <path
            d="M63 205 C76 218 88 236 98 258"
            stroke="url(#htGoldGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* ========================================================
          GROOM'S ARM & WRIST (Coming from Right)
         ======================================================== */}
      <g id="groom-arm">
        {/* Forearm skin base extending under cuff */}
        <path
          d="M500 220 C440 215 390 205 350 195 C335 208 330 228 335 245 C355 265 400 285 500 305 Z"
          fill="url(#htGroomSkin)"
        />

        {/* Sherwani Sleeve */}
        <path
          d="M365 185 C385 192 410 215 430 250 C445 272 470 292 500 305 L500 185 C460 178 415 174 365 185 Z"
          fill="url(#htSherwaniGrad)"
          stroke="#DED0BC"
          strokeWidth="0.75"
        />

        {/* Sherwani Gold Embroidered Cuff */}
        <g id="groom-cuff">
          <path
            d="M360 180 C375 200 395 228 415 258 L400 268 C380 236 362 210 345 190 Z"
            fill="url(#htGoldGrad)"
            stroke="#A87B2E"
            strokeWidth="0.75"
          />

          {/* Cuff Chevron Zari Pattern */}
          <path
            d="M362 186 L356 190 L366 198 L360 202 L370 210 L364 214 L374 222 L368 226 L378 234"
            stroke="#FFF8F0"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Terracotta Trim */}
          <path
            d="M358 178 C374 198 393 226 413 256"
            stroke="#C67B5C"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Groom's Antique Kada */}
          <path
            d="M342 192 C358 212 376 238 392 264"
            stroke="url(#htGoldGrad)"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* Sherwani Cuff Button */}
          <circle cx="392" cy="232" r="4" fill="url(#htGoldGrad)" stroke="#8F5832" strokeWidth="0.75" />
          <circle cx="392" cy="232" r="1.8" fill="#FFF8F0" />
        </g>
      </g>

      {/* ========================================================
          HANDS INTERLOCKING / HOLDING (Panigrahana / Hastamelap)
         ======================================================== */}
      {/* 1. Groom's Base Palm (Underneath, supporting bride's hand) */}
      <g id="groom-support-palm">
        <path
          d="M345 195 C320 188 285 184 250 188 C230 190 205 198 185 210 C180 220 188 232 205 238 C235 248 280 252 335 245 Z"
          fill="url(#htGroomSkin)"
        />
        {/* Palm shading / crease */}
        <path
          d="M315 200 C285 204 255 208 230 218"
          stroke="#B5815E"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>

      {/* 2. Bride's Hand Resting Tenderly On Top */}
      <g id="bride-hand-top">
        {/* Bride's Palm / Dorsal */}
        <path
          d="M155 190 C180 182 215 178 245 182 C275 186 295 198 305 212 C295 226 270 236 240 240 C200 244 170 235 160 215 Z"
          fill="url(#htBrideSkin)"
        />

        {/* Bride's Graceful Fingers Curling Over Groom's Hand */}
        {/* Thumb */}
        <path
          d="M190 182 C205 170 225 158 242 154 C248 152 253 156 250 162 C245 170 232 180 218 188 Z"
          fill="url(#htBrideSkin)"
        />
        {/* Thumb nail */}
        <path
          d="M246 156 C248 154 251 156 249 159 C247 160 245 158 246 156 Z"
          fill="#FDF2EC"
          stroke="#D4A882"
          strokeWidth="0.5"
        />

        {/* Index Finger */}
        <path
          d="M245 182 C270 182 296 188 316 200 C322 204 321 210 314 212 C298 215 278 210 252 204 Z"
          fill="url(#htBrideSkin)"
        />
        <path
          d="M316 203 C319 205 318 208 314 209 C312 208 313 205 316 203 Z"
          fill="#FDF2EC"
          stroke="#D4A882"
          strokeWidth="0.5"
        />

        {/* Middle Finger (Curving round groom's hand) */}
        <path
          d="M242 195 C270 196 298 202 320 216 C326 220 324 226 317 227 C298 228 274 222 245 214 Z"
          fill="url(#htBrideSkin)"
        />
        <path
          d="M320 219 C323 221 322 224 318 224 C316 223 317 220 320 219 Z"
          fill="#FDF2EC"
          stroke="#D4A882"
          strokeWidth="0.5"
        />

        {/* Ring Finger */}
        <path
          d="M236 210 C260 212 286 218 306 232 C311 236 308 241 302 241 C285 241 262 232 238 224 Z"
          fill="url(#htBrideSkin)"
        />
        <path
          d="M305 235 C308 237 307 239 303 239 C302 238 303 236 305 235 Z"
          fill="#FDF2EC"
          stroke="#D4A882"
          strokeWidth="0.5"
        />

        {/* Pinky Finger */}
        <path
          d="M228 222 C248 225 270 232 288 244 C293 248 290 252 285 252 C270 251 250 242 228 234 Z"
          fill="url(#htBrideSkin)"
        />

        {/* Bride's Engagement Diamond / Gold Ring on Ring Finger */}
        <g id="bride-ring">
          <ellipse cx="272" cy="220" rx="3.5" ry="6.5" transform="rotate(15 272 220)" fill="url(#htGoldGrad)" />
          <circle cx="272" cy="220" r="2.4" fill="#FFFFFF" stroke="#D4A853" strokeWidth="0.8" />
        </g>

        {/* Mehndi on Bride's Hand */}
        <g id="bride-mehndi" stroke="url(#htHennaGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none">
          {/* Central Mandala */}
          <circle cx="215" cy="202" r="11" strokeDasharray="2 2" />
          <circle cx="215" cy="202" r="7" strokeWidth="1.5" />
          <circle cx="215" cy="202" r="3" fill="#9E3B33" />
          {/* Petal curves around mandala */}
          <path d="M215 191 Q218 188 215 186 Q212 188 215 191" />
          <path d="M215 213 Q218 216 215 218 Q212 216 215 213" />
          <path d="M204 202 Q201 199 199 202 Q201 205 204 202" />
          <path d="M226 202 Q229 199 231 202 Q229 205 226 202" />
          {/* Dots */}
          <circle cx="215" cy="184" r="1" fill="#9E3B33" />
          <circle cx="215" cy="220" r="1" fill="#9E3B33" />
          <circle cx="197" cy="202" r="1" fill="#9E3B33" />
          <circle cx="233" cy="202" r="1" fill="#9E3B33" />

          {/* Wrist Henna Garland Band */}
          <path d="M152 195 Q160 210 166 228" strokeWidth="1.4" />
          <path d="M157 193 Q165 208 171 226" strokeDasharray="1.5 2" />

          {/* Finger Henna rings */}
          <path d="M260 183 Q264 180 268 184" />
          <path d="M282 190 Q286 187 290 191" />
          <path d="M262 198 Q266 195 270 199" />
          <path d="M285 205 Q289 202 293 207" />
          <path d="M250 212 Q254 209 258 213" />
        </g>
      </g>

      {/* 3. Groom's Fingers Gently Clasping from underneath & side */}
      <g id="groom-fingers-clasp">
        {/* Groom's Thumb Gently Resting on Bride's hand */}
        <path
          d="M260 178 C242 168 222 162 208 162 C200 162 198 168 204 172 C216 180 238 188 258 192 Z"
          fill="url(#htGroomSkin)"
        />
        {/* Groom's Thumb Nail */}
        <path
          d="M205 165 C202 165 202 168 205 169 C207 169 208 166 205 165 Z"
          fill="#F4DFD3"
          stroke="#BD896F"
          strokeWidth="0.5"
        />

        {/* Groom's Wedding Band on Groom's finger visible at clasp */}
        <ellipse cx="270" cy="183" rx="3.5" ry="6" transform="rotate(-30 270 183)" fill="url(#htGoldGrad)" />

        {/* Groom's Fingers Wrapping Under */}
        <path
          d="M195 235 C198 248 210 256 225 258 C242 260 260 255 275 248 C270 240 260 236 248 235 Z"
          fill="url(#htGroomSkin)"
          opacity="0.95"
        />
      </g>

      {/* Red Sacred Thread / Mauli (Kalava) Tied on Groom's & Bride's wrists symbol of unity */}
      <g id="sacred-mauli">
        {/* Bride's delicate thread */}
        <path
          d="M138 200 C145 212 152 226 158 242"
          stroke="#B33948"
          strokeWidth="1.8"
          strokeDasharray="4 2"
        />
        <path
          d="M139 201 C146 213 153 227 159 243"
          stroke="#D4A853"
          strokeWidth="1"
          strokeDasharray="2 3"
        />
      </g>

      {/* ========================================================
          SURROUNDING FLORAL ACCENTS & BLESSINGS
         ======================================================== */}
      {/* 1. Jasmine Blossom Garland / Strands */}
      <g id="jasmine-accents">
        {/* Single Jasmine Flower top-left */}
        <g transform="translate(170, 120)">
          <path d="M0 -10 C3 -4 7 -3 10 0 C4 3 3 7 0 10 C-3 4 -7 3 -10 0 C-4 -3 -3 -7 0 -10 Z" fill="#FFFDF9" stroke="#E2D4BF" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="2.5" fill="#D4A853" />
        </g>

        {/* Jasmine Flower top-center */}
        <g transform="translate(250, 110)">
          <path d="M0 -12 C4 -5 8 -4 12 0 C5 4 4 8 0 12 C-4 5 -8 4 -12 0 C-5 -4 -4 -8 0 -12 Z" fill="#FFFDF9" stroke="#E2D4BF" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="3" fill="#D4A853" />
        </g>

        {/* Jasmine Flower top-right */}
        <g transform="translate(330, 125)">
          <path d="M0 -10 C3 -4 7 -3 10 0 C4 3 3 7 0 10 C-3 4 -7 3 -10 0 C-4 -3 -3 -7 0 -10 Z" fill="#FFFDF9" stroke="#E2D4BF" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="2.5" fill="#D4A853" />
        </g>

        {/* Jasmine lower cluster */}
        <g transform="translate(220, 290)">
          <path d="M0 -9 C3 -3 6 -3 9 0 C3 3 3 6 0 9 C-3 3 -6 3 -9 0 C-3 -3 -3 -6 0 -9 Z" fill="#FFFDF9" stroke="#E2D4BF" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="2" fill="#D4A853" />
        </g>
        <g transform="translate(280, 295)">
          <path d="M0 -9 C3 -3 6 -3 9 0 C3 3 3 6 0 9 C-3 3 -6 3 -9 0 C-3 -3 -3 -6 0 -9 Z" fill="#FFFDF9" stroke="#E2D4BF" strokeWidth="0.5" />
          <circle cx="0" cy="0" r="2" fill="#D4A853" />
        </g>
      </g>

      {/* 2. Marigold / Genda Phool Elements */}
      <g id="marigold-accents">
        {/* Marigold cluster top */}
        <g transform="translate(290, 100)">
          <circle cx="0" cy="0" r="10" fill="#E89234" opacity="0.9" />
          <circle cx="0" cy="0" r="7" fill="#F0AC42" />
          <circle cx="0" cy="0" r="4" fill="#F5C45B" />
          <circle cx="0" cy="0" r="1.5" fill="#B35E1B" />
        </g>

        <g transform="translate(205, 95)">
          <circle cx="0" cy="0" r="8" fill="#E89234" opacity="0.9" />
          <circle cx="0" cy="0" r="5.5" fill="#F0AC42" />
          <circle cx="0" cy="0" r="3" fill="#F5C45B" />
        </g>
      </g>

      {/* 3. Soft Floating Rose & Sage Leaves */}
      <g id="leaves-and-petals">
        {/* Sage green leaf */}
        <path
          d="M185 115 C195 105 210 110 212 118 C205 125 190 125 185 115 Z"
          fill="#B5C5A3"
          opacity="0.85"
        />
        <path d="M185 115 L210 117" stroke="#8E9F7C" strokeWidth="0.6" />

        {/* Sage leaf right */}
        <path
          d="M310 115 C300 105 285 110 283 118 C290 125 305 125 310 115 Z"
          fill="#B5C5A3"
          opacity="0.85"
        />
        <path d="M310 115 L285 117" stroke="#8E9F7C" strokeWidth="0.6" />

        {/* Floating Blush Rose Petals */}
        <path
          d="M140 160 C146 150 160 152 163 160 C164 167 154 174 144 170 C138 168 137 164 140 160 Z"
          fill="#F2D5D0"
          stroke="#E5BA95"
          strokeWidth="0.6"
        />
        <path
          d="M345 155 C351 145 365 147 368 155 C369 162 359 169 349 165 C343 163 342 159 345 155 Z"
          fill="#F2D5D0"
          stroke="#E5BA95"
          strokeWidth="0.6"
        />
        <path
          d="M245 320 C252 310 268 312 272 322 C273 330 261 338 250 334 C243 331 241 326 245 320 Z"
          fill="#F2D5D0"
          stroke="#C4847A"
          strokeWidth="0.6"
          opacity="0.9"
        />

        {/* Deep Rose Petal */}
        <path
          d="M180 275 C186 267 198 268 201 276 C202 283 193 289 184 286 C179 284 177 280 180 275 Z"
          fill="#C4847A"
          stroke="#9E3B33"
          strokeWidth="0.5"
          opacity="0.8"
        />
        <path
          d="M320 280 C326 272 338 273 341 281 C342 288 333 294 324 291 C319 289 317 285 320 280 Z"
          fill="#C4847A"
          stroke="#9E3B33"
          strokeWidth="0.5"
          opacity="0.8"
        />
      </g>

      {/* 4. Golden Blessing Particles / Akshata & Sparkles */}
      <g id="golden-blessings" fill="#D4A853">
        {/* Golden grains / stars */}
        <circle cx="230" cy="140" r="1.5" />
        <circle cx="270" cy="145" r="1.2" />
        <circle cx="250" cy="80" r="2" />
        <circle cx="160" cy="240" r="1.5" />
        <circle cx="340" cy="245" r="1.5" />
        <circle cx="250" cy="275" r="1.8" />

        {/* 4-point golden star */}
        <path d="M250 72 Q250 82 250 82 M245 77 Q255 77 255 77" stroke="#D4A853" strokeWidth="1" strokeLinecap="round" />
        <path d="M210 148 Q210 156 210 156 M206 152 Q214 152 214 152" stroke="#D4A853" strokeWidth="0.8" strokeLinecap="round" />
        <path d="M295 152 Q295 160 295 160 M291 156 Q299 156 299 156" stroke="#D4A853" strokeWidth="0.8" strokeLinecap="round" />
      </g>
    </svg>
  );
};

export default HandsTogether;
