'use client';

import Link from 'next/link';
import { Episode } from '@/types';
import { useLanguage } from '@/context/LanguageContext';
import EpisodeCard from '@/components/episodes/EpisodeCard';

interface MobileEpisodesListProps {
  episodes: Episode[];
}

export default function MobileEpisodesList({ episodes }: MobileEpisodesListProps) {
  const { t, isRTL } = useLanguage();

  return (
    <div className="min-h-screen bg-[#1a1a1a] pt-20">
      {/* Hero Section */}
      <section className="px-6 py-12">
        <h1 className={`text-3xl font-light mb-4 ${isRTL ? 'text-right' : ''}`}>
          The Rise & Fall
        </h1>
        <p className={`text-gray-400 text-lg mb-8 ${isRTL ? 'text-right' : ''}`}>
          Personal interviews with RE leaders. Their roots, their journey, their legacy.
        </p>
        <Link href="/episodes" className="btn-primary inline-block">
          Browse Episodes
        </Link>
      </section>

      {/* Episodes Grid */}
      <section className="px-6 pb-12">
        <h2 className={`text-2xl font-light mb-8 ${isRTL ? 'text-right' : ''}`}>
          {t('nav.episodes')}
        </h2>
        <div className="grid grid-cols-1 gap-8">
          {episodes.map((episode, index) => (
            <EpisodeCard key={episode.id} episode={episode} index={index} />
          ))}
        </div>
      </section>

      {/* Hosts Section - Same as PC */}
      <section className="px-6 py-16 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-light mb-12 text-center">{t('about.meetHosts')}</h2>
          <div className="grid grid-cols-1 gap-12">
            {/* Aviv */}
            <div className="text-center">
              <div className="relative aspect-[3/4] mb-6 max-w-[280px] mx-auto">
                <img
                  src="/rise-and-fall-podcast/about/aviv.jpeg"
                  alt="Aviv"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-light mb-3">Aviv</h3>
              <a
                href="https://www.linkedin.com/in/aviv-granot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Connect via LinkedIn
              </a>
            </div>

            {/* Leon */}
            <div className="text-center">
              <div className="relative aspect-[3/4] mb-6 max-w-[280px] mx-auto">
                <img
                  src="/rise-and-fall-podcast/about/leon.jpg"
                  alt="Leon"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-xl font-light mb-3">Leon</h3>
              <a
                href="https://www.linkedin.com/in/leon-avigad-07bb6218/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Connect via LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
