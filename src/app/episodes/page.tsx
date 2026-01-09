import { Metadata } from 'next';
import EpisodeCard from '@/components/episodes/EpisodeCard';
import { episodes } from '@/data/sample-data';

export const metadata: Metadata = {
  title: 'Episodes | The Rise & Fall Podcast',
  description: 'Browse all episodes of The Rise & Fall Podcast podcast. In-depth conversations and solo explorations on topics that matter.',
};

export default function EpisodesPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1920)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pb-12">
          <h1 className="text-4xl md:text-6xl font-light">Episodes</h1>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {episodes.map((episode, index) => (
            <EpisodeCard key={episode.id} episode={episode} index={index} />
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-16">
          <button className="btn-primary">Load More Episodes</button>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#111] text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Never Miss an Episode</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Subscribe to The Rise & Fall Podcast on your favorite podcast platform and join our newsletter for exclusive content.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#" className="btn-primary">
            Subscribe on Spotify
          </a>
          <a href="#" className="btn-primary">
            Subscribe on Apple Podcasts
          </a>
        </div>
      </section>
    </div>
  );
}
