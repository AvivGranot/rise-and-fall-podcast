'use client';

import Link from 'next/link';
import { socialLinks } from '@/data/sample-data';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, isRTL } = useLanguage();

  return (
    <footer className="bg-[#0a0a0a] border-t border-[#222]">
      <div className="px-6 md:px-12 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <div className={`grid md:grid-cols-4 gap-12 mb-16 ${isRTL ? 'text-right' : ''}`}>
            {/* Brand */}
            <div className="md:col-span-2">
              <Link href="/" className="text-2xl font-light tracking-widest uppercase mb-6 block">
                {t('footer.theRiseAndFall')}
              </Link>
              <p className="text-gray-400 max-w-md">
                {isRTL
                  ? 'שיחות שמהדהדות. סיפורים שמעוררים השראה. רעיונות שמשנים. פודקאסט המוקדש לדיאלוג משמעותי והקשבה עמוקה.'
                  : 'Conversations that resonate. Stories that inspire. Ideas that transform. A podcast dedicated to meaningful dialogue and deep listening.'}
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                {isRTL ? 'ניווט' : 'Explore'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/episodes" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.episodes')}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.about')}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                    {t('nav.contact')}
                  </Link>
                </li>
              </ul>
            </div>

            {/* Listen */}
            <div>
              <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-6">
                {t('contact.listenOn')}
              </h3>
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
          <div className={`pt-8 border-t border-[#222] flex flex-col md:flex-row justify-between items-center gap-4 ${isRTL ? 'md:flex-row-reverse' : ''}`}>
            <p className="text-sm text-gray-500">
              &copy; {currentYear} {t('footer.theRiseAndFall')}. {t('footer.rights')}
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
