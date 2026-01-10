'use client';

import Link from 'next/link';
import { Play, Clock, Tv, Users, Mail, Music } from 'lucide-react';
import { Episode } from '@/types';
import { useLanguage } from '@/context/LanguageContext';

interface MobileEpisodesListProps {
  episodes: Episode[];
}

export default function MobileEpisodesList({ episodes }: MobileEpisodesListProps) {
  const { t } = useLanguage();

  // Get the latest episode (first one, assuming sorted by date)
  const featuredEpisode = episodes[0];

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} min`;
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-16">
      {/* Section 2: Hero */}
      <section className="px-4 py-8">
        <h1 className="text-2xl font-light mb-2">
          Personal Interviews with RE Leaders
        </h1>
        <p className="text-gray-400 text-base mb-6">
          Their roots, their journey, their legacy.
        </p>
        <Link
          href="/episodes"
          className="inline-block bg-white text-black px-6 py-3 text-sm font-medium min-h-[48px] flex items-center justify-center"
        >
          Browse Episodes
        </Link>
      </section>

      {/* Section 3: Featured Episode */}
      {featuredEpisode && (
        <section className="px-4 py-6 bg-[#111]">
          <h2 className="text-lg font-light mb-4 text-gray-400 uppercase tracking-wider">
            Latest Episode
          </h2>
          <Link href={`/episodes/${featuredEpisode.slug}`} className="flex gap-4">
            <img
              src={featuredEpisode.artwork}
              alt={featuredEpisode.title}
              className="w-20 h-20 object-cover flex-shrink-0"
              style={{ objectPosition: featuredEpisode.artworkPosition ? `${featuredEpisode.artworkPosition} center` : 'center' }}
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 text-xs text-gray-400 mb-1">
                <span>EP {featuredEpisode.episodeNumber}</span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {formatDuration(featuredEpisode.duration)}
                </span>
              </div>
              <h3 className="text-base font-light mb-1 truncate">
                {featuredEpisode.title}
              </h3>
              {featuredEpisode.guests && featuredEpisode.guests.length > 0 && (
                <p className="text-sm text-gray-400 truncate">
                  with {featuredEpisode.guests.map((g) => g.name).join(', ')}
                </p>
              )}
            </div>
          </Link>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 w-full bg-[#1DB954] text-white px-4 py-3 text-sm font-medium min-h-[48px] flex items-center justify-center gap-2"
          >
            <Play size={16} />
            Listen Now
          </a>
        </section>
      )}

      {/* Section 4: Quick Links Grid */}
      <section className="px-4 py-8">
        <div className="grid grid-cols-2 gap-3">
          <Link
            href="/episodes"
            className="bg-[#222] p-4 min-h-[80px] flex flex-col items-center justify-center gap-2"
          >
            <Tv size={24} className="text-white" />
            <span className="text-sm">Episodes</span>
          </Link>
          <Link
            href="/about"
            className="bg-[#222] p-4 min-h-[80px] flex flex-col items-center justify-center gap-2"
          >
            <Users size={24} className="text-white" />
            <span className="text-sm">About</span>
          </Link>
          <Link
            href="/contact"
            className="bg-[#222] p-4 min-h-[80px] flex flex-col items-center justify-center gap-2"
          >
            <Mail size={24} className="text-white" />
            <span className="text-sm">Contact</span>
          </Link>
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#1DB954] p-4 min-h-[80px] flex flex-col items-center justify-center gap-2"
          >
            <Music size={24} className="text-white" />
            <span className="text-sm">Spotify</span>
          </a>
        </div>
      </section>

      {/* Section 5: Hosts (collapsed) */}
      <section className="px-4 py-6 bg-[#111]">
        <h2 className="text-lg font-light mb-4">Your Hosts</h2>
        <div className="flex items-center justify-between">
          <div className="flex gap-4 text-base">
            <span>Aviv</span>
            <span className="text-gray-500">&</span>
            <span>Leon</span>
          </div>
          <Link
            href="/about"
            className="text-gray-400 text-sm min-h-[48px] flex items-center"
          >
            Meet them →
          </Link>
        </div>
      </section>

      {/* Section 6: Minimal Footer */}
      <footer className="px-4 py-8 text-center">
        <p className="text-gray-500 text-sm mb-4">© 2025 Rise & Fall</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://spotify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Spotify"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
            </svg>
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="YouTube"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white min-w-[48px] min-h-[48px] flex items-center justify-center"
            aria-label="Instagram"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}
