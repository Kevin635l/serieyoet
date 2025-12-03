import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image & Effects */}
      <div className="absolute inset-0 z-0">
        {/* Hero Image Container */}
        <div className="absolute inset-0">
           <img 
             src="/cover.jpg" 
             onError={(e) => {
               // Fallback silencioso a un placeholder similar si no encuentran cover.jpg
               e.currentTarget.src = "https://images.unsplash.com/photo-1614726365723-49faaa5f21a1?q=80&w=2070&auto=format&fit=crop";
             }}
             alt="Background" 
             className="w-full h-full object-cover object-center opacity-80 scale-105 animate-[pulse_20s_ease-in-out_infinite]"
           />
           
           {/* CAPAS DE DEGRADADO (GRADIENTS) - Ajustados a tonos morados/rosas del póster */}
           
           {/* 1. Fondo negro sólido desde abajo (Base para el texto) */}
           <div className="absolute inset-0 bg-gradient-to-t from-black via-black/95 to-transparent"></div>

           {/* 2. Sombra superior para el menú */}
           <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/70 to-transparent"></div>

           {/* 3. Tinte ambiental morado para fusionar los rayos del póster */}
           <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-black/80 mix-blend-overlay"></div>

           {/* 4. Viñeta radial para centrar atención */}
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]"></div>
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 text-center mt-32 md:mt-40">
        {/* Animated Badge */}
        <div className="inline-block mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
          <span className="px-4 py-1.5 border border-purple-500/30 rounded-full text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-purple-200 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.3)]">
            Yoet Studios Original
          </span>
        </div>

        {/* Main Title with Gradient */}
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter mb-8 animate-fade-up opacity-0 drop-shadow-2xl relative" style={{ animationDelay: '0.4s' }}>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-400 block leading-[0.85]">
            UNA HISTORIA
          </span>
          <span className="bg-clip-text text-transparent bg-gradient-to-b from-purple-100 via-neutral-400 to-neutral-800 block leading-[0.85]">
            QUE CAMBIARÁ TODO
          </span>
        </h1>

        {/* Description */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-300 leading-relaxed mb-12 animate-fade-up opacity-0 font-medium drop-shadow-lg" style={{ animationDelay: '0.6s' }}>
          En un mundo donde la lealtad tiene un precio y el pasado nunca perdona. 
          Prepárate para la temporada más intensa del año.
        </p>

        {/* Call to Action */}
        <div className="animate-fade-up opacity-0" style={{ animationDelay: '0.8s' }}>
          <Button onClick={() => navigate('/season')} icon className="shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            VER TEMPORADA
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;