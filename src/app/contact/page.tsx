import { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/forms/ContactForm';
import { socialLinks } from '@/data/sample-data';

export const metadata: Metadata = {
  title: 'Contact | The Rise & Fall Podcast',
  description: 'Get in touch with The Rise & Fall Podcast. Submit guest inquiries, sponsorship requests, or general feedback.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a]">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/70 to-black/30" />
        </div>
        <div className="relative z-10 px-6 md:px-12 lg:px-24 pb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">Contact</p>
          <h1 className="text-4xl md:text-6xl font-light">Get in Touch</h1>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-light mb-8">Send a Message</h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-light mb-8">Connect With Us</h2>

              {/* Email */}
              <div className="mb-12">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-3">Email</h3>
                <a
                  href="mailto:hello@theriseandfall.fm"
                  className="text-lg hover:text-gray-300 transition-colors"
                >
                  hello@theriseandfall.fm
                </a>
              </div>

              {/* Listen On */}
              <div className="mb-12">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Listen On</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks
                    .filter((link) =>
                      ['Spotify', 'Apple Podcasts', 'YouTube'].includes(link.platform)
                    )
                    .map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-[#333] hover:border-white hover:bg-white hover:text-black transition-all text-sm uppercase tracking-wider"
                      >
                        {link.platform}
                      </a>
                    ))}
                </div>
              </div>

              {/* Social */}
              <div className="mb-12">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks
                    .filter((link) => ['Instagram', 'Twitter'].includes(link.platform))
                    .map((link) => (
                      <a
                        key={link.platform}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 border border-[#333] hover:border-white hover:bg-white hover:text-black transition-all text-sm uppercase tracking-wider"
                      >
                        {link.platform}
                      </a>
                    ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="p-8 bg-[#111] rounded">
                <h3 className="text-xl font-light mb-4">Never Miss an Episode</h3>
                <p className="text-gray-400 mb-6">
                  Join our newsletter for exclusive content, behind-the-scenes updates, and early
                  access to new episodes.
                </p>
                <form className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-4 py-3 bg-transparent border border-[#333] focus:border-white focus:outline-none transition-colors"
                  />
                  <button type="submit" className="btn-primary whitespace-nowrap">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#111]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-light mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-light mb-3">How can I be a guest on the show?</h3>
              <p className="text-gray-400">
                We&apos;re always looking for interesting guests with unique perspectives. Use the contact
                form above and select &quot;Guest Inquiry&quot; as the subject. Tell us about yourself and
                what you&apos;d like to discuss.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-3">Do you accept sponsorships?</h3>
              <p className="text-gray-400">
                We partner with brands that align with our values and audience. For sponsorship
                inquiries, please select &quot;Sponsorship&quot; in the contact form and include details about
                your brand and goals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-3">How often do you release new episodes?</h3>
              <p className="text-gray-400">
                We release new episodes weekly, with occasional bonus content for our newsletter
                subscribers. Subscribe to never miss an episode.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-light mb-3">Can I suggest a topic for the show?</h3>
              <p className="text-gray-400">
                Absolutely! We love hearing from our listeners. Send us your topic suggestions
                through the contact form, and we&apos;ll consider them for future episodes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About CTA */}
      <section className="px-6 md:px-12 lg:px-24 py-24 text-center">
        <h2 className="text-3xl md:text-4xl font-light mb-4">Want to Learn More?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Discover the story behind The Rise & Fall Podcast and what drives our passion for meaningful
          conversations.
        </p>
        <Link href="/about" className="btn-primary">
          About Us
        </Link>
      </section>
    </div>
  );
}
