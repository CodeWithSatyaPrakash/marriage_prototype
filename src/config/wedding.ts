// ============================================================================
// WEDDING CONFIGURATION
// ============================================================================
// All wedding-specific details in one place. Replace these values with
// real client information when customizing for a new couple.
// ============================================================================

export const weddingConfig = {
  // ── Couple ──────────────────────────────────────────────────────────────
  bride: {
    name: 'Ananya',
    fullName: 'Ananya Sharma',
  },
  groom: {
    name: 'Aarav',
    fullName: 'Aarav Patel',
  },

  // ── Taglines & Copy ────────────────────────────────────────────────────
  mainTagline: 'Two souls, one beautiful story.',
  supportingTagline: 'And so, our forever begins.',
  familyInvitation:
    'With the blessings of our families, we invite you to celebrate the beginning of our forever.',
  invitationMessage:
    'Together with our families, we invite you to join us as we begin this beautiful new chapter.',
  invitationPrelude: 'Two paths. Two hearts. One forever.',
  venueClosing:
    'May our souls and lives forever be intertwined.',
  closingMessage: 'With love,',
  loveStoryIntro: 'Every beautiful forever begins with a story.',

  // ── Events ─────────────────────────────────────────────────────────────
  events: [
    {
      id: 'haldi',
      name: 'Haldi Ceremony',
      date: '18 November 2026',
      time: '10:30 AM IST',
      description:
        'A joyful celebration drenched in turmeric, laughter, and blessings as we prepare for the wedding day.',
      icon: 'haldi' as const,
    },
    {
      id: 'wedding',
      name: 'Wedding Ceremony',
      date: '20 November 2026',
      time: '7:00 PM IST',
      description:
        'The sacred union where two hearts become one, surrounded by loved ones under the wedding mandap.',
      icon: 'wedding' as const,
    },
    {
      id: 'reception',
      name: 'Wedding Reception',
      date: '22 November 2026',
      time: '6:30 PM IST',
      description:
        'An evening of elegance, music, and celebration as we begin our new journey together.',
      icon: 'reception' as const,
    },
  ],

  // ── Venue ──────────────────────────────────────────────────────────────
  venue: {
    name: 'The Royal Garden Palace',
    city: 'Bhubaneswar',
    state: 'Odisha',
    fullAddress: 'The Royal Garden Palace, Bhubaneswar, Odisha',
    mapsUrl:
      'https://www.google.com/maps/search/The+Royal+Garden+Palace+Bhubaneswar+Odisha',
    weddingDate: '20 November 2026',
    weddingTime: '7:00 PM IST',
  },

  // ── Love Story Milestones ──────────────────────────────────────────────
  milestones: [
    {
      id: 'first-hello',
      title: 'The First Hello',
      date: 'March 2022',
      description:
        'A chance meeting at a friend\'s gathering turned into hours of conversation. It was as if the universe had been waiting for this moment.',
    },
    {
      id: 'moment-we-knew',
      title: 'The Moment We Knew',
      date: 'September 2023',
      description:
        'Under a canopy of stars on a quiet evening, we realized that what we had was not just love — it was home.',
    },
    {
      id: 'promise-of-forever',
      title: 'The Promise of Forever',
      date: 'February 2025',
      description:
        'With trembling hands and overflowing hearts, a simple question changed everything: "Will you be my forever?"',
    },
  ],

  // ── Theme Colors (for reference / customization) ───────────────────────
  colors: {
    ivory: '#FAF8F5',
    blushPink: '#F2D5D0',
    sageGreen: '#B5C5A3',
    champagneGold: '#D4A853',
    mutedTerracotta: '#C67B5C',
    warmCream: '#FFF8F0',
    deepRose: '#C4847A',
    softMauve: '#D4B5B0',
  },
} as const;

export type WeddingEvent = (typeof weddingConfig.events)[number];
export type Milestone = (typeof weddingConfig.milestones)[number];
