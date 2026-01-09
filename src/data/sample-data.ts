import { Episode, Series, Slide, NavItem } from '@/types';

export const series: Series[] = [
  {
    id: '1',
    name: 'Season 1: Israel',
    slug: 'season-1-israel',
    description: 'Personal interviews with Israel\'s most influential real estate leaders. In Hebrew, exploring the roots, career journeys, and personal philosophies of industry titans.',
    artwork: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    heroImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
    category: 'interviews',
    episodeCount: 12,
  },
  {
    id: '2',
    name: 'Season 2: Global Israeli',
    slug: 'season-2-global-israeli',
    description: 'Israeli and Jewish real estate leaders who\'ve made their mark on the global stage. In English, featuring developers and visionaries operating internationally.',
    artwork: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    heroImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1920',
    category: 'interviews',
    episodeCount: 7,
  },
  {
    id: '3',
    name: 'Season 3: Global Leaders',
    slug: 'season-3-global',
    description: 'World-renowned architects, developers, and hospitality visionaries. In English, featuring global icons shaping the built environment.',
    artwork: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    heroImage: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1920',
    category: 'special',
    episodeCount: 7,
  },
];

export const episodes: Episode[] = [
  {
    id: '1',
    title: 'Building an Empire: The Azrieli Story',
    slug: 'building-an-empire-azrieli',
    episodeNumber: 1,
    season: 1,
    series: series[0],
    description: 'Dana Azrieli shares the legacy of the Azrieli Group, her journey from childhood to leading one of Israel\'s largest real estate companies, and her vision for the future.',
    showNotes: `In this premiere episode, Leon and Aviv sit down with Dana Azrieli, Chairwoman of the Azrieli Group.

## Episode Structure
- Introduction & Guest Background (2 min)
- Roots: Childhood & Early Career (10 min)
- Career Journey: Achievements & Challenges (15 min)
- The Person Behind: Values & Philosophy (15 min)
- Quick Fire Questions (5 min)

## Topics Covered
- Growing up in the Azrieli family
- Taking the helm of a real estate empire
- Leadership lessons and regrets
- Decision-making philosophy
- Books, mentors, and daily habits`,
    transcript: 'Full transcript available...',
    audioUrl: '/audio/sample.mp3',
    duration: 2820,
    publishedAt: '2025-03-01',
    artwork: '/rise-and-fall-podcast/episodes/azrieli/Azrieli_Web_Hero-2160x1080.webp',
    guests: [
      {
        id: '1',
        name: 'Dana Azrieli',
        bio: 'Chairwoman of Azrieli Group, one of Israel\'s largest real estate companies',
        photo: '/rise-and-fall-podcast/episodes/azrieli/dana-azrieli.png',
        socialLinks: [
          { platform: 'LinkedIn', url: 'https://linkedin.com' },
        ],
      },
    ],
    topics: ['Real Estate', 'Leadership', 'Legacy', 'Israel'],
    chapters: [
      { title: 'Introduction by Leon & Aviv', startTime: 0 },
      { title: 'Roots: Growing Up Azrieli', startTime: 120 },
      { title: 'Career Journey: Taking the Helm', startTime: 720 },
      { title: 'Challenges & Regrets', startTime: 1200 },
      { title: 'The Person Behind', startTime: 1800 },
      { title: 'Quick Fire Questions', startTime: 2520 },
    ],
    featured: true,
    images: [
      '/rise-and-fall-podcast/episodes/azrieli/Azrieli_Web_Hero-2160x1080.webp',
      '/rise-and-fall-podcast/episodes/azrieli/dana-azrieli.png',
    ],
  },
  {
    id: '2',
    title: 'From Vision to Reality',
    slug: 'from-vision-to-reality-fattal',
    episodeNumber: 2,
    season: 1,
    series: series[0],
    description: 'David Fattal reveals the story behind Fattal Hotels, from humble beginnings to becoming one of Europe\'s largest hotel chains.',
    showNotes: `David Fattal joins us to discuss building a hospitality empire across Europe and Israel.

## Topics Covered
- Early career and first hotel acquisition
- Expansion strategy across Europe
- Leadership philosophy
- Work-life balance and family`,
    audioUrl: '/audio/sample.mp3',
    duration: 2700,
    publishedAt: '2025-03-08',
    artwork: '/rise-and-fall-podcast/episodes/fattal/fattal-hotels.png',
    guests: [
      {
        id: '2',
        name: 'David Fattal',
        bio: 'Founder and CEO of Fattal Hotels, operating Leonardo and other hotel brands across Europe',
        photo: '/rise-and-fall-podcast/episodes/fattal/david-fattal.jpeg',
      },
    ],
    topics: ['Hospitality', 'Entrepreneurship', 'Europe', 'Hotels'],
    featured: true,
    images: [
      '/rise-and-fall-podcast/episodes/fattal/fattal-hotels.png',
      '/rise-and-fall-podcast/episodes/fattal/david-fattal.jpeg',
    ],
  },
  {
    id: '3',
    title: 'The Art of Development',
    slug: 'art-of-development-rosen',
    episodeNumber: 3,
    season: 1,
    series: series[0],
    description: 'Barak Rosen discusses the philosophy behind Acro Real Estate, luxury development, and creating iconic buildings.',
    showNotes: `A deep dive into luxury real estate development with one of Israel's most innovative developers.`,
    audioUrl: '/audio/sample.mp3',
    duration: 2640,
    publishedAt: '2025-03-15',
    artwork: '/rise-and-fall-podcast/episodes/rosen/rainbow.jpg',
    guests: [
      {
        id: '3',
        name: 'Barak Rosen',
        bio: 'Founder of Acro Real Estate, known for iconic luxury developments',
        photo: '/rise-and-fall-podcast/episodes/rosen/barak-rosen.jpg',
      },
    ],
    topics: ['Luxury Real Estate', 'Architecture', 'Development', 'Design'],
    featured: false,
    images: [
      '/rise-and-fall-podcast/episodes/rosen/rainbow.jpg',
      '/rise-and-fall-podcast/episodes/rosen/barak-rosen.jpg',
    ],
  },
  {
    id: '5',
    title: 'Partnerships & Competition Between Brothers',
    slug: 'hagag-brothers',
    episodeNumber: 1,
    season: 2,
    series: series[1],
    description: 'The Hagag Brothers share their unique story of partnership and competition in building a real estate empire.',
    showNotes: `A conversation about family dynamics, business partnerships, and competing while collaborating.`,
    audioUrl: '/audio/sample.mp3',
    duration: 2760,
    publishedAt: '2025-06-01',
    artwork: '/rise-and-fall-podcast/episodes/hagag/first.png',
    guests: [
      {
        id: '5',
        name: 'Hagag Brothers',
        bio: 'Real estate developers known for their unique family partnership',
        photo: '/rise-and-fall-podcast/episodes/hagag/hagag-brothers.jpg',
      },
    ],
    topics: ['Real Estate', 'Family Business', 'Partnership', 'Competition'],
    featured: false,
    images: [
      '/rise-and-fall-podcast/episodes/hagag/first.png',
      '/rise-and-fall-podcast/episodes/hagag/hagag-brothers.jpg',
    ],
  },
  {
    id: '6',
    title: 'The Greatest Comeback',
    slug: 'herzl-habs-greatest-comeback',
    episodeNumber: 1,
    season: 3,
    series: series[2],
    description: 'Herzl Habs shares the untold story behind one of the greatest comebacks in real estate history.',
    showNotes: `An inspiring conversation about resilience, reinvention, and the journey back to the top.`,
    audioUrl: '/audio/sample.mp3',
    duration: 3000,
    publishedAt: '2025-09-01',
    artwork: '/rise-and-fall-podcast/episodes/habs/mandarin.webp',
    guests: [
      {
        id: '6',
        name: 'Herzl Habs',
        bio: 'Real estate visionary known for his remarkable comeback story',
        photo: '/rise-and-fall-podcast/episodes/habs/herzl-habs.webp',
      },
    ],
    topics: ['Real Estate', 'Resilience', 'Leadership', 'Comeback'],
    featured: true,
    images: [
      '/rise-and-fall-podcast/episodes/habs/mandarin.webp',
      '/rise-and-fall-podcast/episodes/habs/herzl-habs.webp',
    ],
  },
];

