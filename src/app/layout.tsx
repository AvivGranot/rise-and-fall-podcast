import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/navigation/Navigation';
import AudioPlayer from '@/components/player/AudioPlayer';
import Footer from '@/components/ui/Footer';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'The Rise & Fall Podcast | Personal Interviews with RE Leaders',
  description:
    'Personal interviews with real estate leaders. Exploring their roots, career journeys, failures, and the philosophies that shaped their success.',
  keywords: ['podcast', 'real estate', 'interviews', 'leadership', 'Israel', 'property', 'development', 'architecture'],
  authors: [{ name: 'Leon' }, { name: 'Aviv' }],
  openGraph: {
    title: 'The Rise & Fall Podcast',
    description: 'Personal interviews with real estate leaders. Their roots, their journey, their legacy.',
    type: 'website',
    locale: 'en_US',
    siteName: 'The Rise & Fall Podcast',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rise & Fall Podcast',
    description: 'Personal interviews with real estate leaders. Their roots, their journey, their legacy.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <AudioPlayer isVisible={false} />
      </body>
    </html>
  );
}
