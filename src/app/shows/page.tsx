import { Metadata } from 'next';
import Link from 'next/link';
import { series } from '@/data/sample-data';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Shows | The Rise & Fall Podcast',
  description: 'Explore our different show formats - from in-depth interviews to solo deep dives and special limited series.',
};

export default function ShowsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=1920)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/60 to-transparent" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">Our Shows</p>
          <h1 className="text-4xl md:text-6xl font-light">Series & Shows</h1>
        </div>
      </section>

      {/* Shows List */}
      <section className="py-16">
        {series.map((show, index) => (
          <Link
            key={show.id}
            href={`/shows/${show.slug}`}
            className="group block"
          >
            <div
              className={`relative min-h-[60vh] flex items-center ${
                index % 2 === 0 ? 'bg-[#1a1a1a]' : 'bg-[#111]'
              }`}
            >
              {/* Background Image (alternating sides) */}
              <div
                className={`absolute top-0 bottom-0 w-full md:w-1/2 bg-cover bg-center ${
                  index % 2 === 0 ? 'right-0' : 'left-0'
                }`}
                style={{ backgroundImage: `url(${show.heroImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] via-transparent to-transparent md:hidden" />
                <div
                  className={`absolute inset-0 hidden md:block ${
                    index % 2 === 0
                      ? 'bg-gradient-to-r from-[#1a1a1a] to-transparent'
                      : 'bg-gradient-to-l from-[#111] to-transparent'
                  }`}
                />
              </div>

              {/* Content */}
              <div
                className={`relative z-10 px-6 md:px-12 lg:px-24 py-16 w-full md:w-1/2 ${
                  index % 2 === 0 ? '' : 'md:ml-auto'
                }`}
              >
                <p className="text-sm uppercase tracking-[0.3em] text-white/50 mb-4">
                  {show.category}
                </p>
                <h2 className="text-3xl md:text-5xl font-light mb-4 group-hover:text-gray-300 transition-colors">
                  {show.name}
                </h2>
                <p className="text-lg text-gray-400 mb-6 max-w-lg">{show.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
                  <span>{show.episodeCount} Episodes</span>
                </div>
                <span className="inline-flex items-center gap-2 text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
                  Explore Series
                  <ArrowRight size={16} />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </section>

      {/* Subscribe CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#0a0a0a] text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Find Your Sound</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Whether you prefer in-depth interviews or thoughtful solo reflections, there&apos;s a series for you.
        </p>
        <Link href="/episodes" className="btn-primary">
          Browse All Episodes
        </Link>
      </section>
    </div>
  );
}
