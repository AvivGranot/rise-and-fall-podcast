import { Metadata } from 'next';
import ContactContent from '@/components/pages/ContactContent';

export const metadata: Metadata = {
  title: 'Contact | The Rise & Fall Podcast',
  description: 'Get in touch with The Rise & Fall Podcast. Submit guest inquiries, sponsorship requests, or general feedback.',
};

export default function ContactPage() {
  return <ContactContent />;
}
