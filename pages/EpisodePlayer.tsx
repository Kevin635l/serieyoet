import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { EPISODES } from '../constants';
import Button from '../components/Button';
import { ArrowLeft, Play, AlertCircle } from 'lucide-react';

const EpisodePlayer: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [episode, setEpisode] = useState(EPISODES.find(e => e.id === id));
  
  // Update state if URL param changes
  useEffect(() => {
    setEpisode(EPISODES.find(e => e.id === id));
  }, [id]);

  if (!episode) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <AlertCircle className="w-16 h-16 text-neutral-600 mb-4" />
        <h2 className="text-2xl font-bold mb-4">Capítulo no encontrado</h2>
        <Button onClick={() => navigate('/season')} variant="outline">
          Volver a la temporada
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8 animate-fade-in">
      {/* Back Button */}
      <div className="mb-8">
        <button 
          onClick={() => navigate('/season')}
          className="group flex items-center text-neutral-500 hover:text-white transition-colors text-sm font-bold tracking-widest uppercase"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
          Volver a la lista
        </button>
      </div>

      {/* Video Container */}
      <div className="relative w-full aspect-video bg-black rounded-xl overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-neutral-800 ring-1 ring-white/10 mb-10">
        <video 
          controls 
          autoPlay={false}
          className="w-full h-full object-contain"
          poster={episode.thumbnailUrl}
        >
          <source src={episode.videoUrl} type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>

      {/* Info Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8 border-b border-neutral-800 pb-8">
          <div>
            <div className="text-neutral-400 font-bold tracking-widest text-xs uppercase mb-2">
              Temporada 1 • Episodio {episode.number}
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight text-white mb-4">
              {episode.title}
            </h1>
            <p className="text-lg text-neutral-400 leading-relaxed max-w-2xl">
              {episode.description}
            </p>
          </div>
          
          <div className="flex-shrink-0">
             {/* Next Episode Logic could go here */}
             <div className="hidden md:block px-4 py-2 rounded bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-500">
               {episode.duration} • 1080p HD
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EpisodePlayer;