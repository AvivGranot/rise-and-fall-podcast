'use client';

import { createContext, useContext, ReactNode } from 'react';

interface LanguageContextType {
  language: 'en';
  isRTL: false;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// English translations only
const translations: Record<string, string> = {
  // Navigation
  'nav.episodes': 'Episodes',
  'nav.about': 'About',
  'nav.contact': 'Contact',

  // Home/Carousel
  'home.listenNow': 'Listen Now',
  'home.readMore': 'Read More',
  'home.with': 'with',
  'home.episode': 'Episode',
  'home.about': 'About',
  'home.contact': 'Contact',

  // About section
  'about.title': 'About the Podcast',
  'about.meetHosts': 'Meet Your Hosts',
  'about.hostIntro': 'Aviv and Leon bring you insider access to the world of real estate through intimate conversations with industry leaders.',
  'about.description1': 'The Rise & Fall Podcast explores the personal journeys of real estate leaders—their roots, their career paths, their failures, and the philosophies that shaped their success.',
  'about.description2': 'Each episode features in-depth interviews that go beyond business to reveal the human stories behind the buildings.',
  'about.learnMore': 'Learn More About Us',

  // Episode page
  'episode.notFound': 'Episode Not Found',
  'episode.showNotes': 'Show Notes',
  'episode.topics': 'Topics',
  'episode.chapters': 'Chapters',
  'episode.transcript': 'Transcript',
  'episode.aboutGuest': 'About',
  'episode.aboutGuests': 'About the Guests',
  'episode.relatedEpisodes': 'Related Episodes',
  'episode.enjoyEpisode': 'Enjoy This Episode?',
  'episode.subscribeMessage': 'Subscribe to The Rise & Fall Podcast and never miss a new conversation.',
  'episode.subscribeNow': 'Subscribe Now',
  'episode.share': 'Share',
  'episode.min': 'min',

  // Contact page
  'contact.title': 'Get in Touch',
  'contact.subtitle': 'Have a story to share or want to collaborate? We\'d love to hear from you.',
  'contact.listenOn': 'Listen On',
  'contact.sendMessage': 'Send Us a Message',
  'contact.name': 'Name',
  'contact.email': 'Email',
  'contact.subject': 'Subject',
  'contact.message': 'Message',
  'contact.send': 'Send Message',
  'contact.selectSubject': 'Select a subject',
  'contact.guestSuggestion': 'Guest Suggestion',
  'contact.feedback': 'Feedback',
  'contact.collaboration': 'Collaboration',
  'contact.other': 'Other',

  // Footer
  'footer.rights': 'All rights reserved.',
  'footer.theRiseAndFall': 'The Rise & Fall Podcast',

  // Episodes page
  'episodes.title': 'All Episodes',
  'episodes.subtitle': 'Explore our complete collection of interviews with real estate leaders.',
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language: 'en', isRTL: false, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
