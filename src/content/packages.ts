// WoM Holdings Music Division - Package Data
export interface Package {
  id: string;
  name: string;
  price: number;
  description?: string;
  deliverables: string[];
  category: 'release' | 'addon' | 'website' | 'merch';
  featured?: boolean;
}

export interface ReleasePackage extends Package {
  songCount?: number;
  type: 'single' | 'ep' | 'album' | 'visual';
}

export interface MerchPackage {
  id: string;
  name: string;
  quantities: { qty: number; price: number; pricePerUnit: number }[];
}

export interface WebsitePackage extends Package {
  tier: 'starter' | 'pro' | 'premium';
  features: string[];
}

// Release Packages
export const releasePackages: ReleasePackage[] = [
  {
    id: 'single-release',
    name: 'Single Release',
    price: 1425,
    type: 'single',
    category: 'release',
    deliverables: [
      '8 Graphics',
      '3 Reels'
    ],
    featured: true
  },
  // EP Packages
  {
    id: 'ep-3-songs',
    name: 'EP - 3 Songs',
    price: 2925,
    type: 'ep',
    songCount: 3,
    category: 'release',
    deliverables: [
      '8 Graphics per song',
      '2 Graphic Reels per song',
      '1 × 30-sec Short Video (EP-wide)'
    ]
  },
  {
    id: 'ep-4-songs',
    name: 'EP - 4 Songs',
    price: 3675,
    type: 'ep',
    songCount: 4,
    category: 'release',
    deliverables: [
      '8 Graphics per song',
      '2 Graphic Reels per song',
      '1 × 30-sec Short Video (EP-wide)'
    ]
  },
  {
    id: 'ep-5-songs',
    name: 'EP - 5 Songs',
    price: 4425,
    type: 'ep',
    songCount: 5,
    category: 'release',
    deliverables: [
      '8 Graphics per song',
      '2 Graphic Reels per song',
      '1 × 30-sec Short Video (EP-wide)'
    ]
  },
  // Album Packages
  {
    id: 'album-6-songs',
    name: 'Album - 6 Songs',
    price: 5625,
    type: 'album',
    songCount: 6,
    category: 'release',
    deliverables: [
      '6 Graphics per song',
      '3 × 15-sec Reels per song',
      'Album Design',
      'Stage Visualizer',
      '1 Full 3-min Video (Album-wide)'
    ]
  },
  {
    id: 'album-7-songs',
    name: 'Album - 7 Songs',
    price: 6375,
    type: 'album',
    songCount: 7,
    category: 'release',
    deliverables: [
      '6 Graphics per song',
      '3 × 15-sec Reels per song',
      'Album Design',
      'Stage Visualizer',
      '1 Full 3-min Video (Album-wide)'
    ]
  },
  {
    id: 'album-8-songs',
    name: 'Album - 8 Songs',
    price: 7125,
    type: 'album',
    songCount: 8,
    category: 'release',
    deliverables: [
      '6 Graphics per song',
      '3 × 15-sec Reels per song',
      'Album Design',
      'Stage Visualizer',
      '1 Full 3-min Video (Album-wide)'
    ]
  },
  {
    id: 'album-9-songs',
    name: 'Album - 9 Songs',
    price: 7875,
    type: 'album',
    songCount: 9,
    category: 'release',
    deliverables: [
      '6 Graphics per song',
      '3 × 15-sec Reels per song',
      'Album Design',
      'Stage Visualizer',
      '1 Full 3-min Video (Album-wide)'
    ]
  },
  {
    id: 'album-10-songs',
    name: 'Album - 10 Songs',
    price: 8625,
    type: 'album',
    songCount: 10,
    category: 'release',
    deliverables: [
      '6 Graphics per song',
      '3 × 15-sec Reels per song',
      'Album Design',
      'Stage Visualizer',
      '1 Full 3-min Video (Album-wide)'
    ]
  },
  // Stage Visual Package
  {
    id: 'stage-visual',
    name: 'Stage Visual Package',
    price: 1875,
    type: 'visual',
    category: 'release',
    description: '+$225 per extra 15s',
    deliverables: [
      '1 Looped Visual (3–5s)',
      '1 × 30s Visual',
      '1 × 1min Visual',
      '1 Full-Song Visual (≤3:00)'
    ]
  }
];

