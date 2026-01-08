import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import EpisodeCard from '@/components/episodes/EpisodeCard';
import { series, episodes } from '@/data/sample-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return series.map((show) => ({
    slug: show.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const show = series.find((s) => s.slug === slug);
  if (!show) return { title: 'Show Not Found' };

  return {
    title: `${show.name} | The Rise & Fall Podcast`,
    description: show.description,
  };
}

export default async function ShowPage({ params }: PageProps) {
  const { slug } = await params;
  const show = series.find((s) => s.slug === slug);

  if (!show) {
    notFound();
  }

  const showEpisodes = episodes.filter((e) => e.series.id === show.id);

  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${show.heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/70 to-black/30" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pb-24 w-full max-w-4xl">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">{show.category}</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light mb-6">{show.name}</h1>
          <p className="text-xl text-gray-300 mb-8">{show.description}</p>
          <div className="flex items-center gap-6 text-sm text-gray-400">
            <span>{show.episodeCount} Episodes</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#111]">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-light mb-8">About This Series</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-light mb-4">What to Expect</h3>
              <p className="text-gray-400 leading-relaxed">
                Each episode in this series is crafted to deliver meaningful insights and engaging
                conversations. Whether you&apos;re commuting, exercising, or relaxing, these episodes
                are designed to make every moment count.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-4">Format</h3>
              <p className="text-gray-400 leading-relaxed">
                {show.category === 'interviews'
                  ? 'Long-form conversations that dive deep into the minds of remarkable individuals. Each interview runs 45-90 minutes.'
                  : show.category === 'solo'
                  ? 'Focused solo episodes exploring specific topics, ideas, and reflections. Episodes run 20-40 minutes.'
                  : show.category === 'special'
                  ? 'Limited series with multiple parts exploring a unified theme or story. Perfect for binge-listening.'
                  : 'Classic episodes from our archive, featuring timeless conversations and evergreen content.'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-3xl font-light">All Episodes</h2>
          <span className="text-gray-400">{showEpisodes.length} episodes</span>
        </div>

        {showEpisodes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {showEpisodes.map((episode, index) => (
              <EpisodeCard key={episode.id} episode={episode} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-gray-400 text-lg">No episodes in this series yet. Check back soon!</p>
          </div>
        )}
      </section>

      {/* Other Shows */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#111]">
        <h2 className="text-3xl font-light mb-12">Explore Other Shows</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {series
            .filter((s) => s.id !== show.id)
            .slice(0, 3)
            .map((otherShow) => (
              <Link
                key={otherShow.id}
                href={`/shows/${otherShow.slug}`}
                className="group block"
              >
                <div className="relative aspect-video overflow-hidden mb-4">
                  <img
                    src={otherShow.artwork}
                    alt={otherShow.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <h3 className="text-2xl font-light">{otherShow.name}</h3>
                  </div>
                </div>
                <p className="text-sm text-gray-400">{otherShow.episodeCount} episodes</p>
              </Link>
            ))}
        </div>
      </section>

      {/* Subscribe CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Love This Series?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Subscribe to The Rise & Fall Podcast and get notified when new episodes drop.
        </p>
        <Link href="/contact" className="btn-primary">
          Subscribe Now
        </Link>
      </section>
    </div>
  );
}
