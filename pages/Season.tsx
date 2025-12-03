import React from 'react';
import { useNavigate } from 'react-router-dom';
import { EPISODES } from '../constants';
import { Play } from 'lucide-react';

const Season: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen container mx-auto px-6 py-12">
      <div className="mb-16 border-b border-neutral-800 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-2">
            TEMPORADA 1
          </h1>
          <p className="text-neutral-500 uppercase tracking-widest text-sm font-bold">
            4 Episodios • Thriller • 2024
          </p>
        </div>
        <div className="text-neutral-400 max-w-md text-sm md:text-right">
          Sigue el viaje completo. Cada capítulo revela una nueva pieza del rompecabezas.
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {EPISODES.map((episode, index) => (
          <div 
            key={episode.id}
            className="group cursor-pointer"
            onClick={() => navigate(`/watch/${episode.id}`)}
          >
            {/* Thumbnail Container */}
            <div className="relative aspect-video bg-neutral-900 rounded-lg overflow-hidden border border-neutral-800 shadow-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:border-neutral-600 mb-5">
              <img 
                src={episode.thumbnailUrl} 
                alt={episode.title}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/50">
                  <Play className="fill-white text-white ml-1 w-5 h-5" />
                </div>
              </div>

              {/* Episode Number Badge */}
              <div className="absolute top-3 left-3 px-2 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold tracking-wider text-white">
                EP {episode.number}
              </div>
              
               {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur-md border border-white/10 rounded text-[10px] font-bold tracking-wider text-neutral-300">
                {episode.duration}
              </div>
            </div>

            {/* Info */}
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-white group-hover:text-neutral-200 transition-colors">
                {episode.number}. {episode.title}
              </h3>
              <p className="text-sm text-neutral-500 line-clamp-2 leading-relaxed">
                {episode.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Season;