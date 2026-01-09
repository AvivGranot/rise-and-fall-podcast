'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function HomeContent() {
  const { t, isRTL } = useLanguage();

  return (
    <>
      {/* Hosts Section */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#1a1a1a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-16 text-center">{t('about.meetHosts')}</h2>
          <div className={`grid md:grid-cols-2 gap-16 ${isRTL ? 'direction-rtl' : ''}`}>
            {/* Aviv */}
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <div className="relative aspect-[3/4] mb-8 max-w-sm mx-auto md:mx-0">
                <img
                  src="/rise-and-fall-podcast/about/aviv.jpeg"
                  alt="Aviv"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">Aviv</h3>
              <a
                href="https://www.linkedin.com/in/aviv-granot/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Connect via LinkedIn
              </a>
            </div>

            {/* Leon */}
            <div className={`text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <div className="relative aspect-[3/4] mb-8 max-w-sm mx-auto md:mx-0">
                <img
                  src="/rise-and-fall-podcast/about/leon.jpg"
                  alt="Leon"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-2xl font-light mb-4">Leon</h3>
              <a
                href="https://www.linkedin.com/in/leon-avigad-07bb6218/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Connect via LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
