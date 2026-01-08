'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Play, Clock } from 'lucide-react';
import { Episode } from '@/types';

interface EpisodeCardProps {
  episode: Episode;
  index?: number;
}

export default function EpisodeCard({ episode, index = 0 }: EpisodeCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    return `${mins} min`;
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <Link href={`/episodes/${episode.slug}`} className="block">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden mb-4">
          <motion.img
            src={episode.artwork}
            alt={episode.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.05 : 1 }}
            transition={{ duration: 0.4 }}
          />

          {/* Hover Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: isHovered ? 1 : 0.8 }}
              className="p-4 bg-white rounded-full"
            >
              <Play className="w-8 h-8 text-black ml-1" />
            </motion.div>
          </motion.div>

          {/* Duration Badge */}
          <div className="absolute bottom-3 right-3 bg-black/80 px-2 py-1 text-xs flex items-center gap-1">
            <Clock size={12} />
            {formatDuration(episode.duration)}
          </div>

          {/* Featured Badge */}
          {episode.featured && (
            <div className="absolute top-3 left-3 bg-white text-black px-2 py-1 text-xs uppercase tracking-wider">
              Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div>
          <p className="text-xs uppercase tracking-wider text-gray-400 mb-2">
            {episode.series.name}
            {episode.season && ` / Season ${episode.season}`}
          </p>
          <h3 className="text-lg font-light mb-2 group-hover:text-gray-300 transition-colors">
            {episode.title}
          </h3>
          {episode.guests && episode.guests.length > 0 && (
            <p className="text-sm text-gray-400">
              with {episode.guests.map((g) => g.name).join(', ')}
            </p>
          )}
        </div>
      </Link>
    </motion.article>
  );
}
