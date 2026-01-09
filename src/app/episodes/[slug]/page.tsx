import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Play, Clock, Calendar, Share2, ChevronDown } from 'lucide-react';
import EpisodeCard from '@/components/episodes/EpisodeCard';
import { episodes } from '@/data/sample-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = episodes.find((e) => e.slug === slug);
  if (!episode) return { title: 'Episode Not Found' };

  return {
    title: `${episode.title} | The Rise & Fall Podcast`,
    description: episode.description,
  };
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

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = episodes.find((e) => e.slug === slug);

  if (!episode) {
    notFound();
  }

  const relatedEpisodes = episodes
    .filter((e) => e.id !== episode.id && e.series.id === episode.series.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end">
        <div
          className="absolute inset-0 bg-cover"
          style={{
            backgroundImage: `url(${episode.artwork})`,
            backgroundPosition: episode.artworkPosition ? `${episode.artworkPosition} top` : 'center'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/70 to-black/30" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pb-24 w-full">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-4 max-w-4xl">
            {episode.title}
            {episode.guests && episode.guests.length > 0 && (
              <span className="block text-2xl md:text-3xl text-white/80 mt-4">
                with {episode.guests.map((g) => g.name).join(', ')}
              </span>
            )}
          </h1>
          <button className="btn-primary">
            <Play size={16} />
            Play Episode
          </button>
        </div>
      </section>

      {/* Guest Image */}
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
              ...(episode.imagePosition === 'horizontal' && { backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundColor: '#1a1a1a' })
            }}
          />
        </section>
      )}

      {/* Episode Info */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
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
            <button className="flex items-center gap-2 hover:text-white transition-colors ml-auto">
              <Share2 size={16} />
              Share
            </button>
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
        </div>
      </section>

      {/* Related Episodes */}
      {relatedEpisodes.length > 0 && (
        <section className="px-6 md:px-12 lg:px-24 py-16 bg-[#111]">
          <h2 className="text-3xl font-light mb-12">Related Episodes</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedEpisodes.map((ep, index) => (
              <EpisodeCard key={ep.id} episode={ep} index={index} />
            ))}
          </div>
        </section>
      )}

      {/* Subscribe CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Enjoy This Episode?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Subscribe to The Rise & Fall Podcast and never miss a new conversation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="btn-primary">
            Subscribe Now
          </Link>
        </div>
      </section>
    </div>
  );
}
