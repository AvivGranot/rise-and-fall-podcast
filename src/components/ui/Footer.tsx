import Link from 'next/link';
import { socialLinks } from '@/data/sample-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222]">
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-light tracking-widest uppercase mb-6 block">
                The Rise & Fall
              </Link>
              <p className="text-gray-400 max-w-md">
                Conversations that resonate. Stories that inspire. Ideas that transform. A podcast
                dedicated to meaningful dialogue and deep listening.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Explore</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/episodes" className="text-gray-400 hover:text-white transition-colors">
                    Episodes
                  </Link>
                </li>
                <li>
                  <Link href="/shows" className="text-gray-400 hover:text-white transition-colors">
                    Shows
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Listen */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">Listen On</h3>
              <ul className="space-y-3">
                {socialLinks
                  .filter((link) => ['Spotify', 'Apple Podcasts', 'YouTube'].includes(link.platform))
                  .map((link) => (
                    <li key={link.platform}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.platform}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {currentYear} The Rise & Fall. All rights reserved.
            </p>
            <div className="flex gap-6">
              {socialLinks
                .filter((link) => ['Instagram', 'Twitter'].includes(link.platform))
                .map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gray-500 hover:text-white transition-colors uppercase tracking-wider"
                  >
                    {link.platform}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
