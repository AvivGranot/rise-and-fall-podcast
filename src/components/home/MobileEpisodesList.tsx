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

      {/* About Section */}
      <section className="px-6 py-12 bg-[#111]">
        <h2 className={`text-2xl font-light mb-6 ${isRTL ? 'text-right' : ''}`}>
          {isRTL ? 'אודות הפודקאסט' : 'About the Podcast'}
        </h2>
        <p className={`text-gray-300 leading-relaxed mb-4 ${isRTL ? 'text-right' : ''}`}>
          {isRTL
            ? 'The Rise & Fall הוא פודקאסט המוקדש לחשיפת הסיפורים האישיים מאחורי מנהיגי הנדל"ן המשפיעים ביותר.'
            : 'The Rise & Fall is a podcast dedicated to uncovering the personal stories behind real estate\'s most influential leaders.'}
        </p>
        <Link href="/about" className="btn-primary inline-block mt-4">
          {isRTL ? 'למידע נוסף' : 'Learn More'}
        </Link>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-12 text-center">
        <h2 className="text-2xl font-light mb-4">
          {isRTL ? 'רוצים להיות אורחים?' : 'Want to Be a Guest?'}
        </h2>
        <p className="text-gray-400 mb-6 text-sm">
          {isRTL
            ? 'אנחנו מחפשים מנהיגי נדל"ן עם סיפורים מרתקים.'
            : 'We\'re looking for real estate leaders with compelling stories.'}
        </p>
        <Link href="/contact" className="btn-primary">
          {t('nav.contact')}
        </Link>
      </section>
    </div>
  );
}
