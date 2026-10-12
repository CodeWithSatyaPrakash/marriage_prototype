import React from 'react';

interface SvgProps {
  className?: string;
  style?: React.CSSProperties;
}

export const LeftHand: React.FC<SvgProps> = ({ className, style }) => {
  return (
    <svg
      viewBox="0 0 320 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={style}
    >
      <defs>
        {/* Skin Gradients */}
        <linearGradient id="lhSkinGrad" x1="0%" y1="60%" x2="100%" y2="40%">
          <stop offset="0%" stopColor="#DFB28C" />
          <stop offset="45%" stopColor="#E8C4A0" />
          <stop offset="85%" stopColor="#F2D2B2" />
          <stop offset="100%" stopColor="#E5BA95" />
        </linearGradient>

        <linearGradient id="lhShadowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#C48C68" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#A86F4C" stopOpacity="0" />
        </linearGradient>

        {/* Gold Bangle Gradients */}
        <linearGradient id="lhGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7E7A9" />
          <stop offset="35%" stopColor="#D4A853" />
          <stop offset="70%" stopColor="#AA7A28" />
          <stop offset="100%" stopColor="#E5C16C" />
        </linearGradient>

        <linearGradient id="lhRubyGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#B33948" />
          <stop offset="50%" stopColor="#D65A68" />
          <stop offset="100%" stopColor="#962835" />
        </linearGradient>

        {/* Henna Gradient / Color */}
        <linearGradient id="lhHennaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#9E3B33" />
          <stop offset="50%" stopColor="#B24A40" />
          <stop offset="100%" stopColor="#7E2922" />
        </linearGradient>

        {/* Soft shadow filter */}
        <filter id="lhGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Forearm and Wrist */}
      <g id="wrist-and-arm">
        {/* Soft atmospheric glow */}
        <path
          d="M-10 240 C30 230 65 220 95 210 C105 180 120 160 140 150 C125 185 105 260 70 300 C30 330 -10 350 -20 360 Z"
          fill="#F2D5D0"
          opacity="0.35"
          filter="url(#lhGlow)"
        />

        {/* Arm Base */}
        <path
          d="M-20 220 C30 215 70 205 110 195 C125 192 142 190 160 195 C162 215 152 235 140 252 C115 275 80 300 -10 330 Z"
          fill="url(#lhSkinGrad)"
        />
        {/* Arm shading underneath */}
        <path
          d="M-20 280 C30 280 75 275 115 258 C135 250 148 240 152 230 C138 250 100 285 -10 330 Z"
          fill="url(#lhShadowGrad)"
        />
      </g>

      {/* Palm and Base of Hand */}
      <g id="palm">
        <path
          d="M110 195 C135 192 165 185 190 178 C210 172 230 175 240 185 C235 195 225 210 215 220 C195 240 168 252 140 252 C125 252 118 220 110 195 Z"
          fill="url(#lhSkinGrad)"
        />
        {/* Inner palm crease / shading */}
        <path
          d="M145 200 C165 205 185 200 205 190"
          stroke="#C89674"
          strokeWidth="1.5"
          strokeLinecap="round"
          opacity="0.6"
        />
        <path
          d="M135 215 C155 222 175 220 192 212"
          stroke="#C89674"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </g>

      {/* Fingers - Graceful, curved, reaching rightward */}
      <g id="fingers">
        {/* Pinky Finger */}
        <g id="pinky">
          <path
            d="M210 220 C225 230 245 242 262 250 C270 254 278 252 277 246 C275 240 262 232 250 224 C236 215 222 210 215 210 Z"
            fill="url(#lhSkinGrad)"
          />
          {/* Pinky nail */}
          <path
            d="M272 248 C275 249 276 247 274 244 C271 243 268 245 272 248 Z"
            fill="#FBE8DF"
            stroke="#D6A58E"
            strokeWidth="0.5"
          />
        </g>

        {/* Ring Finger */}
        <g id="ring-finger">
          <path
            d="M222 208 C242 218 268 228 288 232 C296 233 298 227 294 222 C285 214 268 204 248 196 C235 191 224 195 222 208 Z"
            fill="url(#lhSkinGrad)"
          />
          {/* Ring finger nail */}
          <path
            d="M288 230 C293 231 294 227 290 224 C286 223 283 226 288 230 Z"
            fill="#FBE8DF"
            stroke="#D6A58E"
            strokeWidth="0.5"
          />
          {/* Gold Ring with Gem */}
          <ellipse cx="258" cy="211" rx="4" ry="7" transform="rotate(-25 258 211)" fill="url(#lhGoldGrad)" />
          <circle cx="258" cy="211" r="2.2" fill="url(#lhRubyGrad)" />
        </g>

        {/* Middle Finger (Longest, elegant arch) */}
        <g id="middle-finger">
          <path
            d="M230 192 C255 195 285 198 308 198 C316 198 317 190 310 186 C295 178 268 174 242 174 C232 174 226 182 230 192 Z"
            fill="url(#lhSkinGrad)"
          />
          {/* Middle nail */}
          <path
            d="M305 196 C312 195 313 190 307 188 C302 187 300 192 305 196 Z"
            fill="#FBE8DF"
            stroke="#D6A58E"
            strokeWidth="0.5"
          />
        </g>

        {/* Index Finger */}
        <g id="index-finger">
          <path
            d="M218 176 C240 172 270 166 295 158 C302 156 302 149 294 147 C275 145 248 152 225 160 C212 165 210 172 218 176 Z"
            fill="url(#lhSkinGrad)"
          />
          {/* Index nail */}
          <path
            d="M292 156 C298 154 297 149 292 148 C287 148 286 153 292 156 Z"
            fill="#FBE8DF"
            stroke="#D6A58E"
            strokeWidth="0.5"
          />
        </g>

        {/* Thumb - Extended delicately upward/inward */}
        <g id="thumb">
          <path
            d="M142 188 C158 170 176 142 190 120 C196 110 204 112 202 120 C198 135 186 156 172 176 C162 188 152 194 142 188 Z"
            fill="url(#lhSkinGrad)"
          />
          {/* Thumb nail */}
          <path
            d="M198 122 C202 117 199 113 194 116 C190 120 193 125 198 122 Z"
            fill="#FBE8DF"
            stroke="#D6A58E"
            strokeWidth="0.5"
          />
          {/* Thumb Ring / Arsi Mirror Ring Motif */}
          <ellipse cx="180" cy="148" rx="5" ry="3.5" transform="rotate(-40 180 148)" fill="url(#lhGoldGrad)" />
          <circle cx="180" cy="148" r="2.2" fill="#FFF8F0" stroke="#D4A853" strokeWidth="0.75" />
        </g>
      </g>

      {/* Intricate Mehndi / Henna Patterns on Hand */}
      <g id="mehndi-patterns" stroke="url(#lhHennaGrad)" strokeWidth="1.2" strokeLinecap="round" fill="none">
        {/* Mandala center on dorsal / palm */}
        <g id="mehndi-mandala">
          <circle cx="175" cy="205" r="14" stroke="#9E3B33" strokeWidth="1.2" strokeDasharray="2 2" />
          <circle cx="175" cy="205" r="9" stroke="#9E3B33" strokeWidth="1.5" />
          <circle cx="175" cy="205" r="4" fill="#9E3B33" />
          {/* Tiny floral petals around central circle */}
          <path d="M175 191 C173 187 177 187 175 191" />
          <path d="M175 219 C173 223 177 223 175 219" />
          <path d="M161 205 C157 203 157 207 161 205" />
          <path d="M189 205 C193 203 193 207 189 205" />
          {/* Diagonal petal arcs */}
          <path d="M165 195 Q170 192 175 195" />
          <path d="M185 195 Q180 192 175 195" />
          <path d="M165 215 Q170 218 175 215" />
          <path d="M185 215 Q180 218 175 215" />
          {/* Surrounding dots */}
          <circle cx="175" cy="186" r="1.2" fill="#9E3B33" />
          <circle cx="175" cy="224" r="1.2" fill="#9E3B33" />
          <circle cx="156" cy="205" r="1.2" fill="#9E3B33" />
          <circle cx="194" cy="205" r="1.2" fill="#9E3B33" />
          <circle cx="162" cy="192" r="1.2" fill="#9E3B33" />
          <circle cx="188" cy="192" r="1.2" fill="#9E3B33" />
          <circle cx="162" cy="218" r="1.2" fill="#9E3B33" />
          <circle cx="188" cy="218" r="1.2" fill="#9E3B33" />
        </g>

        {/* Wrist Mehndi Bands & Vines */}
        <g id="wrist-mehndi">
          <path d="M102 198 Q120 220 138 248" strokeWidth="1.5" />
          <path d="M108 194 Q126 216 144 244" strokeWidth="1" strokeDasharray="1.5 2" />
          <path d="M96 202 Q114 224 132 252" strokeWidth="1" />
          {/* Paisley / Mango motif at wrist base */}
          <path d="M116 210 Q122 202 130 208 Q136 214 128 222 Q120 224 116 210 Z" fill="#9E3B33" fillOpacity="0.3" strokeWidth="1" />
          <circle cx="125" cy="212" r="1.5" fill="#9E3B33" />
        </g>

        {/* Finger Henna Details */}
        {/* Index finger rings */}
        <path d="M235 168 Q240 162 245 165" />
        <path d="M255 162 Q260 156 265 159" />
        <path d="M275 156 Q280 151 283 154" />
        <circle cx="288" cy="152" r="1" fill="#9E3B33" />

        {/* Middle finger rings & vines */}
        <path d="M248 183 Q254 179 260 182" />
        <path d="M272 186 Q278 181 284 185" />
        <path d="M294 189 Q298 185 303 188" />
        <circle cx="304" cy="191" r="1" fill="#9E3B33" />

        {/* Ring finger details */}
        <path d="M236 205 Q242 209 246 205" />
        <path d="M270 219 Q275 223 278 220" />

        {/* Pinky finger details */}
        <path d="M230 224 Q238 230 242 226" />
        <path d="M252 236 Q258 241 262 238" />

        {/* Thumb details */}
        <path d="M165 165 Q172 155 178 160" />
        <path d="M185 138 Q190 130 193 134" />
      </g>

      {/* Bridal Bangles / Chooda / Kadas on Wrist */}
      <g id="bridal-bangles">
        {/* Bangle 1: Broad Antique Gold Kada with Pearls */}
        <g id="kada-1">
          <path
            d="M82 205 C96 222 110 240 124 260"
            stroke="url(#lhGoldGrad)"
            strokeWidth="7"
            strokeLinecap="round"
          />
          {/* Pearl accents along kada */}
          <circle cx="86" cy="210" r="1.8" fill="#FFF8F0" />
          <circle cx="95" cy="221" r="1.8" fill="#FFF8F0" />
          <circle cx="104" cy="233" r="1.8" fill="#FFF8F0" />
          <circle cx="114" cy="246" r="1.8" fill="#FFF8F0" />
          <circle cx="121" cy="256" r="1.8" fill="#FFF8F0" />
        </g>

        {/* Bangle 2: Traditional Red/Ruby Glass Chooda */}
        <path
          d="M74 212 C88 229 102 247 116 267"
          stroke="url(#lhRubyGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Bangle 3: Deep Rose Velvet Bangle */}
        <path
          d="M68 217 C82 234 96 252 110 272"
          stroke="#C4847A"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Bangle 4: Sparkling Gold Textured Bangle */}
        <path
          d="M62 222 C76 239 90 257 104 277"
          stroke="url(#lhGoldGrad)"
          strokeWidth="2.5"
          strokeDasharray="2 1.5"
          strokeLinecap="round"
        />

        {/* Bangle 5: Ivory / Shell Chooda Bangle */}
        <path
          d="M56 227 C70 244 84 262 98 282"
          stroke="#FAF8F5"
          strokeWidth="3.5"
          strokeLinecap="round"
        />

        {/* Bangle 6: Gold Kada with filigree dots */}
        <path
          d="M50 232 C64 249 78 267 92 287"
          stroke="url(#lhGoldGrad)"
          strokeWidth="4"
          strokeLinecap="round"
        />
        {/* Tiny golden bells / ghungroo tassels dangling from bangle */}
        <g id="ghungroo-accents" stroke="#D4A853" strokeWidth="1" fill="#D4A853">
          <line x1="88" y1="262" x2="85" y2="274" />
          <circle cx="85" cy="275" r="2.5" fill="url(#lhGoldGrad)" />
          <line x1="100" y1="277" x2="98" y2="288" />
          <circle cx="98" cy="289" r="2" fill="url(#lhGoldGrad)" />
        </g>
      </g>

      {/* Delicate floating petals and light sparkles around the reaching bride's hand */}
      <g id="ambiance-sparkles" fill="#D4A853" opacity="0.75">
        <circle cx="280" cy="130" r="1.5" />
        <path d="M280 126 Q280 134 280 134 M276 130 Q284 130 284 130" stroke="#D4A853" strokeWidth="0.8" />

        <circle cx="310" cy="220" r="1.2" />
        <circle cx="260" cy="110" r="1" />
        <circle cx="220" cy="255" r="1.4" />
      </g>

      {/* Floating blush rose petals */}
      <g id="floating-petals" opacity="0.65">
        <path
          d="M260 270 C264 262 274 264 276 270 C277 275 270 280 263 277 C259 275 258 273 260 270 Z"
          fill="#F2D5D0"
          stroke="#E5BA95"
          strokeWidth="0.5"
        />
        <path
          d="M210 130 C214 124 222 126 224 131 C225 135 219 139 213 137 C210 135 209 133 210 130 Z"
          fill="#F2D5D0"
          stroke="#E5BA95"
          strokeWidth="0.5"
        />
      </g>
    </svg>
  );
};

export default LeftHand;
