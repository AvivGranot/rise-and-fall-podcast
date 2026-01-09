'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { socialLinks } from '@/data/sample-data';
import { useLanguage } from '@/context/LanguageContext';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  // Translated nav items
  const navItems = [
    { label: t('nav.episodes'), href: '/episodes' },
    { label: t('nav.about'), href: '/about' },
    { label: t('nav.contact'), href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      {/* Header Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-6 transition-all duration-300 ${
          scrolled ? 'bg-[#1a1a1a]/90 backdrop-blur-sm' : ''
        }`}
      >
        <Link href="/" className="text-xl md:text-2xl font-light tracking-widest uppercase">
          The Rise & Fall
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="p-2 hover:opacity-70 transition-opacity"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </header>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-[#1a1a1a] flex flex-col"
          >
            {/* Close Button */}
            <div className="flex items-center justify-between px-6 md:px-12 py-6">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="text-xl md:text-2xl font-light tracking-widest uppercase"
              >
                The Rise & Fall
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:opacity-70 transition-opacity"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Content */}
            <div className="flex-1 flex items-center justify-center">
              <motion.nav
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                <ul className="space-y-6">
                  {navItems.map((item, index) => (
                    <motion.li
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="text-2xl md:text-4xl font-light tracking-wide hover:opacity-70 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.nav>
            </div>

            {/* Social Links */}
            <div className="px-6 md:px-12 py-8">
              <div className="flex flex-wrap justify-center gap-6 text-sm uppercase tracking-wider">
                {socialLinks.map((link) => (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.platform}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
