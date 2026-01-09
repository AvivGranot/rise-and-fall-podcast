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
      <section className="px-6 py-8">
        <h1 className={`text-3xl font-light mb-2 ${isRTL ? 'text-right' : ''}`}>
          The Rise & Fall
        </h1>
        <p className={`text-gray-400 text-sm ${isRTL ? 'text-right' : ''}`}>
          {isRTL
            ? 'ראיונות אישיים עם מנהיגי נדל"ן'
            : 'Personal interviews with RE leaders'}
        </p>
      </section>

      {/* Episodes Grid */}
      <section className="px-6 pb-8">
        <h2 className={`text-xl font-light mb-6 ${isRTL ? 'text-right' : ''}`}>
          {t('nav.episodes')}
        </h2>
        <div className="grid grid-cols-1 gap-6">
          {episodes.map((episode, index) => (
            <EpisodeCard key={episode.id} episode={episode} index={index} />
          ))}
        </div>
      </section>

      {/* Meet Your Hosts Section */}
      <section className="px-6 py-12 bg-[#111]">
        <h2 className={`text-2xl font-light mb-8 text-center`}>
          {t('about.meetHosts')}
        </h2>

        {/* Aviv */}
        <div className="text-center mb-8">
          <div className="relative aspect-[3/4] mb-4 max-w-[200px] mx-auto">
            <img
              src="/rise-and-fall-podcast/about/aviv.jpeg"
              alt="Aviv"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h3 className="text-xl font-light mb-2">Aviv</h3>
          <a
            href="https://www.linkedin.com/in/aviv-granot/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Connect via LinkedIn
          </a>
        </div>

        {/* Leon */}
        <div className="text-center mb-8">
          <div className="relative aspect-[3/4] mb-4 max-w-[200px] mx-auto">
            <img
              src="/rise-and-fall-podcast/about/leon.jpg"
              alt="Leon"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h3 className="text-xl font-light mb-2">Leon</h3>
          <a
            href="https://www.linkedin.com/in/leon-avigad-07bb6218/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Connect via LinkedIn
          </a>
        </div>

        {/* About paragraph */}
        <p className={`text-gray-300 leading-relaxed text-center mt-8`}>
          The Rise & Fall is a podcast dedicated to uncovering the personal stories behind real estate's most influential leaders.
        </p>
        <div className="text-center">
          <Link href="/about" className="btn-primary inline-block mt-6">
            Learn More
          </Link>
        </div>
      </section>
    </div>
  );
}
