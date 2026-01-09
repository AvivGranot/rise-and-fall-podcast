import EpisodeScrollExperience from '@/components/home/EpisodeScrollExperience';
import { episodes, slides } from '@/data/sample-data';

export default function Home() {
  // Get about and contact slides
  const aboutSlide = slides.find(s => s.type === 'about')!;
  const contactSlide = slides.find(s => s.type === 'contact')!;

  // Sort episodes by episode number
  const sortedEpisodes = [...episodes].sort((a, b) => a.episodeNumber - b.episodeNumber);

  return (
    <EpisodeScrollExperience
      episodes={sortedEpisodes}
      aboutSlide={aboutSlide}
      contactSlide={contactSlide}
    />
  );
}
