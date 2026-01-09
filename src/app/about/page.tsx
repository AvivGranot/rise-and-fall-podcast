import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | The Rise & Fall Podcast',
  description: 'Meet Leon and Aviv, hosts of The Rise & Fall Podcast - personal interviews with real estate leaders.',
};

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
    description: 'Deep dive into achievements, leadership moments, challenges, failures, and lessons learned. Extracting the juice.',
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

const values = [
  {
    title: 'Inspiration',
    description: 'Every episode is designed to inspire. We showcase the journeys of those who built empires from vision and persistence.',
  },
  {
    title: 'Exclusivity',
    description: 'Insider access to conversations you won\'t find anywhere else. Unfiltered stories from the top.',
  },
  {
    title: 'Storytelling',
    description: 'People remember stories, not facts. We craft narratives that resonate and stay with you.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section - Split Images */}
      <section className="grid grid-cols-1 md:grid-cols-2 h-screen">
        <div
          className="h-[50vh] md:h-full bg-cover bg-top relative"
          style={{ backgroundImage: `url(/rise-and-fall-podcast/about/aviv.jpeg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-light">Aviv</h3>
          </div>
        </div>
        <div
          className="h-[50vh] md:h-full bg-cover bg-top relative"
          style={{ backgroundImage: `url(/rise-and-fall-podcast/about/leon.jpg)` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-8 left-8 text-white">
            <h3 className="text-2xl font-light">Leon</h3>
          </div>
        </div>
      </section>

      {/* Mission Section */}
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
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">Meet Your Hosts</h2>
          <div className="grid md:grid-cols-2 gap-16">
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
                His interviewing style balances warmth with incisive questions that reveal the person behind the title.
              </p>
            </div>

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
                that resonates across platforms. His fresh perspective ensures every episode connects with modern audiences.
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

      {/* Values Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">Our Approach</h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
            Psychological elements that make every episode memorable.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Seasons Overview */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">Season Plan</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-[#111] rounded">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Season 1</p>
              <h3 className="text-xl font-light mb-4">Israeli Leaders</h3>
              <p className="text-gray-400 mb-4">10-12 episodes in Hebrew featuring Israel&apos;s top real estate leaders.</p>
              <p className="text-sm text-gray-500">Target audience: Israeli RE professionals</p>
            </div>
            <div className="p-8 bg-[#111] rounded">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Season 2</p>
              <h3 className="text-xl font-light mb-4">Global Israeli</h3>
              <p className="text-gray-400 mb-4">5-7 episodes in English with Israeli/Jewish leaders operating globally.</p>
              <p className="text-sm text-gray-500">Target audience: International RE community</p>
            </div>
            <div className="p-8 bg-[#111] rounded">
              <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">Season 3</p>
              <h3 className="text-xl font-light mb-4">Global Icons</h3>
              <p className="text-gray-400 mb-4">5-7 episodes in English with world-renowned architects and developers.</p>
              <p className="text-sm text-gray-500">Target audience: Global RE industry</p>
            </div>
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
