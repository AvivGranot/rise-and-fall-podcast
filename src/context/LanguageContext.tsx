'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'he';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Translation dictionaries
const translations: Record<Language, Record<string, string>> = {
  en: {
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
  },
  he: {
    // Navigation
    'nav.episodes': 'פרקים',
    'nav.about': 'אודות',
    'nav.contact': 'צור קשר',

    // Home/Carousel
    'home.listenNow': 'האזן עכשיו',
    'home.readMore': 'קרא עוד',
    'home.with': 'עם',
    'home.episode': 'פרק',
    'home.about': 'אודות',
    'home.contact': 'צור קשר',

    // About section
    'about.title': 'אודות הפודקאסט',
    'about.meetHosts': 'הכירו את המנחים',
    'about.hostIntro': 'אביב וליאון מביאים לכם גישה פנימית לעולם הנדל"ן דרך שיחות אינטימיות עם מנהיגי התעשייה.',
    'about.description1': 'פודקאסט The Rise & Fall חוקר את המסעות האישיים של מנהיגי נדל"ן—השורשים שלהם, נתיבי הקריירה שלהם, הכישלונות שלהם, והפילוסופיות שעיצבו את הצלחתם.',
    'about.description2': 'כל פרק כולל ראיונות מעמיקים שחורגים מעסקים כדי לחשוף את הסיפורים האנושיים מאחורי המבנים.',
    'about.learnMore': 'למידע נוסף עלינו',

    // Episode page
    'episode.notFound': 'הפרק לא נמצא',
    'episode.showNotes': 'הערות לפרק',
    'episode.topics': 'נושאים',
    'episode.chapters': 'פרקים',
    'episode.transcript': 'תמליל',
    'episode.aboutGuest': 'אודות',
    'episode.aboutGuests': 'אודות האורחים',
    'episode.relatedEpisodes': 'פרקים קשורים',
    'episode.enjoyEpisode': 'נהנית מהפרק?',
    'episode.subscribeMessage': 'הירשמו לפודקאסט The Rise & Fall ולא תפספסו שיחה חדשה.',
    'episode.subscribeNow': 'הירשם עכשיו',
    'episode.share': 'שתף',
    'episode.min': 'דקות',

    // Contact page
    'contact.title': 'צרו קשר',
    'contact.subtitle': 'יש לכם סיפור לשתף או רוצים לשתף פעולה? נשמח לשמוע מכם.',
    'contact.listenOn': 'האזינו ב',
    'contact.sendMessage': 'שלחו לנו הודעה',
    'contact.name': 'שם',
    'contact.email': 'אימייל',
    'contact.subject': 'נושא',
    'contact.message': 'הודעה',
    'contact.send': 'שלח הודעה',
    'contact.selectSubject': 'בחר נושא',
    'contact.guestSuggestion': 'הצעת אורח',
    'contact.feedback': 'משוב',
    'contact.collaboration': 'שיתוף פעולה',
    'contact.other': 'אחר',

    // Footer
    'footer.rights': 'כל הזכויות שמורות.',
    'footer.theRiseAndFall': 'פודקאסט The Rise & Fall',

    // Episodes page
    'episodes.title': 'כל הפרקים',
    'episodes.subtitle': 'גלו את האוסף המלא של ראיונות עם מנהיגי נדל"ן.',
  },
};

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguageState] = useState<Language>('en');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'he')) {
      setLanguageState(saved);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const isRTL = language === 'he';

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Update document direction when language changes
  useEffect(() => {
    if (mounted) {
      document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
      document.documentElement.lang = language;
    }
  }, [language, isRTL, mounted]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
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
