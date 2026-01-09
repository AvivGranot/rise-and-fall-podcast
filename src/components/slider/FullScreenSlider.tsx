'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Link from 'next/link';
import { Slide } from '@/types';

interface FullScreenSliderProps {
  slides: Slide[];
}

export default function FullScreenSlider({ slides }: FullScreenSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToSlide = useCallback(
    (index: number) => {
      setDirection(index > currentIndex ? 1 : -1);
      setCurrentIndex(index);
    },
    [currentIndex]
  );

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
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

  const currentSlide = slides[currentIndex];

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Mini Navigation Sidebar */}
      <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
        <ul className="space-y-4">
          {slides.map((slide, index) => (
            <li key={slide.id}>
              <button
                onClick={() => goToSlide(index)}
                className={`block text-xs uppercase tracking-wider transition-all duration-300 text-left max-w-[120px] truncate ${
                  index === currentIndex
                    ? 'text-white opacity-100'
                    : 'text-white/50 hover:text-white/80'
                }`}
                title={slide.title}
              >
                <span
                  className={`inline-block w-2 h-2 rounded-full mr-2 transition-all ${
                    index === currentIndex ? 'bg-white' : 'bg-white/30'
                  }`}
                />
                {slide.category || slide.title}
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
            y: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          {currentSlide.secondaryImage ? (
            <div className="absolute inset-0 flex flex-col md:flex-row">
              <div
                className="flex-1 bg-cover bg-top"
                style={{ backgroundImage: `url(${currentSlide.backgroundImage})` }}
              />
              <div
                className="flex-1 bg-cover bg-top"
                style={{ backgroundImage: `url(${currentSlide.secondaryImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            </div>
          ) : (
            <div
              className="absolute inset-0 bg-cover bg-top md:bg-center"
              style={{ backgroundImage: `url(${currentSlide.backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
            </div>
          )}

          {/* Content */}
          <div className="relative h-full flex flex-col justify-end pb-24 md:pb-32 px-6 md:px-24 lg:px-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-wide mb-4">
                {currentSlide.title}
              </h1>
              {currentSlide.subtitle && (
                <p className="text-lg md:text-xl font-light text-white/80 mb-8 max-w-2xl">
                  {currentSlide.subtitle}
                </p>
              )}
              {currentSlide.ctaText && currentSlide.ctaLink && (
                <Link href={currentSlide.ctaLink} className="btn-primary inline-flex items-center">
                  {currentSlide.type === 'episode' && <Play size={16} />}
                  {currentSlide.ctaText}
                </Link>
              )}
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-8 right-6 md:right-12 flex items-center gap-4 z-40">
        <button
          onClick={prevSlide}
          className="p-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft size={20} />
        </button>
        <span className="text-sm tabular-nums">
          {String(currentIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
        <button
          onClick={nextSlide}
          className="p-3 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-all"
          aria-label="Next slide"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <motion.div
          className="h-full bg-white"
          initial={{ width: 0 }}
          animate={{ width: `${((currentIndex + 1) / slides.length) * 100}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </div>
  );
}
