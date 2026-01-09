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
                  href="mailto:avivgnadlan@outlook.com"
                  className="text-lg hover:text-gray-300 transition-colors"
                >
                  avivgnadlan@outlook.com
                </a>
              </div>

              {/* Listen On */}
              <div className="mb-12">
                <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-4">Listen On</h3>
                <div className="flex flex-wrap gap-4">
                  {/* Spotify */}
                  <a
                    href="https://spotify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#333] hover:border-[#1DB954] hover:bg-[#1DB954] hover:text-black transition-all text-sm uppercase tracking-wider"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                    </svg>
                    Spotify
                  </a>
                  {/* Apple Podcasts */}
                  <a
                    href="https://podcasts.apple.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#333] hover:border-[#9933FF] hover:bg-[#9933FF] hover:text-white transition-all text-sm uppercase tracking-wider"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59-.12 1.2-.59 1.547-.478.348-1.106.384-1.62.096-.47-.263-.778-.692-.87-1.224-.25-1.248-.726-2.27-1.56-3.166-1.166-1.247-2.678-1.907-4.396-1.907-1.715 0-3.263.693-4.428 1.974-.827.9-1.303 1.92-1.553 3.165-.09.532-.4.96-.87 1.224-.514.288-1.142.252-1.62-.096-.47-.347-.71-.957-.59-1.547.352-1.773 1.04-3.12 2.263-4.392 1.608-1.685 3.72-2.653 6.056-2.653h.458zm.078 3.856c1.293 0 2.477.457 3.424 1.32.706.656 1.163 1.392 1.48 2.392.117.37.063.774-.15 1.096-.212.32-.548.53-.93.586-.384.056-.77-.044-1.074-.277-.262-.2-.454-.485-.538-.813-.186-.68-.474-1.192-.922-1.607-.556-.515-1.254-.78-2.012-.78-.76 0-1.458.265-2.014.78-.448.415-.736.928-.923 1.607-.084.328-.276.614-.538.813-.303.233-.69.333-1.074.277-.382-.057-.718-.266-.93-.586-.212-.322-.266-.725-.148-1.096.316-1 .773-1.736 1.479-2.392.947-.863 2.13-1.32 3.424-1.32h.446zM12 10.269c.656 0 1.247.264 1.68.69.432.428.7 1.02.7 1.672 0 .652-.268 1.244-.7 1.672-.433.427-1.024.69-1.68.69-.655 0-1.247-.263-1.68-.69-.432-.428-.7-1.02-.7-1.672 0-.653.268-1.244.7-1.672.433-.426 1.025-.69 1.68-.69zm0 5.357c.468 0 .898.166 1.238.438.162.128.304.28.422.453l1.034 3.09c.122.365.076.766-.126 1.09-.203.326-.534.555-.914.63-.158.032-.32.032-.478 0-.38-.074-.71-.303-.914-.63l-.52-1.552c-.168.036-.342.054-.52.054-.178 0-.352-.018-.52-.054l-.52 1.553c-.203.326-.534.555-.914.63-.158.03-.32.03-.478 0-.38-.076-.71-.305-.914-.63-.202-.325-.248-.726-.126-1.09l1.034-3.09c.118-.174.26-.326.422-.454.34-.272.77-.438 1.238-.438h.056z"/>
                    </svg>
                    Apple Podcasts
                  </a>
                  {/* YouTube */}
                  <a
                    href="https://youtube.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 border border-[#333] hover:border-[#FF0000] hover:bg-[#FF0000] hover:text-white transition-all text-sm uppercase tracking-wider"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                    YouTube
                  </a>
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