export const slides: Slide[] = [
  {
    id: '1',
    type: 'hero',
    category: 'PODCAST',
    title: 'The Rise & Fall',
    subtitle: 'Personal interviews with Real Estate leaders. Their roots, their journey, their legacy.',
    backgroundImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920',
    ctaText: 'Start Listening',
    ctaLink: '/episodes',
  },
  {
    id: '2',
    type: 'episode',
    category: 'EPISODE',
    title: 'Building an Empire: The Azrieli Story',
    subtitle: 'with Dana Azrieli',
    backgroundImage: '/rise-and-fall-podcast/episodes/azrieli/Azrieli_Web_Hero-2160x1080.webp',
    ctaText: 'Listen Now',
    ctaLink: '/episodes/building-an-empire-azrieli',
  },
  {
    id: '3',
    type: 'episode',
    category: 'EPISODE',
    title: 'From Vision to Reality',
    subtitle: 'with David Fattal',
    backgroundImage: '/rise-and-fall-podcast/episodes/fattal/fattal-hotels.png',
    ctaText: 'Listen Now',
    ctaLink: '/episodes/from-vision-to-reality-fattal',
  },
  {
    id: '4',
    type: 'episode',
    category: 'EPISODE',
    title: 'The Art of Development',
    subtitle: 'with Barak Rosen',
    backgroundImage: '/rise-and-fall-podcast/episodes/rosen/rainbow.jpg',
    ctaText: 'Listen Now',
    ctaLink: '/episodes/art-of-development-rosen',
  },
  {
    id: '5',
    type: 'episode',
    category: 'EPISODE',
    title: 'Partnerships & Competition Between Brothers',
    subtitle: 'with the Hagag Brothers',
    backgroundImage: '/rise-and-fall-podcast/episodes/hagag/first.png',
    ctaText: 'Listen Now',
    ctaLink: '/episodes/hagag-brothers',
  },
  {
    id: '7',
    type: 'episode',
    category: 'EPISODE',
    title: 'The Greatest Comeback',
    subtitle: 'with Herzl Habs',
    backgroundImage: '/rise-and-fall-podcast/episodes/habs/mandarin.webp',
    ctaText: 'Listen Now',
    ctaLink: '/episodes/herzl-habs-greatest-comeback',
  },
  {
    id: '8',
    type: 'about',
    category: 'ABOUT',
    title: 'Meet Your Hosts',
    subtitle: 'Leon and Aviv bring you insider access',
    backgroundImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920',
    ctaText: 'Learn More',
    ctaLink: '/about',
  },
  {
    id: '9',
    type: 'contact',
    category: 'CONNECT',
    title: 'Join the Conversation',
    subtitle: 'Subscribe and get exclusive access',
    backgroundImage: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920',
    ctaText: 'Subscribe',
    ctaLink: '/contact',
  },
];

