import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About | The Rise & Fall Podcast',
  description: 'Learn about The Rise & Fall Podcast, our mission, and the story behind the show.',
};

const values = [
  {
    title: 'Rise',
    description:
      'We celebrate the moments of triumph, the breakthroughs, and the victories that define success. Every journey has its peaks.',
  },
  {
    title: 'Fall',
    description:
      'We honor the failures, setbacks, and lessons learned. These moments shape character and forge resilience.',
  },
  {
    title: 'Rise Again',
    description:
      'The most powerful stories are about comebacks. We explore how the greatest succeed not despite failure, but because of it.',
  },
];

const pressLogos = [
  { name: 'The New York Times', width: 160 },
  { name: 'Forbes', width: 100 },
  { name: 'Wired', width: 80 },
  { name: 'Fast Company', width: 140 },
  { name: 'TechCrunch', width: 120 },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/70 to-black/30" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pb-24">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">About</p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light">The Rise & Fall</h1>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#111]">
        <div className="max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8">The Rise & Fall Podcast</h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-8">
            Every success story has chapters of failure. Every comeback begins with a fall. The Rise & Fall
            is a podcast dedicated to exploring the complete journeys of remarkable people—the triumphs,
            the setbacks, and the resilience that defines true greatness.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            We believe the most inspiring stories aren&apos;t about people who never failed—they&apos;re about
            those who fell and found the strength to rise again. Each episode dives deep into these
            transformative moments.
          </p>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="relative h-[60vh]">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920)`,
          }}
        />
      </section>

      {/* Values Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#f5f5f5] text-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-center">Our Philosophy</h2>
          <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
            Three principles guide every conversation we have.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value) => (
              <div key={value.title} className="text-center">
                <h3 className="text-2xl font-light mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-light mb-8">Our Studio</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Every episode is recorded in our purpose-built studio, designed for exceptional
                audio quality and intimate conversation.
              </p>
              <p className="text-gray-400 leading-relaxed mb-6">
                We invest in professional-grade equipment and meticulous post-production because we
                believe that great content deserves great sound. From microphones to mastering, no
                detail is overlooked.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Professional studio microphones
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Acoustic treatment for pristine audio
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-white rounded-full" />
                  Expert audio engineering and mastering
                </li>
              </ul>
            </div>
            <div className="relative aspect-square">
              <img
                src="https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800"
                alt="Recording studio"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Host Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-4">Your Host</p>
              <h2 className="text-3xl md:text-4xl font-light mb-6">Leon Avigad</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A lifelong student of human potential and the founder of Brown Hotels, Leon brings
                decades of experience in hospitality, leadership, and the art of meaningful
                conversation.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                His curiosity spans architecture, design, philosophy, and the human stories that
                shape our world. Through The Rise & Fall, he creates space for the conversations he
                wishes existed more often.
              </p>
              <Link href="/contact" className="btn-primary">
                Get in Touch
              </Link>
            </div>
            <div className="order-1 md:order-2 relative aspect-[3/4]">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
                alt="Leon Avigad"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500 mb-12">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50">
            {pressLogos.map((logo) => (
              <div
                key={logo.name}
                className="text-2xl font-light tracking-wider"
                style={{ width: logo.width }}
              >
                {logo.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Let&apos;s Connect</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Have a story to share? Interested in collaborating? We&apos;d love to hear from you.
        </p>
        <Link href="/contact" className="btn-primary">
          Get in Touch
        </Link>
      </section>
    </div>
  );
}
