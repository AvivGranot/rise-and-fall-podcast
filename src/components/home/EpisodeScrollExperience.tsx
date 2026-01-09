'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Clock, Calendar, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { Episode, Slide } from '@/types';

interface EpisodeScrollExperienceProps {
  episodes: Episode[];
  aboutSlide: Slide;
  contactSlide: Slide;
}

function formatDuration(seconds: number) {
  const mins = Math.floor(seconds / 60);
  return `${mins} min`;
}

function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatTime(seconds: number) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Spotify link for testing
const SPOTIFY_LINK = 'https://spotify.com';

export default function EpisodeScrollExperience({
  episodes,
  aboutSlide,
  contactSlide
}: EpisodeScrollExperienceProps) {
  const [currentEpisodeIndex, setCurrentEpisodeIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);

  // Total slides: episodes + about + contact
  const totalSlides = episodes.length + 2;

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentEpisodeIndex ? 1 : -1);
    setCurrentEpisodeIndex(index);
  }, [currentEpisodeIndex]);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentEpisodeIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentEpisodeIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  // Auto-carousel between episodes
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // 8 seconds per slide

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  // Pause auto-play on user interaction
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    // Resume after 30 seconds of no interaction
    setTimeout(() => setIsAutoPlaying(true), 30000);
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
      y: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  const getSlideLabel = (index: number) => {
    if (index < episodes.length) {
      return `Episode ${episodes[index].episodeNumber}: ${episodes[index].guests?.[0]?.name || 'Guest'}`;
    } else if (index === episodes.length) {
      return 'About';
    } else {
      return 'Contact';
    }
  };

  const getMobilePosition = (episode: Episode) => {
    // Map episode artwork positions
    if (episode.artworkPosition) {
      return episode.artworkPosition;
    }
    return 'center';
  };

  const renderEpisodeSlide = (episode: Episode) => (
    <div className="min-h-screen">
      {/* Hero Section - Index page style */}
      <section className="relative h-screen flex items-end">
        <div
          className="absolute inset-0 bg-cover md:bg-center bg-top"
          style={{
            backgroundImage: `url(${episode.artwork})`,
            backgroundPosition: episode.artworkPosition ? `${episode.artworkPosition} top` : 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
        </div>
        <div className="relative h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-24 lg:px-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <p className="text-sm uppercase tracking-wider text-white/80 mb-4">
              Episode {episode.episodeNumber}: {episode.guests?.[0]?.name}
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
              {episode.title}
            </h1>
            {episode.guests && episode.guests.length > 0 && (
              <p className="text-lg md:text-xl font-light text-white/80 mb-8 max-w-2xl">
                with {episode.guests.map((g) => g.name).join(', ')}
              </p>
            )}
            <a
              href={SPOTIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
              onClick={handleUserInteraction}
            >
              <Play size={16} />
              Listen Now
            </a>
          </motion.div>
        </div>
      </section>

      {/* Guest Image Section */}
      {episode.images && episode.images[1] && (
        <section className={episode.imagePosition === 'horizontal' ? 'h-[50vh] md:h-[60vh]' : 'h-screen'}>
          <div
            className={`h-full bg-cover ${
              episode.imagePosition === 'center' ? 'bg-center' :
              episode.imagePosition === 'horizontal' ? 'bg-center' :
              'bg-top'
            }`}
            style={{
              backgroundImage: `url(${episode.images[1]})`,
              ...(episode.imagePosition === 'horizontal' && {
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundColor: '#1a1a1a'
              })
            }}
          />
        </section>
      )}

      {/* Episode Details Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 bg-[#1a1a1a]">
        <div className="max-w-4xl">
          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 text-sm text-gray-400 mb-8 pb-8 border-b border-[#333]">
            <span className="flex items-center gap-2">
              <Calendar size={16} />
              {formatDate(episode.publishedAt)}
            </span>
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {formatDuration(episode.duration)}
            </span>
            <span>Episode {episode.episodeNumber}</span>
          </div>

          {/* Description */}
          <div className="prose prose-invert prose-lg max-w-none mb-12">
            <p className="text-xl text-gray-300 leading-relaxed">{episode.description}</p>
          </div>

          {/* Show Notes */}
          <div className="mb-12">
            <h2 className="text-2xl font-light mb-6">Show Notes</h2>
            <div className="prose prose-invert max-w-none text-gray-300">
              {episode.showNotes.split('\n').map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Topics */}
          {episode.topics.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-light mb-6">Topics</h2>
              <div className="flex flex-wrap gap-3">
                {episode.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-4 py-2 border border-[#333] text-sm uppercase tracking-wider"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Chapters */}
          {episode.chapters && episode.chapters.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-light mb-6">Chapters</h2>
              <ul className="space-y-3">
                {episode.chapters.map((chapter, index) => (
                  <li key={index}>
                    <button className="flex items-center gap-4 w-full text-left hover:text-gray-300 transition-colors group">
                      <span className="text-sm text-gray-500 tabular-nums w-12">
                        {formatTime(chapter.startTime)}
                      </span>
                      <span className="flex-1">{chapter.title}</span>
                      <Play
                        size={16}
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Transcript */}
          {episode.transcript && (
            <div className="mb-12">
              <details className="group">
                <summary className="flex items-center gap-2 cursor-pointer text-2xl font-light mb-6">
                  Transcript
                  <ChevronDown
                    size={24}
                    className="group-open:rotate-180 transition-transform"
                  />
                </summary>
                <div className="prose prose-invert max-w-none text-gray-300 mt-6 p-6 bg-[#111] rounded">
                  <p>{episode.transcript}</p>
                </div>
              </details>
            </div>
          )}

          {/* Guest Info */}
          {episode.guests && episode.guests.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-light mb-6">
                {episode.guests.length === 1
                  ? `About ${episode.guests[0].name.split(' ')[0]}`
                  : 'About the Guests'}
              </h2>
              <div className="space-y-8">
                {episode.guests.map((guest) => (
                  <div key={guest.id} className="flex gap-6 items-start">
                    <img
                      src={guest.photo}
                      alt={guest.name}
                      className="w-24 h-24 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-xl font-light mb-2">{guest.name}</h3>
                      <p className="text-gray-400">{guest.bio}</p>
                      {guest.socialLinks && (
                        <div className="flex gap-4 mt-4">
                          {guest.socialLinks.map((link) => (
                            <a
                              key={link.platform}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm uppercase tracking-wider text-gray-500 hover:text-white transition-colors"
                            >
                              {link.platform}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Listen CTA */}
          <div className="text-center py-12 border-t border-[#333]">
            <h3 className="text-2xl font-light mb-4">Ready to Listen?</h3>
            <a
              href={SPOTIFY_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center"
              onClick={handleUserInteraction}
            >
              <Play size={16} />
              Play on Spotify
            </a>
          </div>
        </div>
      </section>
    </div>
  );

  const renderAboutSlide = () => (
    <div className="relative h-screen flex items-end">
      <div className="absolute inset-0 flex flex-col md:flex-row">
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
      <div className="relative h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-24 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
            {aboutSlide.title}
          </h1>
          {aboutSlide.subtitle && (
            <p className="text-lg md:text-xl font-light text-white/80 mb-8 max-w-2xl">
              {aboutSlide.subtitle}
            </p>
          )}
          {aboutSlide.ctaText && aboutSlide.ctaLink && (
            <Link
              href={aboutSlide.ctaLink}
              className="btn-primary inline-flex items-center"
              onClick={handleUserInteraction}
            >
              {aboutSlide.ctaText}
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );

  const renderContactSlide = () => (
    <div className="relative h-screen flex items-end">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${contactSlide.backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>
      <div className="relative h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-24 lg:px-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
            {contactSlide.title}
          </h1>
          {contactSlide.subtitle && (
            <p className="text-lg md:text-xl font-light text-white/80 mb-8 max-w-2xl">
              {contactSlide.subtitle}
            </p>
          )}
          {contactSlide.ctaText && contactSlide.ctaLink && (
            <Link
              href={contactSlide.ctaLink}
              className="btn-primary inline-flex items-center"
              onClick={handleUserInteraction}
            >
              {contactSlide.ctaText}
            </Link>
          )}
        </motion.div>
      </div>
    </div>
  );

  const renderCurrentSlide = () => {
    if (currentEpisodeIndex < episodes.length) {
      return renderEpisodeSlide(episodes[currentEpisodeIndex]);
    } else if (currentEpisodeIndex === episodes.length) {
      return renderAboutSlide();
    } else {
      return renderContactSlide();
    }
  };

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden">
      {/* Mini Navigation Sidebar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <ul className="space-y-4">
          {[...episodes, { id: 'about' }, { id: 'contact' }].map((item, index) => (
            <li key={item.id}>
              <button
                onClick={() => {
                  handleUserInteraction();
                  goToSlide(index);
                }}
                className={`block text-xs uppercase tracking-wider transition-all duration-300 text-left max-w-[120px] truncate ${
                  index === currentEpisodeIndex
                    ? 'text-white opacity-100'
                    : 'text-white/50 hover:text-white/80'
                }`}
                title={getSlideLabel(index)}
              >
                <span
                  className={`inline-block w-2 h-2 rounded-full mr-2 transition-all ${
                    index === currentEpisodeIndex ? 'bg-white' : 'bg-white/30'
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
          key={currentEpisodeIndex}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
        >
          {renderCurrentSlide()}
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="fixed bottom-8 right-6 md:right-12 flex items-center gap-4 z-40">
        <button
          onClick={() => {
            handleUserInteraction();
            prevSlide();
          }}
          className="p-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm tabular-nums">
          {String(currentEpisodeIndex + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
        </span>
        <button
          onClick={() => {
            handleUserInteraction();
            nextSlide();
          }}
          className="p-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 right-0 h-1 bg-white/20 z-40">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${((currentEpisodeIndex + 1) / totalSlides) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Auto-play indicator */}
      {isAutoPlaying && (
        <div className="fixed bottom-8 left-6 md:left-auto md:right-48 z-40">
          <div className="flex items-center gap-2 text-xs text-white/50">
            <span className="w-2 h-2 bg-white/50 rounded-full animate-pulse" />
            Auto-playing
          </div>
        </div>
      )}
    </div>
  );
}
