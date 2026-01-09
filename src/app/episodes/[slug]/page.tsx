import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import EpisodeContent from '@/components/episodes/EpisodeContent';
import { episodes } from '@/data/sample-data';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return episodes.map((episode) => ({
    slug: episode.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const episode = episodes.find((e) => e.slug === slug);
  if (!episode) return { title: 'Episode Not Found' };

  return {
    title: `${episode.title} | The Rise & Fall Podcast`,
    description: episode.description,
  };
}

export default async function EpisodePage({ params }: PageProps) {
  const { slug } = await params;
  const episode = episodes.find((e) => e.slug === slug);

  if (!episode) {
    notFound();
  }

  // Get related episodes based on episode number
  const getRelatedEpisodes = () => {
    const epNum = episode.episodeNumber;
    let relatedNums: number[] = [];

    if (epNum === 1) {
      relatedNums = [2, 3];
    } else if (epNum === 5) {
      relatedNums = [3, 4];
    } else {
      // For episodes 2, 3, 4: show previous and next
      relatedNums = [epNum - 1, epNum + 1];
    }

    return episodes
      .filter((e) => relatedNums.includes(e.episodeNumber))
      .sort((a, b) => a.episodeNumber - b.episodeNumber);
  };

  const relatedEpisodes = getRelatedEpisodes();

  return <EpisodeContent episode={episode} relatedEpisodes={relatedEpisodes} />;
}
