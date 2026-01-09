import EpisodeScrollExperience from '@/components/home/EpisodeScrollExperience';
import { episodes, slides } from '@/data/sample-data';
import Link from 'next/link';

const episodeStructure = [
  {
    title: 'Opening',
    duration: '2 min',
    description: 'Leon and Aviv introduce the guest with a captivating overview of their background, achievements, and relevance.',
  },
  {
    title: 'Roots',
    duration: '5-10 min',
    description: 'Childhood, key influences, education, first jobs, and the turning points that shaped their path.',
  },
  {
    title: 'Career Journey',
    duration: '15 min',
    description: 'Deep dive into achievements, leadership moments, challenges, failures, and lessons learned.',
  },
  {
    title: 'The Person Behind',
    duration: '15 min',
    description: 'Personal values, guiding principles, daily habits, decision-making philosophy, family, and side projects.',
  },
  {
    title: 'Quick Fire',
    duration: '5 min',
    description: 'Rapid questions: favorite books, mantras, mentors, and hobbies.',
  },
];

export default function Home() {
  // Get about and contact slides
  const aboutSlide = slides.find(s => s.type === 'about')!;
  const contactSlide = slides.find(s => s.type === 'contact')!;

  // Sort episodes by episode number
  const sortedEpisodes = [...episodes].sort((a, b) => a.episodeNumber - b.episodeNumber);

  return (
    <div>
      {/* Carousel Section */}
      <EpisodeScrollExperience
        episodes={sortedEpisodes}
        aboutSlide={aboutSlide}
        contactSlide={contactSlide}
      />

      {/* About Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#111]">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8">Personal Interviews with RE Leaders</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            The Rise & Fall is a podcast dedicated to uncovering the personal stories behind real estate&apos;s most influential leaders.
            We go beyond the headlines to explore the roots, the journey, and the philosophy of those who shape our cities and communities.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Each episode follows a carefully crafted structure: from childhood influences to career-defining moments,
            from failures and regrets to personal values and daily habits. We extract the juice—the lessons that matter.
          </p>
        </div>
      </section>

      {/* Hosts Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">Meet Your Hosts</h2>
          <div className="grid md:grid-cols-2 gap-16">
            {/* Aviv */}
            <div className="text-center md:text-left">
              <div className="relative aspect-[3/4] mb-8 max-w-sm mx-auto md:mx-0">
                <img
                  src="/rise-and-fall-podcast/about/aviv.jpeg"
                  alt="Aviv"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">Aviv</h3>
              <p className="text-gray-400 leading-relaxed">
                The creative force behind the podcast&apos;s production and digital presence.
                Aviv combines storytelling expertise with technical know-how to create compelling content
                that resonates across platforms.
              </p>
            </div>

            {/* Leon */}
            <div className="text-center md:text-left">
              <div className="relative aspect-[3/4] mb-8 max-w-sm mx-auto md:mx-0">
                <img
                  src="/rise-and-fall-podcast/about/leon.jpg"
                  alt="Leon"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">Leon</h3>
              <p className="text-gray-400 leading-relaxed">
                A seasoned professional with deep connections in the real estate industry.
                Leon brings decades of experience and a network that opens doors to Israel&apos;s most influential leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Episode Structure */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#f5f5f5] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">Episode Structure</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Every episode follows a proven format designed to reveal the complete story.
          </p>
          <div className="grid md:grid-cols-5 gap-6">
            {episodeStructure.map((section, index) => (
              <div key={section.title} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] text-white flex items-center justify-center mx-auto mb-4 text-lg font-light">
                  {index + 1}
                </div>
                <h3 className="text-lg font-medium mb-2">{section.title}</h3>
                <p className="text-sm text-gray-500 mb-3">{section.duration}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{section.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#0a0a0a] text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Want to Be a Guest?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          We&apos;re looking for real estate leaders with compelling stories. If you&apos;ve built something remarkable,
          we want to hear from you.
        </p>
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
