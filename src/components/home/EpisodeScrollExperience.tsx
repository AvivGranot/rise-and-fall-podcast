'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';
import { Episode, Slide } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface EpisodeScrollExperienceProps {
  episodes: Episode[];
  aboutSlide: Slide;
  contactSlide: Slide;
}

// Spotify link for testing
const SPOTIFY_LINK = 'https://spotify.com';

export default function EpisodeScrollExperience({
  episodes,
  aboutSlide,
  contactSlide
}: EpisodeScrollExperienceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t, isRTL } = useLanguage();

  // Total slides: episodes + about + contact
  const totalSlides = episodes.length + 2;

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  }, [currentIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-carousel - 4 seconds
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 20000);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      handleUserInteraction();
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const getSlideLabel = (index: number) => {
    if (index < episodes.length) {
      return `${t('home.episode')} ${episodes[index].episodeNumber}`;
    } else if (index === episodes.length) {
      return t('home.about');
    } else {
      return t('home.contact');
    }
  };

  const renderEpisodeSlide = (episode: Episode) => (
    <div
      className="absolute inset-0 bg-cover md:bg-center bg-top"
      style={{
        backgroundImage: `url(${episode.artwork})`,
        backgroundPosition: episode.artworkPosition ? `${episode.artworkPosition} top` : 'center'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      <div className={`relative h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-24 lg:px-32 ${isRTL ? 'items-end text-right' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
            {episode.title}
          </h1>
          {episode.guests && episode.guests.length > 0 && (
            <p className="text-lg md:text-xl font-light text-white/80 mb-8 max-w-2xl">
              {t('home.with')} {episode.guests.map((g) => g.name).join(', ')}
            </p>
          )}
          <div className={`flex flex-wrap gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
            <a
              href={SPOTIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
              onClick={handleUserInteraction}
            >
              <Play size={16} />
              {t('home.listenNow')}
            </a>
            <Link
              href={`/episodes/${episode.slug}`}
              className="btn-primary inline-flex items-center"
              onClick={handleUserInteraction}
            >
              {t('home.readMore')}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );

  const renderAboutSlide = () => (
    <>
      <div className={`absolute inset-0 flex flex-col md:flex-row ${isRTL ? 'md:flex-row-reverse' : ''}`}>
        <div
          className="flex-1 bg-cover bg-top"
          style={{ backgroundImage: `url(${aboutSlide.backgroundImage})` }}
        />
        <div
          className="flex-1 bg-cover bg-top"
          style={{ backgroundImage: `url(${aboutSlide.secondaryImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>
      <div className={`relative h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-24 lg:px-32 ${isRTL ? 'items-end text-right' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
            {isRTL ? t('about.meetHosts') : aboutSlide.title}
          </h1>
          {aboutSlide.subtitle && (
            <p className="text-lg md:text-xl font-light text-white/80 mb-8 max-w-2xl">
              {isRTL ? t('about.hostIntro') : aboutSlide.subtitle}
            </p>
          )}
          {aboutSlide.ctaText && aboutSlide.ctaLink && (
            <Link
              href={aboutSlide.ctaLink}
              className="btn-primary inline-flex items-center"
              onClick={handleUserInteraction}
            >
              {isRTL ? t('about.learnMore') : aboutSlide.ctaText}
            </Link>
          )}
        </motion.div>
      </div>
    </>
  );

  const renderContactSlide = () => (
    <>
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactSlide.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>
      <div className={`relative h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-24 lg:px-32 ${isRTL ? 'items-end text-right' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
            {isRTL ? 'הצטרפו לשיחה' : contactSlide.title}
          </h1>
          {contactSlide.subtitle && (
            <p className="text-lg md:text-xl font-light text-white/80 mb-8 max-w-2xl">
              {isRTL ? 'הירשמו וקבלו גישה בלעדית' : contactSlide.subtitle}
            </p>
          )}
          {contactSlide.ctaText && contactSlide.ctaLink && (
            <Link
              href={contactSlide.ctaLink}
              className="btn-primary inline-flex items-center"
              onClick={handleUserInteraction}
            >
              {isRTL ? t('episode.subscribeNow') : contactSlide.ctaText}
            </Link>
          )}
        </motion.div>
      </div>
    </>
  );

  const renderCurrentSlide = () => {
    if (currentIndex < episodes.length) {
      return renderEpisodeSlide(episodes[currentIndex]);
    } else if (currentIndex === episodes.length) {
      return renderAboutSlide();
    } else {
      return renderContactSlide();
    }
  };

  return (
    <div id="carousel" className="relative h-screen w-full overflow-hidden">
      {/* Mini Navigation Sidebar */}
      <div className={`fixed top-1/2 -translate-y-1/2 z-40 hidden lg:block ${isRTL ? 'right-6' : 'left-6'}`}>
        <ul className="space-y-4">
          {[...episodes, { id: 'about' }, { id: 'contact' }].map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  handleUserInteraction();
                  goToSlide(index);
                  document.getElementById('carousel')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className={`block text-xs uppercase tracking-wider transition-all duration-300 max-w-[120px] truncate ${
                  isRTL ? 'text-right' : 'text-left'
                } ${
                  index === currentIndex
                    ? 'text-white opacity-100'
                    : 'text-white/50 hover:text-white/80'
                }`}
                title={getSlideLabel(index)}
              >
                <span
                  className={`inline-block w-2 h-2 rounded-full transition-all ${
                    isRTL ? 'ml-2' : 'mr-2'
                  } ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
                {getSlideLabel(index)}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Slide Content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {renderCurrentSlide()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
        <button
          onClick={() => {
            handleUserInteraction();
            prevSlide();
          }}
          className="p-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <span className="text-sm tabular-nums text-white/70 min-w-[60px] text-center">
          {String(currentIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
        <button
          onClick={() => {
            handleUserInteraction();
            nextSlide();
          }}
          className="p-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
