'use client';

import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

export default function LanguageToggle() {
  const { language, setLanguage, isRTL } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'en' ? 'he' : 'en')}
      className={`fixed top-6 z-50 flex items-center gap-1 px-3 py-1.5 bg-black/50 backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all text-sm font-medium ${
        isRTL ? 'left-6' : 'right-6'
      }`}
      aria-label={language === 'en' ? 'Switch to Hebrew' : 'Switch to English'}
    >
      <motion.span
        key={language}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-1.5"
      >
        <span className={language === 'en' ? 'text-white' : 'text-white/50'}>En</span>
        <span className="text-white/30">/</span>
        <span className={language === 'he' ? 'text-white' : 'text-white/50'}>עב</span>
      </motion.span>
    </button>
  );
}
