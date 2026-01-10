export interface Episode {
  id: string;
  title: string;
  slug: string;
  episodeNumber: number;
  season?: number;
  series: Series;
  description: string;
  showNotes: string;
  transcript?: string;
  audioUrl: string;
  duration: number; // seconds
  publishedAt: string;
  artwork: string;
  guests?: Guest[];
  topics: string[];
  chapters?: Chapter[];
  images?: string[];
  imagePosition?: string;
  artworkPosition?: string;
  mobileArtworkPosition?: string;
}

export interface Series {
  id: string;
  name: string;
  slug: string;
  description: string;
  artwork: string;
  heroImage: string;
  category: 'interviews' | 'solo' | 'special' | 'archive';
  episodeCount: number;
}

export interface Guest {
  id: string;
  name: string;
  bio: string;
  photo: string;
  socialLinks?: SocialLink[];
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface Chapter {
  title: string;
  startTime: number; // seconds
  endTime?: number;
}

export interface Slide {
  id: string;
  type: 'hero' | 'episode' | 'show' | 'about' | 'contact';
  category?: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  secondaryImage?: string;
  mobilePosition?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}