// À-la-Carte Add-Ons
export const addonPackages: Package[] = [
  // Strategy & Branding
  {
    id: 'creative-direction',
    name: 'Creative Direction',
    price: 500,
    category: 'addon',
    deliverables: ['Creative strategy consultation', 'Visual direction guide']
  },
  {
    id: 'artist-brand-kit',
    name: 'Artist Brand Kit',
    price: 1250,
    category: 'addon',
    deliverables: ['Logo design', 'Color palette', 'Typography guide', 'Brand guidelines']
  },
  {
    id: 'campaign-rollout-strategy',
    name: 'Campaign Rollout Strategy',
    price: 750,
    category: 'addon',
    deliverables: ['Release timeline', 'Platform strategy', 'Content calendar']
  },
  // Marketing Collateral
  {
    id: 'epk-design',
    name: 'EPK Design',
    price: 950,
    category: 'addon',
    deliverables: ['Electronic press kit design', 'Artist bio layout', 'Media assets']
  },
  {
    id: 'ad-creatives',
    name: 'Ad Creatives (Set of 6)',
    price: 650,
    category: 'addon',
    deliverables: ['6 social media ad designs', 'Multiple format variations']
  },
  {
    id: 'lyric-graphics',
    name: 'Lyric Graphics (5)',
    price: 425,
    category: 'addon',
    deliverables: ['5 lyric quote graphics', 'Instagram story format']
  },
  // Video Enhancements
  {
    id: 'spotify-canvas',
    name: 'Spotify Canvas Loops',
    price: 450,
    category: 'addon',
    deliverables: ['3-8 second looping visuals', 'Optimized for Spotify']
  },
  {
    id: 'lyric-video',
    name: 'Lyric Video (≤3 min)',
    price: 950,
    category: 'addon',
    deliverables: ['Full lyric video production', 'Animated typography', 'Visual effects']
  },
  {
    id: 'trailer-teasers',
    name: 'Trailer Teasers (3×10–15s)',
    price: 650,
    category: 'addon',
    deliverables: ['3 short teaser videos', '10-15 seconds each', 'Social media optimized']
  },
  // Social Add-Ons
  {
    id: 'posting-calendar',
    name: '30-Day Posting Calendar',
    price: 425,
    category: 'addon',
    deliverables: ['30-day content calendar', 'Posting schedule', 'Content suggestions']
  },
  {
    id: 'hashtag-caption-pack',
    name: 'Hashtag & Caption Pack',
    price: 225,
    category: 'addon',
    deliverables: ['Curated hashtag sets', 'Pre-written captions', 'Engagement strategies']
  },
  {
    id: 'profile-optimization',
    name: 'Profile Optimization',
    price: 425,
    category: 'addon',
    deliverables: ['Bio optimization', 'Link strategy', 'Profile aesthetic guide']
  }
];

// Website Packages
export const websitePackages: WebsitePackage[] = [
  {
    id: 'website-starter',
    name: 'Starter Website',
    price: 1750,
    tier: 'starter',
    category: 'website',
    deliverables: ['Bio page', 'Music embeds', 'Contact form'],
    features: ['Bio page', 'Music embeds', 'Contact form', 'Mobile responsive']
  },
  {
    id: 'website-pro',
    name: 'Pro Website',
    price: 2950,
    tier: 'pro',
    category: 'website',
    deliverables: ['Everything in Starter', 'Merch store', 'Tour dates', 'Newsletter signup'],
    features: ['All Starter features', 'Merch store', 'Tour dates', 'Newsletter integration', 'SEO optimization']
  },
  {
    id: 'website-premium',
    name: 'Premium Website',
    price: 4250,
    tier: 'premium',
    category: 'website',
    deliverables: ['Everything in Pro', 'Advanced e-commerce', 'Fan club/subscription', 'Analytics'],
    features: ['All Pro features', 'Advanced e-commerce', 'Fan club system', 'Subscription management', 'Advanced analytics', 'Custom integrations']
  }
];

// Merch Packages
export const merchPackages: MerchPackage[] = [
  {
    id: 'tshirts',
    name: 'T-Shirts',
    quantities: [
      { qty: 100, price: 1900, pricePerUnit: 19 },
      { qty: 500, price: 8750, pricePerUnit: 17.5 },
      { qty: 1000, price: 16500, pricePerUnit: 16.5 }
    ]
  }
];

// Bundle Discounts
export interface BundleDiscount {
  id: string;
  name: string;
  conditions: string[];
  discount: number; // percentage
  description: string;
}

export const bundleDiscounts: BundleDiscount[] = [
  {
    id: 'ep-100-merch',
    name: 'EP + 100 Merch',
    conditions: ['ep', 'merch-100'],
    discount: 5,
    description: 'EP package + 100 merch items'
  },
  {
    id: 'ep-500-merch',
    name: 'EP + 500 Merch',
    conditions: ['ep', 'merch-500'],
    discount: 20,
    description: 'EP package + 500 merch items'
  },
  {
    id: 'album-500-merch',
    name: 'Album + 500 Merch',
    conditions: ['album', 'merch-500'],
    discount: 25,
    description: 'Album package + 500 merch items'
  },
  {
    id: 'album-1000-merch',
    name: 'Album + 1000 Merch',
    conditions: ['album', 'merch-1000'],
    discount: 30,
    description: 'Album package + 1000 merch items'
  },
  {
    id: 'album-website',
    name: 'Album + Website',
    conditions: ['album', 'website-pro', 'website-premium'],
    discount: 20,
    description: 'Album package + Pro/Premium website'
  },
  {
    id: 'full-suite',
    name: 'Full Suite',
    conditions: ['album', 'website', 'merch', 'social'],
    discount: 30,
    description: 'Album + Website + Merch + Social Add-On'
  }
];

