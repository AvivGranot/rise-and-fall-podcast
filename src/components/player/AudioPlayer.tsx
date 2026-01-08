'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
  Maximize2,
  Minimize2,
  X,
} from 'lucide-react';

interface AudioPlayerProps {
  isVisible?: boolean;
}

interface CurrentTrack {
  title: string;
  artist?: string;
  artwork: string;
  audioUrl: string;
}

// This would normally come from a global state/context
const sampleTrack: CurrentTrack = {
  title: 'The Art of Deep Listening',
  artist: 'Dr. Sarah Chen',
  artwork: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=200',
  audioUrl: '',
};

export default function AudioPlayer({ isVisible = false }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(3420);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [showPlayer, setShowPlayer] = useState(isVisible);

  const audioRef = useRef<HTMLAudioElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    setShowPlayer(true);
  };

  const handleSkip = (seconds: number) => {
    setCurrentTime((prev) => Math.max(0, Math.min(duration, prev + seconds)));
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressRef.current) {
      const rect = progressRef.current.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      setCurrentTime(percent * duration);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    setIsMuted(newVolume === 0);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  const cyclePlaybackRate = () => {
    const rates = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const currentIndex = rates.indexOf(playbackRate);
    const nextIndex = (currentIndex + 1) % rates.length;
    setPlaybackRate(rates[nextIndex]);
  };

  // Simulate playback progress
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && currentTime < duration) {
      interval = setInterval(() => {
        setCurrentTime((prev) => Math.min(duration, prev + playbackRate));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying, currentTime, duration, playbackRate]);

  if (!showPlayer) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        exit={{ y: 100 }}
        className={`fixed bottom-0 left-0 right-0 z-50 bg-[#1a1a1a] border-t border-[#333] ${
          isExpanded ? 'h-auto' : ''
        }`}
      >
        {/* Minimized Player */}
        {!isExpanded && (
          <div className="flex items-center h-20 px-4 md:px-6">
            {/* Track Info */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <img
                src={sampleTrack.artwork}
                alt={sampleTrack.title}
                className="w-12 h-12 object-cover rounded"
              />
              <div className="min-w-0">
                <p className="font-medium truncate">{sampleTrack.title}</p>
                {sampleTrack.artist && (
                  <p className="text-sm text-gray-400 truncate">{sampleTrack.artist}</p>
                )}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="hidden md:flex items-center gap-4 flex-1 max-w-xl mx-8">
              <span className="text-xs tabular-nums text-gray-400">{formatTime(currentTime)}</span>
              <div
                ref={progressRef}
                onClick={handleProgressClick}
                className="flex-1 h-1 bg-[#333] rounded-full cursor-pointer group"
              >
                <div
                  className="h-full bg-white rounded-full relative group-hover:bg-white/80 transition-colors"
                  style={{ width: `${(currentTime / duration) * 100}%` }}
                >
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
              <span className="text-xs tabular-nums text-gray-400">{formatTime(duration)}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2 md:gap-4">
              <button
                onClick={() => handleSkip(-15)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors hidden md:block"
                aria-label="Skip back 15 seconds"
              >
                <SkipBack size={18} />
              </button>
              <button
                onClick={togglePlay}
                className="p-3 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
                aria-label={isPlaying ? 'Pause' : 'Play'}
              >
                {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-0.5" />}
              </button>
              <button
                onClick={() => handleSkip(15)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors hidden md:block"
                aria-label="Skip forward 15 seconds"
              >
                <SkipForward size={18} />
              </button>

              {/* Volume */}
              <div className="hidden lg:flex items-center gap-2 ml-4">
                <button
                  onClick={toggleMute}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-20 accent-white"
                />
              </div>

              {/* Playback Speed */}
              <button
                onClick={cyclePlaybackRate}
                className="hidden md:block px-2 py-1 text-xs border border-[#333] rounded hover:border-white transition-colors"
              >
                {playbackRate}x
              </button>

              {/* Expand/Minimize */}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>

              {/* Close */}
              <button
                onClick={() => setShowPlayer(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        )}

        {/* Expanded Player */}
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-8 md:p-12"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                {/* Artwork */}
                <img
                  src={sampleTrack.artwork}
                  alt={sampleTrack.title}
                  className="w-64 h-64 object-cover rounded-lg shadow-2xl"
                />

                {/* Info and Controls */}
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-light mb-2">{sampleTrack.title}</h2>
                  {sampleTrack.artist && (
                    <p className="text-lg text-gray-400 mb-8">{sampleTrack.artist}</p>
                  )}

                  {/* Progress */}
                  <div className="mb-6">
                    <div
                      ref={progressRef}
                      onClick={handleProgressClick}
                      className="h-2 bg-[#333] rounded-full cursor-pointer group mb-2"
                    >
                      <div
                        className="h-full bg-white rounded-full relative"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full" />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>
                  </div>

                  {/* Controls */}
                  <div className="flex items-center justify-center md:justify-start gap-6">
                    <button
                      onClick={() => handleSkip(-15)}
                      className="p-3 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <SkipBack size={24} />
                    </button>
                    <button
                      onClick={togglePlay}
                      className="p-4 bg-white text-black rounded-full hover:bg-white/90 transition-colors"
                    >
                      {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1" />}
                    </button>
                    <button
                      onClick={() => handleSkip(15)}
                      className="p-3 hover:bg-white/10 rounded-full transition-colors"
                    >
                      <SkipForward size={24} />
                    </button>
                  </div>

                  {/* Additional Controls */}
                  <div className="flex items-center justify-center md:justify-start gap-4 mt-6">
                    <button
                      onClick={cyclePlaybackRate}
                      className="px-3 py-1 text-sm border border-[#333] rounded hover:border-white transition-colors"
                    >
                      Speed: {playbackRate}x
                    </button>
                    <div className="flex items-center gap-2">
                      <button onClick={toggleMute}>
                        {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                      </button>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.1"
                        value={isMuted ? 0 : volume}
                        onChange={handleVolumeChange}
                        className="w-24 accent-white"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Minimize Button */}
              <div className="text-center mt-8">
                <button
                  onClick={() => setIsExpanded(false)}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <Minimize2 size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