export const navItems: NavItem[] = [
  { label: 'Episodes', href: '/episodes' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const socialLinks = [
  { platform: 'YouTube', url: 'https://youtube.com' },
  { platform: 'Spotify', url: 'https://spotify.com' },
  { platform: 'Apple Podcasts', url: 'https://podcasts.apple.com' },
  { platform: 'LinkedIn', url: 'https://linkedin.com' },
  { platform: 'Instagram', url: 'https://instagram.com' },
  { platform: 'TikTok', url: 'https://tiktok.com' },
];

// Episode structure from the podcast format
export const episodeStructure = {
  opening: {
    title: 'Opening by Leon & Aviv',
    duration: '2 minutes',
    description: 'Guest introduction with background, achievements, and relevance to the audience',
  },
  roots: {
    title: 'Roots: Childhood & Early Career',
    duration: '5-10 minutes',
    description: 'Character as a child, key influences, education, first jobs, and turning points',
  },
  careerJourney: {
    title: 'Career Journey: Role, Impact & Reflections',
    duration: '15 minutes',
    description: 'Deep dive into current role, achievements, leadership moments, challenges, failures, and lessons learned',
  },
  personBehind: {
    title: 'The Person Behind',
    duration: '15 minutes',
    description: 'Personal values, guiding principles, daily habits, decision-making philosophy, family, and side projects',
  },
  closing: {
    title: 'Summary & Quick Fire',
    duration: '5 minutes',
    description: 'Quick questions: books, mantras, mentors, hobbies',
  },
};