// Case Studies Data
export interface CaseStudy {
  id: string;
  artistName: string;
  metric: string;
  value: string;
  description: string;
  image?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'artist-1',
    artistName: 'Rising Star',
    metric: 'Streams',
    value: '2.5M+',
    description: 'First single reached 2.5M streams in 3 months'
  },
  {
    id: 'artist-2',
    artistName: 'Indie Collective',
    metric: 'ROAS',
    value: '450%',
    description: 'Return on ad spend across all platforms'
  },
  {
    id: 'artist-3',
    artistName: 'Electronic Duo',
    metric: 'Views',
    value: '1.2M+',
    description: 'Music video views in first month'
  },
  {
    id: 'artist-4',
    artistName: 'Hip-Hop Artist',
    metric: 'Engagement',
    value: '15x',
    description: 'Increase in social media engagement'
  },
  {
    id: 'artist-5',
    artistName: 'Pop Artist',
    metric: 'Followers',
    value: '50K+',
    description: 'New followers gained during campaign'
  },
  {
    id: 'artist-6',
    artistName: 'Rock Band',
    metric: 'Revenue',
    value: '$25K+',
    description: 'Merch sales in first quarter'
  }
];

// Process Steps
export interface ProcessStep {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: string;
}

export const processSteps: ProcessStep[] = [
  {
    id: 'vibe_check',
    title: 'Vibe Check',
    description: 'We get to know your sound, your crowd, and your goals',
    icon: 'Search',
    duration: '1-2 days'
  },
  {
    id: 'brand',
    title: 'Brand Drop',
    description: 'Build a visual ID that’s as bold as your bassline',
    icon: 'Target',
    duration: '3-6 days'
  },
  {
    id: 'creative',
    title: 'Content Creation',
    description: 'Next-level visuals, teasers, and promo reels for every release or event',
    icon: 'Palette',
    duration: '7-14 days'
  },
  {
    id: 'launch',
    title: 'Campaign Launch',
    description: 'Targeted ads and influencer pushes that fill dance floors and playlists',
    icon: 'Rocket',
    duration: '2-4 weeks'
  },
  {
    id: 'growth',
    title: 'Afterparty Analytics',
    description: 'Real-time results, optimization, and ongoing support to keep your momentum going',
    icon: 'TrendingUp',
    duration: 'Ongoing'
  }
];

// FAQ Data
export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: 'revisions',
    question: 'How many revisions are included?',
    answer: 'Each package includes up to 3 rounds of revisions to ensure you\'re completely satisfied with the final deliverables.'
  },
  {
    id: 'timeline',
    question: 'What\'s the typical project timeline?',
    answer: 'Most projects are completed within 2-4 weeks, depending on the package complexity. We\'ll provide a detailed timeline during our initial consultation.'
  },
  {
    id: 'rights',
    question: 'Do I own the rights to all created content?',
    answer: 'Yes, you receive full commercial rights to all created content upon final payment. We may request permission to use work in our portfolio.'
  },
  {
    id: 'payment',
    question: 'What\'s the payment schedule?',
    answer: '50% deposit to start the project, 50% upon completion. We accept all major payment methods and offer payment plans for larger projects.'
  },
  {
    id: 'music-rights',
    question: 'Do I need to provide my music files?',
    answer: 'Yes, we\'ll need high-quality audio files (WAV/FLAC preferred) for all video and visual content creation.'
  },
  {
    id: 'distribution',
    question: 'Do you help with music distribution?',
    answer: 'We focus on the visual and marketing aspects. We can recommend trusted distribution partners as part of our strategy consultation.'
  },
  {
    id: 'rush-orders',
    question: 'Can you accommodate rush orders?',
    answer: 'Yes, we offer expedited delivery for an additional 50% fee, with completion in 7-10 business days for most packages.'
  },
  {
    id: 'platforms',
    question: 'Which platforms do you optimize content for?',
    answer: 'We create content optimized for all major platforms: Instagram, TikTok, YouTube, Spotify, Apple Music, and more.'
  }
];

// Sample clients for marquee
export const sampleClients: string[] = [
  'Universal Music Group',
  'Sony Music',
  'Warner Records',
  'Atlantic Records',
  'Capitol Records',
  'RCA Records',
  'Columbia Records',
  'Interscope Records'
];