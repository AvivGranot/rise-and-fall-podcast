import FullScreenSlider from '@/components/slider/FullScreenSlider';
import { slides } from '@/data/sample-data';

export default function Home() {
  return <FullScreenSlider slides={slides} />;
}
