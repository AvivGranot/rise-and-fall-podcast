import EpisodeScrollExperience from '@/components/home/EpisodeScrollExperience';
import HomeContent from '@/components/home/HomeContent';
import MobileEpisodesList from '@/components/home/MobileEpisodesList';
import { episodes, slides } from '@/data/sample-data';

export default function Home() {
  // Get about and contact slides
  const aboutSlide = slides.find(s => s.type === 'about')!;
  const contactSlide = slides.find(s => s.type === 'contact')!;

  // Sort episodes by episode number
  const sortedEpisodes = [...episodes].sort((a, b) => a.episodeNumber - b.episodeNumber);

  return (
    <div>
      {/* Mobile: Show episodes list */}
      <div className="md:hidden">
        <MobileEpisodesList episodes={sortedEpisodes} />
      </div>

      {/* Desktop: Show carousel experience */}
      <div className="hidden md:block">
        {/* Carousel Section */}
        <EpisodeScrollExperience
          episodes={sortedEpisodes}
          aboutSlide={aboutSlide}
          contactSlide={contactSlide}
        />

        {/* Rest of home page content with translations */}
        <HomeContent />
      </div>
    </div>
  );
}
