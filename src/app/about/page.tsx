import { Metadata } from 'next';
import AboutContent from '@/components/pages/AboutContent';

export const metadata: Metadata = {
  title: 'About | The Rise & Fall Podcast',
  description: 'Meet Leon and Aviv, hosts of The Rise & Fall Podcast - personal interviews with real estate leaders.',
};

export default function AboutPage() {
  return <AboutContent />;
}
